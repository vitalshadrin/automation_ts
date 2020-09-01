import AbstractPage from "../page/abstract.page";
import { expect, assert } from "chai";
import { homePage } from "dictionary/en/home.page.json";
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
    this.verify_element_by_text(this.title, homePage.title);
  }

  verify_sub_title_is_exist(): void {
    this.verify_element_by_text(this.subTitle, homePage.subTitle);
  }

  verify_body_is_exist(): void {
    for (let page in Pages) {
      expect(
        this.is_element_exist(
          this.get_element(this.get_dictionary_value(Pages[page]))
        )
      ).to.be.true;
    }
  }

  verify_footer_is_exist(): void {
    this.verify_element_by_text(this.footer, homePage.footer);
  }

  private get_dictionary_value(property: String): String {
    let homePageBody = homePage.body;
    let elementIndex = homePageBody.findIndex((data) => data.key === property);
    if (elementIndex == -1) {
      assert.fail("Not found key :: " + property + " in dictionary");
    }
    return homePageBody[elementIndex].value;
  }
}

export default new HomePage();
