import AbstractPage from "../page/abstract.page";
import { addRemove } from "dictionary/en/add.remove.page.json";

class AddRemovePage extends AbstractPage {
  private get title(): WebdriverIO.Element {
    return $("//h3");
  }
  private button(text: string): WebdriverIO.Element {
    return $("//button[text()='" + text + "']");
  }

  verify_browser_url(): void {
    super.verify_browser_url(browser.options.baseUrl + "add_remove_elements/");
  }

  click_add_element_btn(): void {
    this.click(this.button(addRemove.addButton));
  }

  click_remove_delete_btn(): void {
    this.click(this.button(addRemove.deleteButton));
  }

  verify_title_is_exist(): void {
    this.verify_element_by_text(this.title, addRemove.title);
  }

  verify_delete_button_count(count: number): void {
    this.verify_elements_count(this.button(addRemove.deleteButton), count);
  }
}

export default new AddRemovePage();
