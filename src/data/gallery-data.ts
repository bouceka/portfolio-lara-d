import { ImageData } from '../types/image-data';
import { Services } from '../types/service';

export interface GalleryData {
  title: string;
  year: string;
  imageData: ImageData[];
}

export const FASHION_DATA_WANDERERS: GalleryData = {
  year: '2023',
  title: 'THE WANDERERS',
  imageData: [
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542206/LaraPorfolio/Fashion/travellers/small/CB-LD-Fashion-1-12_wbw850.webp',
      alt: 'Fashion Photography of The Wanderers by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542206/LaraPorfolio/Fashion/travellers/small/CB-LD-Fashion-1-11_hhmxtq.webp',
      alt: 'Fashion Photography of The Wanderers by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542206/LaraPorfolio/Fashion/travellers/small/CB-LD-Fashion-1-9_vk47c8.webp',
      alt: 'Fashion Photography of The Wanderers by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542206/LaraPorfolio/Fashion/travellers/small/CB-LD-Fashion-1-10_tsmlbj.webp',
      alt: 'Fashion Photography of The Wanderers by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542206/LaraPorfolio/Fashion/travellers/small/CB-LD-Fashion-1-8_kqp3dz.webp',
      alt: 'Fashion Photography of The Wanderers by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542206/LaraPorfolio/Fashion/travellers/small/CB-LD-Fashion-1-7_omc4tc.webp',
      alt: 'Fashion Photography of The Wanderers by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542205/LaraPorfolio/Fashion/travellers/small/CB-LD-Fashion-1-4_tr9zxb.webp',
      alt: 'Fashion Photography of The Wanderers by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542205/LaraPorfolio/Fashion/travellers/small/CB-LD-Fashion-1-3_ozmhd9.webp',
      alt: 'Fashion Photography of The Wanderers by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542205/LaraPorfolio/Fashion/travellers/small/CB-LD-Fashion-1-5_zaw90q.webp',
      alt: 'Fashion Photography of The Wanderers by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542205/LaraPorfolio/Fashion/travellers/small/CB-LD-Fashion-1-6_r5eyvt.webp',
      alt: 'Fashion Photography of The Wanderers by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542205/LaraPorfolio/Fashion/travellers/small/CB-LD-Fashion-1-1_t9vrhi.webp',
      alt: 'Fashion Photography of The Wanderers by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542205/LaraPorfolio/Fashion/travellers/small/CB-LD-Fashion-1-2_ytaf8z.webp',
      alt: 'Fashion Photography of The Wanderers by Lara Drummond Photography',
    },
  ],
};

export const FASHION_DATA_FLEE: GalleryData = {
  year: '2022',
  title: 'Flee & Fly Co.',
  imageData: [
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542100/LaraPorfolio/Fashion/skater-girls/small/CB-LD-Fashion9_eusj0o.webp',
      alt: 'Fashion Photography of Flee & Fly Co. by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542100/LaraPorfolio/Fashion/skater-girls/small/CB-LD-Fashion7_gd0k9i.webp',
      alt: 'Fashion Photography of Flee & Fly Co. by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542100/LaraPorfolio/Fashion/skater-girls/small/CB-LD-Fashion8_j0nf9z.webp',
      alt: 'Fashion Photography of Flee & Fly Co. by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542100/LaraPorfolio/Fashion/skater-girls/small/CB-LD-Fashion4_cwytwx.webp',
      alt: 'Fashion Photography of Flee & Fly Co. by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542100/LaraPorfolio/Fashion/skater-girls/small/CB-LD-Fashion6_nnzvik.webp',
      alt: 'Fashion Photography of Flee & Fly Co. by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542100/LaraPorfolio/Fashion/skater-girls/small/CB-LD-Fashion5_h94ede.webp',
      alt: 'Fashion Photography of Flee & Fly Co. by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542100/LaraPorfolio/Fashion/skater-girls/small/CB-LD-Fashion3_luytjd.webp',
      alt: 'Fashion Photography of Flee & Fly Co. by Lara Drummond Photography',
    },
  ],
};

