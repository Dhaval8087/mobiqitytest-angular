import { Component, OnInit } from '@angular/core';

import { SeasonService } from './season.service';
import { Route, Router } from '@angular/router';
@Component({
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  seasonList: any[] = [];
  constructor(private seasonService: SeasonService, private router: Router) { }

  ngOnInit() {
    this.getSeason();
  }
  getSeason(): void {
    this.seasonService.getSeason().subscribe((seasons) => {
      this.seasonList = seasons.MRData.SeasonTable.Seasons;
    });
  }
  onSeasonClick(season: any): void {
    this.router.navigate(['/winner', season]);
  }
}
