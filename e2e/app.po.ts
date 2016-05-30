export class GameDayPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('game-day-app h1')).getText();
  }
}
