class HomePage {
  private get_element(page: String): WebdriverIO.Element {
    return $("//a[text()='" + page + "']");
  }

  click_on_element(page: String): void {
    this.get_element(page).click();
  }
}

export default new HomePage();
