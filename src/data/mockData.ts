import { SearchResult, Vehicle } from '../types/vehicle';

export const vehiclesDatabase: Vehicle[] = [
  // ============================================================
  // FORD
  // ============================================================

  {
    id: 'ranger-raptor',
    brand: 'Ford',
    model: 'Ranger',
    version: 'Raptor',
    category: 'Picape Esportiva Off-Road',
    priceEstimate: 'R$ 469.700',
    imageUrl:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    goatModes: [
      'Normal',
      'Sport',
      'Escorregadio',
      'Lama/Trilhos',
      'Areia',
      'Baja',
      'Rochas',
    ],
    telemetry: {
      fuelLevel: '85%',
      range: '620 km',
      tirePressure: '38 PSI',
      oilLife: '92%',
    },
    specs: {
      motor: '3.0 V6 Bi-Turbo EcoBoost',
      potencia: '397 cv @ 5.650 rpm',
      torque: '583 Nm @ 3.500 rpm',
      transmissao: 'Automática de 10 velocidades',
      tracao: '4WD Permanente com reduzida e bloqueio de diferenciais',
      suspensao: 'Ativa FOX Live Valve 2.5 com bypass interno',
      combustivel: 'Gasolina',
      zeroacem: '6,0 segundos',
    },
  },

  {
    id: 'ranger-limited',
    brand: 'Ford',
    model: 'Ranger',
    version: 'Limited',
    category: 'Picape Média',
    priceEstimate: 'R$ 319.900',
    imageUrl:
      'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '2.0 Diesel Bi-Turbo',
      potencia: '170 cv',
      torque: '405 Nm',
      transmissao: 'Automática de 10 velocidades',
      tracao: '4x4',
      suspensao: 'Independente dianteira e feixe de molas traseiro',
      combustivel: 'Diesel',
      zeroacem: '10,5 segundos',
    },
  },

  {
    id: 'ranger-xlt',
    brand: 'Ford',
    model: 'Ranger',
    version: 'XLT',
    category: 'Picape Média',
    priceEstimate: 'R$ 299.900',
    imageUrl:
      'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '2.0 Diesel Bi-Turbo',
      potencia: '170 cv',
      torque: '405 Nm',
      transmissao: 'Automática de 10 velocidades',
      tracao: '4x4',
      suspensao: 'Independente dianteira e feixe de molas traseiro',
      combustivel: 'Diesel',
      zeroacem: '10,8 segundos',
    },
  },

  {
    id: 'territory-titanium',
    brand: 'Ford',
    model: 'Territory',
    version: 'Titanium',
    category: 'SUV',
    priceEstimate: 'R$ 219.900',
    imageUrl:
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '1.5 EcoBoost',
      potencia: '169 cv',
      torque: '260 Nm',
      transmissao: 'Automática de 7 velocidades',
      tracao: 'Dianteira',
      suspensao: 'Independente',
      combustivel: 'Gasolina',
      zeroacem: '9,8 segundos',
    },
  },

  {
    id: 'bronco-sport-wildtrak',
    brand: 'Ford',
    model: 'Bronco Sport',
    version: 'Wildtrak',
    category: 'SUV Off-Road',
    priceEstimate: 'R$ 256.900',
    imageUrl:
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '2.0 EcoBoost',
      potencia: '253 cv',
      torque: '380 Nm',
      transmissao: 'Automática de 8 velocidades',
      tracao: '4x4',
      suspensao: 'Independente',
      combustivel: 'Gasolina',
      zeroacem: '7,5 segundos',
    },
  },

  {
    id: 'maverick-lariat',
    brand: 'Ford',
    model: 'Maverick',
    version: 'Lariat',
    category: 'Picape',
    priceEstimate: 'R$ 239.900',
    imageUrl:
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '2.0 EcoBoost',
      potencia: '253 cv',
      torque: '380 Nm',
      transmissao: 'Automática de 8 velocidades',
      tracao: '4x4',
      suspensao: 'Independente',
      combustivel: 'Gasolina',
      zeroacem: '7,2 segundos',
    },
  },

  {
    id: 'mustang-gt',
    brand: 'Ford',
    model: 'Mustang',
    version: 'GT',
    category: 'Esportivo',
    priceEstimate: 'R$ 529.900',
    imageUrl:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '5.0 V8',
      potencia: '488 cv',
      torque: '567 Nm',
      transmissao: 'Automática de 10 velocidades',
      tracao: 'Traseira',
      suspensao: 'Independente',
      combustivel: 'Gasolina',
      zeroacem: '4,3 segundos',
    },
  },

  {
    id: 'mustang-dark-horse',
    brand: 'Ford',
    model: 'Mustang',
    version: 'Dark Horse',
    category: 'Esportivo',
    priceEstimate: 'R$ 599.900',
    imageUrl:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '5.0 V8',
      potencia: '507 cv',
      torque: '567 Nm',
      transmissao: 'Manual de 6 velocidades',
      tracao: 'Traseira',
      suspensao: 'MagneRide',
      combustivel: 'Gasolina',
      zeroacem: '4,1 segundos',
    },
  },

  // ============================================================
  // TOYOTA
  // ============================================================

  {
    id: 'hilux-grs',
    brand: 'Toyota',
    model: 'Hilux',
    version: 'GR-Sport',
    category: 'Picape Média Esportiva',
    priceEstimate: 'R$ 372.890',
    imageUrl:
      'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=800&q=80',
    goatModes: ['Eco', 'Power', 'Normal'],
    specs: {
      motor: '2.8 Turbo Diesel',
      potencia: '224 cv',
      torque: '550 Nm',
      transmissao: 'Automática de 6 velocidades',
      tracao: '4x4 com reduzida',
      suspensao: 'Monotubo GR-Sport',
      combustivel: 'Diesel',
      zeroacem: '10,2 segundos',
    },
  },

  {
    id: 'hilux-srx',
    brand: 'Toyota',
    model: 'Hilux',
    version: 'SRX',
    category: 'Picape Média',
    priceEstimate: 'R$ 339.900',
    imageUrl:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '2.8 Turbo Diesel',
      potencia: '204 cv',
      torque: '500 Nm',
      transmissao: 'Automática de 6 velocidades',
      tracao: '4x4 com reduzida',
      suspensao: 'Independente dianteira e feixe de molas traseiro',
      combustivel: 'Diesel',
      zeroacem: '10,8 segundos',
    },
  },

  {
    id: 'sw4-diamond',
    brand: 'Toyota',
    model: 'SW4',
    version: 'Diamond',
    category: 'SUV',
    priceEstimate: 'R$ 399.900',
    imageUrl:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '2.8 Turbo Diesel',
      potencia: '204 cv',
      torque: '500 Nm',
      transmissao: 'Automática de 6 velocidades',
      tracao: '4x4',
      suspensao: 'Independente',
      combustivel: 'Diesel',
      zeroacem: '11,0 segundos',
    },
  },

  {
    id: 'corolla-altis',
    brand: 'Toyota',
    model: 'Corolla',
    version: 'Altis',
    category: 'Sedan',
    priceEstimate: 'R$ 189.900',
    imageUrl:
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '2.0 Flex',
      potencia: '177 cv',
      torque: '210 Nm',
      transmissao: 'CVT',
      tracao: 'Dianteira',
      suspensao: 'Independente',
      combustivel: 'Flex',
      zeroacem: '9,2 segundos',
    },
  },

  {
    id: 'corolla-hybrid',
    brand: 'Toyota',
    model: 'Corolla',
    version: 'Hybrid',
    category: 'Sedan Híbrido',
    priceEstimate: 'R$ 199.900',
    imageUrl:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '1.8 Hybrid',
      potencia: '122 cv',
      torque: '163 Nm',
      transmissao: 'E-CVT',
      tracao: 'Dianteira',
      suspensao: 'Independente',
      combustivel: 'Híbrido',
      zeroacem: '11,0 segundos',
    },
  },

  {
    id: 'yaris-xls',
    brand: 'Toyota',
    model: 'Yaris',
    version: 'XLS',
    category: 'Hatch',
    priceEstimate: 'R$ 119.900',
    imageUrl:
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '1.5 Flex',
      potencia: '110 cv',
      torque: '146 Nm',
      transmissao: 'CVT',
      tracao: 'Dianteira',
      suspensao: 'Independente',
      combustivel: 'Flex',
      zeroacem: '11,5 segundos',
    },
  },

  // ============================================================
  // CHEVROLET
  // ============================================================

  {
    id: 's10-z71',
    brand: 'Chevrolet',
    model: 'S10',
    version: 'Z71',
    category: 'Picape Média',
    priceEstimate: 'R$ 310.000',
    imageUrl:
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '2.8 Turbo Diesel Duramax',
      potencia: '207 cv',
      torque: '510 Nm',
      transmissao: 'Automática de 8 velocidades',
      tracao: '4x4 com reduzida',
      suspensao: 'Independente dianteira e feixe de molas traseiro',
      combustivel: 'Diesel',
      zeroacem: '10,5 segundos',
    },
  },

  {
    id: 's10-high-country',
    brand: 'Chevrolet',
    model: 'S10',
    version: 'High Country',
    category: 'Picape Média',
    priceEstimate: 'R$ 319.900',
    imageUrl:
      'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '2.8 Turbo Diesel',
      potencia: '207 cv',
      torque: '510 Nm',
      transmissao: 'Automática de 8 velocidades',
      tracao: '4x4 com reduzida',
      suspensao: 'Independente dianteira e feixe de molas traseiro',
      combustivel: 'Diesel',
      zeroacem: '10,4 segundos',
    },
  },

  {
    id: 'trailblazer-high-country',
    brand: 'Chevrolet',
    model: 'Trailblazer',
    version: 'High Country',
    category: 'SUV',
    priceEstimate: 'R$ 379.900',
    imageUrl:
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '2.8 Turbo Diesel',
      potencia: '207 cv',
      torque: '510 Nm',
      transmissao: 'Automática de 6 velocidades',
      tracao: '4x4',
      suspensao: 'Independente',
      combustivel: 'Diesel',
      zeroacem: '10,9 segundos',
    },
  },

  {
    id: 'tracker-premier',
    brand: 'Chevrolet',
    model: 'Tracker',
    version: 'Premier',
    category: 'SUV',
    priceEstimate: 'R$ 169.900',
    imageUrl:
      'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '1.2 Turbo',
      potencia: '133 cv',
      torque: '210 Nm',
      transmissao: 'Automática de 6 velocidades',
      tracao: 'Dianteira',
      suspensao: 'Independente',
      combustivel: 'Flex',
      zeroacem: '9,8 segundos',
    },
  },

  {
    id: 'onix-premier',
    brand: 'Chevrolet',
    model: 'Onix',
    version: 'Premier',
    category: 'Hatch',
    priceEstimate: 'R$ 119.900',
    imageUrl:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '1.0 Turbo',
      potencia: '116 cv',
      torque: '165 Nm',
      transmissao: 'Automática de 6 velocidades',
      tracao: 'Dianteira',
      suspensao: 'Independente',
      combustivel: 'Flex',
      zeroacem: '10,1 segundos',
    },
  },

  // ============================================================
  // VOLKSWAGEN
  // ============================================================

  {
    id: 'amarok-extreme',
    brand: 'Volkswagen',
    model: 'Amarok',
    version: 'Extreme',
    category: 'Picape',
    priceEstimate: 'R$ 349.900',
    imageUrl:
      'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '3.0 V6 Diesel',
      potencia: '258 cv',
      torque: '580 Nm',
      transmissao: 'Automática de 8 velocidades',
      tracao: '4x4',
      suspensao: 'Independente dianteira e feixe de molas traseiro',
      combustivel: 'Diesel',
      zeroacem: '7,9 segundos',
    },
  },

  {
    id: 'tcross-highline',
    brand: 'Volkswagen',
    model: 'T-Cross',
    version: 'Highline',
    category: 'SUV',
    priceEstimate: 'R$ 169.900',
    imageUrl:
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '1.4 TSI',
      potencia: '150 cv',
      torque: '250 Nm',
      transmissao: 'Automática de 6 velocidades',
      tracao: 'Dianteira',
      suspensao: 'Independente',
      combustivel: 'Flex',
      zeroacem: '8,6 segundos',
    },
  },

  {
    id: 'taos-highline',
    brand: 'Volkswagen',
    model: 'Taos',
    version: 'Highline',
    category: 'SUV',
    priceEstimate: 'R$ 199.900',
    imageUrl:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '1.4 TSI',
      potencia: '150 cv',
      torque: '250 Nm',
      transmissao: 'Automática de 6 velocidades',
      tracao: 'Dianteira',
      suspensao: 'Independente',
      combustivel: 'Gasolina',
      zeroacem: '9,3 segundos',
    },
  },

  {
    id: 'polo-gts',
    brand: 'Volkswagen',
    model: 'Polo',
    version: 'GTS',
    category: 'Hatch',
    priceEstimate: 'R$ 149.900',
    imageUrl:
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '1.4 TSI',
      potencia: '150 cv',
      torque: '250 Nm',
      transmissao: 'Automática de 6 velocidades',
      tracao: 'Dianteira',
      suspensao: 'Independente',
      combustivel: 'Flex',
      zeroacem: '8,4 segundos',
    },
  },

  {
    id: 'virtus-exclusive',
    brand: 'Volkswagen',
    model: 'Virtus',
    version: 'Exclusive',
    category: 'Sedan',
    priceEstimate: 'R$ 159.900',
    imageUrl:
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '1.4 TSI',
      potencia: '150 cv',
      torque: '250 Nm',
      transmissao: 'Automática de 6 velocidades',
      tracao: 'Dianteira',
      suspensao: 'Independente',
      combustivel: 'Flex',
      zeroacem: '8,5 segundos',
    },
  },

  // ============================================================
  // NISSAN
  // ============================================================

  {
    id: 'frontier-pro4x',
    brand: 'Nissan',
    model: 'Frontier',
    version: 'Pro-4X',
    category: 'Picape',
    priceEstimate: 'R$ 319.900',
    imageUrl:
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '2.3 Bi-Turbo Diesel',
      potencia: '190 cv',
      torque: '450 Nm',
      transmissao: 'Automática de 7 velocidades',
      tracao: '4x4',
      suspensao: 'Multilink traseira e feixe de molas',
      combustivel: 'Diesel',
      zeroacem: '10,5 segundos',
    },
  },

  {
    id: 'kicks-exclusive',
    brand: 'Nissan',
    model: 'Kicks',
    version: 'Exclusive',
    category: 'SUV',
    priceEstimate: 'R$ 159.900',
    imageUrl:
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '1.6 Flex',
      potencia: '113 cv',
      torque: '150 Nm',
      transmissao: 'CVT',
      tracao: 'Dianteira',
      suspensao: 'Independente',
      combustivel: 'Flex',
      zeroacem: '11,8 segundos',
    },
  },

  {
    id: 'sentra-exclusive',
    brand: 'Nissan',
    model: 'Sentra',
    version: 'Exclusive',
    category: 'Sedan',
    priceEstimate: 'R$ 179.900',
    imageUrl:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '2.0',
      potencia: '151 cv',
      torque: '196 Nm',
      transmissao: 'CVT',
      tracao: 'Dianteira',
      suspensao: 'Independente',
      combustivel: 'Gasolina',
      zeroacem: '9,8 segundos',
    },
  },

  // ============================================================
  // JEEP
  // ============================================================

  {
    id: 'commander-overland',
    brand: 'Jeep',
    model: 'Commander',
    version: 'Overland',
    category: 'SUV',
    priceEstimate: 'R$ 249.900',
    imageUrl:
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '1.3 Turbo',
      potencia: '185 cv',
      torque: '270 Nm',
      transmissao: 'Automática de 6 velocidades',
      tracao: 'Dianteira',
      suspensao: 'Independente',
      combustivel: 'Flex',
      zeroacem: '9,8 segundos',
    },
  },

  {
    id: 'compass-blackhawk',
    brand: 'Jeep',
    model: 'Compass',
    version: 'Blackhawk',
    category: 'SUV',
    priceEstimate: 'R$ 239.900',
    imageUrl:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '2.0 Turbo',
      potencia: '272 cv',
      torque: '400 Nm',
      transmissao: 'Automática de 9 velocidades',
      tracao: '4x4',
      suspensao: 'Independente',
      combustivel: 'Gasolina',
      zeroacem: '6,3 segundos',
    },
  },

  {
    id: 'renegade-trailhawk',
    brand: 'Jeep',
    model: 'Renegade',
    version: 'Trailhawk',
    category: 'SUV Off-Road',
    priceEstimate: 'R$ 169.900',
    imageUrl:
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '1.3 Turbo',
      potencia: '185 cv',
      torque: '270 Nm',
      transmissao: 'Automática de 6 velocidades',
      tracao: '4x4',
      suspensao: 'Independente',
      combustivel: 'Flex',
      zeroacem: '9,5 segundos',
    },
  },

  // ============================================================
  // BYD
  // ============================================================

  {
    id: 'song-plus-premium',
    brand: 'BYD',
    model: 'Song Plus',
    version: 'Premium',
    category: 'SUV Híbrido',
    priceEstimate: 'R$ 239.900',
    imageUrl:
      'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '1.5 Turbo Hybrid',
      potencia: '235 cv',
      torque: '400 Nm',
      transmissao: 'Automática',
      tracao: 'Dianteira',
      suspensao: 'Independente',
      combustivel: 'Híbrido',
      zeroacem: '7,9 segundos',
    },
  },

  {
    id: 'dolphin-gs',
    brand: 'BYD',
    model: 'Dolphin',
    version: 'GS',
    category: 'Hatch Elétrico',
    priceEstimate: 'R$ 149.900',
    imageUrl:
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: 'Elétrico',
      potencia: '95 cv',
      torque: '180 Nm',
      transmissao: 'Automática',
      tracao: 'Dianteira',
      suspensao: 'Independente',
      combustivel: 'Elétrico',
      zeroacem: '10,9 segundos',
    },
  },

  {
    id: 'seal-premium',
    brand: 'BYD',
    model: 'Seal',
    version: 'Premium',
    category: 'Sedan Elétrico',
    priceEstimate: 'R$ 299.900',
    imageUrl:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: 'Dual Motor Elétrico',
      potencia: '531 cv',
      torque: '670 Nm',
      transmissao: 'Automática',
      tracao: 'AWD',
      suspensao: 'Duplo A',
      combustivel: 'Elétrico',
      zeroacem: '3,8 segundos',
    },
  },
];

