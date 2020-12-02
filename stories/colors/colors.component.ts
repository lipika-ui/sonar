import { Component, OnInit } from '@angular/core';
import {
  MatGridListModule,
  MatGridTile,
  MatGridList,
} from '@angular/material/grid-list';

@Component({
  selector: 'storybook-colors',
  template: `<article
    class="template-fluid"
    [ngStyle]="{
      'text-align': textAlignment,
      'background-color': backgroundColor,
      color: TextColor
    }"
    [ngClass]="[btnCategory ? btnCategory : ' ']"
  >
    <section *ngIf="getTheme == 'VTR'">
      <section *ngIf="btnCategory == 'primary'">
        <div *ngFor="let primaryColor of bgcolorVTRPrimary">
          <h4>{{ primaryColor | uppercase }}</h4>
          <div class="colorPallett">
            <div class="colorSet">
              <p><strong>Colors</strong></p>
              <div
                [ngClass]="'colorBox  ' + primaryColor"
                *ngFor="let op of opacity"
              >
                <p class="codeValue">{{ op.replace('C', '') }}</p>
                <div [ngClass]="'colorInnerBox ' + op"></div>
                <div [ngClass]="'colorInnerBox outlinedBox ' + op"></div>
              </div>
            </div>
            <div class="transparencySet">
              <p><strong>Transparency</strong></p>
              <div
                [ngClass]="'colorBox  ' + primaryColor"
                *ngFor="let op of transparency"
              >
                <p class="codeTransparent">{{ op.replace('OP', '') + '%' }}</p>
                <div [ngClass]="'transparentBox colorInnerBox ' + op"></div>
                <div
                  [ngClass]="'transparentBox colorInnerBox outlinedBox ' + op"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section *ngIf="btnCategory == 'secondary'">
        <div *ngFor="let secondaryColor of bgcolorVTRSecondary">
          <h4>{{ secondaryColor | uppercase }}</h4>
          <div class="colorPallett">
            <div class="colorSet">
              <p><strong>Colors</strong></p>
              <div
                [ngClass]="'colorBox  ' + secondaryColor"
                *ngFor="
                  let op of [
                    'C50',
                    'C100',
                    'C200',
                    'C300',
                    'C400',
                    'C500',
                    'C600',
                    'C700',
                    'C800'
                  ]
                "
              >
                <p class="codeValue">{{ op.replace('C', '') }}</p>
                <div
                  mat-raised-button
                  [ngStyle]="{ 'font-weight': '600', border: '0px' }"
                  [ngClass]="'colorInnerBox ' + op"
                ></div>
                <div
                  [ngStyle]="{ 'font-weight': '600' }"
                  [ngClass]="'colorInnerBox outlinedBox ' + op"
                ></div>
              </div>
            </div>
            <div class="transparencySet">
              <p><strong>Transparency</strong></p>
              <div
                [ngClass]="'colorBox  ' + secondaryColor"
                *ngFor="let op of transparency"
              >
                <p class="codeTransparent">{{ op.replace('OP', '') + '%' }}</p>
                <div [ngClass]="'transparentBox colorInnerBox ' + op"></div>
                <div
                  [ngClass]="'transparentBox colorInnerBox outlinedBox ' + op"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section *ngIf="btnCategory == 'teritary'">
        <div *ngFor="let teritaryColor of bgcolorVTRTeritary" class="colorSet">
          <h4>{{ teritaryColor | uppercase }}</h4>
          <div class="colorPallett">
            <div class="colorSet">
              <p><strong>Colors</strong></p>
              <div
                [ngClass]="'colorBox  ' + teritaryColor"
                *ngFor="let op of opacity"
              >
                <p class="codeValue">{{ op.replace('C', '') }}</p>
                <div
                  mat-raised-button
                  [ngStyle]="{ 'font-weight': '600', border: '0px' }"
                  [ngClass]="'colorInnerBox ' + op"
                ></div>
                <div
                  [ngStyle]="{ 'font-weight': '600' }"
                  [ngClass]="'colorInnerBox outlinedBox ' + op"
                ></div>
              </div>
            </div>
            <div class="transparencySet">
              <p><strong>Transparency</strong></p>
              <div
                [ngClass]="'colorBox  ' + teritaryColor"
                *ngFor="let op of transparency"
              >
                <p class="codeTransparent">{{ op.replace('OP', '') + '%' }}</p>
                <div [ngClass]="'transparentBox colorInnerBox ' + op"></div>
                <div
                  [ngClass]="'transparentBox colorInnerBox outlinedBox ' + op"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section *ngIf="btnCategory == 'neutral'">
        <div *ngFor="let neutralColor of bgcolorNeutral">
          <h4>{{ neutralColor | uppercase }}</h4>
          <div class="colorPallett">
            <div class="colorSet">
              <p><strong>Colors</strong></p>
              <div
                [ngClass]="'colorBox  ' + neutralColor"
                *ngFor="
                  let op of [
                    'C50',
                    'C100',
                    'C200',
                    'C300',
                    'C400',
                    'C500',
                    'C600',
                    'C700',
                    'C800'
                  ]
                "
              >
                <p class="codeValue">{{ op.replace('C', '') }}</p>
                <div
                  mat-raised-button
                  [ngStyle]="{ 'font-weight': '600', border: '0px' }"
                  [ngClass]="'colorInnerBox ' + op"
                ></div>
                <div
                  [ngStyle]="{ 'font-weight': '600' }"
                  [ngClass]="'colorInnerBox outlinedBox ' + op"
                ></div>
              </div>
            </div>
            <div class="transparencySet">
              <p><strong>Transparency</strong></p>
              <div
                [ngClass]="'colorBox  ' + neutralColor"
                *ngFor="let op of transparency"
              >
                <p class="codeTransparent">{{ op.replace('OP', '') + '%' }}</p>
                <div [ngClass]="'transparentBox colorInnerBox ' + op"></div>
                <div
                  [ngClass]="'transparentBox colorInnerBox outlinedBox ' + op"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section *ngIf="getTheme == 'Flow'">
      <section *ngIf="btnCategory == 'primary'">
        <div *ngFor="let primaryColor of bgcolorFlowPrimary">
          <h4>{{ primaryColor | uppercase }}</h4>
          <div class="colorPallett">
            <div class="colorSet">
              <p><strong>Colors</strong></p>
              <div
                [ngClass]="'colorBox  ' + primaryColor"
                *ngFor="let op of opacity"
              >
                <p class="codeValue">{{ op.replace('C', '') }}</p>
                <div [ngClass]="'colorInnerBox ' + op"></div>
                <div [ngClass]="'colorInnerBox outlinedBox ' + op"></div>
              </div>
            </div>
            <div class="transparencySet">
              <p><strong>Transparency</strong></p>
              <div
                [ngClass]="'colorBox  ' + primaryColor"
                *ngFor="let op of transparency"
              >
                <p class="codeTransparent">{{ op.replace('OP', '') + '%' }}</p>
                <div [ngClass]="'transparentBox colorInnerBox ' + op"></div>
                <div
                  [ngClass]="'transparentBox colorInnerBox outlinedBox ' + op"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section *ngIf="btnCategory == 'secondary'">
        <div *ngFor="let secondaryColor of bgcolorFlowSecondary">
          <h4>{{ secondaryColor | uppercase }}</h4>
          <div class="colorPallett">
            <div class="colorSet">
              <p><strong>Colors</strong></p>
              <div
                [ngClass]="'colorBox  ' + secondaryColor"
                *ngFor="
                  let op of [
                    'C50',
                    'C100',
                    'C200',
                    'C300',
                    'C400',
                    'C500',
                    'C600',
                    'C700',
                    'C800'
                  ]
                "
              >
                <p class="codeValue">{{ op.replace('C', '') }}</p>
                <div
                  mat-raised-button
                  [ngStyle]="{ 'font-weight': '600', border: '0px' }"
                  [ngClass]="'colorInnerBox ' + op"
                ></div>
                <div
                  [ngStyle]="{ 'font-weight': '600' }"
                  [ngClass]="'colorInnerBox outlinedBox ' + op"
                ></div>
              </div>
            </div>
            <div class="transparencySet">
              <p><strong>Transparency</strong></p>
              <div
                [ngClass]="'colorBox  ' + secondaryColor"
                *ngFor="let op of transparency"
              >
                <p class="codeTransparent">{{ op.replace('OP', '') + '%' }}</p>
                <div [ngClass]="'transparentBox colorInnerBox ' + op"></div>
                <div
                  [ngClass]="'transparentBox colorInnerBox outlinedBox ' + op"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section *ngIf="btnCategory == 'teritary'">
        <div *ngFor="let teritaryColor of bgcolorFlowTeritary" class="colorSet">
          <h4>{{ teritaryColor | uppercase }}</h4>
          <div class="colorPallett">
            <div class="colorSet">
              <p><strong>Colors</strong></p>
              <div
                [ngClass]="'colorBox  ' + teritaryColor"
                *ngFor="let op of opacity"
              >
                <p class="codeValue">{{ op.replace('C', '') }}</p>
                <div
                  mat-raised-button
                  [ngStyle]="{ 'font-weight': '600', border: '0px' }"
                  [ngClass]="'colorInnerBox ' + op"
                ></div>
                <div
                  [ngStyle]="{ 'font-weight': '600' }"
                  [ngClass]="'colorInnerBox outlinedBox ' + op"
                ></div>
              </div>
            </div>
            <div class="transparencySet">
              <p><strong>Transparency</strong></p>
              <div
                [ngClass]="'colorBox  ' + teritaryColor"
                *ngFor="let op of transparency"
              >
                <p class="codeTransparent">{{ op.replace('OP', '') + '%' }}</p>
                <div [ngClass]="'transparentBox colorInnerBox ' + op"></div>
                <div
                  [ngClass]="'transparentBox colorInnerBox outlinedBox ' + op"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section *ngIf="btnCategory == 'neutral'">
        <div *ngFor="let neutralColor of bgcolorNeutral">
          <h4>{{ secondaryColor | uppercase }}</h4>
          <div class="colorPallett">
            <div class="colorSet">
              <p><strong>Colors</strong></p>
              <div
                [ngClass]="'colorBox  ' + neutralColor"
                *ngFor="
                  let op of [
                    'C50',
                    'C100',
                    'C200',
                    'C300',
                    'C400',
                    'C500',
                    'C600',
                    'C700',
                    'C800'
                  ]
                "
              >
                <p class="codeValue">{{ op.replace('C', '') }}</p>
                <div
                  mat-raised-button
                  [ngStyle]="{ 'font-weight': '600', border: '0px' }"
                  [ngClass]="'colorInnerBox ' + op"
                ></div>
                <div
                  [ngStyle]="{ 'font-weight': '600' }"
                  [ngClass]="'colorInnerBox outlinedBox ' + op"
                ></div>
              </div>
            </div>
            <div class="transparencySet">
              <p><strong>Transparency</strong></p>
              <div
                [ngClass]="'colorBox  ' + neutralColor"
                *ngFor="let op of transparency"
              >
                <p class="codeTransparent">{{ op.replace('OP', '') + '%' }}</p>
                <div [ngClass]="'transparentBox colorInnerBox ' + op"></div>
                <div
                  [ngClass]="'transparentBox colorInnerBox outlinedBox ' + op"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </article>`,
  styleUrls: ['./color.scss'],
})
export default class colorsComponent implements OnInit {
  textAlignment = 'left';
  opacity = [
    'C50',
    'C100',
    'C200',
    'C300',
    'C400',
    'C500',
    'C600',
    'C700',
    'C800',
    'C900',
  ];
  transparency = ['OP8', 'OP16', 'OP24', 'OP32', 'OP40', 'OP48'];
  btnCategory: 'primary';
  getTheme = 'VTR';
  bgcolorVTRPrimary = ['pink'];
  bgcolorVTRSecondary = ['blue', 'violent', 'lightBlue', 'paleCyan'];
  bgcolorVTRTeritary = ['green', 'paleBlue', 'orange', 'red'];
  bgcolorFlowPrimary = ['blue'];
  bgcolorFlowSecondary = ['green', 'violent'];
  bgcolorFlowTeritary = ['red', 'orange'];
  bgcolorNeutral = ['grey'];
  backgroundColor = '';
  TextColor = '';
  ngOnInit() {
    window.addEventListener('storage', () => {
      this.getTheme = sessionStorage.getItem('theme');
    });
  }
}
