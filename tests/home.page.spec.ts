import homepage from "../pages/home/home.page";
import { Pages } from "pages/home/pages.enum";

describe("Verify home page", function () {
  it("Verify page URL", () => {
    homepage.verify_browser_url(browser.options.baseUrl);
  });

  it("Verify page title", () => {
    homepage.verify_title_is_exist();
  });

  it("Verify page sub-title", () => {
    homepage.verify_sub_title_is_exist();
  });

  it("Verify page body elemets is exists ", () => {
    homepage.verify_body_is_exist();
  });

  it("Verify page footer", () => {
    homepage.verify_footer_is_exist();
  });

  it("Click on elemet AB", () => {
    homepage.click_on_element(Pages.AB);
  });
});
