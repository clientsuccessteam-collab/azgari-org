export interface Business {
  id: string;
  name: string;
  whyItWorks: string;
  startupCost: string;
  blogPostUrl?: string;
}

export interface StateData {
  name: string;
  slug: string;
  abbreviation: string;
  topBusinesses: Business[];
}

// Regional business priorities based on climate, population density, and market demand
const getRegionalBusinesses = (stateSlug: string): Omit<Business, 'whyItWorks'>[] => {
  const baseBusinesses = [
    { id: 'pressure-washing', name: 'Pressure Washing', startupCost: '$3,000 - $10,000', blogPostUrl: 'https://azgari.blog/how-to-start-a-pressure-washing-business' },
    { id: 'hvac', name: 'HVAC Services', startupCost: '$15,000 - $50,000', blogPostUrl: 'https://azgari.blog/how-to-start-an-hvac-business' },
    { id: 'lawn-care', name: 'Lawn Care & Landscaping', startupCost: '$5,000 - $20,000', blogPostUrl: 'https://azgari.blog/how-to-start-a-lawn-care-business' },
    { id: 'cleaning', name: 'Residential Cleaning', startupCost: '$2,000 - $8,000', blogPostUrl: 'https://azgari.blog/how-to-start-a-cleaning-business' },
    { id: 'pest-control', name: 'Pest Control', startupCost: '$10,000 - $40,000', blogPostUrl: 'https://azgari.blog/how-to-start-a-pest-control-business' },
    { id: 'pool-service', name: 'Pool Service', startupCost: '$5,000 - $15,000', blogPostUrl: 'https://azgari.blog/how-to-start-a-pool-service-business' },
    { id: 'junk-removal', name: 'Junk Removal', startupCost: '$10,000 - $30,000', blogPostUrl: 'https://azgari.blog/how-to-start-a-junk-removal-business' },
    { id: 'moving', name: 'Moving Services', startupCost: '$15,000 - $50,000', blogPostUrl: 'https://azgari.blog/how-to-start-a-moving-business' },
    { id: 'roofing', name: 'Roofing Services', startupCost: '$25,000 - $75,000', blogPostUrl: 'https://azgari.blog/how-to-start-a-roofing-business' },
    { id: 'plumbing', name: 'Plumbing Services', startupCost: '$15,000 - $50,000', blogPostUrl: 'https://azgari.blog/how-to-start-a-plumbing-business' },
    { id: 'electrical', name: 'Electrical Services', startupCost: '$15,000 - $50,000', blogPostUrl: 'https://azgari.blog/how-to-start-an-electrical-business' },
    { id: 'gutter-cleaning', name: 'Gutter Cleaning', startupCost: '$2,000 - $8,000', blogPostUrl: 'https://azgari.blog/how-to-start-a-gutter-cleaning-business' },
    { id: 'window-cleaning', name: 'Window Cleaning', startupCost: '$2,000 - $7,000', blogPostUrl: 'https://azgari.blog/how-to-start-a-window-cleaning-business' },
  ];

  // Regional modifiers based on climate and demographics
  const hotStates = ['florida', 'texas', 'arizona', 'nevada', 'california', 'new-mexico', 'louisiana', 'mississippi', 'alabama', 'georgia', 'south-carolina', 'hawaii'];
  const coldStates = ['minnesota', 'wisconsin', 'michigan', 'new-york', 'vermont', 'new-hampshire', 'maine', 'north-dakota', 'south-dakota', 'montana', 'wyoming', 'alaska', 'colorado', 'utah', 'idaho'];
  const highDensityStates = ['california', 'new-york', 'texas', 'florida', 'illinois', 'pennsylvania', 'ohio', 'georgia', 'north-carolina', 'michigan', 'new-jersey', 'virginia', 'washington', 'arizona', 'massachusetts'];
  const ruralStates = ['montana', 'wyoming', 'north-dakota', 'south-dakota', 'alaska', 'vermont', 'west-virginia', 'mississippi', 'arkansas', 'maine', 'new-mexico', 'nebraska', 'kansas', 'idaho', 'iowa'];
  
  let prioritized = [...baseBusinesses];

  if (hotStates.includes(stateSlug)) {
    // Pool service and HVAC are higher priority in hot states
    prioritized = prioritized.sort((a, b) => {
      if (a.id === 'pool-service') return -1;
      if (b.id === 'pool-service') return 1;
      if (a.id === 'hvac') return -1;
      if (b.id === 'hvac') return 1;
      return 0;
    });
  }

  if (coldStates.includes(stateSlug)) {
    // HVAC, roofing, and gutter cleaning higher priority in cold/snowy states
    prioritized = prioritized.sort((a, b) => {
      if (a.id === 'hvac') return -1;
      if (b.id === 'hvac') return 1;
      if (a.id === 'roofing') return -1;
      if (b.id === 'roofing') return 1;
      if (a.id === 'gutter-cleaning') return -1;
      if (b.id === 'gutter-cleaning') return 1;
      return 0;
    });
  }

  if (highDensityStates.includes(stateSlug)) {
    // Cleaning, moving, and junk removal higher in dense urban areas
    prioritized = prioritized.sort((a, b) => {
      if (a.id === 'cleaning') return -1;
      if (b.id === 'cleaning') return 1;
      if (a.id === 'moving') return -1;
      if (b.id === 'moving') return 1;
      if (a.id === 'junk-removal') return -1;
      if (b.id === 'junk-removal') return 1;
      return 0;
    });
  }

  if (ruralStates.includes(stateSlug)) {
    // Lawn care, pest control, and property maintenance higher in rural areas
    prioritized = prioritized.sort((a, b) => {
      if (a.id === 'lawn-care') return -1;
      if (b.id === 'lawn-care') return 1;
      if (a.id === 'pest-control') return -1;
      if (b.id === 'pest-control') return 1;
      if (a.id === 'pressure-washing') return -1;
      if (b.id === 'pressure-washing') return 1;
      return 0;
    });
  }

  return prioritized.slice(0, 10);
};

