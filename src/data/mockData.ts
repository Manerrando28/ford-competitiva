export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  version: string;
  category: string;
  priceEstimate: string;
  imageUrl: string;
  goatModes?: string[];
  telemetry?: {
    fuelLevel: string;
    range: string;
    tirePressure: string;
    oilLife: string;
  };
  specs: Record<string, string>;
}

export const vehiclesDatabase: Vehicle[] = [
  {
    id: 'ranger-raptor',
    brand: 'Ford',
    model: 'Ranger',
    version: 'Raptor',
    category: 'Picape Esportiva Off-Road',
    priceEstimate: 'R$ 469.700',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    goatModes: ['Normal', 'Sport', 'Escorregadio', 'Lama/Trilhos', 'Areia', 'Baja', 'Rochas'],
    telemetry: {
      fuelLevel: '85%',
      range: '620 km',
      tirePressure: '38 PSI',
      oilLife: '92%',
    },
    specs: {
      motor: '3.0 V6 Bi-Turbo EcoBoost',
      potencia: '397 cv @ 5.650 rpm',
      potência: '397 cv @ 5.650 rpm',
      torque: '583 Nm @ 3.500 rpm',
      transmissao: 'Automática de 10 velocidades',
      transmissão: 'Automática de 10 velocidades',
      tracao: '4WD Permanente com reduzida e bloqueio de diferenciais',
      tração: '4WD Permanente com reduzida e bloqueio de diferenciais',
      suspensao: 'Ativa FOX Live Valve 2.5 com bypass interno',
      suspensão: 'Ativa FOX Live Valve 2.5 com bypass interno',
      combustivel: 'Gasolina',
      combustível: 'Gasolina',
      zeroacem: '6.0 segundos',
    },
  },
  {
    id: 'hilux-grs',
    brand: 'Toyota',
    model: 'Hilux',
    version: 'GR-Sport',
    category: 'Picape Médias Esportivas',
    priceEstimate: 'R$ 372.890',
    imageUrl: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=800&q=80',
    goatModes: ['Eco', 'Power', 'Normal'],
    specs: {
      motor: '2.8 Turbo Diesel',
      potencia: '224 cv',
      potência: '224 cv',
      torque: '550 Nm',
      transmissao: 'Automática de 6 velocidades',
      transmissão: 'Automática de 6 velocidades',
      tracao: '4x4 com reduzida',
      tração: '4x4 com reduzida',
      suspensao: 'Monotubo GR-Sport',
      suspensão: 'Monotubo GR-Sport',
      combustivel: 'Diesel',
      combustível: 'Diesel',
      zeroacem: '10.2 segundos',
    },
  },
  {
    id: 's10-z71',
    brand: 'Chevrolet',
    model: 'S10',
    version: 'Z71',
    category: 'Picape Médias',
    priceEstimate: 'R$ 310.000',
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '2.8 Turbo Diesel Duramax',
      potencia: '207 cv',
      potência: '207 cv',
      torque: '510 Nm',
      transmissao: 'Automática de 8 velocidades',
      transmissão: 'Automática de 8 velocidades',
      tracao: '4x4 com reduzida',
      tração: '4x4 com reduzida',
      combustivel: 'Diesel',
      combustível: 'Diesel',
    },
  },
];

export const getVehicleSpecifications = (
  brand: string,
  model: string,
  version: string,
  attributes: string[]
) => {
  const matchedVehicle = vehiclesDatabase.find(
    (v) =>
      v.brand.toLowerCase().trim() === brand.toLowerCase().trim() &&
      v.model.toLowerCase().trim() === model.toLowerCase().trim() &&
      v.version.toLowerCase().trim() === version.toLowerCase().trim()
  );

  const specs = attributes.map((attr) => {
    const key = attr.toLowerCase().trim();
    if (matchedVehicle && matchedVehicle.specs[key]) {
      return { attribute: attr, value: matchedVehicle.specs[key] };
    }
    return { attribute: attr, value: null };
  });

  return { specs, vehicle: matchedVehicle };
};