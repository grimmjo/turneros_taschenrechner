import { SwanPage } from './app.po';

describe('swan App', () => {
  let page: SwanPage;

  beforeEach(() => {
    page = new SwanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
