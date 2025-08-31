import { defineType } from "sanity";

export default defineType({
  name: "missionVision",
  title: "Mission & Vision",
  type: "document",
  fields: [
    {
      name: "missionTitle",
      title: "Mission Title",
      type: "string",
    },
    {
      name: "missionText",
      title: "Mission Text",
      type: "text",
    },
    {
      name: "visionTitle",
      title: "Vision Title",
      type: "string",
    },
    {
      name: "visionText",
      title: "Vision Text",
      type: "text",
    },
  ],
  preview: {
    select: {
      missionTitle: "missionTitle",
      visionTitle: "visionTitle",
    },
    prepare(selection: { missionTitle?: string; visionTitle?: string }) {
      const { missionTitle, visionTitle } = selection;
      return {
        title: missionTitle || "Mission & Vision", // 👈 shows in document list
        subtitle: visionTitle || "No vision title yet",
      };
    },
  },
});
