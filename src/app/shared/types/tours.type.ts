export interface ITourList {
  id: number;
  titleHeader: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  imageHeaderUrl: string;
  group: boolean;
  private: boolean;
  italian: boolean;
  english: boolean;
  available: boolean;
}
