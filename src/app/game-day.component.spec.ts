import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GameDayAppComponent } from '../app/game-day.component';

beforeEachProviders(() => [GameDayAppComponent]);

describe('App: GameDay', () => {
  it('should create the app',
      inject([GameDayAppComponent], (app: GameDayAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'game-day works!\'',
      inject([GameDayAppComponent], (app: GameDayAppComponent) => {
    expect(app.title).toEqual('game-day works!');
  }));
});
