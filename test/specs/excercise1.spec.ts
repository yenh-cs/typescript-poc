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
  
  // Use the website http://main.ctqatest.info/test.php  and perform the following tasks.
  // Go to the login page and enter the username as test@test.com and password as ThisIs@T3st. Check if there is an error displayed.
  it('should be able to login', async() => {
   
  });
});
