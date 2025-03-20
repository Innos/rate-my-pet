import "../src/config/firebaseInit";
import page from "page";

import layoutView from "./views/layout";
import homeView from "./views/home";
import petsView from "./views/pets";
import loginView from "./views/login";

// Middlewares
page(layoutView);

// Setup routes
page("/", homeView);
page("/pets", petsView);
page("/login", loginView);

// Start routing
page();
