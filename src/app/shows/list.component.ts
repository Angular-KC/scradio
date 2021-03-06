import { Component, OnInit } from '@angular/core';
import { ShowsService } from './shows.service';


@Component({
  selector: 'app-list',
  template: `
    <mat-list>
      <h3 mat-subheader>Shows</h3>
      <mat-list-item *ngFor="let show of shows">
        <a mat-icon-button [routerLink]="show.id">
          <mat-icon mat-list-icon>details</mat-icon>
        </a>
        <h4 mat-line>{{show.title}}</h4>
        <p mat-line> {{show.aired | date}} </p>
      </mat-list-item>
    </mat-list>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  shows;
  constructor(private showsService: ShowsService) {
    this.shows = showsService.getShows();
  }

  ngOnInit() {
  }

}
