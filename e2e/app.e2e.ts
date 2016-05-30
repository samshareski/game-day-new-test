import { GameDayPage } from './app.po';

describe('game-day App', function() {
  let page: GameDayPage;

  beforeEach(() => {
    page = new GameDayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('game-day works!');
  });
});
