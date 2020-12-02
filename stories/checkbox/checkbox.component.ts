import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'storybook-toggle',
  template: `<div
    class="template-fluid"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    <div *ngIf="isprimary">
      <div
        [ngClass]="[
          backgroundColor == 'rgba(255,255,255,1)'
            ? 'primary-checkbox'
            : 'dark-checkbox'
        ]"
      >
        <p class="checkbox-caption" *ngIf="caption">Caption</p>
        <mat-checkbox *ngIf="!group" [checked]="isChecked" [disabled]="disabled"
          ><span class="mat-checkbox-label" *ngIf="label"
            >Checkbox label</span
          ></mat-checkbox
        >
      </div>
    </div>
    <div *ngIf="iserror" class="error-checkbox">
      <p class="checkbox-caption" *ngIf="caption">Caption</p>
      <mat-checkbox [checked]="isChecked"
        ><span class="mat-checkbox-label" *ngIf="label"
          >Checkbox label</span
        ></mat-checkbox
      >
    </div>
    <div *ngIf="isgroup" class="primary-checkbox">
      <p class="group-checkbox-caption checkbox-caption" *ngIf="caption">Group caption</p>
      <mat-list>
        <mat-list-item *ngFor="let item of values; let i = index">
          <label class="checkbox-container">
            <input type="checkbox" class="new-checkbox" />
            <span class="checkmark"
              ><span *ngIf="label" class="mat-checkbox-label label-addon">{{
                item.name
              }}</span></span
            ></label
          >
        </mat-list-item>
      </mat-list>
    </div>
  </div>`,
  styleUrls: ['./checkbox.scss'],
})
export default class checkboxComponent {
  isChecked = false;
  disabled = false;

  checkValue(e) {}
}
