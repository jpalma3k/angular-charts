import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './core/models/user';
import { AuthService } from './core/services/auth.service';
import { PersistentService } from './core/services/persistence.service';
import { MODULES_SECTIONS } from './modules/modules-sections';
import { UserModuleProfile } from './core/models/usermoduleprofile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [AuthService, PersistentService]
}) export class AppComponent implements OnInit {

  user: User;
  userExists: boolean = false;
  loadingApp: boolean = true;

  mobileMode: boolean;
  mobileWidth = 560;

  @ViewChild('sidenav') sidenav: ElementRef;
  sidenavHidden: boolean = false;
  access_permissions: any;
  userModules: any[];
  title: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  getFullYear() {
    return new Date().getFullYear();
  }

  ngOnInit(): void {
    this.mobileMode = this.onMobileMode(window.innerWidth);
    this.getUserModules();
  }

  async getUserModules() {
    let userPermissions:UserModuleProfile[] = await this.authService.getUserModulesProfiles();
    this.loadingApp = false;
    const profileName = userPermissions.find(f=>f.module_name=="coberturas")?.profile_name || ""; //TODO: f.module_name=="coberturas"
    PersistentService.setAccessPermissions(userPermissions);
    this.userModules = userPermissions.sort((m1, m2)=> {return m1.module_position - m2.module_position;} );
    this.userModules = this.userModules.map((module) => {
      module.sections = MODULES_SECTIONS.filter(mod => { return module.module_name == mod.name})[0]
        .sections
        .filter((s:any)=>{return s.profile_access ? s.profile_access.includes(profileName) : true}) || [];
      console.log(module.sections);
      module.route = MODULES_SECTIONS.filter(mod => { return module.module_name == mod.name })[0].route || '';
      return module;
    })
  }

  navigate(url) {
    //console.log('navigate');
    this.router.navigateByUrl('/dummy', { skipLocationChange: true });
    setTimeout(() => this.router.navigate([url]));
  }

  hamburgerClick() {
    //console.log(this.sidenav.nativeElement);
    this.sidenavHidden = !this.sidenavHidden;
    if (this.sidenavHidden) this.sidenav.nativeElement.style.display = "none";
    else this.sidenav.nativeElement.style.display = "flex";
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    //console.log('onResize', event.target.innerWidth);
    this.mobileMode = this.onMobileMode(event.target.innerWidth);
    if (this.mobileMode) {
      this.sidenavHidden = false;
      this.sidenav.nativeElement.style.display = "flex";
    }
    //console.log('mobileMode', this.mobileMode);
  }

  private onMobileMode(width) {
    return width <= this.mobileWidth;
  }
}