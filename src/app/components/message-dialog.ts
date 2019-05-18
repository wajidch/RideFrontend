import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core'; 

@Component({
    selector: 'app-message-dialog',
    templateUrl: 'message-dialog.html'
})

export class MessageDialogComponent implements OnInit {
    @ViewChild("btnMsgClose") btnMsgClose: ElementRef;
    @Input() message: any;
    @Input() dialogTitle: any;
    constructor(){}

    ngOnInit(): void {
       
    } 
    
}