import HomePage from "../page-objects/HomePage";

describe('Google Search', () => {
  const target: string = "http://main.ctqatest.info/test.php";
  let homePage: HomePage;

  beforeEach(async() => {
    homePage = new HomePage();
  });

  it('should have text under shadow-root', async() => {
    homePage.open(target);
    const shadowRootElement = await $('#site-info');
    const textUnderShadowRoot = await shadowRootElement.shadow$('span').getText();
    expect(textUnderShadowRoot).toEqual("This is a demo website for testing purpose");
  });
});
