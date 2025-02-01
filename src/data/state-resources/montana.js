const montanaResources = {
  state: "Montana",
  abbreviation: "MT",
  stateInfo: {
    capital: "Helena",
    region: "Northwest",
    agriculturalZones: ["3a", "3b", "4a", "4b", "5a", "5b"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Wheat",
      "Barley",
      "Hay",
      "Sugar Beets",
      "Cattle",
      "Pulse Crops"
    ],
    agriculturalFacts: [
      "27,100 farms covering 58 million acres",
      "#3 producer of wheat in the US",
      "Agriculture contributes $4.6 billion annually to state economy",
      "Leading producer of organic wheat and dry peas"
    ]
  },
  farmersMarkets: [
    {
      id: "MT001",
      name: "Bogert Farmers' Market",
      type: "Community Market",
      address: "325 E Main St, Bozeman, MT 59715",
      coordinates: {
        lat: 45.679722,
        lng: -111.036389
      },
      contact: {
        phone: "(406) 586-6478",
        email: "info@bogertfarmersmarket.org",
        website: "bogertfarmersmarket.org",
        socialMedia: {
          facebook: "BogertFarmersMarket",
          instagram: "@bogertmarket"
        }
      },
      schedule: {
        regularHours: {
          tuesday: "5:00 PM - 8:00 PM"
        },
        seasonalNotes: "June through September",
        holidays: "Special holiday markets"
      },
      description: "Vibrant community market featuring local producers",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double SNAP Dollars"],
        products: [
          "Fresh Produce",
          "Grass-fed Meat",
          "Artisan Bread",
          "Local Honey",
          "Crafts",
          "Ready-to-eat Food"
        ],
        amenities: [
          "Live Music",
          "Food Trucks",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking"
        ],
        events: [
          "Music performances",
          "Chef demonstrations",
          "Kids activities",
          "Educational programs"
        ]
      },
      vendorInfo: {
        totalVendors: 80,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $25, Season: $400",
        requirements: [
          "Montana-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Montana Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-05"
      },
      statistics: {
        averageWeeklyVisitors: 2500,
        annualSales: "$1.2M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-MT001",
      name: "Montana Food Bank Network",
      type: "State Food Bank",
      address: "5625 Expressway, Missoula, MT 59808",
      coordinates: {
        lat: 46.916667,
        lng: -114.083333
      },
      contact: {
        phone: "(406) 721-3825",
        email: "info@mfbn.org",
        website: "mfbn.org",
        emergencyContact: "(406) 721-3825 ext. 1"
      },
      hours: {
        distribution: {
          monday: "8:00 AM - 4:30 PM",
          tuesday: "8:00 AM - 4:30 PM",
          wednesday: "8:00 AM - 4:30 PM",
          thursday: "8:00 AM - 4:30 PM",
          friday: "8:00 AM - 4:30 PM"
        },
        donation: {
          monday: "7:30 AM - 5:00 PM",
          tuesday: "7:30 AM - 5:00 PM",
          wednesday: "7:30 AM - 5:00 PM",
          thursday: "7:30 AM - 5:00 PM",
          friday: "7:30 AM - 5:00 PM"
        }
      },
      description: "Statewide food distribution network serving Montana",
      services: {
        primary: [
          "Food Distribution",
          "Mail-A-Meal Program",
          "Mobile Food Pantry",
          "BackPack Program"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Rural Delivery Program"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Self-declared need"
        ],
        restrictions: "Montana residents only",
        frequency: "Varies by program"
      },
      capacity: {
        storageSpace: "40,000 sq ft",
        coldStorage: "10,000 sq ft",
        monthlyDistribution: "1M pounds",
        servingCapacity: "40,000 people/month"
      },
      partnerships: {
        retailers: ["Albertsons", "Walmart", "Costco", "Town & Country"],
        farms: ["Montana Grain Growers", "Local Ranches"],
        organizations: ["Feeding America", "No Kid Hungry Montana"]
      },
      impact: {
        annualPoundsDistributed: "12M",
        peopleServed: "141,000",
        countiesServed: 56,
        volunteerHours: "30,000"
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
          "Rural delivery"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Montana Gleaners",
      description: "Recovering surplus crops from Montana farms and gardens",
      contact: {
        name: "Program Director",
        phone: "(406) 555-0123",
        email: "glean@mtgleaners.org"
      },
      website: "mtgleaners.org",
      areas: ["Gallatin Valley", "Missoula Area", "Flathead Valley"],
      schedule: "June through October",
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
        annualPounds: 150000,
        servingAgencies: 25,
        volunteerHours: 5000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Big Sky Fresh Distribution",
      type: "Regional Distributor",
      address: "789 Distribution Road, Belgrade, MT 59714",
      coordinates: {
        lat: 45.786389,
        lng: -111.176389
      },
      contact: {
        name: "Operations Director",
        phone: "(406) 555-0124",
        email: "ops@bigskyfresh.org"
      },
      website: "bigskyfresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Montana and Northern Rocky Mountain region",
      requirements: {
        minimumOrder: "$300",
        leadTime: "48 hours",
        delivery: "Available for orders over $600"
      },
      certifications: [
        "USDA Approved",
        "Montana Certified",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Montana Farm to School",
      website: "montana.edu/mtfarmtoschool",
      coordinator: "State Farm to School Coordinator",
      phone: "(406) 994-4572",
      description: "Connecting Montana schools with fresh, local food"
    },
    marketVouchers: {
      name: "Montana Farmers Market Association",
      website: "mtfma.org",
      programs: [
        "Double SNAP Dollars",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default montanaResources;
