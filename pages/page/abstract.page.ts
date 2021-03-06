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

  get_element_text(element: WebdriverIO.Element): string {
    return element.getText();
  }

  get_elements_text(element: WebdriverIO.Element): string[] {
    let elementsArray = $$(element.selector);
    let elementsText = [];
    if (this.is_element_exist(element)) {
      elementsArray.forEach((elementText) =>
        elementsText.push(this.get_element_text(elementText))
      );
    }
    return elementsText;
  }

  get_elements_count(element: WebdriverIO.Element): number {
    return this.get_elements_text(element).length;
  }

  verify_elements_count(
    element: WebdriverIO.Element,
    elementCount: number
  ): void {
    expect(this.get_elements_count(element)).to.be.eq(elementCount);
  }

  verify_element_enabled(element: WebdriverIO.Element): void {
    expect(this.is_element_enabled(element)).to.be.true;
  }

  verify_element_disabled(element: WebdriverIO.Element): void {
    expect(this.is_element_displayed(element)).to.be.true;
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
