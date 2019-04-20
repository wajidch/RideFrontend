import { Component, OnInit, Input } from '@angular/core'; 

@Component({
    selector: 'app-message-dialog',
    templateUrl: 'message-dialog.html'
})

export class MessageDialogComponent implements OnInit {
    @Input() message: any;
    @Input() dialogTitle: any;
    constructor(){}

    ngOnInit(): void {
       
    } 
    
}