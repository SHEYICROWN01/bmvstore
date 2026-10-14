import { Category } from '../types';

import jaPanel from '../assets/images/ja_solar_panel_550w_1791986599373.jpg';
import deyeFront from '../assets/images/deye_inverter_front_1791986575334.jpg';
import lithiumBattery from '../assets/images/lithium_battery_200ah_1791986602303.jpg';
import accessoriesKit from '../assets/images/solar_cables_accessories_1791986602788.jpg';
import hikvisionCam from '../assets/images/hikvision_cctv_camera_1791986601672.jpg';
import bannerCctv from '../assets/images/banner_cctv_security_system_1791986627522.jpg';
import heroTechnician from '../assets/images/hero_solar_technician_1791986576183.jpg';
import consultantImg from '../assets/images/bmv_solar_consultant_1791986574898.jpg';
import completeKit from '../assets/images/complete_solar_kit_5kw_1791986676507.jpg';
import floodLight from '../assets/images/solar_flood_light_200w_1791986602312.jpg';

export const categories: Category[] = [
  {
    id: 'solar-panels',
    slug: 'solar-panels',
    name: 'Solar Panels',
    subtitle: 'High Efficiency Panels',
    image: jaPanel,
    itemCount: 18
  },
  {
    id: 'solar-inverters',
    slug: 'inverters',
    name: 'Solar Inverters',
    subtitle: 'Hybrid & Off-grid',
    image: deyeFront,
    itemCount: 24
  },
  {
    id: 'solar-batteries',
    slug: 'batteries',
    name: 'Solar Batteries',
    subtitle: 'Lithium & Lead Acid',
    image: lithiumBattery,
    itemCount: 16
  },
  {
    id: 'solar-accessories',
    slug: 'accessories',
    name: 'Solar Accessories',
    subtitle: 'Cables, Mounts & More',
    image: accessoriesKit,
    itemCount: 42
  },
  {
    id: 'cctv-cameras',
    slug: 'cctv-cameras',
    name: 'CCTV Cameras',
    subtitle: 'Indoor & Outdoor',
    image: hikvisionCam,
    itemCount: 35
  },
  {
    id: 'security-systems',
    slug: 'security-systems',
    name: 'Security Systems',
    subtitle: 'Complete Kits',
    image: bannerCctv,
    itemCount: 19
  },
  {
    id: 'installation-services',
    slug: 'installation',
    name: 'Installation Services',
    subtitle: 'Residential & Commercial',
    image: heroTechnician,
    itemCount: 8
  },
  {
    id: 'repair-maintenance',
    slug: 'repairs',
    name: 'Repair & Maintenance',
    subtitle: 'Fast & Reliable',
    image: consultantImg,
    itemCount: 12
  },
  {
    id: 'power-backup-solutions',
    slug: 'solar-kits',
    name: 'Power Backup Solutions',
    subtitle: 'For Home & Office',
    image: completeKit,
    itemCount: 14
  },
  {
    id: 'smart-home-devices',
    slug: 'flood-lights',
    name: 'Smart Home Devices',
    subtitle: 'More Security, More Control',
    image: floodLight,
    itemCount: 22
  }
];
