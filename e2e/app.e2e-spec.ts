import { OutfrontProfilePage } from './app.po';

describe('outfront-profile App', () => {
  let page: OutfrontProfilePage;

  beforeEach(() => {
    page = new OutfrontProfilePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
