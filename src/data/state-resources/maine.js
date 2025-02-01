const maineResources = {
  state: "Maine",
  abbreviation: "ME",
  stateInfo: {
    capital: "Augusta",
    region: "Northeast",
    agriculturalZones: ["3b", "4a", "4b", "5a", "5b"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Wild Blueberries",
      "Potatoes",
      "Maple Syrup",
      "Apples",
      "Dairy",
      "Christmas Trees"
    ],
    agriculturalFacts: [
      "Largest wild blueberry producer in the world",
      "8,000+ farms covering 1.3 million acres",
      "Agriculture contributes $3.8 billion to state economy",
      "Leading producer of brown eggs in New England"
    ]
  },
  farmersMarkets: [
    {
      id: "ME001",
      name: "Portland Farmers' Market",
      type: "Producer-Only Market",
      address: "Monument Square, Portland, ME 04101",
      coordinates: {
        lat: 43.657164,
        lng: -70.258473
      },
      contact: {
        phone: "(207) 370-1524",
        email: "info@portlandmainefarmersmarket.org",
        website: "portlandmainefarmersmarket.org",
        socialMedia: {
          facebook: "PortlandMaineFarmersMarket",
          instagram: "@portlandfarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          wednesday: "7:00 AM - 1:00 PM",
          saturday: "7:00 AM - 1:00 PM"
        },
        seasonalNotes: "Outdoor April-November, Winter Market December-March",
        holidays: "Special holiday markets"
      },
      description: "Historic farmers market operating since 1768",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Maine Harvest Bucks"],
        products: [
          "Wild Blueberries",
          "Organic Produce",
          "Maple Products",
          "Seafood",
          "Artisan Cheese",
          "Baked Goods"
        ],
        amenities: [
          "Historic Location",
          "Live Music",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking"
        ],
        events: [
          "Chef demonstrations",
          "Live music",
          "Harvest festivals",
          "Educational programs"
        ]
      },
      vendorInfo: {
        totalVendors: 40,
        applicationProcess: "Annual jury process",
        vendorFees: "Daily: $30, Season: $500",
        requirements: [
          "Maine-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer-only verification"
        ]
      },
      certification: {
        type: "Maine Federation of Farmers' Markets Certified",
        inspections: "Quarterly",
        lastInspection: "2024-12-15"
      },
      statistics: {
        averageWeeklyVisitors: 3000,
        annualSales: "$1.5M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-ME001",
      name: "Good Shepherd Food Bank",
      type: "Regional Food Bank",
      address: "3121 Hotel Road, Auburn, ME 04210",
      coordinates: {
        lat: 44.085833,
        lng: -70.288889
      },
      contact: {
        phone: "(207) 782-3554",
        email: "info@gsfb.org",
        website: "gsfb.org",
        emergencyContact: "(207) 782-3554 ext. 1"
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
      description: "Serving all of Maine with emergency food assistance",
      services: {
        primary: [
          "Food Distribution",
          "Cooking Matters Program",
          "Mobile Food Bank",
          "School Pantry Program"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Farm to Food Bank"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Self-declared need"
        ],
        restrictions: "Maine residents only",
        frequency: "Once per month per household"
      },
      capacity: {
        storageSpace: "125,000 sq ft",
        coldStorage: "30,000 sq ft",
        monthlyDistribution: "2M pounds",
        servingCapacity: "25,000 households/month"
      },
      partnerships: {
        retailers: ["Hannaford", "Shaw's", "Walmart", "L.L.Bean"],
        farms: ["Maine Farm Bureau", "Wild Blueberry Farms"],
        organizations: ["Feeding America", "Maine Hunger Initiative"]
      },
      impact: {
        annualPoundsDistributed: "25M",
        peopleServed: "178,000",
        countiesServed: 16,
        volunteerHours: "50,000"
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
          "Cooking Matters program"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Maine Gleaning Network",
      description: "Recovering surplus crops from Maine farms",
      contact: {
        name: "Program Director",
        phone: "(207) 555-0123",
        email: "glean@mainegleaners.org"
      },
      website: "mainegleaners.org",
      areas: ["Southern Maine", "Central Maine", "Northern Maine"],
      schedule: "May through October",
      requirements: {
        volunteers: [
          "Must be 16 or older",
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
        annualPounds: 250000,
        servingAgencies: 35,
        volunteerHours: 8000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Pine Tree Fresh Distribution",
      type: "Regional Distributor",
      address: "456 Distribution Way, Bangor, ME 04401",
      coordinates: {
        lat: 44.801182,
        lng: -68.777814
      },
      contact: {
        name: "Operations Director",
        phone: "(207) 555-0124",
        email: "ops@pinetreefresh.org"
      },
      website: "pinetreefresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Maine and northern New England",
      requirements: {
        minimumOrder: "$300",
        leadTime: "48 hours",
        delivery: "Available for orders over $750"
      },
      certifications: [
        "USDA Approved",
        "Maine Quality Certified",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Maine Farm to School Network",
      website: "mainefarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(207) 781-6099",
      description: "Connecting Maine schools with fresh, local produce"
    },
    marketVouchers: {
      name: "Maine Federation of Farmers' Markets",
      website: "mainefarmersmarkets.org",
      programs: [
        "Maine Harvest Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default maineResources;
