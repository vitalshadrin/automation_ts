import AbstractPage from "../page/abstract.page";
import { abPage } from "dictionary/en/ab.page.json";
import WebdriverIO from "@wdio/sync";
import { assert } from "chai";

class ABTestControlPage extends AbstractPage {
  private get title(): WebdriverIO.Element {
    return $("//h3");
  }
  private get body() {
    return $("//div//p");
  }
  private get footer() {
    return $("//a[@target]");
  }

  verify_browser_url(): void {
    super.verify_browser_url(browser.options.baseUrl + "abtest");
  }

  verify_title_is_exist(): void {
    let titlesText = abPage.title;
    if (!titlesText.includes(this.get_element_text(this.title))) {
      assert.fail("Not found title in [" + titlesText + "]");
    }
  }

  verify_body_is_exist(): void {
    this.verify_element_by_text(this.body, abPage.body);
  }

  verify_footer_is_exist(): void {
    this.verify_element_by_text(this.footer, abPage.footer);
  }
}

export default new ABTestControlPage();
