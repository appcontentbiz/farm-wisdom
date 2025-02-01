const wyomingResources = {
  state: "Wyoming",
  abbreviation: "WY",
  stateInfo: {
    capital: "Cheyenne",
    region: "Mountain West",
    agriculturalZones: ["3a", "3b", "4a", "4b", "5a", "5b", "6a"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Cattle",
      "Hay",
      "Sugar Beets",
      "Corn",
      "Wheat",
      "Sheep"
    ],
    agriculturalFacts: [
      "11,900 farms covering 29 million acres",
      "#8 producer of beef cattle in the US",
      "Agriculture contributes $1.8B annually to state economy",
      "Leading producer of wool in the Mountain region"
    ]
  },
  farmersMarkets: [
    {
      id: "WY001",
      name: "Cheyenne Farmers Market",
      type: "Seasonal Market",
      address: "Depot Plaza, 121 W 15th Street, Cheyenne, WY 82001",
      coordinates: {
        lat: 41.133333,
        lng: -104.816667
      },
      contact: {
        phone: "(307) 633-6401",
        email: "info@cheyennefarmersmarket.org",
        website: "cheyennefarmersmarket.org",
        socialMedia: {
          facebook: "CheyenneFarmersMarket",
          instagram: "@cheyennefarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "7:00 AM - 1:00 PM"
        },
        seasonalNotes: "August through October",
        holidays: "Special holiday markets"
      },
      description: "Downtown Cheyenne's vibrant farmers market",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Fresh Produce",
          "Meat",
          "Eggs",
          "Honey",
          "Baked Goods",
          "Crafts",
          "Plants"
        ],
        amenities: [
          "Live Music",
          "Food Trucks",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking"
        ],
        events: [
          "Cooking demonstrations",
          "Live music",
          "Kids activities",
          "Harvest festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 45,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $25, Season: $350",
        requirements: [
          "Wyoming-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Wyoming Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 2000,
        annualSales: "$800K",
        percentLocalProduce: 85
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-WY001",
      name: "Food Bank of Wyoming",
      type: "State Food Bank",
      address: "1920 Thomes Ave, Cheyenne, WY 82001",
      coordinates: {
        lat: 41.133333,
        lng: -104.816667
      },
      contact: {
        phone: "(307) 265-2172",
        email: "info@wyomingfoodbank.org",
        website: "wyomingfoodbank.org",
        emergencyContact: "(307) 265-2172 ext. 1"
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
      description: "Serving all 23 counties in Wyoming",
      services: {
        primary: [
          "Food Distribution",
          "Mobile Pantry",
          "BackPack Program",
          "Senior Box Program"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Food Recovery"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Self-declared need"
        ],
        restrictions: "Wyoming residents only",
        frequency: "Once per month per household"
      },
      capacity: {
        storageSpace: "35,000 sq ft",
        coldStorage: "8,000 sq ft",
        monthlyDistribution: "1M pounds",
        servingCapacity: "65,000 people/month"
      },
      partnerships: {
        retailers: ["Albertsons", "Walmart", "Smith's", "Ridley's"],
        farms: ["Wyoming Farm Bureau", "Local Ranches"],
        organizations: ["Feeding America", "Wyoming Hunger Initiative"]
      },
      impact: {
        annualPoundsDistributed: "12M",
        peopleServed: "65,000",
        countiesServed: 23,
        volunteerHours: "20,000"
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
      name: "Wyoming Gleaning Network",
      description: "Recovering surplus crops from Wyoming farms and ranches",
      contact: {
        name: "Program Director",
        phone: "(307) 555-0123",
        email: "glean@wyglean.org"
      },
      website: "wyglean.org",
      areas: ["Southeast Wyoming", "Big Horn Basin", "Wind River Region"],
      schedule: "July through September",
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
        servingAgencies: 25,
        volunteerHours: 4000
      }
    }
  ],
  distributionPartners: [
    {
      name: "High Plains Distribution",
      type: "Regional Distributor",
      address: "123 Distribution Way, Casper, WY 82601",
      coordinates: {
        lat: 42.850000,
        lng: -106.316667
      },
      contact: {
        name: "Operations Director",
        phone: "(307) 555-0124",
        email: "ops@highplainsdist.org"
      },
      website: "highplainsdist.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Wyoming and surrounding states",
      requirements: {
        minimumOrder: "$300",
        leadTime: "48 hours",
        delivery: "Available for orders over $600"
      },
      certifications: [
        "USDA Approved",
        "Wyoming First Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Wyoming Farm to School",
      website: "wyomingfarmtoschool.org",
      coordinator: "Farm to School Coordinator",
      phone: "(307) 777-6585",
      description: "Connecting Wyoming schools with fresh, local food"
    },
    marketVouchers: {
      name: "Wyoming Farmers Market Association",
      website: "wyomingfarmersmarkets.org",
      programs: [
        "Double Up Food Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default wyomingResources;
