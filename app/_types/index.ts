import { press_bias_map } from "../_const/press_bias";

export type Article = {
  title: string;
  pressName: keyof typeof press_bias_map;
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
