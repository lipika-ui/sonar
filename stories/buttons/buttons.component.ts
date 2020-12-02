import { Component } from '@angular/core';

@Component({
  selector: 'storybook-buttons',
  template: `<div
    class="template-fluid"
    [ngClass]="{
      'dark-theme': backgroundColor === '#000000',
      'light-theme': backgroundColor === '#ffffff'
    }"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    <button
      mat-raised-button
      [disabled]="isdisabled"
      [ngClass]="[
        extraClass ? extraClass : '',
        noExist ? 'btn-no-exist' : '',
        isPrimary ? 'button--primary' : '',
        isSecondary ? 'button--secondary' : '',
        isLink ? 'button--link' : ''
      ]"
    >
      <span
        class="icon-left"
        *ngIf="
          extraClass == 'btn-large-icon btn-left' ||
          extraClass == 'btn-small-icon btn-left'
        "
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.6552 1L1 9.09839H10.1954C10.3985 9.09839 10.5632 9.26307 10.5632 9.46621V18.6552L18.6552 1Z"
            stroke="white"
            stroke-width="1.47126"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span
        *ngIf="
          extraClass !== 'btn-icon large-icon' &&
          extraClass !== 'btn-icon small-icon'
        "
      >
        {{ text }}
      </span>
      <span
        *ngIf="
          extraClass == 'btn-large-icon btn-right' ||
          extraClass == 'btn-small-icon btn-right' ||
          extraClass == 'btn-icon large-icon' ||
          extraClass == 'btn-icon small-icon'
        "
        [ngClass]="[
          extraClass == 'btn-large-icon btn-right'
            ? 'icon-right'
            : extraClass == 'btn-small-icon btn-right'
            ? 'icon-right'
            : '',
          extraClass == 'btn-icon large-icon'
            ? 'icon'
            : extraClass == 'btn-icon small-icon'
            ? 'icon'
            : ''
        ]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.6552 1L1 9.09839H10.1954C10.3985 9.09839 10.5632 9.26307 10.5632 9.46621V18.6552L18.6552 1Z"
            stroke="white"
            stroke-width="1.47126"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
      ></span>
    </button>
  </div> `,
  styleUrls: ['./buttons.scss'],
})
export default class ButtonsComponent {
  extraClass = '';
  text = '';
  backgroundColor = '';
  isdisabled = false;
  isSecondary = false;
  isPrimary = false;
  isLink = false;
  ghostText = false;
  bgcolor = 'white';
  noExist = false;
  TextColor = '';
}