/**
 * ============================================================
 * NORMALIZAÇÃO DE ATRIBUTOS
 * ============================================================
 *
 * Permite buscas como:
 *
 * "Potência"
 * "potencia"
 * "POTÊNCIA"
 */

export const normalizeAttribute = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[–—-]/g, '-')
    .trim();

/**
 * ============================================================
 * ALIAS DOS ATRIBUTOS
 * ============================================================
 */

const attributeAliases: Record<string, string> = {
  preco: 'preco',
  'preco sugerido': 'preco',
  'preco estimado': 'preco',
  'preço': 'preco',
  'preço sugerido': 'preco',
  'preço estimado': 'preco',

  motor: 'motor',

  potencia: 'potencia',
  'potencia maxima': 'potencia',

  torque: 'torque',

  transmissao: 'transmissao',
  cambio: 'transmissao',
  'cambio automatico': 'transmissao',

  tracao: 'tracao',

  suspensao: 'suspensao',

  combustivel: 'combustivel',

  categoria: 'categoria',

  '0-100 km/h': 'zeroacem',
  '0 a 100 km/h': 'zeroacem',
  '0 a 100': 'zeroacem',
  'zero a cem': 'zeroacem',
  '0-100': 'zeroacem',
};

/**
 * ============================================================
 * LOCALIZA VEÍCULO
 * ============================================================
 */

