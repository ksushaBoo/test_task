module.exports = function(browser) {
    this.OpenUrl = function () {
        browser
            .url('https://angular.io');
    };
    this.CheckSearchInput = function () {
        browser
            .setValue('input[type=search]', 'component')
            .waitForElementVisible('aio-search-results', 2000)
            .assert.attributeContains('aio-search-results', 'class', 'ng-star-inserted');
        return browser;
    };
    this.ClearSearchInput = function () {
        browser
            .clearValue('input[type=search]')
            .click('img[class=ng-star-inserted]')
            .assert.elementNotPresent('aio-search-results=[class="ng-star-inserted"]');
        return browser;
    };
    this.NavigateToGetStartedPage = function () {
        browser
            .click('a[class="button hero-cta"]')
            .waitForElementPresent('button[class="hamburger mat-button"]',2000)
            .assert.urlContains('https://angular.io/guide/quickstart')
        return browser;
    };
    this.CloseHamburgerButton = function () {
        browser
            .pause(750)
            .click('button[class="hamburger mat-button"]')
            .assert.attributeContains('mat-sidenav', 'style', 'box-shadow: none; visibility: hidden;');
        return browser;
    };
    this.CloseBrowser  = function () {
        browser
            .end()
    };

    return this;
};