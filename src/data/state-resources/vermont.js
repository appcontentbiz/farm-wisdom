const vermontResources = {
  state: "Vermont",
  abbreviation: "VT",
  stateInfo: {
    capital: "Montpelier",
    region: "New England",
    agriculturalZones: ["3b", "4a", "4b", "5a"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Dairy",
      "Maple Syrup",
      "Apples",
      "Sweet Corn",
      "Hay",
      "Christmas Trees"
    ],
    agriculturalFacts: [
      "6,800 farms covering 1.2 million acres",
      "#1 producer of maple syrup in the US",
      "Agriculture contributes $2.2B annually to state economy",
      "Leading organic farming state per capita"
    ]
  },
  farmersMarkets: [
    {
      id: "VT001",
      name: "Burlington Farmers Market",
      type: "Year-round Market",
      address: "345 Pine Street, Burlington, VT 05401",
      coordinates: {
        lat: 44.475833,
        lng: -73.212222
      },
      contact: {
        phone: "(802) 310-5172",
        email: "info@burlingtonfarmersmarket.org",
        website: "burlingtonfarmersmarket.org",
        socialMedia: {
          facebook: "BurlingtonFarmersMarket",
          instagram: "@btv_farmersmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "9:00 AM - 2:00 PM"
        },
        seasonalNotes: "Outdoor May-October, Indoor November-April",
        holidays: "Special holiday markets"
      },
      description: "Vermont's largest and most diverse farmers market",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Farm to Family"],
        products: [
          "Fresh Produce",
          "Maple Products",
          "Dairy",
          "Meat",
          "Baked Goods",
          "Crafts",
          "Prepared Foods"
        ],
        amenities: [
          "Live Music",
          "Food Court",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking"
        ],
        events: [
          "Cooking demonstrations",
          "Live music",
          "Kids activities",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 90,
        applicationProcess: "Annual juried application process",
        vendorFees: "Daily: $40, Season: $650",
        requirements: [
          "Vermont-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Vermont Agency of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 3000,
        annualSales: "$2M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-VT001",
      name: "Vermont Foodbank",
      type: "State Food Bank",
      address: "33 Parker Road, Barre, VT 05641",
      coordinates: {
        lat: 44.200000,
        lng: -72.516667
      },
      contact: {
        phone: "(802) 476-3341",
        email: "info@vtfoodbank.org",
        website: "vtfoodbank.org",
        emergencyContact: "(802) 476-3341 ext. 1"
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
      description: "Serving all of Vermont through multiple distribution centers",
      services: {
        primary: [
          "Food Distribution",
          "VeggieVanGo",
          "BackPack Program",
          "Commodity Program"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Food Rescue"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Self-declared need"
        ],
        restrictions: "Vermont residents only",
        frequency: "Once per month per household"
      },
      capacity: {
        storageSpace: "62,000 sq ft",
        coldStorage: "15,000 sq ft",
        monthlyDistribution: "1M pounds",
        servingCapacity: "153,000 people/month"
      },
      partnerships: {
        retailers: ["Hannaford", "Price Chopper", "Shaw's", "Walmart"],
        farms: ["Vermont Farm Bureau", "Local Dairy Farms"],
        organizations: ["Feeding America", "NOFA Vermont"]
      },
      impact: {
        annualPoundsDistributed: "11.7M",
        peopleServed: "153,000",
        countiesServed: 14,
        volunteerHours: "25,000"
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
          "VeggieVanGo",
          "Office support",
          "BackPack program"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Salvation Farms",
      description: "Building increased resilience in Vermont's food system",
      contact: {
        name: "Program Director",
        phone: "(802) 555-0123",
        email: "glean@salvationfarms.org"
      },
      website: "salvationfarms.org",
      areas: ["Lamoille Valley", "Chittenden County", "Northeast Kingdom"],
      schedule: "June through October",
      requirements: {
        volunteers: [
          "Must be 14 or older",
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
        servingAgencies: 45,
        volunteerHours: 8000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Green Mountain Distribution",
      type: "Regional Distributor",
      address: "123 Distribution Lane, Montpelier, VT 05602",
      coordinates: {
        lat: 44.250000,
        lng: -72.566667
      },
      contact: {
        name: "Operations Director",
        phone: "(802) 555-0124",
        email: "ops@greenmtndist.org"
      },
      website: "greenmtndist.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Vermont and surrounding states",
      requirements: {
        minimumOrder: "$250",
        leadTime: "48 hours",
        delivery: "Available for orders over $500"
      },
      certifications: [
        "USDA Approved",
        "Vermont Fresh Network Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Vermont FEED",
      website: "vtfeed.org",
      coordinator: "Farm to School Coordinator",
      phone: "(802) 434-4122",
      description: "Farm to School & Early Childhood program"
    },
    marketVouchers: {
      name: "NOFA Vermont",
      website: "nofavt.org",
      programs: [
        "Farm to Family",
        "Senior Farmers Market Nutrition Program",
        "Crop Cash"
      ]
    }
  }
};

export default vermontResources;
