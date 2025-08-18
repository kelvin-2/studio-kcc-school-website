import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemaTypes";
import IframePreview from "./src/components/IframePreview";
import resolveProductionUrl from "./src/resolveProductionUrl";

export default defineConfig({
  name: "default",
  title: "KCC School Website",
  projectId: "e45g7oig",
  dataset: "production",

  plugins: [
    deskTool({
      defaultDocumentNode: (S, { schemaType }) => {
        console.log('defaultDocumentNode called for schemaType:', schemaType); // Debug log
        
        if (["heroSection", "aboutPage", "academicPage"].includes(schemaType)) {
          return S.document().views([
            S.view.form(),
            S.view
              .component(IframePreview)
              .options({ resolveProductionUrl })
              .title("Preview"),
          ]);
        }
        return null;
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});