const FOOD_DATA_SWEET_TOOTH: GalleryData = {
  year: '2023',
  title: 'Sweet Tooth Donuts',
  imageData: [
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679893364/LaraPorfolio/Food/Sweet%20Tooth%20Donuts/LaraDrummondPhotography-Food-SweetToothDonuts-8_fy0x7o.webp',
      alt: 'Food Photography of Sweet Tooth Donuts by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679893363/LaraPorfolio/Food/Sweet%20Tooth%20Donuts/LaraDrummondPhotography-Food-SweetToothDonuts-10_c6mo9m.webp',
      alt: 'Food Photography of Sweet Tooth Donuts by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679893364/LaraPorfolio/Food/Sweet%20Tooth%20Donuts/LaraDrummondPhotography-Food-SweetToothDonuts-9_xodfny.webp',
      alt: 'Food Photography of Sweet Tooth Donuts by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679893363/LaraPorfolio/Food/Sweet%20Tooth%20Donuts/LaraDrummondPhotography-Food-SweetToothDonuts-7_zxzruz.webp',
      alt: 'Food Photography of Sweet Tooth Donuts by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679893363/LaraPorfolio/Food/Sweet%20Tooth%20Donuts/LaraDrummondPhotography-Food-SweetToothDonuts-2_erfhtk.webp',
      alt: 'Food Photography of Sweet Tooth Donuts by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679893363/LaraPorfolio/Food/Sweet%20Tooth%20Donuts/LaraDrummondPhotography-Food-SweetToothDonuts-5_mwcvjc.webp',
      alt: 'Food Photography of Sweet Tooth Donuts by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679893363/LaraPorfolio/Food/Sweet%20Tooth%20Donuts/LaraDrummondPhotography-Food-SweetToothDonuts-4_g2zlyb.webp',
      alt: 'Food Photography of Sweet Tooth Donuts by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679893363/LaraPorfolio/Food/Sweet%20Tooth%20Donuts/LaraDrummondPhotography-Food-SweetToothDonuts-6_vlh3l0.webp',
      alt: 'Food Photography of Sweet Tooth Donuts by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679893363/LaraPorfolio/Food/Sweet%20Tooth%20Donuts/LaraDrummondPhotography-Food-SweetToothDonuts-3_mv7pat.webp',
      alt: 'Food Photography of Sweet Tooth Donuts by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679893363/LaraPorfolio/Food/Sweet%20Tooth%20Donuts/LaraDrummondPhotography-Food-SweetToothDonuts-1_zuojtt.webp',
      alt: 'Food Photography of Sweet Tooth Donuts by Lara Drummond Photography',
    },
  ],
};

