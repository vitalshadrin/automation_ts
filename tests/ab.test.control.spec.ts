import ab from "../pages/ab/ab.test.control.page";
import homePage from "../pages/home/home.page";
import { Pages } from "../pages/home/pages.enum";

describe("Verify home page", function() {
  before("Click on A/B Test Control", () => {
    homePage.click_on_element(Pages.AB);
  });

  it("Verify page URL", () => {
    ab.verify_browser_url();
  });

  it("Verify page title", () => {
    ab.verify_title_is_exist();
  });

  it("Verify page body elemets is exists ", () => {
    ab.verify_body_is_exist();
  });

  it("Verify page footer", () => {
    ab.verify_footer_is_exist();
  });
});
