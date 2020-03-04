export type CardModel = {
  status: number;
  eyeCatch: Partial<EyeCatch>;
};

export type SavedCardData = Partial<CardModel & { expired: number }>;

export type EyeCatch = {
  themeColor?: string;
  site?: string;
  card?: string;
  creator?: string;
  url?: string;
  title?: string;
  imageUrl?: string;
  description?: string;
};
