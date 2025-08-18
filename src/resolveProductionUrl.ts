export default function resolveProductionUrl(doc: any) {
  const baseUrl = "http://localhost:5173"; // React dev server

  if (doc._type === "heroSection") {
    return `${baseUrl}/preview?type=hero&id=${doc._id}`;
  }

  if (doc._type === "blog") {
    return `${baseUrl}/preview?type=blog&slug=${doc.slug?.current}`;
  }

  return baseUrl;
}
     