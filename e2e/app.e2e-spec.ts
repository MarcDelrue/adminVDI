import { AdminvdiPage } from './app.po';

describe('adminvdi App', () => {
  let page: AdminvdiPage;

  beforeEach(() => {
    page = new AdminvdiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