const stateReasons: Record<string, string> = {
  'pressure-washing': 'High demand for exterior cleaning due to climate and housing stock',
  'hvac': 'Extreme temperatures year-round create constant demand for heating and cooling services',
  'lawn-care': 'Growing suburban areas and homeowner preferences drive consistent demand',
  'cleaning': 'Busy professionals and dual-income households fuel the residential cleaning market',
  'pest-control': 'Climate conditions create year-round pest pressures requiring regular service',
  'pool-service': 'High pool ownership rates and year-round swimming weather create steady demand',
  'junk-removal': 'Active real estate market and household turnover generate continuous junk removal needs',
  'moving': 'Population growth and housing market activity drive moving service demand',
  'roofing': 'Weather events and aging housing stock create constant roofing needs',
  'plumbing': 'Aging infrastructure and new construction both require reliable plumbing services',
  'electrical': 'Home renovations and new technology installations increase electrical service needs',
  'gutter-cleaning': 'Seasonal weather patterns and tree coverage make regular gutter maintenance essential',
  'window-cleaning': 'Residential and commercial properties both require regular professional window cleaning',
};

const states: Omit<StateData, 'topBusinesses'>[] = [
  { name: 'Alabama', slug: 'alabama', abbreviation: 'AL' },
  { name: 'Alaska', slug: 'alaska', abbreviation: 'AK' },
  { name: 'Arizona', slug: 'arizona', abbreviation: 'AZ' },
  { name: 'Arkansas', slug: 'arkansas', abbreviation: 'AR' },
  { name: 'California', slug: 'california', abbreviation: 'CA' },
  { name: 'Colorado', slug: 'colorado', abbreviation: 'CO' },
  { name: 'Connecticut', slug: 'connecticut', abbreviation: 'CT' },
  { name: 'Delaware', slug: 'delaware', abbreviation: 'DE' },
  { name: 'Florida', slug: 'florida', abbreviation: 'FL' },
  { name: 'Georgia', slug: 'georgia', abbreviation: 'GA' },
  { name: 'Hawaii', slug: 'hawaii', abbreviation: 'HI' },
  { name: 'Idaho', slug: 'idaho', abbreviation: 'ID' },
  { name: 'Illinois', slug: 'illinois', abbreviation: 'IL' },
  { name: 'Indiana', slug: 'indiana', abbreviation: 'IN' },
  { name: 'Iowa', slug: 'iowa', abbreviation: 'IA' },
  { name: 'Kansas', slug: 'kansas', abbreviation: 'KS' },
  { name: 'Kentucky', slug: 'kentucky', abbreviation: 'KY' },
  { name: 'Louisiana', slug: 'louisiana', abbreviation: 'LA' },
  { name: 'Maine', slug: 'maine', abbreviation: 'ME' },
  { name: 'Maryland', slug: 'maryland', abbreviation: 'MD' },
  { name: 'Massachusetts', slug: 'massachusetts', abbreviation: 'MA' },
  { name: 'Michigan', slug: 'michigan', abbreviation: 'MI' },
  { name: 'Minnesota', slug: 'minnesota', abbreviation: 'MN' },
  { name: 'Mississippi', slug: 'mississippi', abbreviation: 'MS' },
  { name: 'Missouri', slug: 'missouri', abbreviation: 'MO' },
  { name: 'Montana', slug: 'montana', abbreviation: 'MT' },
  { name: 'Nebraska', slug: 'nebraska', abbreviation: 'NE' },
  { name: 'Nevada', slug: 'nevada', abbreviation: 'NV' },
  { name: 'New Hampshire', slug: 'new-hampshire', abbreviation: 'NH' },
  { name: 'New Jersey', slug: 'new-jersey', abbreviation: 'NJ' },
  { name: 'New Mexico', slug: 'new-mexico', abbreviation: 'NM' },
  { name: 'New York', slug: 'new-york', abbreviation: 'NY' },
  { name: 'North Carolina', slug: 'north-carolina', abbreviation: 'NC' },
  { name: 'North Dakota', slug: 'north-dakota', abbreviation: 'ND' },
  { name: 'Ohio', slug: 'ohio', abbreviation: 'OH' },
  { name: 'Oklahoma', slug: 'oklahoma', abbreviation: 'OK' },
  { name: 'Oregon', slug: 'oregon', abbreviation: 'OR' },
  { name: 'Pennsylvania', slug: 'pennsylvania', abbreviation: 'PA' },
  { name: 'Rhode Island', slug: 'rhode-island', abbreviation: 'RI' },
  { name: 'South Carolina', slug: 'south-carolina', abbreviation: 'SC' },
  { name: 'South Dakota', slug: 'south-dakota', abbreviation: 'SD' },
  { name: 'Tennessee', slug: 'tennessee', abbreviation: 'TN' },
  { name: 'Texas', slug: 'texas', abbreviation: 'TX' },
  { name: 'Utah', slug: 'utah', abbreviation: 'UT' },
  { name: 'Vermont', slug: 'vermont', abbreviation: 'VT' },
  { name: 'Virginia', slug: 'virginia', abbreviation: 'VA' },
  { name: 'Washington', slug: 'washington', abbreviation: 'WA' },
  { name: 'West Virginia', slug: 'west-virginia', abbreviation: 'WV' },
  { name: 'Wisconsin', slug: 'wisconsin', abbreviation: 'WI' },
  { name: 'Wyoming', slug: 'wyoming', abbreviation: 'WY' },
];

export const stateData: StateData[] = states.map(state => {
  const regionalBusinesses = getRegionalBusinesses(state.slug);
  return {
    ...state,
    topBusinesses: regionalBusinesses.map((business) => ({
      ...business,
      whyItWorks: stateReasons[business.id] || 'Strong market demand and growth potential in this region',
    })),
  };
});

export const getStateBySlug = (slug: string): StateData | undefined => {
  return stateData.find(state => state.slug === slug.toLowerCase());
};

export const getAllStateSlugs = (): string[] => {
  return stateData.map(state => state.slug);
};
