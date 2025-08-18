import React from "react";

export default function IframePreview(props: any) {
  const { document, options } = props;
  const { displayed } = document;
  const url = options?.resolveProductionUrl(displayed);

  if (!url) {
    return <p>No preview available</p>;
  }

  return (
    <iframe
      src={url}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
    />
  );
}
