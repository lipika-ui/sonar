import { Component } from '@angular/core';

@Component({
  selector: 'storybook-icons',
  template: `
  <div
     class="template-fluid"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
  <div class="wrapper-icon"
  [ngClass]="[ fontSize?  fontSize : '' ]" >
  <span 
  [ngClass]="[ iconClass?  iconClass : '' ]" 
  [ngStyle]="{ 'color' :  fontColor }"
  >
  </span>
  <span  *ngIf="label" class="description-icon" [ngStyle]="{ 'color' :  fontColor }">Test</span>
  </div>
  </div> `,
  styleUrls: ['./icons.scss'],
})
export class IconsComponent {
  fontSize = "";
  iconClass= "";
}