const findVehicle = (
  brand: string,
  model: string,
  version: string
) =>
  vehiclesDatabase.find(
    (vehicle) =>
      normalizeAttribute(vehicle.brand) ===
        normalizeAttribute(brand) &&
      normalizeAttribute(vehicle.model) ===
        normalizeAttribute(model) &&
      normalizeAttribute(vehicle.version) ===
        normalizeAttribute(version)
  );

/**
 * ============================================================
 * LOCALIZA VALOR DA ESPECIFICAÇÃO
 * ============================================================
 */

const findSpecificationValue = (
  vehicle: Vehicle | undefined,
  attribute: string
) => {
  if (!vehicle) return null;

  const normalized = normalizeAttribute(attribute);

  const key = attributeAliases[normalized] ?? normalized;

  if (key === 'preco') {
    return vehicle.priceEstimate ?? null;
  }

  if (key === 'categoria') {
    return vehicle.category ?? null;
  }

  return vehicle.specs[key] ?? null;
};

/**
 * ============================================================
 * CONSULTA DE ESPECIFICAÇÕES
 * ============================================================
 */

export const getVehicleSpecifications = (
  brand: string,
  model: string,
  version: string,
  attributes: string[]
): SearchResult => {
  const vehicle = findVehicle(
    brand,
    model,
    version
  );

  const specifications = attributes.map((attribute) => {
    const value = findSpecificationValue(
      vehicle,
      attribute
    );

    return {
      attribute,
      value,
      status: value
        ? 'encontrado'
        : 'nao_disponivel',
      source: value
        ? 'Base interna de inteligência'
        : 'Não localizado na base',
    } as const;
  });

  return {
    brand: brand.trim(),
    model: model.trim(),
    version: version.trim(),
    specifications,
    vehicle,

    foundCount: specifications.filter(
      (item) => item.value !== null
    ).length,

    unavailableCount: specifications.filter(
      (item) => item.value === null
    ).length,

    source: 'Base interna de inteligência',
  };
};