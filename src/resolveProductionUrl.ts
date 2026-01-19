import type { SanityDocument } from "sanity";

// Define the local and production URLs
const DEV_URL = "http://localhost:5173"; // Local URL for dev
const PROD_URL = "https://kccschool.co.za"; // Your deployed production URL

export default function resolveProductionUrl(doc: SanityDocument): string {
  console.log('resolveProductionUrl called with doc:', doc); // Debug log
  
  // Use the appropriate base URL depending on the environment
  const baseUrl = process.env.NODE_ENV === 'production' ? PROD_URL : DEV_URL;

  if (!doc || !doc._type) {
    console.warn('Invalid document passed to resolveProductionUrl:', doc);
    return baseUrl;
  }

  // Generate the preview URL based on the document type
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
