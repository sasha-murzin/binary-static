var element = {
    form: '#openAccForm',
    firstNameInput: '#fname',
    familyNameInput: '#lname',
    emailInput: '#Email',
    dateofBirthSelects: {
        day: '#dobdd',
        month: '#dobmm',
        year: '#dobyy'
    },
    firstLineAddressInput: '#Address1',
    townCityInput: '#AddressTown',
    telephoneInput: '#Tel',
    passwordInput: '#chooseapassword',
    secretAnswerInput: '#secretanswer',
    agreeToTermsCheckbox: '#tnc',
    openAccountButton: '#submit'
};

module.exports = {

    "createAccountSuccess": function (browser) {

        var randomStr = browser.globals.randomStr(5),
            randomEmail = 'binarytest-' + randomStr + '@mailinator.com';

        browser
            .url(browser.globals.url + '/c/linkto_acopening.cgi?actype=real')
            .waitForElementVisible(element.form, 5000)
            .setValue(element.firstNameInput, randomStr)
            .setValue(element.familyNameInput, randomStr)
            .setValue(element.emailInput, randomEmail)
            .setValue(element.dateofBirthSelects.day, '1')
            .setValue(element.dateofBirthSelects.month, 'Jan')
            .setValue(element.dateofBirthSelects.year, '1950')
            .setValue(element.firstLineAddressInput, randomStr)
            .setValue(element.townCityInput, randomStr)
            .setValue(element.telephoneInput, '123123')
            .setValue(element.passwordInput, randomStr)
            .setValue(element.secretAnswerInput, randomStr)
            .click(element.agreeToTermsCheckbox)
            .click(element.openAccountButton)
            .pause(5000)
            .assert.containsText('body', 'Welcome')
        .end();
    }
};