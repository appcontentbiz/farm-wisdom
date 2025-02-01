const southDakotaResources = {
  state: "South Dakota",
  abbreviation: "SD",
  stateInfo: {
    capital: "Pierre",
    region: "Midwest",
    agriculturalZones: ["3b", "4a", "4b", "5a"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Corn",
      "Soybeans",
      "Wheat",
      "Sunflowers",
      "Hay",
      "Cattle"
    ],
    agriculturalFacts: [
      "29,600 farms covering 43.2 million acres",
      "#1 producer of sunflowers in the US",
      "Agriculture contributes $32.1B annually to state economy",
      "Leading producer of bison and pheasants"
    ]
  },
  farmersMarkets: [
    {
      id: "SD001",
      name: "Falls Park Farmers Market",
      type: "Community Market",
      address: "309 E Falls Park Drive, Sioux Falls, SD 57103",
      coordinates: {
        lat: 43.550000,
        lng: -96.716667
      },
      contact: {
        phone: "(605) 929-4422",
        email: "info@fallsparkmarket.com",
        website: "fallsparkmarket.com",
        socialMedia: {
          facebook: "FallsParkMarket",
          instagram: "@fallsparkmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "8:00 AM - 1:00 PM"
        },
        seasonalNotes: "May through October",
        holidays: "Special holiday markets"
      },
      description: "Sioux Falls' largest outdoor farmers market",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Dakota"],
        products: [
          "Fresh Produce",
          "Meat",
          "Dairy",
          "Baked Goods",
          "Honey",
          "Crafts",
          "Plants"
        ],
        amenities: [
          "Live Music",
          "Food Trucks",
          "Restrooms",
          "Wheelchair Accessible",
          "Free Parking"
        ],
        events: [
          "Cooking demonstrations",
          "Live music",
          "Kids activities",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 50,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $25, Season: $400",
        requirements: [
          "South Dakota-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "South Dakota Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 2000,
        annualSales: "$800K",
        percentLocalProduce: 95
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-SD001",
      name: "Feeding South Dakota",
      type: "State Food Bank",
      address: "4701 N Westport Avenue, Sioux Falls, SD 57107",
      coordinates: {
        lat: 43.583333,
        lng: -96.733333
      },
      contact: {
        phone: "(605) 335-0364",
        email: "info@feedingsouthdakota.org",
        website: "feedingsouthdakota.org",
        emergencyContact: "(605) 335-0364 ext. 1"
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
      description: "Serving all of South Dakota through multiple distribution centers",
      services: {
        primary: [
          "Food Distribution",
          "Mobile Food Pantry",
          "BackPack Program",
          "Rural Delivery"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Native American Outreach"
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
        storageSpace: "100,000 sq ft",
        coldStorage: "25,000 sq ft",
        monthlyDistribution: "1.5M pounds",
        servingCapacity: "100,000 people/month"
      },
      partnerships: {
        retailers: ["Hy-Vee", "Walmart", "Lewis Drug", "Sunshine Foods"],
        farms: ["SD Farm Bureau", "Local Grain Farms"],
        organizations: ["Feeding America", "Dakota Rural Action"]
      },
      impact: {
        annualPoundsDistributed: "15.5M",
        peopleServed: "100,000",
        countiesServed: 66,
        volunteerHours: "45,000"
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
      name: "Dakota Gleaners",
      description: "Recovering surplus crops from South Dakota farms",
      contact: {
        name: "Program Director",
        phone: "(605) 555-0123",
        email: "glean@dakotagleaners.org"
      },
      website: "dakotagleaners.org",
      areas: ["Eastern South Dakota", "Black Hills Region", "Missouri River Region"],
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
        annualPounds: 200000,
        servingAgencies: 30,
        volunteerHours: 6000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Dakota Fresh Distribution",
      type: "Regional Distributor",
      address: "789 Distribution Way, Sioux Falls, SD 57104",
      coordinates: {
        lat: 43.550000,
        lng: -96.700000
      },
      contact: {
        name: "Operations Director",
        phone: "(605) 555-0124",
        email: "ops@dakotafresh.org"
      },
      website: "dakotafresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "South Dakota and surrounding states",
      requirements: {
        minimumOrder: "$300",
        leadTime: "48 hours",
        delivery: "Available for orders over $600"
      },
      certifications: [
        "USDA Approved",
        "South Dakota Made Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "South Dakota Farm to School",
      website: "sdfarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(605) 773-5425",
      description: "Connecting South Dakota schools with fresh, local food"
    },
    marketVouchers: {
      name: "South Dakota Farmers Market Association",
      website: "sdfarmersmarkets.org",
      programs: [
        "Double Up Dakota",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default southDakotaResources;