const FOOD_DATA_RED_LOTUS: GalleryData = {
  year: '2023',
  title: 'Red Lotus Restaurant',
  imageData: [
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542251/LaraPorfolio/Food/small/CB-LD-Food12_evjf94.jpg',
      alt: 'Food Photography of Red Lotus Restaurant by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542251/LaraPorfolio/Food/small/CB-LD-Food10_lg0kqt.jpg',
      alt: 'Food Photography of Red Lotus Restaurant by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542251/LaraPorfolio/Food/small/CB-LD-Food11_z2uecz.jpg',
      alt: 'Food Photography of Red Lotus Restaurant by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542251/LaraPorfolio/Food/small/CB-LD-Food8_jr9dwx.jpg',
      alt: 'Food Photography of Red Lotus Restaurant by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542251/LaraPorfolio/Food/small/CB-LD-Food6_dkklwn.jpg',
      alt: 'Food Photography of Red Lotus Restaurant by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542251/LaraPorfolio/Food/small/CB-LD-Food7_jpmixv.jpg',
      alt: 'Food Photography of Red Lotus Restaurant by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542251/LaraPorfolio/Food/small/CB-LD-Food9_edpled.jpg',
      alt: 'Food Photography of Red Lotus Restaurant by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542250/LaraPorfolio/Food/small/CB-LD-Food2_rsmufj.jpg',
      alt: 'Food Photography of Red Lotus Restaurant by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542250/LaraPorfolio/Food/small/CB-LD-Food1_t9esdp.jpg',
      alt: 'Food Photography of Red Lotus Restaurant by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542250/LaraPorfolio/Food/small/CB-LD-Food5_qpygbd.jpg',
      alt: 'Food Photography of Red Lotus Restaurant by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542250/LaraPorfolio/Food/small/CB-LD-Food1_cx4wdn.webp',
      alt: 'Food Photography of Red Lotus Restaurant by Lara Drummond Photography',
    },
  ],
};
const PRODUCT_DATA_DILLE_CAMILLE: GalleryData = {
  year: '2023',
  title: 'Dille & Camille',
  imageData: [
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679891550/LaraPorfolio/Product/Dille_Camille/LaraDrummondPhotography-Product-DCamille-1_k3jqja.webp',
      alt: 'Product Photography of Dille & Camille by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679891549/LaraPorfolio/Product/Dille_Camille/LaraDrummondPhotography-Product-DCamille-2_m3ei70.webp',
      alt: 'Product Photography of Dille & Camille by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679891549/LaraPorfolio/Product/Dille_Camille/LaraDrummondPhotography-Product-DCamille-3_cu94pi.webp',
      alt: 'Product Photography of Dille & Camille by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679891549/LaraPorfolio/Product/Dille_Camille/LaraDrummondPhotography-Product-DCamille-8_eev2pl.webp',
      alt: 'Product Photography of Dille & Camille by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679891549/LaraPorfolio/Product/Dille_Camille/LaraDrummondPhotography-Product-DCamille-5_p0upj0.webp',
      alt: 'Product Photography of Dille & Camille by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679891549/LaraPorfolio/Product/Dille_Camille/LaraDrummondPhotography-Product-DCamille-4_vnet7h.webp',
      alt: 'Product Photography of Dille & Camille by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679891549/LaraPorfolio/Product/Dille_Camille/LaraDrummondPhotography-Product-DCamille-7_cf14pt.webp',
      alt: 'Product Photography of Dille & Camille by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679891548/LaraPorfolio/Product/Dille_Camille/LaraDrummondPhotography-Product-DCamille-6_pmmtis.webp',
      alt: 'Product Photography of Dille & Camille by Lara Drummond Photography',
    },
  ],
};

const PRODUCT_WEST_COAST_CERAMICS: GalleryData = {
  year: '2022',
  title: 'West Coast Ceramics',
  imageData: [
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542322/LaraPorfolio/Product/medium/CB-LD-Product7_bg8whw.jpg',
      alt: 'Product Photography of West Coast Ceramics by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542322/LaraPorfolio/Product/medium/CB-LD-Product8_d9d5vk.jpg',
      alt: 'Product Photography of West Coast Ceramics by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542322/LaraPorfolio/Product/medium/CB-LD-Product4_m93fxy.jpg',
      alt: 'Product Photography of West Coast Ceramics by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542322/LaraPorfolio/Product/medium/CB-LD-Product3_znrmj7.jpg',
      alt: 'Product Photography of West Coast Ceramics by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542322/LaraPorfolio/Product/medium/CB-LD-Product5_nrt63w.jpg',
      alt: 'Product Photography of West Coast Ceramics by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542322/LaraPorfolio/Product/medium/CB-LD-Product6_ipfq0b.jpg',
      alt: 'Product Photography of West Coast Ceramics by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542321/LaraPorfolio/Product/medium/CB-LD-Product12_dagmi2.jpg',
      alt: 'Product Photography of West Coast Ceramics by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542321/LaraPorfolio/Product/medium/CB-LD-Product9_ihgjrv.jpg',
      alt: 'Product Photography of West Coast Ceramics by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542321/LaraPorfolio/Product/medium/CB-LD-Product2_sqle30.jpg',
      alt: 'Product Photography of West Coast Ceramics by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542321/LaraPorfolio/Product/medium/CB-LD-Product1_hwqpgf.jpg',
      alt: 'Product Photography of West Coast Ceramics by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542321/LaraPorfolio/Product/medium/CB-LD-Product10_zixzyt.jpg',
      alt: 'Product Photography of West Coast Ceramics by Lara Drummond Photography',
    },
  ],
};

