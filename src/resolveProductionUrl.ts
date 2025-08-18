import type { SanityDocument } from "sanity";

export default function resolveProductionUrl(doc: SanityDocument): string {
  console.log('resolveProductionUrl called with doc:', doc); // Debug log
  
  const baseUrl = "http://localhost:5173";

  if (!doc || !doc._type) {
    console.warn('Invalid document passed to resolveProductionUrl:', doc);
    return baseUrl;
  }

  switch (doc._type) {
    case "heroSection":
      return `${baseUrl}/preview?type=hero&id=${doc._id}`;
    case "aboutPage":
      return `${baseUrl}/preview?type=about&id=${doc._id}`;
    case "academicPage":
      return `${baseUrl}/preview?type=academic&id=${doc._id}`;
    default:
      console.warn(`No preview URL configured for document type: ${doc._type}`);
      return baseUrl;
  }
}