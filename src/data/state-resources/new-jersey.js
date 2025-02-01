const newJerseyResources = {
  state: "New Jersey",
  abbreviation: "NJ",
  stateInfo: {
    capital: "Trenton",
    region: "Northeast",
    agriculturalZones: ["6a", "6b", "7a", "7b"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Blueberries",
      "Cranberries",
      "Tomatoes",
      "Peaches",
      "Bell Peppers",
      "Sweet Corn"
    ],
    agriculturalFacts: [
      "9,900 farms covering 750,000 acres",
      "#1 producer of blueberries in the US",
      "Agriculture contributes $1.1B annually to state economy",
      "Leading producer of cranberries, spinach, and bell peppers"
    ]
  },
  farmersMarkets: [
    {
      id: "NJ001",
      name: "Collingswood Farmers' Market",
      type: "Community Market",
      address: "Between Collings and Irvin Avenues, Collingswood, NJ 08108",
      coordinates: {
        lat: 39.916667,
        lng: -75.071944
      },
      contact: {
        phone: "(856) 858-8004",
        email: "info@collingswoodmarket.com",
        website: "collingswoodmarket.com",
        socialMedia: {
          facebook: "CollingswoodMarket",
          instagram: "@collingswoodfm"
        }
      },
      schedule: {
        regularHours: {
          saturday: "8:00 AM - 12:00 PM"
        },
        seasonalNotes: "May through November",
        holidays: "Special holiday markets"
      },
      description: "Award-winning community farmers market",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Jersey Fresh Bucks"],
        products: [
          "Fresh Produce",
          "Organic Products",
          "Baked Goods",
          "Local Honey",
          "Flowers",
          "Artisan Foods"
        ],
        amenities: [
          "Live Music",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking",
          "Pet Friendly"
        ],
        events: [
          "Music performances",
          "Chef demonstrations",
          "Kids activities",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 70,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $35, Season: $600",
        requirements: [
          "New Jersey-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "New Jersey Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-25"
      },
      statistics: {
        averageWeeklyVisitors: 3000,
        annualSales: "$1.8M",
        percentLocalProduce: 95
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-NJ001",
      name: "Community FoodBank of New Jersey",
      type: "State Food Bank",
      address: "31 Evans Terminal, Hillside, NJ 07205",
      coordinates: {
        lat: 40.696944,
        lng: -74.228889
      },
      contact: {
        phone: "(908) 355-3663",
        email: "info@cfbnj.org",
        website: "cfbnj.org",
        emergencyContact: "(908) 355-3663 ext. 1"
      },
      hours: {
        distribution: {
          monday: "8:00 AM - 4:00 PM",
          tuesday: "8:00 AM - 4:00 PM",
          wednesday: "8:00 AM - 4:00 PM",
          thursday: "8:00 AM - 4:00 PM",
          friday: "8:00 AM - 4:00 PM"
        },
        donation: {
          monday: "7:30 AM - 4:30 PM",
          tuesday: "7:30 AM - 4:30 PM",
          wednesday: "7:30 AM - 4:30 PM",
          thursday: "7:30 AM - 4:30 PM",
          friday: "7:30 AM - 4:30 PM"
        }
      },
      description: "Largest anti-hunger organization in New Jersey",
      services: {
        primary: [
          "Food Distribution",
          "Kids Division",
          "Senior Box Program",
          "Mobile Pantry"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Food Service Training Program"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Self-declared need"
        ],
        restrictions: "New Jersey residents only",
        frequency: "Once per month per household"
      },
      capacity: {
        storageSpace: "285,000 sq ft",
        coldStorage: "75,000 sq ft",
        monthlyDistribution: "7M pounds",
        servingCapacity: "800,000 people/month"
      },
      partnerships: {
        retailers: ["ShopRite", "Stop & Shop", "Walmart", "Wegmans"],
        farms: ["Jersey Fresh Program", "Local Farms"],
        organizations: ["Feeding America", "NJ Agricultural Society"]
      },
      impact: {
        annualPoundsDistributed: "85M",
        peopleServed: "800,000",
        countiesServed: 15,
        volunteerHours: "100,000"
      },
      needs: {
        criticalItems: [
          "Protein items",
          "Fresh produce",
          "Whole grains",
          "Baby food"
        ],
        volunteerRoles: [
          "Food sorting",
          "Mobile pantry",
          "Office support",
          "Food Service Training"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Farmers Against Hunger",
      description: "Recovering surplus crops from New Jersey farms",
      contact: {
        name: "Program Director",
        phone: "(609) 462-9691",
        email: "glean@njagsociety.org"
      },
      website: "njagsociety.org/fah",
      areas: ["South Jersey", "Central Jersey", "North Jersey"],
      schedule: "May through November",
      requirements: {
        volunteers: [
          "Must be 12 or older",
          "Sign waiver",
          "Attend orientation",
          "Physical ability to harvest"
        ],
        farmers: [
          "Provide field access",
          "Sign liability waiver",
          "Advance notice",
          "Safe conditions"
        ]
      },
      impact: {
        annualPounds: 1500000,
        servingAgencies: 70,
        volunteerHours: 12000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Garden State Fresh Distribution",
      type: "Regional Distributor",
      address: "789 Distribution Road, South Brunswick, NJ 08852",
      coordinates: {
        lat: 40.385556,
        lng: -74.568889
      },
      contact: {
        name: "Operations Director",
        phone: "(732) 555-0124",
        email: "ops@gardenstatefresh.org"
      },
      website: "gardenstatefresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "New Jersey, Eastern Pennsylvania, and Southern New York",
      requirements: {
        minimumOrder: "$350",
        leadTime: "48 hours",
        delivery: "Available for orders over $700"
      },
      certifications: [
        "USDA Approved",
        "Jersey Fresh Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "New Jersey Farm to School",
      website: "farmtoschool.nj.gov",
      coordinator: "State Farm to School Coordinator",
      phone: "(609) 292-8747",
      description: "Connecting New Jersey schools with fresh, local food"
    },
    marketVouchers: {
      name: "New Jersey Farmers Market Association",
      website: "njfarmersmarkets.org",
      programs: [
        "Jersey Fresh Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default newJerseyResources;
