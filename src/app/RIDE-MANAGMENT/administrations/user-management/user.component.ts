import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {UserModel} from 'app/models/user.models';
import { AppServiceManager } from 'app/services/appServiceManager';
import { RoleModel } from 'app/models/role.models';

@Component({
    selector:'user',
    templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {

    @ViewChild("btnModalAddClose") btnModalAddClose: ElementRef;
    @ViewChild("btnModalDeleteClose") btnModalDeleteClose: ElementRef;
    @ViewChild("btnModalEditClose") btnModalEditClose: ElementRef;
    
    users: UserModel[] = [];
    roles: RoleModel[] = [];
    user: UserModel;

    constructor(private appServiceManager: AppServiceManager) { }

    ngOnInit() {
        this.user = new UserModel(); 
        this.getUsers();
    }

    getUsers() { 
        this.appServiceManager.get('users').subscribe(res => {
            this.users = res; 
        });
    }

    getRoles() { 
        this.appServiceManager.get('roles').subscribe(res => {
            this.roles = res; 
        });
    }
    

    createUser() {
        var postData = JSON.stringify(this.user);
        this.appServiceManager.post('users',postData).subscribe(res => {
            this.btnModalAddClose.nativeElement.click();
            this.getUsers();
        })
    }

    confirmUpdate(user: UserModel) { 
        this.user = user;
    }

    updateUser() {
        var putData = JSON.stringify(this.user);
        this.appServiceManager.put('users/'+ this.user._id,putData).subscribe(res => {
          
            this.btnModalEditClose.nativeElement.click();
            this.getUsers();
        })
    }

    confirmDelete(userId){
        this.user._id = userId;
    }

    deleteUser(){
        this.appServiceManager.detele('users/'+ this.user._id).subscribe(res => {
            this.btnModalDeleteClose.nativeElement.click();
            this.getUsers();
        });
    }
}