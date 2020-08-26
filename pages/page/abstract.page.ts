import { expect } from "chai";

export default class AbstractPage {
  click(element: WebdriverIO.Element): void {
    element.click();
  }

  enter(
    element: WebdriverIO.Element,
    value: string | number | boolean | object | any[]
  ): void {
    element.setValue(value);
  }

  verify_browser_url(expectedUrl: string): void {
    expect(expectedUrl).to.be.eq(browser.getUrl());
  }

  verify_element_by_text(element: WebdriverIO.Element, expected: string): void {
    expect(element.getText()).to.be.eq(expected);
  }

  is_element_displayed(element: WebdriverIO.Element): boolean {
    return element.isDisplayed() ? true : false;
  }

  is_element_exist(element: WebdriverIO.Element): boolean {
    return element.isExisting() ? true : false;
  }

  is_element_enabled(element: WebdriverIO.Element): boolean {
    return element.isEnabled() ? true : false;
  }

  is_element_clicable(element: WebdriverIO.Element): boolean {
    return element.isClickable() ? true : false;
  }
}
