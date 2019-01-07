import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WinnerService } from './winner.service';

@Component({
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private winnerService: WinnerService) { }
  chapionId: string;
  winners: [any];
  season: string;
  ngOnInit() {
    const year = this.route.snapshot.paramMap.get('year').toString();
    this.season = year;
    this.winnerService.getWinners(year).subscribe(
      data => {
        this.winners = data.MRData.RaceTable.Races;
        console.log(this.winners);
        this.winnerService.getChampion(year).subscribe(
          champion => {
            this.chapionId = champion.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId;
            console.log(this.chapionId);
          }
        );
      },
      error => console.log(error)
    );
  }

}
