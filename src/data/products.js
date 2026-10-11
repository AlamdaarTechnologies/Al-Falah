/**
 * Product Catalogue Data (Informational Only)
 * Separated cleanly for easy additions or content updates.
 */

export const products = [
  // ================= AL FALAH PLUMBING SOLUTIONS =================
  {
    id: "cpvc-pro-pipe-fittings",
    divisionId: "plumbing-solutions",
    divisionName: "Al Falah Plumbing Solutions",
    name: "High-Pressure CPVC Pro Pipes & Fittings",
    category: "CPVC & UPVC Piping",
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
    divisionId: "plumbing-solutions",
    divisionName: "Al Falah Plumbing Solutions",
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
    divisionId: "plumbing-solutions",
    divisionName: "Al Falah Plumbing Solutions",
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
    divisionId: "plumbing-solutions",
    divisionName: "Al Falah Plumbing Solutions",
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
    divisionId: "plumbing-solutions",
    divisionName: "Al Falah Plumbing Solutions",
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
    divisionId: "plumbing-solutions",
    divisionName: "Al Falah Plumbing Solutions",
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
    divisionId: "birdnet-solutions",
    divisionName: "Royal Birdnet Solutions",
    name: "High-Tensile Virgin HDPE Balcony Bird Net",
    category: "Balcony & Window Nets",
    shortDescription: "UV-stabilized 0.8mm to 1.2mm virgin HDPE knotted mesh engineered for balconies and window bird protection.",
    fullDescription: "Our signature Royal Birdnet HDPE netting provides an impenetrable, aesthetic barrier against pigeons, sparrows, and other nuisance birds without blocking sunlight or breeze. Built from 100% virgin polymer with high UV stabilization, guaranteed against sun rot and brittleness.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    featured: true,
    features: [
      "100% Virgin High Density Polyethylene (HDPE) monofilament",
      "High UV resistance – tested for 3+ years harsh sunlight endurance",
      "Knot-stability prevents mesh distortion under bird pressure",
      "Available in discreet Translucent White and Invisible Garware Black"
    ],
    specifications: {
      "Material": "Virgin High Density Polyethylene (HDPE)",
      "Twine Thickness": "0.80mm / 1.00mm / 1.25mm (15 ply / 18 ply)",
      "Mesh Size": "25mm x 25mm (1\") / 35mm x 35mm / 50mm x 50mm (2\")",
      "Breaking Strength": "23.5 kg per individual twine",
      "UV Life Expectancy": "3 to 5+ Years Outdoor Exposure",
      "Color Options": "Pure White, Translucent Natural, Pitch Black"
    },
    applications: [
      "Apartment balconies and French windows",
      "AC outdoor unit ledges and window chajjas",
      "Terrace perimeters and open sit-out areas",
      "Society facade protection"
    ],
    sizes: ["Custom Cut Rolls (10ft x 50ft, 10ft x 100ft, 15ft x 50ft, 20ft x 100ft)"]
  },
  {
    id: "ss-304-anti-bird-spikes",
    divisionId: "birdnet-solutions",
    divisionName: "Royal Birdnet Solutions",
    name: "Stainless Steel 304 Anti-Bird Pigeon Spikes",
    category: "SS 304 Anti-Bird Spikes",
    shortDescription: "Marine-grade SS 304 blunt rod spikes on flexible polycarbonate base for ledges, ACs, parapets and signboards.",
    fullDescription: "Architectural grade bird repellent spikes that prevent pigeons and crows from landing, roosting, or nesting on narrow ledges, pipes, parapet walls, and commercial signage. 100% humane, zero injury design that simply denies landing footprint.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
    featured: true,
    features: [
      "Grade 304 rustproof stainless steel wires (non-corrosive in marine air)",
      "High-grade virgin UV-resistant polycarbonate base strip",
      "Easy installation with outdoor silicone sealant or screws",
      "Flexible base bends over curved surfaces and round pipes"
    ],
    specifications: {
      "Spike Material": "AISI 304 Marine Grade Stainless Steel (1.4mm Dia)",
      "Base Material": "100% Virgin UV Stabilized Polycarbonate",
      "Spike Height": "115mm (4.5 inches)",
      "Strip Length": "300mm / 500mm (1.64 ft per strip)",
      "Coverage Width": "100mm to 160mm spread",
      "Rod Density": "32 to 40 spikes per foot (3-row / 4-row configuration)"
    },
    applications: [
      "Parapet walls and terrace boundary railings",
      "Split AC outdoor compressor tops",
      "Window frames and architectural stone cornices",
      "Commercial shop signboards and billboard tops",
      "Factory roof beams and light fixtures"
    ],
    sizes: ["3-Row Standard (500mm)", "4-Row Wide (500mm)", "5-Row Dense Commercial (500mm)"]
  },
  {
    id: "duct-area-shaft-netting",
    divisionId: "birdnet-solutions",
    divisionName: "Royal Birdnet Solutions",
    name: "High-Rise Building Duct Area & Shaft Netting",
    category: "Duct Area & Shaft Netting",
    shortDescription: "Heavy-gauge knotted safety and pigeon barrier netting custom-fitted for multi-storey plumbing shaft ducts.",
    fullDescription: "Multi-storey building plumbing shafts and ventilation ducts are prime nesting grounds for pigeons, creating hygiene hazards and foul odors. Our heavy-duty duct netting covers large vertical openings securely with stainless steel perimeter wire ropes.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    featured: false,
    features: [
      "High tensile knotted mesh withstands strong vertical wind gusts",
      "Completely seals building ventilation cut-outs from top to bottom",
      "Flame retardant & non-conductive properties for safety around wiring",
      "Enables continuous unhindered air exhaust for plumbing pipes"
    ],
    specifications: {
      "Material": "Heavy Gauge Multi-Filament Virgin HDPE",
      "Mesh Dimension": "35mm x 35mm Square Mesh",
      "Perimeter System": "3mm SS 304 Wire Rope with Turnbuckles & Eye Bolts",
      "Tensile Capacity": "45 kg knot breaking strength",
      "Weather Resistance": "100% Waterproof, Mold-resistant & Chemically Inert"
    },
    applications: [
      "Residential high-rise building plumbing duct shafts",
      "Commercial office building ventilation cut-outs",
      "Hospital & hotel light well shafts",
      "Lift core exterior voids"
    ],
    sizes: ["Custom Site Fabrication (Supplied in Bulk Rolls or Pre-Stitched Panels)"]
  },
  {
    id: "industrial-warehouse-bird-net",
    divisionId: "birdnet-solutions",
    divisionName: "Royal Birdnet Solutions",
    name: "Industrial Warehouse & Factory Ceiling Netting",
    category: "Industrial Warehouse Netting",
    shortDescription: "Large-span heavy industrial netting for manufacturing plants, food grain warehouses, and aircraft hangars.",
    fullDescription: "Specialized large-area netting system installed under industrial roof trusses and purlins to prevent bird droppings from contaminating manufacturing lines, pharmaceutical plants, food storage, and packaged goods.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    featured: false,
    features: [
      "Lightweight yet ultra-strong structure causes zero roof load stress",
      "Prevents contamination of raw materials and machinery",
      "Complies with HACCP, ISO 22000, and FDA factory sanitation norms",
      "Resistant to industrial chemical fumes and boiler steam"
    ],
    specifications: {
      "Material": "UV-Stabilized High Tenacity Polypropylene / HDPE",
      "Mesh Structure": "Knotless / Knotted 25mm to 50mm",
      "Color": "Industrial Matte Black / Fog Grey",
      "Flame Rating": "Self-extinguishing (FR Treated Optional)",
      "Standard Roll Area": "500 sq.m to 2000 sq.m per master roll"
    },
    applications: [
      "Food processing plants & grain storage godowns",
      "Pharmaceutical manufacturing units",
      "Automobile assembly plants & workshops",
      "Sports stadiums, logistics hubs & railway sheds"
    ],
    sizes: ["25ft x 100ft", "50ft x 100ft", "Custom Large Industrial Panels"]
  },
  {
    id: "invisible-nylon-monofilament-net",
    divisionId: "birdnet-solutions",
    divisionName: "Royal Birdnet Solutions",
    name: "Invisible Monofilament Balcony Protection Net",
    category: "Invisible Safety Grills & Mesh",
    shortDescription: "Ultra-clear 0.7mm nylon monofilament net providing completely invisible bird barrier for luxury apartments.",
    fullDescription: "Engineered for premium residential apartments where aesthetic view preservation is top priority. High-clarity nylon monofilament blends completely with the sky and glass facades while keeping pigeons out.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    featured: false,
    features: [
      "Virtually invisible from inside the living room or from the ground",
      "Smooth monofilament does not trap dust or bird feathers",
      "High clarity with UV protection coating",
      "Ideal for glass facade buildings and modern luxury towers"
    ],
    specifications: {
      "Material": "Nylon 6 Monofilament Polymer",
      "Wire Gauge": "0.65mm / 0.80mm Thickness",
      "Mesh Opening": "25mm x 25mm / 30mm x 30mm",
      "Appearance": "Transparent Glass-Clear",
      "Fastening": "Heavy-duty Nylon Hook Anchors & SS Grippers"
    },
    applications: [
      "Luxury sea-facing balconies and penthouses",
      "Frameless glass balcony railings",
      "Living room French windows",
      "Boutique hotel balconies & guest rooms"
    ],
    sizes: ["Pre-Cut Balcony Packs (10x10ft, 10x20ft, 15x20ft, 20x30ft)"]
  },
  {
    id: "birdnet-hardware-installation-kit",
    divisionId: "birdnet-solutions",
    divisionName: "Royal Birdnet Solutions",
    name: "Professional Birdnet Hardware & Fixing Kit",
    category: "Balcony & Window Nets",
    shortDescription: "Complete hardware set including SS 304 perimeter wire, nylon wall anchors, turnbuckles, wire clips and net ties.",
    fullDescription: "Heavy-duty anchoring and tensioning hardware bundle designed for professional contractors and installers. Ensures zero net sagging and long-term structural tightness across concrete walls and steel railings.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80",
    featured: false,
    features: [
      "Marine grade SS 304 wire rope (7x7 strand construction)",
      "High grip nylon rawlplugs with forged zinc eye screw hooks",
      "SS turnbuckles (hook & eye) for precise cable tensioning",
      "UV-stabilized heavy duty cable ties for net-to-wire attachment"
    ],
    specifications: {
      "Wire Rope": "SS 304 - 2mm / 3mm Diameter (PVC Coated or Bare)",
      "Turnbuckles": "M5 / M6 Stainless Steel Tensioners",
      "Fasteners": "8mm Nylon Anchors with 45mm Screw Eyes",
      "Net Ties": "UV Stabilized 200mm Black/White Ties (Pack of 100)",
      "Compatibility": "All HDPE and Monofilament Netting Types"
    },
    applications: [
      "Balcony perimeter wire framing",
      "Duct area multi-point structural anchoring",
      "Industrial truss cable grid mounting",
      "Contractor installation toolkit"
    ],
    sizes: ["Starter Kit (50 sq.ft)", "Standard Home Kit (200 sq.ft)", "Contractor Master Bundle (1000 sq.ft)"]
  }
];
