/**
 * Structured plumbing data containing exactly 6 categories in required order,
 * each containing exactly 10 product entries with 4-line descriptive text.
 * Easily editable to plug in real product names, images, and technical specifications later.
 */

const createProducts = (catId, catName, role) => {
  return Array.from({ length: 10 }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return {
      id: `${catId}-item-${i + 1}`,
      name: `${catName} — Component ${num}`,
      image: '/images/placeholders/plumbing/product-placeholder.svg',
      description: `Engineered from premium virgin materials complying with national standards for high tensile strength, leak integrity, and uninterrupted hydraulic flow. Precision manufactured with internal smooth-bore finishes to minimize fluid friction, eliminate sedimentation build-up, and resist chemical scaling over prolonged cycles. Rigorously tested under hydraulic surge and elevated operational pressures to ensure total structural reliability in high-demand plumbing lines. Ideal for residential towers, commercial utility duct installations, and specialized sanitary distribution networks requiring zero-maintenance durability.`
    };
  });
};

export const plumbingCategories = [
  {
    id: 'plumbing-pipes-fittings',
    name: 'Plumbing Pipes and Fittings',
    order: 1,
    image: '/images/placeholders/plumbing/plumbing-pipes-fittings.svg',
    shortDescription: 'Certified CPVC, UPVC, and SWR piping systems with matching elbows, tees, couplers, and heavy-duty connectors.',
    products: createProducts('pipes-fittings', 'Plumbing Pipes & Fittings', 'piping systems and pressure-rated fittings')
  },
  {
    id: 'maf-series',
    name: 'MAF Series',
    order: 2,
    image: '/images/placeholders/plumbing/maf-series.svg',
    shortDescription: 'High-precision MAF series core assemblies, specialized couplers, and industrial-grade plumbing adaptors.',
    products: createProducts('maf-series', 'MAF Series', 'MAF high-durability connection mechanisms')
  },
  {
    id: 'maf-accessories',
    name: 'MAF Accessories',
    order: 3,
    image: '/images/placeholders/plumbing/maf-accessories.svg',
    shortDescription: 'Complete range of MAF series brackets, sealing gaskets, retention flanges, and technical support fittings.',
    products: createProducts('maf-acc', 'MAF Accessories', 'MAF specialized auxiliary components')
  },
  {
    id: 'joint-plus-series',
    name: 'Joint Plus Series',
    order: 4,
    image: '/images/placeholders/plumbing/joint-plus-series.svg',
    shortDescription: 'Advanced Joint Plus leak-proof jointing assemblies, modular push-fit pipe connectors, and expansion couplings.',
    products: createProducts('joint-plus-series', 'Joint Plus Series', 'Joint Plus modular jointing assemblies')
  },
  {
    id: 'joint-plus-accessories',
    name: 'Joint Plus Accessories',
    order: 5,
    image: '/images/placeholders/plumbing/joint-plus-accessories.svg',
    shortDescription: 'Heavy-duty Joint Plus clamping hardware, alignment collars, elastomeric seals, and retention rings.',
    products: createProducts('joint-plus-acc', 'Joint Plus Accessories', 'Joint Plus precision hardware and rings')
  },
  {
    id: 'other-accessories',
    name: 'Other Accessories',
    order: 6,
    image: '/images/placeholders/plumbing/other-accessories.svg',
    shortDescription: 'Brass ball valves, anti-cockroach floor drains, Teflon thread seal tapes, tank float valves, and essential hardware.',
    products: createProducts('other-acc', 'Other Accessories', 'auxiliary plumbing accessories and valves')
  }
];
