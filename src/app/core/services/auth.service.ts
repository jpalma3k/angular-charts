import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserProfile } from '../models/userprofile';
import { environment } from 'src/environments/environment';
import { UserModuleProfile } from '../models/usermoduleprofile';
import { Util } from '../util';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import * as profile from 'src/assets/userprofile.json';

@Injectable(
    { providedIn: 'root' }
)
export class AuthService implements Resolve<User>{

    constructor(private http: HttpClient, private router: Router) { }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<any> | Promise<any> | any {
        return true;
      }

    async getUserModulesProfiles(): Promise<UserModuleProfile[]> {
        try{
            const up:UserModuleProfile[] = [(profile as any).default];
            return up;
        }
        catch(error){
            Util.handleError(error, this.router);
        }
    }

    async getUserImage(): Promise<String> {
        try{
            const response:any = await this.http.get(environment.server_url+'/auth/userimage').toPromise()
            return response.user_image;
        }
        catch(error){
            Util.handleError(error, this.router);
        }
    }

}