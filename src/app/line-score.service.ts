import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Score } from './score';
import { Pitch } from './pitch';
import { InningState } from './inning-state';

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
    this.playsData = Observable.interval(10000)
      .flatMap(tick => this.http.get(this.playsUrl))
      .map(response => {
        console.log('get game data');
        let body = response.json();
        return body.data || {};
      })
      .publish()
      .refCount();
  }

  private gameData: Observable<any>;
  private playsData: Observable<any>;
  private gameUrl: string = "http://gd2.mlb.com/components/game/mlb/year_2016/month_05/day_30/gid_2016_05_30_sdnmlb_seamlb_1/linescore.json";
  private playsUrl: string = "http://gd2.mlb.com/components/game/mlb/year_2016/month_05/day_30/gid_2016_05_30_sdnmlb_seamlb_1/plays.json";

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

  public getInningState(): Observable<InningState> {
    return this.gameData
      .map(data => {
        console.log('get inning data');
        return {
          "inning": data.game.inning,
          "inningState": data.game.inning_state,
          "outs": data.game.outs,
          "strikes": data.game.strikes,
          "balls": data.game.balls
        };
      });
  }

  public getPitches(): Observable<Array<Pitch>> {
    return this.playsData
      .map(data => {
        let raw_pitches = data.game.atbat.p || [];
        let pitches = new Array<Pitch>();
        if (raw_pitches instanceof Array) {
          for (var pitch of raw_pitches) {
            pitches.push({
              "speed": pitch.start_speed,
              "pitch_type": pitch.pitch_type,
              "result": pitch.des
            });
          }
        } else {
            pitches.push({
              "speed": raw_pitches.start_speed,
              "pitch_type": raw_pitches.pitch_type,
              "result": raw_pitches.des
            });
        }
        return pitches
      });
  }

}
