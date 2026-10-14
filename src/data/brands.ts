export interface BrandPartner {
  id: string;
  name: string;
  specialty: string;
  tagline: string;
}

export const brands: BrandPartner[] = [
  { id: 'ja-solar', name: 'JA SOLAR', specialty: 'Monocrystalline Solar Panels', tagline: 'Tier-1 High Efficiency' },
  { id: 'deye', name: 'Deye', specialty: 'Hybrid & String Inverters', tagline: 'World-Leading Hybrid Power' },
  { id: 'growatt', name: 'Growatt', specialty: 'Solar Inverters & Storage', tagline: 'Smart Energy Solutions' },
  { id: 'hikvision', name: 'HIKVISION', specialty: 'CCTV & AI Security Cameras', tagline: 'Global Security Leader' },
  { id: 'dahua', name: 'alhua', specialty: 'Surveillance & Access Control', tagline: 'Technology for Safety' },
  { id: 'longi', name: 'LONGI', specialty: 'Bifacial Solar Panels', tagline: 'Solar Innovation Pioneer' },
  { id: 'canadian-solar', name: 'CanadianSolar', specialty: 'High Power PV Modules', tagline: 'Make The World A Cleaner Place' },
  { id: 'pylontech', name: 'PYLONTECH', specialty: 'Lithium Battery Storage', tagline: 'Liberate Your Energy' }
];
