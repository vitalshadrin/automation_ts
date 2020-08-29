import AbstractPage from "pages/page/abstract.page";
import { expect } from "chai";
import { homePage } from "dictionary.json";

class HomePage extends AbstractPage {
  private get title() { return $('//h1') }
  private get subTitle() {return $("//h2")};
  private get footer() {return $("//a[@target]")};

  private get_element(page: String): WebdriverIO.Element {
    return $("//a[text()='" + page + "']");
  }

  click_on_element(page: String): void {
    this.click(this.get_element(page));
  }

  verify_title_is_exist(): void {
    this.verify_element_by_text(this.title, homePage.title);
  }

  verify_sub_title_is_exist(): void {
    this.verify_element_by_text(this.subTitle, homePage.subTitle);
  }

  verify_body_is_exist(page: String): void {
    expect(this.is_element_exist(this.get_element(page))).to.be.true;
  }

  verify_footer_is_exist(): void {
    this.verify_element_by_text(this.footer, homePage.footer);
  }
}

export default new HomePage();
