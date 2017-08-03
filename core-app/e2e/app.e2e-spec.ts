import { CoreAppPage } from './app.po';

describe('core-app App', () => {
  let page: CoreAppPage;

  beforeEach(() => {
    page = new CoreAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
