// Main.ts
import { Panel } from "./Panel";
import { TextComponent } from "./TextComponent";
import { Button } from "./Button";

// Create Login Panel
const loginPanel = new Panel("Login Panel");
loginPanel.add(new TextComponent("Username"));
loginPanel.add(new Button("Submit"));

// Create Sidebar
const sidebar = new Panel("Sidebar");
sidebar.add(new Button("Home"));
sidebar.add(new Button("Settings"));

// Create App UI (root panel)
const appUI = new Panel("App UI");
appUI.add(loginPanel);
appUI.add(sidebar);

// Render full UI hierarchy
appUI.render();
