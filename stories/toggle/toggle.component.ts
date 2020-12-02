import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'storybook-toggle',
  template: `<div
    class="template-fluid"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    <div
      *ngIf="isprimary"
      class="lla-toggle"
      [ngClass]="[
        backgroundColor == 'rgba(255,255,255,1)'
          ? 'primary-toggle'
          : 'dark-toggle'
      ]"
    >
      <p class="toggle-caption" *ngIf="caption">Caption</p>
      <mat-slide-toggle [(ngModel)]="isChecked" [disabled]="isdisabled"
        ><p *ngIf="label && !isChecked">Off</p>
        <p *ngIf="label && isChecked">On</p></mat-slide-toggle
      >
    </div>
    <div *ngIf="iserror" class="lla-toggle error-toggle">
      <p class="toggle-caption" *ngIf="caption">Caption</p>
      <mat-slide-toggle [(ngModel)]="isChecked" [disabled]="isdisabled"
        ><p *ngIf="label && !isChecked">Off</p>
        <p *ngIf="label && isChecked">On</p></mat-slide-toggle
      >
    </div>
  </div>`,
  styleUrls: ['./toggle.scss'],
})
export default class toggleComponent {
  isChecked = false;
}
