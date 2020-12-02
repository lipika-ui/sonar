import { Component } from '@angular/core';

@Component({
  selector: 'storybook-alet',
  template: `
  <div
    class="template-fluid"
    [ngClass]="[
        getTheme == 'VTR'? 'theme-vtr' : 'theme-flow'
    ]"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
  <div id="popup1" class="overlay">
    <div class="popup" 
    [ngClass]="[
        category ? category : '' , 
        fullwidth ? 'full-width-alert' : 'default-alert' 
    ]"
    >
      <span class="popup-title">{{title}}</span>
      <a class="close" href="#">&times;</a>
      <div class="content">
        {{content}}
      </div>
    </div>
  </div>
  </div> `,
  styleUrls: ['./alert.scss'],
})
export default class AlertComponent {
    getTheme = 'VTR';
    category = ""
    fullwidth = false;
    content = "";
    ngOnInit() {
        window.addEventListener('storage', () => {
          this.getTheme = sessionStorage.getItem('theme');
        });
      }

    ngOnChanges(){
      (this.content.length > 320)? ( this.content = (this.content.substr(0, 320) + '...')) : this.content;
    }
}
