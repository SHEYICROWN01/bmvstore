import { Product } from '../types';

import deyeFront from '../assets/images/deye_inverter_front_1791986575334.jpg';
import deyeAngle from '../assets/images/deye_inverter_angle_1791986577686.jpg';
import deyePorts from '../assets/images/deye_inverter_ports_1791986599719.jpg';
import deyeInstalled from '../assets/images/deye_inverter_installed_1791986578368.jpg';
import jaPanel from '../assets/images/ja_solar_panel_550w_1791986599373.jpg';
import lithiumBattery from '../assets/images/lithium_battery_200ah_1791986602303.jpg';
import hikvisionCam from '../assets/images/hikvision_cctv_camera_1791986601672.jpg';
import completeKit from '../assets/images/complete_solar_kit_5kw_1791986676507.jpg';
import growattInv from '../assets/images/growatt_inverter_3kw_1791986675994.jpg';
import floodLight from '../assets/images/solar_flood_light_200w_1791986602312.jpg';
import accessoriesKit from '../assets/images/solar_cables_accessories_1791986602788.jpg';

export const products: Product[] = [
  {
    id: 'deye-5kw-hybrid',
    slug: 'deye-5kw-hybrid-solar-inverter-single-phase',
    name: 'Deye 5KW Hybrid Solar Inverter (Single Phase)',
    brand: 'Deye',
    category: 'inverters',
    categoryLabel: 'Inverters',
    price: 1250000,
    originalPrice: 1400000,
    rating: 5.0,
    reviewCount: 18,
    soldCount: 56,
    inStock: true,
    sku: 'DEYE-SUN-5K-SG03LP1',
    badge: 'Best Seller',
    capacityBadge: '5KW',
    shortDescription:
      'The Deye 5KW Hybrid Inverter is a reliable and high-performance solution for homes and small businesses. It supports both solar and grid power, providing stable electricity supply with intelligent energy management.',
    fullDescription:
      'The Deye 5KW Hybrid Solar Inverter is designed to give you uninterrupted power with maximum efficiency. It intelligently manages power from solar panels, the utility grid and batteries, ensuring a stable and reliable electricity supply for your home or business. With advanced monitoring, multiple protection features and high conversion efficiency, the Deye 5KW is a smart investment for a cleaner and more cost-effective energy future.',
    images: [deyeFront, deyeAngle, deyePorts, deyeInstalled],
    keyBenefits: [
      { title: '5KW', subtitle: 'Output Power', icon: 'zap' },
      { title: 'Hybrid', subtitle: 'Solar & Grid', icon: 'layers' },
      { title: 'Ideal For', subtitle: 'Homes & Offices', icon: 'home' },
      { title: '2 Years', subtitle: 'Warranty', icon: 'shield-check' }
    ],
    features: [
      {
        title: 'High Efficiency',
        description: 'Up to 97.6% conversion efficiency with advanced MPPT tracking algorithms.',
        iconName: 'trending-up'
      },
      {
        title: 'Smart Monitoring',
        description: 'Real-time solar generation and battery state monitoring via mobile app and web portal.',
        iconName: 'smartphone'
      },
      {
        title: 'Multiple Protection',
        description: 'Built-in protection against overload, short circuit, reverse polarity, and over-temperature.',
        iconName: 'shield'
      },
      {
        title: 'Supports Batteries',
        description: 'Compatible with various lithium iron phosphate (LiFePO4) and tubular lead-acid batteries.',
        iconName: 'battery-charging'
      }
    ],
    specifications: [
      { label: 'Brand', value: 'Deye' },
      { label: 'Model', value: 'SUN-5K-SG03LP1-EU' },
      { label: 'Type', value: 'Hybrid Solar Inverter' },
      { label: 'Output Power', value: '5KW (5000W)' },
      { label: 'Phase', value: 'Single Phase' },
      { label: 'Maximum PV Input Power', value: '6500W' },
      { label: 'Battery Voltage', value: '48V' },
      { label: 'MPPT Voltage Range', value: '125V – 425V' },
      { label: 'Max Charging/Discharging Current', value: '120A' },
      { label: 'Communication', value: 'WiFi / RS485 / CAN' },
      { label: 'Dimensions', value: '580 × 330 × 232 mm' },
      { label: 'Weight', value: '20.5 kg' },
      { label: 'Warranty', value: '2 Years Manufacturer Warranty' }
    ],
    boxContents: [
      '1x Deye 5KW Hybrid Solar Inverter unit',
      '1x Wall mounting bracket and anchor hardware',
      '1x WiFi Data Logger stick for mobile monitoring',
      '1x Temperature sensor cable and current transformer (CT)',
      '1x Set of MC4 waterproof DC connectors',
      '1x User manual and warranty certification card'
    ],
    shippingInfo:
      'Free delivery across major Nigerian states (Lagos, Abuja, Rivers, Oyo, Kano, Ogun). Dispatched within 24–48 hours in shockproof protective wooden crating. Professional installation available upon request.',
    installationAvailable: true,
    installationFee: 35000
  },
  {
    id: 'ja-solar-550w-panel',
    slug: 'ja-solar-550w-monocrystalline-solar-panel',
    name: 'JA Solar 550W Solar Panel',
    brand: 'JA Solar',
    category: 'solar-panels',
    categoryLabel: 'Solar Panels',
    price: 220000,
    originalPrice: 245000,
    rating: 4.8,
    reviewCount: 24,
    soldCount: 142,
    inStock: true,
    sku: 'JA-JAM72S30-550',
    badge: 'High Output',
    capacityBadge: '550W',
    shortDescription:
      'High efficiency 550W monocrystalline tier-1 solar panel featuring multi-busbar half-cut cell technology for maximum energy yield even under cloudy Nigerian weather.',
    fullDescription:
      'Engineered by JA Solar, this 550W panel features 144 half-cut monocrystalline cells assembled in an anodized aluminum alloy frame. With a module efficiency rating exceeding 21.3%, it maximizes electricity generation per square meter on your roof.',
    images: [jaPanel, completeKit, jaPanel, deyeInstalled],
    keyBenefits: [
      { title: '550W', subtitle: 'Rated Power', icon: 'zap' },
      { title: 'Tier 1', subtitle: 'Bloomberg Listed', icon: 'award' },
      { title: '21.3%', subtitle: 'Cell Efficiency', icon: 'trending-up' },
      { title: '12 Years', subtitle: 'Product Warranty', icon: 'shield-check' }
    ],
    specifications: [
      { label: 'Brand', value: 'JA Solar' },
      { label: 'Model', value: 'JAM72S30-550/MR' },
      { label: 'Cell Type', value: 'Monocrystalline Half-Cell' },
      { label: 'Max Power (Pmax)', value: '550W' },
      { label: 'Open Circuit Voltage (Voc)', value: '49.90V' },
      { label: 'Optimum Operating Current (Imp)', value: '13.11A' },
      { label: 'Dimensions', value: '2279 × 1134 × 35 mm' },
      { label: 'Weight', value: '28.6 kg' },
      { label: 'Warranty', value: '12 Years Product, 25 Years Linear Yield' }
    ],
    features: [
      { title: 'Half-Cell Technology', description: 'Lowers internal resistance for reduced thermal loss and higher output in shade.' },
      { title: 'Heavy Load Resistance', description: 'Certified to withstand strong wind loads and heavy tropical rainstorms.' }
    ],
    boxContents: ['1x JA Solar 550W Panel with integrated MC4 cables (1200mm) and bypass diodes.'],
    shippingInfo: 'Packaged in specialized pallet protection. Free shipping in Lagos & Abuja on 6+ panels.',
    installationAvailable: true,
    installationFee: 15000
  },
  {
    id: 'lithium-battery-200ah',
    slug: 'lithium-battery-200ah-48v-power-storage',
    name: 'Lithium Battery 200Ah (48V LiFePO4)',
    brand: 'BMV Energy',
    category: 'batteries',
    categoryLabel: 'Batteries',
    price: 1400000,
    originalPrice: 1550000,
    rating: 4.9,
    reviewCount: 12,
    soldCount: 38,
    inStock: true,
    sku: 'BMV-LFP-48200',
    badge: 'Top Rated',
    capacityBadge: '10.2kWh',
    shortDescription:
      'Long-lasting 48V 200Ah Lithium Iron Phosphate (LiFePO4) solar battery bank with built-in smart BMS, LCD capacity display, and 6,000+ deep charge cycles.',
    fullDescription:
      'Say goodbye to replacing toxic lead-acid batteries every two years. This premium 48V 200Ah LiFePO4 battery pack delivers 10.24kWh of usable storage. Built with Grade-A prismatic cells and a robust automotive-grade Battery Management System (BMS).',
    images: [lithiumBattery, completeKit, deyeInstalled, lithiumBattery],
    keyBenefits: [
      { title: '10.2kWh', subtitle: 'Usable Energy', icon: 'battery-charging' },
      { title: '6000+', subtitle: 'Cycle Life', icon: 'refresh-cw' },
      { title: 'Smart BMS', subtitle: 'Overcharge Protection', icon: 'cpu' },
      { title: '5 Years', subtitle: 'Warranty', icon: 'shield-check' }
    ],
    specifications: [
      { label: 'Nominal Voltage', value: '51.2V (48V System)' },
      { label: 'Rated Capacity', value: '200Ah (10,240Wh)' },
      { label: 'Chemistry', value: 'Lithium Iron Phosphate (LiFePO4)' },
      { label: 'Max Discharge Current', value: '150A continuous' },
      { label: 'Cycle Life', value: '>6,000 cycles at 80% DoD' },
      { label: 'Dimensions', value: '520 × 440 × 230 mm' },
      { label: 'Weight', value: '78 kg' },
      { label: 'Warranty', value: '5 Years Comprehensive' }
    ],
    features: [
      { title: 'LCD Telemetry Display', description: 'Monitor State of Charge (SoC), voltage, amp hours, and cycle counts on-screen.' },
      { title: 'Modular Expansion', description: 'Connect up to 8 battery units in parallel for up to 80kWh total capacity.' }
    ],
    boxContents: ['1x 48V 200Ah Lithium Battery', '2x Heavy duty battery terminal cables', '1x RS485 communication cable'],
    shippingInfo: 'Delivered in reinforced wooden security crates. Tailgate delivery available.',
    installationAvailable: true,
    installationFee: 25000
  },
  {
    id: 'hikvision-4mp-cctv',
    slug: 'hikvision-4mp-cctv-camera-ir-night-vision',
    name: 'Hikvision 4MP CCTV Camera',
    brand: 'Hikvision',
    category: 'cctv-cameras',
    categoryLabel: 'CCTV Cameras',
    price: 85000,
    originalPrice: 95000,
    rating: 4.9,
    reviewCount: 30,
    soldCount: 210,
    inStock: true,
    sku: 'HIK-DS-2CD1143G0',
    badge: 'Popular',
    capacityBadge: '4MP UHD',
    shortDescription:
      'Ultra high-definition 4MP outdoor vandal-proof IP dome camera with EXIR 2.0 night vision up to 30m, IP67 weatherproof housing, and smartphone remote streaming.',
    fullDescription:
      'Protect your residence, store, or office perimeter with genuine Hikvision surveillance. Features 4-megapixel clarity, H.265+ compression to save up to 80% storage, wide dynamic range (WDR) for balanced contrast under Nigerian direct sunlight, and crystal clear night vision.',
    images: [hikvisionCam, hikvisionCam, deyeAngle, hikvisionCam],
    keyBenefits: [
      { title: '4MP', subtitle: 'Ultra HD Video', icon: 'video' },
      { title: '30m IR', subtitle: 'Night Vision', icon: 'eye' },
      { title: 'IP67', subtitle: 'Weatherproof', icon: 'shield' },
      { title: 'Mobile App', subtitle: 'Hik-Connect Access', icon: 'smartphone' }
    ],
    specifications: [
      { label: 'Brand', value: 'Hikvision' },
      { label: 'Sensor', value: '1/3" Progressive Scan CMOS' },
      { label: 'Resolution', value: '2560 × 1440 (4 Megapixels)' },
      { label: 'Lens', value: '2.8 mm Fixed Lens (100° FOV)' },
      { label: 'Power Supply', value: 'PoE (802.3af) or 12V DC' },
      { label: 'Protection Level', value: 'IP67 Weatherproof, IK10 Vandal-resistant' },
      { label: 'Warranty', value: '2 Years Manufacturer Warranty' }
    ],
    features: [
      { title: 'Human & Vehicle Detection', description: 'Smart motion alerts sent directly to your phone when an intruder approaches.' },
      { title: 'Weatherproof Metal Enclosure', description: 'Built to withstand torrential rains and dust.' }
    ],
    boxContents: ['1x Hikvision 4MP Dome Camera', '1x Mounting template & waterproof seal kit', '1x Screws & manual'],
    shippingInfo: 'Same-day dispatch in Lagos. 2–3 days for other Nigerian states.',
    installationAvailable: true,
    installationFee: 15000
  },
  {
    id: 'complete-5kw-solar-kit',
    slug: 'complete-5kw-solar-kit-residential-power',
    name: 'Complete 5KW Solar Kit',
    brand: 'BMV Solar',
    category: 'security-systems',
    categoryLabel: 'Complete Solar Kits',
    price: 2800000,
    originalPrice: 3100000,
    rating: 5.0,
    reviewCount: 16,
    soldCount: 42,
    inStock: true,
    sku: 'BMV-KIT-5KW-RES',
    badge: 'All-In-One',
    capacityBadge: 'Full Home',
    shortDescription:
      'All-in-one solar solution: includes 5KW Hybrid Inverter, 10.2kWh Lithium Battery, 6x 550W Tier-1 Panels, DC/AC breaker box, PV cables, and full roof mounting hardware.',
    fullDescription:
      'Our most requested turnkey solar system for 3–4 bedroom flats and duplexes in Nigeria. Run your refrigerators, freezers, TVs, lighting, fans, laptops, and 1.5HP inverter air conditioner seamlessly 24/7 without burning costly petrol or diesel.',
    images: [completeKit, deyeFront, lithiumBattery, jaPanel],
    keyBenefits: [
      { title: '5000W', subtitle: 'Peak AC Load', icon: 'zap' },
      { title: '10.2kWh', subtitle: 'Lithium Storage', icon: 'battery' },
      { title: '6x 550W', subtitle: 'Solar Panels', icon: 'sun' },
      { title: 'Turnkey', subtitle: 'Ready to Install', icon: 'check-circle' }
    ],
    specifications: [
      { label: 'Inverter', value: '5KW Pure Sine Wave Hybrid Inverter' },
      { label: 'Battery', value: '48V 200Ah LiFePO4 Lithium Bank (10.2kWh)' },
      { label: 'Solar Panels', value: '6x 550W Monocrystalline Panels (3,300W PV)' },
      { label: 'Protection', value: 'Pre-wired DC Breaker Box & AC Changeover' },
      { label: 'Cables & Hardware', value: '50m Solar Cable, MC4s, Aluminum Rails' },
      { label: 'Warranty', value: '5 Years Battery, 2 Years Inverter, 25 Years Panels' }
    ],
    features: [
      { title: 'Power Continuity Guarantee', description: 'Zero transfer time during NEPA / grid failure ensures your desktop PCs never restart.' }
    ],
    boxContents: [
      '1x 5KW Hybrid Inverter',
      '1x 48V 200Ah Lithium Battery',
      '6x 550W Solar Panels',
      '1x DC Disconnect Switch & Breaker DB',
      '50m Red & Black 6mm² Solar Cables',
      'Aluminum Roof Rail System'
    ],
    shippingInfo: 'Free dedicated logistics delivery in Lagos, Ibadan & Abuja. Certified technician arrival on site within 48h.',
    installationAvailable: true,
    installationFee: 85000
  },
  {
    id: 'dahua-8ch-cctv-kit',
    slug: 'dahua-8-channel-cctv-camera-kit',
    name: 'Dahua 8 Channel CCTV Camera Kit',
    brand: 'Dahua',
    category: 'cctv-cameras',
    categoryLabel: 'CCTV Cameras',
    price: 650000,
    originalPrice: 720000,
    rating: 4.8,
    reviewCount: 21,
    soldCount: 65,
    inStock: true,
    sku: 'DH-KIT-8CH-UHD',
    badge: 'Value Pack',
    capacityBadge: '8 Cameras',
    shortDescription:
      'Complete 8-channel commercial surveillance system featuring 8x Full HD weatherproof night-vision cameras, 8-channel PoE NVR, and pre-installed 2TB surveillance hard drive.',
    fullDescription:
      'Ideal for estates, schools, shopping complexes, and large houses. Offers continuous 24/7 video recording with 2TB storage, HDMI output for big screens, and instant mobile alerts on iOS and Android.',
    images: [hikvisionCam, hikvisionCam, deyeAngle, completeKit],
    keyBenefits: [
      { title: '8 Cameras', subtitle: 'Full Coverage', icon: 'video' },
      { title: '2TB HDD', subtitle: 'Included Storage', icon: 'hard-drive' },
      { title: 'PoE Plug', subtitle: 'Single Cable Setup', icon: 'plug' },
      { title: '2 Years', subtitle: 'Warranty', icon: 'shield' }
    ],
    specifications: [
      { label: 'Brand', value: 'Dahua Technology' },
      { label: 'Channels', value: '8 PoE Channels' },
      { label: 'Cameras Included', value: '4x Bullet (Outdoor) + 4x Dome (Indoor)' },
      { label: 'Resolution', value: '1080p Full HD @ 30fps' },
      { label: 'Hard Drive', value: '2TB Western Digital Purple Surveillance HDD' },
      { label: 'Remote Access', value: 'DMSS App (iOS / Android / PC)' }
    ],
    features: [
      { title: 'Smart Motion Search', description: 'Jump directly to moments when motion was detected on any camera.' }
    ],
    boxContents: ['1x 8CH PoE NVR with 2TB HDD', '8x Dahua IP Cameras', '8x 20m Ethernet Cables', '1x USB Mouse & HDMI Cable'],
    shippingInfo: 'Fast dispatch nationwide. Installation services available in all 36 states.',
    installationAvailable: true,
    installationFee: 40000
  },
  {
    id: 'growatt-3kw-inverter',
    slug: 'growatt-3kw-solar-inverter-mppt',
    name: 'Growatt 3kW Inverter',
    brand: 'Growatt',
    category: 'inverters',
    categoryLabel: 'Inverters',
    price: 580000,
    originalPrice: 650000,
    rating: 4.7,
    reviewCount: 14,
    soldCount: 88,
    inStock: true,
    sku: 'GW-SPF-3000TL',
    badge: 'Popular',
    capacityBadge: '3kW',
    shortDescription:
      'Compact and highly reliable 3000W off-grid pure sine wave inverter with integrated 80A MPPT solar charge controller. Ideal for small apartments and offices.',
    fullDescription:
      'The Growatt SPF 3000TL HVM series is a multifunction off-grid solar inverter, integrated with an MPPT solar charge controller, a high frequency pure sine wave inverter and a UPS function module.',
    images: [growattInv, deyeAngle, deyeFront, growattInv],
    keyBenefits: [
      { title: '3000W', subtitle: 'Pure Sine Wave', icon: 'zap' },
      { title: '80A MPPT', subtitle: 'Charge Controller', icon: 'sliders' },
      { title: '24V / 48V', subtitle: 'Battery System', icon: 'battery' },
      { title: '2 Years', subtitle: 'Warranty', icon: 'shield-check' }
    ],
    specifications: [
      { label: 'Brand', value: 'Growatt' },
      { label: 'Model', value: 'SPF 3000TL HVM-24' },
      { label: 'Rated Power', value: '3000VA / 3000W' },
      { label: 'Battery Voltage', value: '24VDC' },
      { label: 'Max PV Array Power', value: '4000W' },
      { label: 'MPPT Voltage Range', value: '120VDC - 430VDC' },
      { label: 'Weight', value: '9.5 kg' }
    ],
    features: [
      { title: 'Quiet Fan Operation', description: 'Temperature-controlled cooling fans maintain quiet operation in residential spaces.' }
    ],
    boxContents: ['1x Growatt 3kW Inverter', '1x User Manual', '1x Mounting kit'],
    shippingInfo: 'Immediate delivery in Lagos, 1-2 days outside Lagos.',
    installationAvailable: true,
    installationFee: 25000
  },
  {
    id: 'solar-battery-12v-200ah',
    slug: 'tubular-deep-cycle-solar-battery-12v-200ah',
    name: '12V 200Ah Solar Battery (Deep Cycle)',
    brand: 'BMV Power',
    category: 'batteries',
    categoryLabel: 'Batteries',
    price: 420000,
    originalPrice: 470000,
    rating: 4.8,
    reviewCount: 27,
    soldCount: 195,
    inStock: true,
    sku: 'BMV-BAT-12200-TUB',
    badge: 'Reliable',
    capacityBadge: '200Ah',
    shortDescription:
      'Heavy-duty deep cycle tubular gel solar battery built for high ambient temperatures and repetitive deep discharges in Nigerian backup systems.',
    fullDescription:
      'Engineered with thick tubular positive plates and specialized lead-calcium grid alloys, this 12V 200Ah deep cycle battery is the trusted workhorse of Nigerian backup installations. Designed for 1,500+ cycles at 50% depth of discharge.',
    images: [lithiumBattery, lithiumBattery, completeKit, lithiumBattery],
    keyBenefits: [
      { title: '200Ah', subtitle: 'True Capacity', icon: 'battery' },
      { title: 'Heavy Duty', subtitle: 'Tubular Technology', icon: 'shield' },
      { title: '12V', subtitle: 'System Voltage', icon: 'zap' },
      { title: '2 Years', subtitle: 'Warranty', icon: 'shield-check' }
    ],
    specifications: [
      { label: 'Voltage', value: '12V' },
      { label: 'Nominal Capacity', value: '200Ah @ C20 rate' },
      { label: 'Plate Design', value: 'Tall Tubular Positive Plates' },
      { label: 'Dimensions', value: '502 × 187 × 415 mm' },
      { label: 'Weight', value: '62 kg' }
    ],
    features: [
      { title: 'High Ambient Tolerance', description: 'Withstands Nigerian heat without thermal runaway or accelerated water loss.' }
    ],
    boxContents: ['1x 12V 200Ah Tubular Battery', '1x Terminal covers and connection bolts'],
    shippingInfo: 'Free delivery within Lagos mainland and island. Pallet shipping nationwide.',
    installationAvailable: true,
    installationFee: 10000
  },
  {
    id: 'solar-installation-accessories',
    slug: 'solar-installation-accessories-kit',
    name: 'Solar Installation Accessories',
    brand: 'BMV Pro',
    category: 'accessories',
    categoryLabel: 'Accessories',
    price: 45000,
    originalPrice: 55000,
    rating: 4.9,
    reviewCount: 19,
    soldCount: 310,
    inStock: true,
    sku: 'BMV-ACC-KIT-PRO',
    badge: 'Essential',
    capacityBadge: 'Full Pack',
    shortDescription:
      'Professional electrical kit with 20m 6mm² dual-insulated PV cables, 5 pairs of MC4 connectors, DC surge arrester, and mounting brackets.',
    fullDescription:
      'All the critical wiring and safety accessories needed to connect your solar panels to your inverter safely. Made from UV-resistant flame-retardant materials compliant with international safety standards.',
    images: [accessoriesKit, accessoriesKit, deyePorts, accessoriesKit],
    keyBenefits: [
      { title: 'UV Proof', subtitle: 'TUV Certified Cable', icon: 'sun' },
      { title: 'MC4 Pairs', subtitle: 'IP68 Connectors', icon: 'link' },
      { title: 'DC SPD', subtitle: 'Surge Protection', icon: 'shield-alert' },
      { title: 'Easy Install', subtitle: 'Standard Rails', icon: 'tool' }
    ],
    specifications: [
      { label: 'Cable Size', value: '6mm² Dual Core Solar Cable (20m)' },
      { label: 'Connectors', value: '5x Pairs MC4 Rated 1000V DC / 30A' },
      { label: 'Surge Arrester', value: '2P 500V DC SPD Class II' }
    ],
    features: [
      { title: 'Pure Tinned Copper', description: 'Resists corrosion in humid coastal regions like Lagos and Port Harcourt.' }
    ],
    boxContents: ['20m 6mm² PV Cable (Red/Black)', '5x MC4 pairs', '1x DC Breaker', '1x Spanner tool'],
    shippingInfo: 'Delivered in 24 hours. Can be added to any inverter or panel order with zero extra delivery fee.',
    installationAvailable: false
  },
  {
    id: 'solar-flood-light-200w',
    slug: 'solar-flood-light-200w-outdoor-ip66',
    name: 'Flood Light Solar 200W',
    brand: 'BMV Lighting',
    category: 'accessories',
    categoryLabel: 'Accessories',
    price: 120000,
    originalPrice: 140000,
    rating: 4.9,
    reviewCount: 33,
    soldCount: 420,
    inStock: true,
    sku: 'BMV-FLD-200W-LED',
    badge: 'Energy Saver',
    capacityBadge: '200W LED',
    shortDescription:
      'Commercial-grade outdoor solar flood light with aluminum casing, high-lumen 200W LED array, dusk-to-dawn sensor, and wireless remote control.',
    fullDescription:
      'Light up your compound, security perimeter, warehouse yard, or gate without adding a single naira to your electricity bill. Automatically turns on at dusk and charges during the day with the included monocrystalline solar panel.',
    images: [floodLight, floodLight, accessoriesKit, floodLight],
    keyBenefits: [
      { title: '200W', subtitle: 'Ultra-Bright LED', icon: 'sun' },
      { title: '14+ Hours', subtitle: 'Night Runtime', icon: 'moon' },
      { title: 'IP66', subtitle: 'Waterproof Rating', icon: 'droplet' },
      { title: 'Remote', subtitle: 'Dimming & Timer', icon: 'sliders' }
    ],
    specifications: [
      { label: 'LED Power', value: '200W (High Lumen SMD 5730)' },
      { label: 'Solar Panel', value: '30W 6V Monocrystalline Panel' },
      { label: 'Battery', value: '25,000mAh 3.2V LiFePO4 Built-in' },
      { label: 'Housing', value: 'Die-cast Aluminum & Tempered Glass' },
      { label: 'Lighting Area', value: 'Up to 200 square meters' }
    ],
    features: [
      { title: 'Dusk to Dawn Sensor', description: 'Zero maintenance automated lighting every single night.' }
    ],
    boxContents: ['1x 200W Solar Flood Light', '1x Solar Panel with 5m cable', '1x Wireless Remote', '1x Wall Mounting Arm'],
    shippingInfo: 'Dispatched same day. Buy 2 or more for free delivery nationwide.',
    installationAvailable: true,
    installationFee: 10000
  },
  {
    id: 'felicity-10kwh-lithium',
    slug: 'felicity-10kwh-wall-mounted-lithium-battery',
    name: 'Felicity 10kWh Lithium Battery',
    brand: 'Felicity Solar',
    category: 'batteries',
    categoryLabel: 'Batteries',
    price: 2450000,
    originalPrice: 2700000,
    rating: 5.0,
    reviewCount: 15,
    soldCount: 31,
    inStock: true,
    sku: 'FEL-FL-10KWH-LFP',
    badge: 'Premium Wall',
    capacityBadge: '10kWh',
    shortDescription:
      'Sleek wall-mounted 51.2V 200Ah (10.24kWh) Powerwall style lithium battery with integrated LCD screen and CAN/RS485 communication protocols.',
    fullDescription:
      'Elegant wall-mounted design that matches high-end home interiors. Features 6,000+ lifecycle longevity, seamless CAN communication with Deye, Growatt, and Must inverters, and multi-tier BMS safety protection.',
    images: [lithiumBattery, deyeInstalled, completeKit, lithiumBattery],
    keyBenefits: [
      { title: '10.24kWh', subtitle: 'High Capacity', icon: 'battery-charging' },
      { title: 'Wall Mount', subtitle: 'Space-Saving Design', icon: 'home' },
      { title: 'Smart CAN', subtitle: 'Direct Inverter Comm', icon: 'cpu' },
      { title: '5 Years', subtitle: 'Warranty', icon: 'shield-check' }
    ],
    specifications: [
      { label: 'Brand', value: 'Felicity Solar' },
      { label: 'Nominal Energy', value: '10.24kWh' },
      { label: 'Voltage', value: '51.2V' },
      { label: 'Capacity', value: '200Ah' },
      { label: 'Weight', value: '86 kg' }
    ],
    features: [
      { title: 'Zero Maintenance', description: 'Completely sealed non-toxic LiFePO4 cells require no watering or ventilation.' }
    ],
    boxContents: ['1x 10kWh Wall Battery', '1x Heavy Duty Mounting Frame', '1x Set of high current DC cables'],
    shippingInfo: 'Professional two-man white-glove delivery in Lagos and Abuja.',
    installationAvailable: true,
    installationFee: 30000
  },
  {
    id: 'longi-580w-bifacial',
    slug: 'longi-580w-bifacial-dual-glass-solar-panel',
    name: 'LONGi 580W Bifacial Solar Panel',
    brand: 'LONGi',
    category: 'solar-panels',
    categoryLabel: 'Solar Panels',
    price: 240000,
    originalPrice: 265000,
    rating: 4.9,
    reviewCount: 22,
    soldCount: 110,
    inStock: true,
    sku: 'LNG-LR5-72HBD-580',
    badge: 'Bifacial Gen',
    capacityBadge: '580W',
    shortDescription:
      'High-power 580W dual-glass bifacial solar module that generates additional power from reflected sunlight off roof tiles and ground surfaces.',
    fullDescription:
      'Featuring HPBC high-efficiency cell architecture and dual tempered glass, this 580W LONGi module gains up to 25% extra power from rear reflection. Outstanding anti-PID and low degradation rate ensure maximum return on investment.',
    images: [jaPanel, completeKit, jaPanel, deyeInstalled],
    keyBenefits: [
      { title: '580W', subtitle: 'Front Output', icon: 'zap' },
      { title: '+15–25%', subtitle: 'Bifacial Gain', icon: 'trending-up' },
      { title: 'Dual Glass', subtitle: '30-Year Lifespan', icon: 'shield' },
      { title: 'Tier 1', subtitle: 'Global Leader', icon: 'award' }
    ],
    specifications: [
      { label: 'Brand', value: 'LONGi Solar' },
      { label: 'Rated Power', value: '580W Front Power' },
      { label: 'Efficiency', value: '22.5%' },
      { label: 'Dimensions', value: '2278 × 1134 × 30 mm' },
      { label: 'Weight', value: '31.8 kg' }
    ],
    features: [
      { title: 'Extreme Durability', description: 'Dual glass construction provides superior moisture, ammonia, and salt-mist resistance.' }
    ],
    boxContents: ['1x LONGi 580W Bifacial Panel with factory junction box and MC4-EVO2 connectors'],
    shippingInfo: 'Palletized packaging. Free logistics on orders of 8 panels and above.',
    installationAvailable: true,
    installationFee: 15000
  }
];
