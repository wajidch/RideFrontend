import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { RoleModel } from 'app/models/role.models';
import { AppServiceManager } from 'app/services/appServiceManager';


@Component({
    selector:'role',
    templateUrl: './role.component.html'
})

export class RoleComponent implements OnInit {
    @ViewChild("btnModalAddClose") btnModalAddClose: ElementRef;
    @ViewChild("btnModalDeleteClose") btnModalDeleteClose: ElementRef;
    @ViewChild("btnModalEditClose") btnModalEditClose: ElementRef;
    
    roles: RoleModel[] = [];
    role: RoleModel;
    constructor(private appServiceManager: AppServiceManager) { }

    ngOnInit(): void {
        this.role = new RoleModel();
       this.getRoles();
    }

    getRoles() { 
        this.appServiceManager.get('roles').subscribe(res => {
            this.roles = res; 
        });
    }
    createRole() {
        var postData = JSON.stringify(this.role);
        this.appServiceManager.post('roles',postData).subscribe(res => {
            this.btnModalAddClose.nativeElement.click();
            this.getRoles();
        })
    }

    confirmUpdate(role: RoleModel) { 
        this.role = role;
    }

    updateRole() {
        var putData = JSON.stringify(this.role);
        this.appServiceManager.put('roles/'+ this.role._id,putData).subscribe(res => {
          
            this.btnModalEditClose.nativeElement.click();
            this.getRoles();
        })
    }

    confirmDelete(id){
        this.role._id = id;
    }

    deleteRole(){
        this.appServiceManager.detele('roles/'+ this.role._id).subscribe(res => {
            this.btnModalDeleteClose.nativeElement.click();
            this.getRoles();
        });
    }
}