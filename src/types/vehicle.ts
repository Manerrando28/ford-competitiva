export interface SpecificationItem {
  attribute: string;
  value: string | null;
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  version: string;
  imageUrl: string;
  priceEstimate?: string;
  category: string;
  specs: Record<string, string>;
}

export interface SearchResult {
  brand: string;
  model: string;
  version: string;
  specifications: SpecificationItem[];
  vehicle?: Vehicle;
}