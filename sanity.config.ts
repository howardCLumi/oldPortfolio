import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: "ijig7y1t",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-05-19",
    basePath: "/admin",
    plugins: [deskTool()],
})

export default config;