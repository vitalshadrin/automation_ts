import homepage from "../pages/home/home.page";
import { Pages } from "pages/home/pages";

describe("Verify home page", function() {

  it("Click on page " + Pages.AB, function() {
    homepage.click_on_element(Pages.AB);
  });

});
