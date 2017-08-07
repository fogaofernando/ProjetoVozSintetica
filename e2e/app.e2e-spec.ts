import { VozSinteticaPage } from './app.po';

describe('voz-sintetica App', function() {
  let page: VozSinteticaPage;

  beforeEach(() => {
    page = new VozSinteticaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
