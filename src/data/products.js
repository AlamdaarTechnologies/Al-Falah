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
    name: "GARDEN FENCING NETS",
    category: "Garden Fencing",

    fullDescription: "Garden Fencing Nets offer a modern, efficient and user-friendly fencing solution. Designed as easy-to-install DIY kits, they provide a convenient option for households, architects, landscapers and large-scale users such as hotels, resorts and sports complexes. These fencing systems combine practicality with versatility, delivering a reliable and aesthetically pleasing fencing solution suitable for a wide range of applications.",

    image: "/images/gardenfence (2).jpg",
    featured: true,

    features: [
      "Long-lasting durability",
      "Highly resistant to corrosion, even in coastal environments",
      "Manufactured using high-quality HDPE",
      "Components coated with corrosion-resistant materials",
      "Easy to install and cost-effective solution"
    ],

    specifications: {
      "Material": "High Density Polyethylene (HDPE)",
      "Available Heights": "1 m, 1.2 m, 1.5 m, 2 m, 2.1 m, 2.5 m, 3 m",
      "Roll Length": "25 m",
      "Packaging Options": "Plastic Bags, Woven Bags, Carton Packaging"
    },

    applications: [
      "Garden fencing",
      "Poultry farms",
      "Construction sites",
      "Sports fields",
      "Balconies",
      "Railings and safety barriers"
    ],

    sizes: [
      "1 m Height x 25 m Roll",
      "1.2 m Height x 25 m Roll",
      "1.5 m Height x 25 m Roll",
      "2 m Height x 25 m Roll",
      "2.1 m Height x 25 m Roll",
      "2.5 m Height x 25 m Roll",
      "3 m Height x 25 m Roll"
    ]
  },

  {
    id: "ss-304-anti-bird-spikes",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Bird Protection Nets",
    category: "Bird Protection Nets",

    fullDescription: "We offer high-quality Bird Nets designed to provide reliable protection for homes, balconies, buildings, industries, and open spaces. Available in multiple sizes, colours, and ply options to meet different requirements.",

    image: "/images/birdnet.jpeg",
    detailImage: "/images/birdnetcolors.jpeg",
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
      image: "/images/nylonbird.jpeg",
      description: "Nylon Transparent Bird Net , Ply 0.60 and 0.80 , 3 MTR x 30 MTR"
    },
  },

  // ===== NEW CATALOGUE (placeholder copy and images: replace with the client's real content) =====
  // Main cards open: a subcategory grid (`subcategories`), a multi-section page (`sections`) or the standard detail page.
  {
    id: "sports-net",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Sports Net",
    category: "Sports Net",
    image: "/images/products/sports-net.jpg",
    subcategories: [
      { id: "cricket-net", name: "Cricket Net", image: "/images/products/cricket-net.jpg" },
      { id: "turf-net", name: "Turf Net", image: "/images/products/turf-net.jpg" },
      { id: "badminton-net", name: "Badminton Net", image: "/images/products/badminton-net.jpg" },
      { id: "volleyball-net", name: "Volleyball Net", image: "/images/products/volleyball-net.jpg" },
    ],
  },

  {
    id: "bird-monkey-spike",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Bird Spike and Monkey Spike",
    category: "Bird Spike & Monkey Spike",
    image: "/images/birdspike123.jpeg",
    sections: [
      {
        id: "monkey-spike",
        title: "Monkey Spike",
        video: "/videos/spike.mp4",
        images: [
          "/images/monkey1.jpeg",
          "/images/monkey2.jpeg"
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
          "/images/bird1.jpeg",
          "/images/bird2.jpeg"
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
    image: "/images/products/construction-safety-net.jpg",
    detailImage: "/images/products/construction-safety-net-detail.jpg",
    fullDescription: "Construction safety nets are fitted around scaffolding, floor edges and open sides of buildings under construction. They help catch falling objects and debris and reduce the risk of accidents for workers and people nearby.",
    features: [
      "Strong, tear-resistant netting",
      "UV-stabilised for long outdoor use",
      "Lightweight and easy to fix on scaffolding",
      "Helps keep construction sites safer and tidier",
    ],
    applications: [
      "High-rise building construction",
      "Scaffolding and floor edges",
      "Bridges and flyovers",
      "Renovation and facade work",
    ],
  },

  {
    id: "mosquito-net",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "MOSQUITO NET FIBER AND PVC",
    category: "Mosquito Net",
    image: "/images/mosquito.jpeg",

    description:
      "Mosquito Net is a durable and economical solution designed to keep mosquitoes and insects out while allowing fresh air to flow freely. Its uniform thickness and special additives ensure long-lasting performance and reliability.",

    sections: [
      {
        id: "mosquito-net-details",
        title: "MOSQUITO NET FIBER AND PVC",

        images: [
          "/images/mosquito.jpeg"
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
    name: "Fiberglass Mesh / Fiberglass Mesh Self-Adhesive Tape",
    category: "Fiberglass Mesh",
    image: "/images/products/fiberglass-mesh.jpg",
    subcategories: [
      { id: "fiberglass-mesh-roll", name: "Fiberglass Mesh", image: "/images/products/fiberglass-mesh-roll.jpg" },
      { id: "fiberglass-mesh-tape", name: "Fiberglass Mesh Self-Adhesive Tape", image: "/images/products/fiberglass-mesh-tape.jpg" },
    ],
  },

  {
    id: "agro-shade-net",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Agro Shade Net",
    category: "Agro Shade Net",
    image: "/images/products/agro-shade-net.jpg",
    detailImage: "/images/products/agro-shade-net-detail.jpg",
    fullDescription: "Agro shade nets protect plants from harsh sunlight and heat. They create a cooler growing environment, reduce water loss and help improve crop quality in nurseries, polyhouses and farms.",
    features: [
      "UV-stabilised netting",
      "Reduces heat stress on plants",
      "Allows air and light to pass through",
      "Different shade levels available on request",
    ],
    applications: [
      "Plant nurseries",
      "Vegetable and flower farming",
      "Polyhouses and greenhouses",
      "Home gardens and terraces",
    ],
  },

  {
    id: "tree-guard",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Tree Guard",
    category: "Tree Guard",
    image: "/images/products/tree-guard.jpg",
    detailImage: "/images/products/tree-guard-detail.jpg",
    fullDescription: "Tree guards protect young saplings from grazing animals, accidental damage and harsh weather during their early growth. A mesh guard around the plant lets air and light reach it while keeping it safe.",
    features: [
      "Protects young plants from animals and damage",
      "Light and breathable, so air and sunlight pass through",
      "Easy to install around saplings",
      "Suitable for roadside, society and farm plantations",
    ],
    applications: [
      "Roadside and avenue plantation",
      "Housing societies and gardens",
      "Farms and orchards",
      "Parks and public spaces",
    ],
  },

  {
    id: "separation-net",
    divisionId: "royal-birdnet",
    divisionName: "THE ROYAL BIRD NET",
    name: "Separation Net / Protection Net",
    category: "Separation Net / Protection Net",
    image: "/images/products/separation-net.jpg",
    detailImage: "/images/products/separation-net-detail.jpg",
    fullDescription: "Separation and protection nets are used to divide areas and protect people, plants and property. They provide a light but sturdy barrier for sites, farms, play areas and industrial spaces.",
    features: [
      "Strong, lightweight netting",
      "Weather and UV resistant",
      "Easy to cut, fit and relocate",
      "Cost-effective area separation",
    ],
    applications: [
      "Dividing work areas and yards",
      "Protecting plants and farmland",
      "Play areas and sports zones",
      "Construction and industrial sites",
    ],
  },
];
