import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserAzure } from '../models/userazure';
import { UserModuleProfile } from '../models/usermoduleprofile';

@Injectable({ providedIn: 'root' })
export class PersistentService {
    // user store
    private static selectedUser: User;
    private static accessPermissions: UserModuleProfile[];
    private static azureUser: UserAzure;
    private static userImage: string;

    static get(): User {
        if (!this.selectedUser)
            return null;
        return this.selectedUser;
    }

    static set(user: any): void {
        console.log("PersistentService setuser", user)
        this.selectedUser = user.length ? user[0] : user;
    }

    static setUserAzure(user: UserAzure): void {
        this.azureUser = user;
    }

    static getUserAzure(): UserAzure {
        if (!this.azureUser)
            return null;
        return this.azureUser;
    }

    static setAccessPermissions(accessPermissions: UserModuleProfile[]): void {
        this.accessPermissions = accessPermissions;
    }

    static getAccessPermissions(): UserModuleProfile[] {
        if (!this.accessPermissions)
            return null;
        return this.accessPermissions;
    }

    static setUserImage(userImage: string): void {
        this.userImage = userImage;
    }

    static getUserImage(): string {
        if (!this.userImage)
            return null;
        return this.userImage;
    }






}