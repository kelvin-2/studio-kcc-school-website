import { defineType } from "sanity";

export default defineType({
  name: "achievementHighlight",
  title: "Achievement Highlight",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Highlight Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Highlight Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
      media: "image",
    },
    prepare(selection: { title?: string; description?: string; media?: any }) {
      const { title, description, media } = selection;
      return {
        title: title || "Achievement Highlight",
        subtitle: description ? description.slice(0, 50) + "..." : "No description yet",
        media,
      };
    },
  },
});
