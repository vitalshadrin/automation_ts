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

  verify_element_by_text(element: WebdriverIO.Element, expected: string): void {
    expect(element.getText()).to.be.eq(expected);
  }
}
