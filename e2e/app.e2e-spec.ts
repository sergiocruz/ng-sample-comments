import { SimpleCommentsPage } from './app.po';

describe('simple-comments App', function() {
  let page: SimpleCommentsPage;

  beforeEach(() => {
    page = new SimpleCommentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
