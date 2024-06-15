export interface Product {
  id: number;
  name: string;
  description: string;
  acidity: number;
  body: number;
  processing_method: string;
  tasting_note: string[];
  complementary_flavors: string[];
  region: string;
  price: number;
  image_url: string[];
  category: Categories;
  roast_level: RoastLevels;
  caffeine: Caffeine;
}

export enum Categories {
  WholeBean = "Whole Bean",
  StarbucksReserve = "Starbucks Reserve",
  StarbucksVIA = "Starbucks VIA",
  StarbucksOrigami = "Starbucks Origami",
  Teavana = "Teavana",
  Syrub = "Syrub",
}

export enum RoastLevels {
  Blonde = "Blonde",
  Medium = "Medium",
  Dark = "Dark",
}

export enum Caffeine {
  Decaf = "Decaf",
  Regular = "Regular",
}
