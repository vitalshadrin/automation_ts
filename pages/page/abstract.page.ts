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
}
