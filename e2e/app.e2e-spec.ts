import { BokuNoHeroWebPage } from './app.po';

describe('boku-no-hero-web App', () => {
  let page: BokuNoHeroWebPage;

  beforeEach(() => {
    page = new BokuNoHeroWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
