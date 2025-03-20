import page from "page";
import homeView from "./views/home";

// Setup routes
page("/", homeView);

// Start routing
page();
