import {Selector} from 'testcafe';
import XPathSelector from './xpath-selector';

const usernameInput = Selector('#login_input-email');//**css Selector
const passwordInput = Selector('#login_input-password');//**css Selector
const firstCheckbox  = XPathSelector('//label[contains(text(),"Advertiser")]');//**X-path
const dropDown = XPathSelector('//select[@id="login_select-country"]');//**X-path
const selectCountry = XPathSelector('//select[@id="login_select-country"]//*[contains(text(),"Germany")]');//**X-path

fixture `firsttest`
    .page `https://login-test.plista.com/pl/`;

test('Test1', async t => {
    // Starts at login-page
    console.log("website:  https://login-test.plista.com/pl/")
    // maximize the window size 
    await t.maximizeWindow()
        .takeScreenshot('scenario-1-Login-page.png');    
        setTimeout(function() {   }, 10000);
    await t.click(dropDown)
    .takeScreenshot('scenario-1-SelectDropDown.png')
    .click(selectCountry)
    .takeScreenshot('scenario-1-SelctCountry.png');
    //click on the radiobutton  
    await t.click (firstCheckbox)
           .takeScreenshot('scenario-1-selctAdvertiser.png');
    //submit email and password details
    await t.typeText(usernameInput, 'ashok@plista.com')
            .expect(usernameInput.value).eql('ashok@plista.com');
    await t.click('#login_input-password')
            .typeText(passwordInput, 'passwordashok123@plista.com')
            .expect(passwordInput.value).eql('passwordashok123@plista.com')
            .click('#login_button-login');
    const comment = await Selector('main.main lo-login.ng-tns-c1-0.ng-trigger.ng-trigger-routeAnimation.ng-star-inserted:nth-child(2) div.p-t-48.ng-tns-c1-0.ng-star-inserted div.row.justify-content-center.align-items-stretch.p-l-24.p-r-24 div.col-12.col-lg-8.box div.row.align-items-stretch div.col-12.col-md-6.login__col:nth-child(2) div.ng-tns-c1-0 form.ng-tns-c1-0.ng-star-inserted.ng-touched.ng-dirty.ng-valid > p.ta-center.subbody.subbody--light.error_message.ng-tns-c1-0.ng-star-inserted:nth-child(7)');
    await t.expect(comment.innerText).eql('Invalid username or password')
           .takeScreenshot('scenario-1-Final-Output.png');
});





