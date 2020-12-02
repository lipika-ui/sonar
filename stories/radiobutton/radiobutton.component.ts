import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'storybook-radiobutton',
  template: `<div
    class="template-fluid"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    <div
      *ngIf="isprimary"
      [ngClass]="[
        backgroundColor == 'rgba(255,255,255,1)'
          ? 'primary-radiobutton'
          : 'dark-radiobutton'
      ]"
    >
      <p class="caption" *ngIf="caption">caption</p>
      <mat-radio-group>
        <mat-radio-button value="1" [disabled]="disabled">
          <span *ngIf="label">Radio label</span> </mat-radio-button
        ><span *ngIf="horizontal">&nbsp;&nbsp;</span
        ><br *ngIf="!horizontal" /><br *ngIf="!horizontal" />
        <mat-radio-button value="2" [disabled]="disabled">
          <span *ngIf="label">Radio label</span>
        </mat-radio-button>
      </mat-radio-group>
    </div>
    <div class="error-radiobutton" *ngIf="iserror">
      <p class="caption" *ngIf="caption">caption</p>
      <mat-radio-group>
        <mat-radio-button value="1" [disabled]="disabled">
          <span *ngIf="label">Radio label</span> </mat-radio-button
        ><span *ngIf="horizontal">&nbsp;&nbsp;</span
        ><br *ngIf="!horizontal" /><br *ngIf="!horizontal" />
        <mat-radio-button value="2" [disabled]="disabled">
          <span *ngIf="label">Radio label</span>
        </mat-radio-button>
      </mat-radio-group>
    </div>
    <div *ngIf="isgroup" class="primary-radiobutton">
      <p class="caption" *ngIf="caption">caption</p>
           <mat-list>
              <mat-list-item *ngFor="let item of values; let i = index">
                <label class="radio-container"> 
                  <span  *ngIf="label">{{item.name}}</span>
                  <input type="radio" name="radio">
                  <span class="radio-checkmark"></span>
                </label>
              </mat-list-item>
          </mat-list>
   </div>
  </div>`,
  styleUrls: ['./radiobutton.scss'],
})
export default class radiobuttonComponent {
  isChecked = false;
}
