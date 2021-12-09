import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { PersistentService } from '../../services/persistence.service';

@Component({
    selector: 'user-profile',
    templateUrl: 'user-profile.component.html',
    styleUrls: ['user-profile.component.css'],
    providers: [AuthService]
})

export class UserProfileComponent implements OnInit {

    @Input()
    user: User;
    userImage: string;

    errorMessage: string;

    constructor(private userService: AuthService) { }

    ngOnInit(): void {
        if (this.userImage == null) {
            const userImage = PersistentService.getUserImage();
            if(userImage) this.userImage = 'url(data:image/png;base64,' + userImage + ')';
            else this.getUserImage();
        }
    }

    getUserImage() {
        var _this = this;
        this.userService.getUserImage()
            .then(function (user_image:string) {
                _this.userImage = 'url(data:image/png;base64,' + user_image + ')';
            }).catch(function (error) {
                _this.errorMessage = <any>error;
            });
    }


}