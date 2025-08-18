import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {schemaTypes} from './schemaTypes'
import IframePreview from "./src/components/IframePreview";
import resolveProductionUrl from "./src/resolveProductionUrl";

export default defineConfig({
  name: "default",
  title: "KCC School Website",

  projectId: "e45g7oig",   // your project ID
  dataset: "production",

  plugins: [
    deskTool({
      defaultDocumentNode: (S, { schemaType }) => {
        if (["heroSection", "blog"].includes(schemaType)) {
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
