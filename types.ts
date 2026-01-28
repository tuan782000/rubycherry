
export interface Product {
  id: number;
  name: string;
  scientificName: string;
  price: string;
  description: string;
  origin: string;
  season: string;
  image: string;
  nutrition: {
    calories: string;
    vitaminC: string;
    potassium: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}
