import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Score } from './score';

@Injectable()
export class LineScoreService {

  constructor(private http: Http) {
    this.gameData = Observable.interval(10000)
      .flatMap(tick => this.http.get(this.gameUrl))
      .map(response => {
        console.log('get game data');
        let body = response.json();
        return body.data || {};
      })
      .publish()
      .refCount();
  }

  private gameData: Observable<any>;
  private gameUrl: string = "http://gd2.mlb.com/components/game/mlb/year_2016/month_05/day_30/gid_2016_05_30_chamlb_nynmlb_1/linescore.json";

  public getScore(): Observable<Score> {
    return this.gameData
      .map(data => {
        console.log('get score');
        return {
          "home_score": data.game.home_team_runs,
          "home_abbrev": data.game.home_name_abbrev,
          "away_score": data.game.away_team_runs,
          "away_abbrev": data.game.away_name_abbrev
        };
      });
  }

}
