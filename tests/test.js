import Nightmare from "nightmare";
import {expect} from "chai";
import GoogleSearchPage from '../pageobjects/googlesearchpage';
import SearchResultsPage from "../pageobjects/searchresultspage";

describe('Google Search', function () {
    let nightmare
    let googlesearchpage
    let searchresultspage
    this.timeout(50000)

    before(async () => {
        nightmare = Nightmare()
        googlesearchpage = new GoogleSearchPage(nightmare)
        searchresultspage = new SearchResultsPage(nightmare)
    });

    it('Assert title "Google"', async () => {
        await googlesearchpage.open()
        const title = await googlesearchpage.getTitle()
        expect(title).to.equal('Google')
    });

    it('Google Search Example', async function () {
        await googlesearchpage.searchFor('Selenium')
        const linkselenium = await searchresultspage.getSeleniumText()
        expect(linkselenium).to.equal('Selenium - Web Browser Automation')
    });

    after(() => nightmare.end());

});
