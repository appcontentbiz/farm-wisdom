const northDakotaResources = {
  state: "North Dakota",
  abbreviation: "ND",
  stateInfo: {
    capital: "Bismarck",
    region: "Midwest",
    agriculturalZones: ["3a", "3b", "4a", "4b"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Wheat",
      "Soybeans",
      "Corn",
      "Canola",
      "Dry Edible Beans",
      "Honey"
    ],
    agriculturalFacts: [
      "26,100 farms covering 39.3 million acres",
      "#1 producer of spring wheat in the US",
      "Agriculture contributes $7.3B annually to state economy",
      "Leading producer of honey and canola"
    ]
  },
  farmersMarkets: [
    {
      id: "ND001",
      name: "BisMarket",
      type: "Community Market",
      address: "810 Kirkwood Mall, Bismarck, ND 58504",
      coordinates: {
        lat: 46.808333,
        lng: -100.783889
      },
      contact: {
        phone: "(701) 989-7590",
        email: "info@bismarket.com",
        website: "bismarket.com",
        socialMedia: {
          facebook: "BisMarketND",
          instagram: "@bismarketnd"
        }
      },
      schedule: {
        regularHours: {
          saturday: "10:00 AM - 1:00 PM"
        },
        seasonalNotes: "June through October",
        holidays: "Special holiday markets"
      },
      description: "Community-focused farmers market in Bismarck",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Fresh Produce",
          "Honey",
          "Baked Goods",
          "Meat",
          "Dairy",
          "Crafts"
        ],
        amenities: [
          "Indoor Location",
          "Restrooms",
          "Wheelchair Accessible",
          "Parking",
          "ATM"
        ],
        events: [
          "Live music",
          "Cooking demonstrations",
          "Kids activities",
          "Educational programs"
        ]
      },
      vendorInfo: {
        totalVendors: 45,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $20, Season: $300",
        requirements: [
          "North Dakota-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "North Dakota Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 1000,
        annualSales: "$500K",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-ND001",
      name: "Great Plains Food Bank",
      type: "State Food Bank",
      address: "1720 3rd Avenue North, Fargo, ND 58102",
      coordinates: {
        lat: 46.877778,
        lng: -96.789444
      },
      contact: {
        phone: "(701) 232-6219",
        email: "info@greatplainsfoodbank.org",
        website: "greatplainsfoodbank.org",
        emergencyContact: "(701) 232-6219 ext. 1"
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
      description: "Only food bank serving North Dakota and western Minnesota",
      services: {
        primary: [
          "Food Distribution",
          "Mobile Food Pantry",
          "BackPack Program",
          "Youth Summer Meals"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Rural Delivery"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Self-declared need"
        ],
        restrictions: "Service area residents only",
        frequency: "Once per month per household"
      },
      capacity: {
        storageSpace: "48,000 sq ft",
        coldStorage: "12,000 sq ft",
        monthlyDistribution: "1M pounds",
        servingCapacity: "97,000 people/month"
      },
      partnerships: {
        retailers: ["Hornbacher's", "Cash Wise", "Walmart", "Dan's Supermarket"],
        farms: ["ND Farmers Union", "Local Grain Farms"],
        organizations: ["Feeding America", "ND Department of Agriculture"]
      },
      impact: {
        annualPoundsDistributed: "13M",
        peopleServed: "97,000",
        countiesServed: 53,
        volunteerHours: "40,000"
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
          "BackPack program"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Prairie Gleaners",
      description: "Recovering surplus crops from North Dakota farms",
      contact: {
        name: "Program Director",
        phone: "(701) 555-0123",
        email: "glean@prairiegleaners.org"
      },
      website: "prairiegleaners.org",
      areas: ["Red River Valley", "Missouri River Region", "Western ND"],
      schedule: "July through October",
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
        annualPounds: 100000,
        servingAgencies: 20,
        volunteerHours: 3000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Dakota Fresh Distribution",
      type: "Regional Distributor",
      address: "123 Distribution Way, Fargo, ND 58103",
      coordinates: {
        lat: 46.877778,
        lng: -96.789444
      },
      contact: {
        name: "Operations Director",
        phone: "(701) 555-0124",
        email: "ops@dakotafresh.org"
      },
      website: "dakotafresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "North Dakota and Eastern Montana",
      requirements: {
        minimumOrder: "$250",
        leadTime: "48 hours",
        delivery: "Available for orders over $500"
      },
      certifications: [
        "USDA Approved",
        "Pride of Dakota Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "North Dakota Farm to School",
      website: "nd.gov/dpi/farmtoschool",
      coordinator: "State Farm to School Coordinator",
      phone: "(701) 328-2294",
      description: "Connecting North Dakota schools with fresh, local food"
    },
    marketVouchers: {
      name: "North Dakota Farmers Market Association",
      website: "ndfarmersmarkets.org",
      programs: [
        "Double Up Food Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default northDakotaResources;
