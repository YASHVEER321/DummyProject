import { DummyProjiPage } from './app.po';

describe('dummy-proji App', () => {
  let page: DummyProjiPage;

  beforeEach(() => {
    page = new DummyProjiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
