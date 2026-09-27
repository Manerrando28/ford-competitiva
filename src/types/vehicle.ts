export type SpecificationStatus = 'encontrado' | 'nao_disponivel';

export interface SpecificationItem {
  attribute: string;
  value: string | null;
  status: SpecificationStatus;
  source: string;
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
  goatModes?: string[];
  telemetry?: {
    fuelLevel: string;
    range: string;
    tirePressure: string;
    oilLife: string;
  };
}

export interface SearchResult {
  brand: string;
  model: string;
  version: string;
  specifications: SpecificationItem[];
  vehicle?: Vehicle;
  foundCount: number;
  unavailableCount: number;
  source: string;
}
