/**
 * Product Catalogue Data (Informational Only)
 * Separated cleanly for easy additions or content updates.
 */

export const products = [
  // ================= AL FALAH PLUMBING SOLUTIONS =================
  {
    id: "Garden Fencing Kits",
    divisionId: "plumbing-sanitary",
    divisionName: "PLUMBING AND SANITARY",
    name: "Garden Fencing Kits",
    category: "Garden Fencing Kits",
    shortDescription: "SDR-11 and Schedule 40/80 hot & cold potable water piping system built for high temperature and pressure resistance.",
    fullDescription: "Engineered with virgin chlorination polymer compounds, our CPVC Pro piping system is ideal for residential, commercial hot and cold water distribution. Immune to electrolytic corrosion and mineral encrustation, ensuring smooth fluid dynamics and zero degradation over decades.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
    featured: true,
    features: [
      "Handles temperatures up to 93°C (200°F) continuously",
      "Lead-free, NSF 61 compliant for potable water safety",
      "Solvent cement fusion creates monolithic, leak-proof joints",
      "Low thermal conductivity retains water temperature efficiently"
    ],
    specifications: {
      "Material": "Chlorinated Polyvinyl Chloride (CPVC)",
      "Pressure Class": "SDR 11 (Class 1) & SDR 13.5 (Class 2)",
      "Standard Compliance": "IS 15778 / ASTM D2846",
      "Temperature Range": "0°C to 93°C",
      "Joint Type": "Solvent Cement Welded / Brass Threaded Inserts"
    },
    applications: [
      "Hot & cold water distribution in apartments & villas",
      "Solar water heater plumbing loops",
      "Commercial kitchens & hotel bathrooms",
      "Industrial chemical fluid transport"
    ],
    sizes: ["1/2\" (15mm)", "3/4\" (20mm)", "1\" (25mm)", "1-1/4\" (32mm)", "1-1/2\" (40mm)", "2\" (50mm)"]
  },
  {
    id: "heavy-duty-brass-ball-valve",
    divisionId: "plumbing-sanitary",
    divisionName: "PLUMBING AND SANITARY",
    name: "Heavy-Duty Brass Ball Valve (Forged Full-Bore)",
    category: "Heavy Brass Ball Valves",
    shortDescription: "Precision forged brass body ball valve with chrome-plated brass ball, PTFE sealing, and anti-corrosive lever.",
    fullDescription: "Heavy-duty full bore brass ball valve designed for shut-off control in high-pressure plumbing lines, water overhead tanks, and commercial pump headers. Features high burst pressure rating and smooth quarter-turn operation.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    featured: true,
    features: [
      "Forged solid brass construction (IS 319 Grade I)",
      "Virgin PTFE Teflon seats for zero-friction leak sealing",
      "Heavy steel lever handle with rustproof vinyl dip sleeve",
      "Blow-out proof stem design ensures high safety factor"
    ],
    specifications: {
      "Material": "Forged Brass (Nickel/Chrome Plated Exterior)",
      "Working Pressure": "PN 25 / PN 30 Rating",
      "End Connections": "Female BSP Threaded (IS 554)",
      "Ball Material": "Solid Hard-Chrome Plated Brass",
      "Testing Standard": "BS EN 12266-1 / IS 9890"
    },
    applications: [
      "Main water inlet shut-off valves",
      "Booster pump delivery lines",
      "Overhead tank manifold isolation",
      "Firefighting auxiliary bypass lines"
    ],
    sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\""]
  },
  {
    id: "upvc-underground-drainage-pipe",
    divisionId: "plumbing-sanitary",
    divisionName: "PLUMBING AND SANITARY",
    name: "SWR UPVC Drainage & Sewerage System",
    category: "Drainage & Waste Traps",
    shortDescription: "Rubber ring & solvent joint soil, waste and rainwater (SWR) drainage pipe with UV resistance.",
    fullDescription: "High impact resistance UPVC SWR pipes designed for efficient discharge of wastewater and municipal sewage. Smooth internal surface prevents clogs, and rubber ring socket joints absorb thermal expansion in multi-storey buildings.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
    featured: false,
    features: [
      "Ring-fit socketing for rapid installation without solvent mess",
      "High impact strength prevents cracking under concrete slabs",
      "UV-stabilized exterior resists weathering on building exterior shafts",
      "Smooth hydraulic bore eliminates slime build-up and bad odor"
    ],
    specifications: {
      "Material": "Unplasticized Polyvinyl Chloride (UPVC)",
      "Type": "Type A (Rainwater) & Type B (Soil & Waste)",
      "Standard": "IS 13592 / IS 14735",
      "Joint Type": "Rubber Ring Joint (Integrated SWR Ring) / Pasting Type",
      "Color": "Slate Grey / Industrial White"
    },
    applications: [
      "Soil and waste drainage in high-rise buildings",
      "Rainwater harvesting downspouts",
      "Vent stack and drainage shafts",
      "Underground municipal septic connection"
    ],
    sizes: ["75mm (2.5\")", "110mm (4\")", "160mm (6\")"]
  },
  {
    id: "ss-floor-drain-trap",
    divisionId: "plumbing-sanitary",
    divisionName: "PLUMBING AND SANITARY",
    name: "SS-304 Anti-Cockroach Floor Drain Jali & Trap",
    category: "Sanitaryware & Faucets",
    shortDescription: "Premium Grade 304 Stainless Steel floor grating with gravity anti-cockroach and odor barrier flap.",
    fullDescription: "Precision laser-cut SS 304 floor drain cover designed for modern shower areas, balconies, and utility washrooms. The built-in mechanical one-way flap prevents backflow of sewer gas, mosquitoes, and cockroaches while allowing high-flow drainage.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    featured: false,
    features: [
      "Grade 304 non-magnetic stainless steel with brushed satin finish",
      "Gravity auto-closing anti-odor trap flap",
      "Removable inner hair strainer basket for effortless cleaning",
      "Heavy load bearing capacity prevents bending underfoot"
    ],
    specifications: {
      "Material": "AISI 304 Stainless Steel (1.2mm Thickness)",
      "Finish": "Brushed Matt Satin / Mirror Chrome",
      "Dimensions": "100mm x 100mm / 125mm x 125mm / 150mm x 150mm",
      "Outlet Compatibility": "Suitable for 2\" to 4\" PVC Floor Traps",
      "Mechanism": "Gravity Counterweight Check Valve"
    },
    applications: [
      "Luxury residential bathrooms and shower enclosures",
      "Balcony drainage outlets",
      "Commercial kitchens and pantry wash basins",
      "Gym & hotel washroom facilities"
    ],
    sizes: ["4\" x 4\" (100x100mm)", "5\" x 5\" (125x125mm)", "6\" x 6\" (150x150mm)", "Linear Trench (12\"/24\")"]
  },
  {
    id: "brass-angle-cock-valve",
    divisionId: "plumbing-sanitary",
    divisionName: "PLUMBING AND SANITARY",
    name: "Brass Quarter-Turn Angle Cock with Wall Flange",
    category: "Sanitaryware & Faucets",
    shortDescription: "High-grade chrome-plated brass angle valve with imported ceramic disc cartridge for geysers and health faucets.",
    fullDescription: "Ergonomic quarter-turn angle valve crafted from heavy brass ingot, electroplated with multi-layer mirror chrome. Engineered for connecting geysers, toilet cisterns, washbasin mixers, and jet sprays with smooth shut-off control.",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
    featured: false,
    features: [
      "Solid forged brass body with high copper content",
      "High-durability ceramic cartridge tested for 500,000 cycles",
      "Includes decorative stainless steel wall flange cover",
      "Standard 1/2\" BSP male inlet and outlet threads"
    ],
    specifications: {
      "Material": "Virgin Brass Extrusion Alloy",
      "Coating": "Triple Layer Nickel (10 microns) + Chrome (0.3 microns)",
      "Cartridge": "Ceramic Disc Half-Turn / Quarter-Turn",
      "Inlet/Outlet": "1/2\" BSP Male Thread",
      "Working Pressure": "0.5 bar to 10 bar"
    },
    applications: [
      "Toilet seat bidet / health faucet inlets",
      "Geyser and water heater supply connections",
      "Washbasin hot & cold angle stops",
      "Urinal flush inlet isolation"
    ],
    sizes: ["Standard 1/2\" Connection (Single / 2-in-1 Dual Outlet)"]
  },
  {
    id: "overhead-water-tank-float-valve",
    divisionId: "plumbing-sanitary",
    divisionName: "PLUMBING AND SANITARY",
    name: "Heavy Brass Float Ball Valve for Water Tanks",
    category: "Water Tank Accessories & Floats",
    shortDescription: "Heavy brass rod mechanism with high-density polyurethane float ball for automatic tank overflow prevention.",
    fullDescription: "Reliable mechanical float valve designed to shut off water supply automatically once overhead or underground storage tanks reach maximum capacity. Solid brass arm resists bending under municipal main line pressure.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    featured: false,
    features: [
      "Thick brass forged piston body with neoprene seal seat",
      "Adjustable brass rod angle for custom water level setting",
      "Seamless heavy-duty blow-molded plastic / copper float ball",
      "Quick positive shut-off prevents water overflow wastage"
    ],
    specifications: {
      "Material": "Heavy Cast Brass Body + Brass Arm Rod",
      "Float Ball": "High Impact Polyethylene / Pure Copper (Optional)",
      "Thread": "1/2\", 3/4\", 1\", 1-1/2\", 2\" Male BSP",
      "Max Inflow Pressure": "Up to 10 kg/cm²",
      "Standard": "IS 1703 Specification"
    },
    applications: [
      "Rooftop overhead water storage tanks (Sintex/Plasto)",
      "Underground sump tanks and water reservoirs",
      "Industrial cooling tower water level regulation",
      "Commercial fire tank top-up lines"
    ],
    sizes: ["1/2\" (15mm)", "3/4\" (20mm)", "1\" (25mm)", "1-1/4\" (32mm)", "1-1/2\" (40mm)", "2\" (50mm)"]
  },

  // ================= ROYAL BIRDNET SOLUTIONS =================

  {
    id: "hdpe-balcony-anti-bird-net",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Hexagonal Fencing Net",
    category: "Hexagonal Fencing Net",

    shortDescription: "A practical, durable, and versatile fencing solution for residential, commercial, and industrial needs.",

    fullDescription: "Hexagonal Fencing Net is a durable and easy-to-install fencing solution suitable for homes, gardens, farms, commercial spaces, and outdoor areas. Made from high-quality HDPE material, it offers long-lasting performance, strength, and reliable protection. With excellent corrosion resistance and easy maintenance, it provides a practical and cost-effective fencing solution for residential, commercial, and industrial applications.",

    image: "/images/gardenfence (2).webp",
    featured: true,

    features: [
      "Made from high-quality HDPE",
      "Durable and long-lasting",
      "High corrosion resistance, suitable for coastal areas",
      "Protective coating on components",
      "Easy to install and maintain",
      "Cost-effective fencing solution"
    ],

    specifications: {
      "Material": "High Density Polyethylene (HDPE)",
      "Available Heights": "1 MTR, 1.2 MTR, 1.5 MTR, 2 MTR, 2.1 MTR, 2.5 MTR, 3 MTR",
      "Roll Length": "25 MTR",
      "Packaging Options": "Plastic Bags, Woven Bags, Carton Boxes",
      "Custom Packaging": "Available"
    },

    applications: [
      "Gardens and Landscapes",
      "Poultry Farms",
      "Construction Sites",
      "Sports Grounds",
      "Balconies",
      "Railings and Safety Barriers"
    ],

    sizes: [
      "1 MTR Height x 25 MTR Roll",
      "1.2 MTR Height x 25 MTR Roll",
      "1.5 MTR Height x 25 MTR Roll",
      "2 MTR Height x 25 MTR Roll",
      "2.1 MTR Height x 25 MTR Roll",
      "2.5 MTR Height x 25 MTR Roll",
      "3 MTR Height x 25 MTR Roll"
    ]
  },

  {
    id: "ss-304-anti-bird-spikes",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Bird Protection Net",
    category: "Bird Protection Net",
    shortDescription: "Reliable bird protection for homes, balconies, buildings and industries, in ready-made sizes and rolls.",

    fullDescription: "We offer high-quality Bird Nets designed to provide reliable protection for homes, balconies, buildings, industries, and open spaces. Available in multiple sizes, colours, and ply options to meet different requirements.",

    image: "/images/birdnet.webp",
    detailImage: "/images/birdnetcolors.webp",
    featured: true,

    features: [
      "Quality & Versatility",
      "Whether you need a small ready-made net or a large roll for commercial or industrial applications, we offer multiple options to suit your requirements."
    ],

    specifications: {
      "Ready-Made Bird Net Sizes": [
        "8 FT × 6 FT",
        "8 FT × 12 FT",
        "10 FT × 6 FT",
        "10 FT × 8 FT",
        "10 FT × 10 FT",
        "10 FT × 12 FT",
        "10 FT × 15 FT",
        "10 FT × 20 FT"
      ],

      "Bird Net Rolls": [
        "2 MTR × 30 MTR",
        "2.5 MTR × 30 MTR",
        "3 MTR × 30 MTR",
        "4.5 MTR × 30 MTR",
        "6 MTR × 30 MTR",
        "10 MTR × 30 MTR"
      ],

      "Available Colours": "White | Black | Green | Blue",

      "Available Ply": "12 Ply | 15 Ply | 18 Ply | 24 Ply"
    },

    additionalProduct: {
      name: "Nylon Bird Protection Net",
      image: "/images/nylonbird.webp",
      description: "Nylon Transparent Bird Net\nPly: 0.60 and 0.80\nSize: 3 × 30 MTR",
    },
  },

  // ===== CATALOGUE =====
  // Image fields: `image` = main catalogue card, `detailImage` = product detail page (falls back to `image`).
  // Placeholder images live in /public/images/placeholders. To replace one, overwrite the file or change the path here.
  // Main cards open: a subcategory grid (`subcategories`), a multi-section page (`sections`) or the standard detail page.
  {
    id: "sports-net",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Sports Net",
    category: "Sports Net",
    shortDescription: "Cricket, turf, badminton and volleyball nets for sports grounds and courts.",
    image: "/images/products/sports-net.svg",
    subcategories: [
      { id: "cricket-net", name: "Cricket Net", image: "/images/products/sports-net.svg" },
      { id: "turf-net", name: "Turf Net", image: "/images/products/sports-net.svg" },
      { id: "badminton-net", name: "Badminton Net", image: "/images/products/sports-net.svg" },
      { id: "volleyball-net", name: "Volleyball Net", image: "/images/products/sports-net.svg" },
    ],
  },

  {
    id: "bird-monkey-spike",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Monkey Spike and Bird Spike",
    category: "Monkey Spike & Bird Spike",
    shortDescription: "Spikes that keep monkeys and birds off ledges, rooftops, windows and other surfaces.",
    image: "/images/birdspike123.webp",
    sections: [
      {
        id: "monkey-spike",
        title: "Monkey Spike",
        video: "/videos/spike.mp4",
        images: [
          "/images/monkey1.webp",
        ],
        description: "Protect your property from monkey nuisance with our high-quality Monkey Spikes",
        specifications: [
          "Virgin Monkey Spike",
          "Size: 12 inch",
          "Packing: 450 nos/ctn",
          "Colour: Black and White"
        ]
      },
      {
        id: "bird-spike",
        title: "Bird Spike",
        video: "",
        images: [
          "/images/bird1.webp",
          "/images/bird2.webp"
        ],
        description: "Bird Spikes: An effective and humane solution to prevent birds from sitting, nesting, and roosting on ledges, rooftops, windows, and other surfaces.",
        specifications: [
          "Virgin Bird Spike",
          "Size: 12 inch",
          "Packing: 320 nos/ctn"
        ]
      }
    ]
  },

  {
    id: "construction-safety-net",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Construction Safety Net",
    category: "Construction Safety Net",
    shortDescription: "Safety nets with a 12 mm four-sided outer rope, in double-layer, single-layer and braided options.",
    image: "/images/construction.webp",
    detailImage: "/images/construction.webp",
    fullDescription: "Construction Safety Nets with 12 mm four-sided outer rope.",
    detailSections: [
      {
        title: "Available In",
        items: [
          "Double Layer with Fishnet – 3 × 10 mtr & 5 × 10 mtr",
          "Single Layer without Fishnet – 3 × 10 mtr & 5 × 10 mtr",
          "Braided Net 2.5 mm Thickness – 3 × 10 mtr & 5 × 10 mtr"
        ]
      }
    ],
    closingNote: "For pricing and further details, please contact us."
  },

  {
    id: "mosquito-net",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Mosquito Net Fiber / PVC",
    category: "Mosquito Net Fiber / PVC",
    shortDescription: "Keeps mosquitoes and insects out of doors and windows while letting fresh air flow through.",
    image: "/images/mosquito.webp",

    description:
      "Mosquito Net is a durable and economical solution designed to keep mosquitoes and insects out while allowing fresh air to flow freely. Its uniform thickness and special additives ensure long-lasting performance and reliability.",

    sections: [
      {
        id: "mosquito-net-details",
        title: "Mosquito Net Fiber / PVC",

        images: [
          "/images/mosquito.webp"
        ],

        description:
          "Mosquito Net is a durable and economical solution designed to keep mosquitoes and insects out while allowing fresh air to flow freely. Its uniform thickness and special additives ensure long-lasting performance and reliability.",

        features: [
          "Helps prevent mosquitoes and insects from entering",
          "Allows fresh air circulation",
          "Uniform thickness for better quality",
          "Easy to install and maintain",
          "Durable and cost-effective"
        ],

        specifications: [
          {
            title: "Available Colour",
            items: [
              "Fiber: Black | Grey | Ivory",
              "PVC: Black | Grey | Ivory | Brown | Coffee Brown"
            ]
          },
          {
            title: "Available Sizes",
            items: [
              "Width: 0.9 MTR",
              "Width: 1.2 MTR",
              "Width: 1.5 MTR",
              "Length: 15 MTR",
              "Length: 20 MTR",
              "Length: 30 MTR"
            ]
          },
          {
            title: "Packaging Options",
            items: [
              "Plastic Bags",
              "Woven Bags",
              "Carton Packaging",
              "Custom Packaging Available"
            ]
          },
          {
            title: "Applications",
            items: [
              "Doors",
              "Windows",
              "Residential Buildings",
              "Commercial Buildings"
            ]
          }
        ],

        closingNote:
          "A simple, effective, and reliable solution for insect protection and fresh air circulation."
      }
    ]
  },

  {
    id: "fiberglass-mesh",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Fiberglass Mesh (Adhesive / Non Adhesive)",
    category: "Fiberglass Mesh (Adhesive / Non Adhesive)",
    shortDescription: "Alkali-resistant woven fiberglass mesh that reinforces walls and helps prevent cracks in construction work.",
    image: "/images/fibreglassout.webp",
    detailImage: "/images/fibreglassout.webp",
    images: ["/images/fibreglassin.webp"],
    fullDescription: "Fiberglass Mesh is a strong and durable reinforcement material designed for various construction applications. Made from woven fiberglass fabric with an alkali-resistant coating, it provides excellent strength, stability, and protection against wall cracks.\n\nIt is widely used in wall reinforcement, external wall insulation, roof waterproofing, and other construction projects.",
    features: [
      "High tensile strength and crack resistance",
      "Excellent alkali and corrosion resistance",
      "Strong and stable structure",
      "Helps prevent wall cracks and surface damage",
      "Moisture-resistant properties",
      "Supports thermal and sound insulation"
    ],
    specifications: {
      "Weight": "45 g/m² – 160 g/m²",
      "Mesh Sizes": "3×3 mm, 4×4 mm, 5×5 mm, 10×10 mm",
      "Available Widths": "20 cm, 50 cm, 1 m, 1.5 m, 2 m",
      "Available Lengths": "20 m, 50 m, 100 m",
      "Available Colours": "White, Blue, Red, Orange, Green",
      "Customization": "available as per customer requirements",
      "Packaging Options": [
        "Plastic Bags",
        "Woven Bags",
        "Carton Packaging",
        "Custom Packaging Available"
      ]
    },
    applications: [
      "Wall Reinforcement",
      "External Wall Insulation",
      "Roof Waterproofing",
      "Wall Crack Prevention",
      "Thermal and Sound Insulation",
      "Building Structure Protection",
      "Insect Prevention in Building Structures"
    ],
    closingNote: "A reliable reinforcement solution for stronger, more durable, and crack-resistant construction."
  },

  {
    id: "agro-shade-net",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Green Shade Net",
    category: "Green Shade Net",
    shortDescription: "Protects plants and crops from excessive sunlight and harsh weather while creating a suitable growing environment.",
    image: "/images/agro.webp",
    detailImage: "/images/agro.webp",
    fullDescription: "Green Shade Nets are designed to protect plants and crops from excessive sunlight, harmful UV rays, and harsh weather conditions. Made from high-quality HDPE material, they help create a suitable growing environment and support healthy crop growth.\n\nAvailable in different sunlight-blocking percentages to meet various agricultural and shading requirements.",
    features: [
      "Strong reflective structure",
      "Single and double colour options",
      "UV-stabilized for long outdoor life",
      "Helps reduce fertilizer leaching",
      "Supports air circulation and crop protection",
      "Durable, flexible, and weather-resistant"
    ],
    specifications: {
      "Material": "High-Density Polyethylene (HDPE)",
      "Sunlight Blocking": "30% – 95%",
      "Roll Sizes and Readymade Sizes": "Various widths and lengths available.",
      "Colour": "Green (other colours available)",
      "Type": "Single and double colour options",
      "Packaging Options": [
        "Plastic Bags",
        "Woven Bags",
        "Carton Packaging",
        "Custom Packaging Available"
      ]
    },
    applications: [
      "Greenhouses",
      "Agriculture and Crop Protection",
      "Poultry Farms",
      "Construction Sites",
      "Truck Shade Covers",
      "Sports Arenas (Cricket, Football, Tennis)",
      "Exhibition Hangers",
      "Fish Tanks and Aquaculture Areas"
    ],
    closingNote: "A durable and versatile shading solution for agriculture, commercial, and outdoor applications."
  },

  {
    id: "tree-guard",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Tree Guard",
    category: "Tree Guard",
    shortDescription: "Lightweight, reusable guard that protects young plants and saplings from animals and external damage.",
    image: "/images/placeholders/tree-guard-card.svg",
    detailImage: "/images/placeholders/tree-guard-detail.svg",
    fullDescription: "Tree Guard is a durable and eco-friendly solution designed to protect young plants and saplings from animals and external damage. Made for easy installation, it offers a lightweight and cost-effective alternative to traditional iron mesh tree guards.\n\nSuitable for residential, commercial, and large-scale plantation projects.",
    features: [
      "Environment-friendly material",
      "UV-stabilized for long-lasting performance",
      "Lightweight and easy to install",
      "Reusable and recyclable",
      "Non-corrosive and weather-resistant",
      "Easy to maintain and economical"
    ],
    detailSections: [
      {
        title: "Available Sizes",
        items: [
          "Tubular Cut Sheets 4 × 6 FT",
          "Tubular Cut Sheets 4 × 5 FT",
          "Tubular Cut Sheets 4 × 4 FT"
        ]
      },
      {
        title: "Available Colours",
        items: [
          "Green",
          "Customized colours available on request"
        ]
      },
      {
        title: "Packaging Options",
        items: [
          "Plastic Bags",
          "Woven Bags",
          "Carton Packaging",
          "Custom Packaging Available"
        ]
      }
    ],
    applications: [
      "Roads and Highways Plantation",
      "Forest Department Projects",
      "Municipal Corporation Plantations",
      "NGO Plantation Activities",
      "CSR Plantation Programs"
    ],
    closingNote: "A smart, durable, and eco-friendly solution for protecting young trees and supporting greener surroundings."
  },

  {
    id: "separation-net",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Square Net (Protection Net / Separation Net)",
    category: "Square Net (Protection Net / Separation Net)",
    shortDescription: "Lightweight HDPE flat net that guards AC and cooler back panels from dust and debris while allowing airflow.",
    image: "/images/placeholders/square-net-card.svg",
    detailImage: "/images/placeholders/square-net-detail.svg",
    fullDescription: "Square Net is a durable and lightweight extruded flat net made from high-quality polyethylene. It is designed to protect air conditioner and air cooler back panels from dust, debris, and external damage while allowing proper airflow.\n\nIts corrosion-resistant and maintenance-free properties make it suitable for both residential and industrial applications.",
    features: [
      "Made from durable HDPE material",
      "Non-corrosive and weather-resistant",
      "Lightweight and easy to handle",
      "Maintenance-free design",
      "Long-lasting and durable",
      "Eco-friendly and recyclable"
    ],
    specifications: {
      "Available Widths": "1 MTR, 1.2 MTR",
      "Roll Length": "25 MTR",
      "Customization": "Available as per customer requirements",
      "Packaging Options": [
        "Plastic Bags",
        "Woven Bags",
        "Carton Packaging",
        "Custom Packaging Available"
      ]
    },
    applications: [
      "Air Conditioner Back Panel Protection",
      "Air Cooler Protection",
      "Industrial Ventilation Protection",
      "Outdoor Equipment Protection"
    ],
    closingNote: "A lightweight, durable, and reliable protection solution for residential and industrial equipment."
  },
];
