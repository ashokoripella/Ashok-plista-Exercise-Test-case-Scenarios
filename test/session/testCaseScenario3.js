import {Selector} from 'testcafe';
import XPathSelector from './xpath-selector';

const usernameInput = Selector('#login_input-email');//css Selector
const passwordInput = Selector('#login_input-password');
const languageOption = XPathSelector('//input[@type="checkbox"]');//X-path
const dropDown = XPathSelector('//select[@id="login_select-country"]');
const selectCountry = XPathSelector('//select[@id="login_select-country"]//*[contains(text(),"Belgium")]');
fixture `thirdTest`
    .page `https://login-test.plista.com/pl/`;

test('Test3', async t => {
    // Starts at login-page
    console.log("website Url:  https://login-test.plista.com/pl/")
    // maximize the window size 
    await t.maximizeWindow()
    .takeScreenshot('scenario-3-Login-page.png');
    // change the language to german
    await t.click(languageOption)
    .takeScreenshot('scenario-3-Change Language.png');
    setTimeout(function() {   }, 10000);
    //select Country
    await t.click(dropDown)
    .takeScreenshot('scenario-3-dropdown-open.png')
    // change country to Belgium,
    .click(selectCountry)
    await t.click(languageOption)
    //submit email and password details
    await t.typeText(usernameInput, 'ashok@plista.com')
            .expect(usernameInput.value).eql('ashok@plista.com');
    await t.click('#login_input-password')
            .typeText(passwordInput, 'passwordashok123@plista.com')
            .expect(passwordInput.value).eql('passwordashok123@plista.com')
            .click('#login_button-login')
            .takeScreenshot('scenario-3-Final-output.png');     
    });