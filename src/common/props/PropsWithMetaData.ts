export type PropsWithMetaData = {
  metaData: {
    title: string;
    description: string;
    keywords: string;
    favicon: string;
    og: {
      title: string;
      description: string;
      image: string;
      url: string;
      type: string;
    };
  }
}