import {Selector} from 'testcafe';
import XPathSelector from './xpath-selector';

const usernameInput = Selector('#login_input-email'); //Css-selector
const passwordInput = Selector('#login_input-password'); //Css-selector
const languageOption = XPathSelector('//input[@type="checkbox"]'); //X-path
const dropDown = XPathSelector('//select[@id="login_select-country"]');
const selectCountry = XPathSelector('//select[@id="login_select-country"]//*[contains(text(),"Germany")]');
const secondCheckbox  = XPathSelector('//label[contains(text(),"Publisher")]');

fixture `secondTest`
    .page `https://login-test.plista.com/pl/`;

test('Test2', async t => {
    //**Starts at login-page
    console.log("website:  https://login-test.plista.com/pl/")
    //**maximize the window size 
    await t.maximizeWindow()
    .takeScreenshot('scenario-2-Login-page.png');
    //**change the language to german
    await t.click(languageOption)
    .takeScreenshot('scenario-2-change-to-german.png');
    setTimeout(function() {   }, 10000);
    //select Country as Germany
    await t.click(dropDown)
    .click(selectCountry)
    .takeScreenshot('scenario-2-select Germany.png');
    // change the language to german
    await t.click(languageOption)
    //click on the radiobutton publisher
    await t.click (secondCheckbox)
    .takeScreenshot('scenario-2-click-on-publisher.png');
    //submit email and password details
    await t.typeText(usernameInput, 'ashok@plista.com')
            .expect(usernameInput.value).eql('ashok@plista.com');
    await t.click('#login_input-password')
            .typeText(passwordInput, 'passwordashok123@plista.com')
            .expect(passwordInput.value).eql('passwordashok123@plista.com')
            .click('#login_button-login')
            .takeScreenshot('scenario-2-final output.png');
    });