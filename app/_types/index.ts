type Article = {
  title: string;
  pressName: string;
  originallink: string;
  link: string;
  pubDate: string;
  description: string;
};

export type Cluster = {
  keywords: string[];
  articles: Article[];
  mainImage: string;
  cluster_id: number;
};

export type NewsClusters = {
  data: Cluster[];
};
