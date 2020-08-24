import AbstractPage from "pages/page/abstract.page";

class HomePage extends AbstractPage {
  private get_element(page: String): WebdriverIO.Element {
    return $("//a[text()='" + page + "']");
  }

  click_on_element(page: String): void {
    this.click(this.get_element(page));
  }
}

export default new HomePage();
