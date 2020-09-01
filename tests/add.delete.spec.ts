import addRemove from "../pages/add.remove/add.remove.page";
import homePage from "../pages/home/home.page";
import { Pages } from "../pages/home/pages.enum";

describe("Verify home page", function () {
  before("Click on Add/Remove Elements", () => {
    homePage.click_on_element(Pages.ADD_REMOVE);
  });

  it("Verify page URL", () => {
    addRemove.verify_browser_url();
  });

  it("Verify page title", () => {
    addRemove.verify_title_is_exist();
  });

  it("Verify add element button", () => {
    let clickCount = 10;
    for (let i = 0; i < clickCount; i++) {
      addRemove.click_add_element_btn();
    }
    addRemove.verify_delete_button_count(clickCount);
  });

  it("Verify delete element button", () => {
    let clickCount = 10;
    for (let i = 0; i < clickCount; i++) {
      addRemove.click_remove_delete_btn();
    }
    addRemove.verify_delete_button_count(0);
  });
});