const EDITORIAL_CV_COLLECTIVE: GalleryData = {
  year: '2022',
  title: 'CV Collective',
  imageData: [
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679541974/LaraPorfolio/Editorial/couple/small/CB-LD-Editorial10_ecjqa3.webp',
      alt: 'Editorial Photography of CV Collective by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679541974/LaraPorfolio/Editorial/couple/small/CB-LD-Editorial7_eaqhw4.webp',
      alt: 'Editorial Photography of CV Collective by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679541974/LaraPorfolio/Editorial/couple/small/CB-LD-Editorial8_lnyo0s.webp',
      alt: 'Editorial Photography of CV Collective by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679541974/LaraPorfolio/Editorial/couple/small/CB-LD-Editorial9_nyk9ic.webp',
      alt: 'Editorial Photography of CV Collective by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679541974/LaraPorfolio/Editorial/couple/small/CB-LD-Editorial5_vgsels.webp',
      alt: 'Editorial Photography of CV Collective by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679541974/LaraPorfolio/Editorial/couple/small/CB-LD-Editorial3_uhewry.webp',
      alt: 'Editorial Photography of CV Collective by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679541974/LaraPorfolio/Editorial/couple/small/CB-LD-Editorial4_c5fvet.webp',
      alt: 'Editorial Photography of CV Collective by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679541974/LaraPorfolio/Editorial/couple/small/CB-LD-Editorial6_owdw7i.webp',
      alt: 'Editorial Photography of CV Collective by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679541974/LaraPorfolio/Editorial/couple/small/CB-LD-Editorial2_edxvdy.webp',
      alt: 'Editorial Photography of CV Collective by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679541974/LaraPorfolio/Editorial/couple/small/CB-LD-Editorial1_llwn4z.webp',
      alt: 'Editorial Photography of CV Collective by Lara Drummond Photography',
    },
  ],
};

const EDITORIAL_BOULEVARD_MAGAZINE: GalleryData = {
  year: '2023',
  title: 'Boulevard Magazine',
  imageData: [
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542020/LaraPorfolio/Editorial/horses/small/CB-LD-Images5_wnoydr.webp',
      alt: 'Editorial Photography of Boulevard Magazine by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542019/LaraPorfolio/Editorial/horses/small/CB-LD-Images4_wz2n67.webp',
      alt: 'Editorial Photography of Boulevard Magazine by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542019/LaraPorfolio/Editorial/horses/small/CB-LaraDrummond-Moodboard-26_cqi5gg.webp',
      alt: 'Editorial Photography of Boulevard Magazine by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542019/LaraPorfolio/Editorial/horses/small/CB-LaraDrummond-Moodboard-28_qviznn.webp',
      alt: 'Editorial Photography of Boulevard Magazine by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542019/LaraPorfolio/Editorial/horses/small/CB-LaraDrummond-Moodboard-27_us8v9r.webp',
      alt: 'Editorial Photography of Boulevard Magazine by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542019/LaraPorfolio/Editorial/horses/small/CB-LaraDrummond-Moodboard-25_wxewud.webp',
      alt: 'Editorial Photography of Boulevard Magazine by Lara Drummond Photography',
    },
    {
      imgURL:
        'https://res.cloudinary.com/dufli3jum/image/upload/v1679542019/LaraPorfolio/Editorial/horses/small/CB-LaraDrummond-Moodboard-24_prbmsc.webp',
      alt: 'Editorial Photography of Boulevard Magazine by Lara Drummond Photography',
    },
  ],
};

export const FASHION_DATA_GALLERY: Record<Services, GalleryData[]> = {
  fashion: [FASHION_DATA_WANDERERS, FASHION_DATA_FLEE],
  food: [FOOD_DATA_SWEET_TOOTH, FOOD_DATA_RED_LOTUS],
  product: [PRODUCT_DATA_DILLE_CAMILLE, PRODUCT_WEST_COAST_CERAMICS],
  editorial: [EDITORIAL_CV_COLLECTIVE, EDITORIAL_BOULEVARD_MAGAZINE],
};
