var utils = require('..\\utils.js')

module.exports = {
    'Search checking': function (browser) {
        utils(browser).OpenUrl();
        utils(browser).CheckSearchInput();
    },
    'Clear serch Input': function (browser) {
        utils(browser).ClearSearchInput();
    },
    'Navigate to Get Started page': function (browser) {
        utils(browser).NavigateToGetStartedPage();
    },
    'Close Hamburger menu': function (browser) {
        utils(browser).CloseHamburgerButton();
        utils(browser).CloseBrowser();
    }
};
