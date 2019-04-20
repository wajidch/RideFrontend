import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageDialogComponent } from './message-dialog'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MessageDialogComponent
  ], exports: [
    MessageDialogComponent
]
})

export class MessageDialogModule { }
