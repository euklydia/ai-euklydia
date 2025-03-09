// src/components/MetaHead.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { PropsWithMetaData } from "../../common";

// Définir l'interface pour les props

export const MetaHead: React.FC<PropsWithMetaData> = ({ metaData }) => {
  return (
    <Helmet>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={metaData.keywords} />
      <link
        rel="shortcut icon"
        href={metaData.favicon}
        type="image/png"
        sizes="16x16 32x32 48x48"
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={metaData.og.title} />
      <meta property="og:description" content={metaData.og.description} />
      <meta property="og:image" content={metaData.og.image} />
      <meta property="og:url" content={metaData.og.url} />
      <meta property="og:type" content={metaData.og.type} />
    </Helmet>
  );
};
