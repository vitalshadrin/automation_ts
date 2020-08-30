import AbstractPage from "pages/page/abstract.page";
import { expect, assert } from "chai";
import { homePageDictionary } from "dictionary/en/home.page.json";
import { Pages } from "./pages.enum";

class HomePage extends AbstractPage {
  private get title() {
    return $("//h1");
  }
  private get subTitle() {
    return $("//h2");
  }
  private get footer() {
    return $("//a[@target]");
  }

  private get_element(page: String): WebdriverIO.Element {
    return $("//a[text()='" + page + "']");
  }

  click_on_element(property: Pages): void {
    this.click(this.get_element(this.get_dictionary_value(Pages[property])));
  }

  verify_title_is_exist(): void {
    this.verify_element_by_text(this.title, homePageDictionary.title);
  }

  verify_sub_title_is_exist(): void {
    this.verify_element_by_text(this.subTitle, homePageDictionary.subTitle);
  }

  verify_body_is_exist(): void {
    for (let page = 0; page < Object.keys(Pages).length / 2; page++) {
      expect(
        this.is_element_exist(
          this.get_element(this.get_dictionary_value(Pages[page]))
        )
      ).to.be.true;
    }
  }

  verify_footer_is_exist(): void {
    this.verify_element_by_text(this.footer, homePageDictionary.footer);
  }

  private get_dictionary_value(property: String): String {
    let homePageBody = homePageDictionary.body;
    let elementIndex = homePageBody.findIndex((data) => data.key === property);
    if (elementIndex == -1) {
      assert.fail("Not found key :: " + property + " in dictionary");
    }
    return homePageBody[elementIndex].value;
  }
}

export default new HomePage();
