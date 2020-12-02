import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'storybook-inputs',
  template: `<article
    class="template-fluid"
    [ngStyle]="{
      'background-color': backgroundColor,
      color: TextColor
    }"
  >
    <div *ngIf="types != 'inputWithCode'">
      <p
        [ngClass]="[
          status ? status : '',
          size ? size : '',
          styles ? styles : ''
        ]"
      >
        <label class="inputLabel"
          ><strong>Label {{ status == 'required' ? '*' : '' }} </strong></label
        ><br />
        <mat-form-field appearance="standard">
          <div *ngIf="types == 'inputWithPassword'">
            <div class="icon-holder">
              <span class="icon-lock"></span>
            </div>
          </div>

          <div class="symbols" *ngIf="types == 'Price'">
            <span *ngIf="position == 'prefix'">{{ affixTypes }}</span>
          </div>

          <div *ngIf="types == 'inputWithPassword'">
            <input
              matInput
              [type]="hide ? 'password' : 'text'"
              [disabled]="status == 'disabled' ? true : false"
              [readonly]="status == 'readOnly' ? true : false"
              placeholder="Placeholder"
              class="inputBox"
            />
          </div>
          <div *ngIf="types == 'inputWithPassword'">
            <div
              class="icon-holder"
              (click)="hide = !hide"
              [attr.aria-label]="'Hide password'"
              [attr.aria-pressed]="hide"
            >
              <span class="display-icon" 
              [ngClass]=" hide ? 'icon-eye-ouline' : 'icon-eye-off-ouline' "
              [ngStyle]="{ 'font-size': '30px' }" ></span>
            </div>
          </div>
          <div
            *ngIf="types != 'inputWithTextarea' && types != 'inputWithPassword'"
          >
            <input
              matInput *ngIf="types == 'defaultInputs'"
              [disabled]="status == 'disabled' ? true : false"
              [readonly]="status == 'readOnly' ? true : false"
              placeholder="Placeholder"
              class="inputBox"
            />
            <div *ngIf="types == 'Price'" class="no-spinner">
            <input
              matInput *ngIf="types == 'Price'" type="number"
              [disabled]="status == 'disabled' ? true : false"
              [readonly]="status == 'readOnly' ? true : false"
              placeholder="Placeholder"
              class="inputBox"
            /></div>
          </div>

          <div *ngIf="types == 'inputWithTextarea'">
            <textarea
              matInput
              class="inputTextArea"
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply."
            ></textarea>
          </div>

          <mat-hint
            *ngIf="
              status == 'default' ||
              status == 'active' ||
              status == 'disabled' ||
              status == 'readOnly'
            "
            >Assistive Text</mat-hint
          >
          <mat-hint
            *ngIf="status == 'success'"
            class="toaster success-background"
            >Success Text</mat-hint
          >
          <mat-hint *ngIf="status == 'error'" class="toaster error-background"
            >Error Text</mat-hint
          >
          <mat-hint *ngIf="status == 'required'">Required*</mat-hint>

          <div class="icon-holder" *ngIf="types == 'defaultInputs'">
            <span [ngClass]="[iconType ? iconType : '']"></span>
          </div>

          <!-- <div *ngIf="types == 'defaultInputs'">
            <div class="icon-holder active">
              <span class="icon-eye"></span>
            </div>
          </div> -->

          <div class="symbols" *ngIf="types == 'Price'">
            <span *ngIf="position == 'suffix'">{{ affixTypes }}</span>
          </div>
        </mat-form-field>
      </p>
    </div>

    <div *ngIf="types == 'inputWithCode'">
      <div
        class="inputCode"
        [ngClass]="[
          status ? status : '',
          size ? size : '',
          styles ? styles : ''
        ]"
      >
        <label class="inputLabel"
          ><strong>Label {{ status == 'required' ? '*' : '' }} </strong></label
        ><br />
        <div class="inputCodeBox">
          <div class="mat-form-field-infix" *ngFor="let item of [].constructor(count);let i=index">
            <input
              (keyup)="onInputEntry($event,i)"
              class="inputcode"
              [ngClass]="styles ? styles : ''"
              matInput
              [type]="(active[i] && active[i]=='true') ? 'password' : 'text'"
              maxlength="1"
            />
          </div>
        </div>
        <mat-hint
          *ngIf="
            status == 'default' ||
            status == 'active' ||
            status == 'disabled' ||
            status == 'readOnly'
          "
          >Assistive Text</mat-hint
        >
        <mat-hint *ngIf="status == 'success'" class="toaster success-background"
          >Success Text</mat-hint
        >
        <mat-hint *ngIf="status == 'error'" class="toaster error-background"
          >Error Text</mat-hint
        >
        <mat-hint *ngIf="status == 'required'">Required*</mat-hint>
      </div>
    </div>
  </article>`,
  styleUrls: ['./inputs.scss'],
})
export default class inputsComponent implements OnInit {
  count = 4;
  active = [];
  getTheme = 'VTR';
  backgroundColor = '';
  TextColor = '';
  status = '';
  size = '';
  styles = '';
  types = '';
  hide = true;
  isdisabled = false;
  iconType = 'iconcopy';
  affixTypes = '$';
  ngOnInit() {
    window.addEventListener('storage', () => {
      this.getTheme = sessionStorage.getItem('theme');
    });
  }
  onInputEntry(event, i) {
    if(event.code == "Backspace" || event.code == "Delete"){
      this.active[i] = "false";
    } else if((event.code).slice(0,5) == "Digit" || (event.code).slice(0,3) == "Key"){
      setTimeout(()=>{ this.active[i] = "true" }, 300);
      let j = i+1;
      if(j < this.count){
        document.getElementById('mat-input-'+j.toString()).focus(); 
      }
    }
  }
}

3