import React from "react";
import type { PreviewProps } from "sanity";

interface ExtendedPreviewProps extends PreviewProps {
  options?: {
    resolveProductionUrl?: (doc: any) => string;
  };
  document?: {
    displayed?: any;
  };
}

export default function IframePreview(props: ExtendedPreviewProps) {
  console.log('IframePreview props:', props); // Debug log
  
  const { options, document } = props;
  
  if (!document?.displayed) {
    console.error('No document.displayed found in IframePreview');
    return <p>No document available for preview</p>;
  }

  const url = typeof options?.resolveProductionUrl === "function"
    ? options.resolveProductionUrl(document.displayed)
    : "";

  console.log('Generated preview URL:', url); // Debug log

  if (!url) {
    return (
      <div style={{ padding: '20px' }}>
        <p>No preview available</p>
        <p>Document type: {document.displayed?._type}</p>
        <p>Document ID: {document.displayed?._id}</p>
      </div>
    );
  }

  return (
    <iframe
      src={url}
      frameBorder="0"
      style={{ width: "100%", height: "100vh" }}
      onLoad={() => console.log('Preview iframe loaded')}
      onError={(e) => console.error('Preview iframe error:', e)}
    />
  );
}
