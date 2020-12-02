import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'storybook-grid',
  template: `
  <div
    [ngClass]="{
      'dark-theme': backgroundColor === '#000000',
      'light-theme': backgroundColor === '#ffffff'
    }"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
  <div class="grid-wrapper">
    <mat-grid-list #grid [cols]="cols" rowHeight="1:50" [gutterSize]="gutter">
      <mat-grid-tile>1</mat-grid-tile>
      <mat-grid-tile>2</mat-grid-tile>
      <mat-grid-tile>3</mat-grid-tile>
      <mat-grid-tile>4</mat-grid-tile>
      <mat-grid-tile>5</mat-grid-tile>
      <mat-grid-tile>6</mat-grid-tile>
      <mat-grid-tile>7</mat-grid-tile>
      <mat-grid-tile>8</mat-grid-tile>
      <mat-grid-tile>9</mat-grid-tile>
      <mat-grid-tile>10</mat-grid-tile>
      <mat-grid-tile>11</mat-grid-tile>
      <mat-grid-tile>12</mat-grid-tile>
    </mat-grid-list>
</div>
  </div> `,
  styleUrls: ['./grid.scss'],
})
export default class GridComponent {
  cols: number;
  gutter : number;

  gridByBreakpoint = {
    xl: 12,
    lg: 12,
    md: 12,
    sm: 8,
    sml :12,
    xs: 4,
  };
  gutterSize = {
      sm : 16,
      lg : 24
  }
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
        Breakpoints.HandsetLandscape
      ])
      .subscribe((result) => {
        if (result.matches) {
            
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.cols = this.gridByBreakpoint.xs;
            this.gutter = this.gutterSize.sm;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.cols = this.gridByBreakpoint.sm;
            this.gutter = this.gutterSize.sm;
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.cols = this.gridByBreakpoint.md;
            this.gutter = this.gutterSize.lg;
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.cols = this.gridByBreakpoint.lg;
            this.gutter = this.gutterSize.lg;
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.cols = this.gridByBreakpoint.xl;
            this.gutter = this.gutterSize.lg;
          }
          if (result.breakpoints[Breakpoints.HandsetLandscape]) {
            this.cols = this.gridByBreakpoint.sml;
            this.gutter = this.gutterSize.lg;
          }
        }
      });
  }
}
