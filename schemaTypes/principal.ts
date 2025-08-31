    import { defineType } from "sanity";

    export default defineType({
    name: "principal",
    title: "Principal",
    type: "document",
    fields: [
        {
        name: "primarySchoolPrincipal",
        title: "Primary School Principal",
        type: "object",
        fields: [
            { name: "name", title: "Full Name", type: "string" },
            { name: "photo", title: "Photo", type: "image", options: { hotspot: true } },
            { name: "description", title: "Description", type: "text" },
            { name: "emojiPlaceholder", title: "Emoji Placeholder", type: "string" },
        ],
        },
        {
        name: "highSchoolPrincipal",
        title: "High School Principal",
        type: "object",
        fields: [
            { name: "name", title: "Full Name", type: "string" },
            { name: "photo", title: "Photo", type: "image", options: { hotspot: true } },
            { name: "description", title: "Description", type: "text" },
            { name: "emojiPlaceholder", title: "Emoji Placeholder", type: "string" },
        ],
        },
    ],
    preview: {
        select: {
        primaryName: "primarySchoolPrincipal.name",
        highName: "highSchoolPrincipal.name",
        },
        prepare(selection: { primaryName?: string; highName?: string }) {
        const { primaryName, highName } = selection;
        return {
            title: `Principals: ${primaryName || "Primary"} & ${highName || "High School"}`,
            subtitle: "Edit Primary and High School Principals",
        };
        },
    },
    });
