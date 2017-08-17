import { PhooglePage } from './app.po';

describe('abp-zero-template App', function () {
    let page: PhooglePage;

    beforeEach(() => {
        page = new PhooglePage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        page.getCopyright().then(value => {
            expect(value).toEqual(new Date().getFullYear() + ' © Phoogle.');
        });
    });
});
