import "../src/config/firebaseInit";
import page from "page";

import { authMiddleware } from "./middlewares/auth";
import layoutView from "./views/layout";

import homeView from "./views/home";
import petsView from "./views/pets";
import loginView from "./views/login";
import logoutView from "./views/logout";

// Middlewares
page(authMiddleware);
page(layoutView);

// Setup routes
page("/", homeView);
page("/pets", petsView);
page("/login", loginView);
page("/logout", logoutView);

// Start routing
page();
