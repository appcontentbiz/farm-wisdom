const ohioResources = {
  state: "Ohio",
  abbreviation: "OH",
  stateInfo: {
    capital: "Columbus",
    region: "Midwest",
    agriculturalZones: ["5b", "6a", "6b"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Soybeans",
      "Corn",
      "Wheat",
      "Tomatoes",
      "Apples",
      "Dairy"
    ],
    agriculturalFacts: [
      "77,800 farms covering 13.9 million acres",
      "#1 producer of Swiss cheese in the US",
      "Agriculture contributes $124B annually to state economy",
      "Leading producer of greenhouse tomatoes"
    ]
  },
  farmersMarkets: [
    {
      id: "OH001",
      name: "North Market",
      type: "Historic Public Market",
      address: "59 Spruce Street, Columbus, OH 43215",
      coordinates: {
        lat: 39.969722,
        lng: -83.005278
      },
      contact: {
        phone: "(614) 463-9664",
        email: "info@northmarket.com",
        website: "northmarket.com",
        socialMedia: {
          facebook: "NorthMarket",
          instagram: "@northmarket"
        }
      },
      schedule: {
        regularHours: {
          tuesday: "9:00 AM - 5:00 PM",
          wednesday: "9:00 AM - 5:00 PM",
          thursday: "9:00 AM - 5:00 PM",
          friday: "9:00 AM - 5:00 PM",
          saturday: "8:00 AM - 5:00 PM",
          sunday: "10:00 AM - 5:00 PM"
        },
        seasonalNotes: "Year-round market",
        holidays: "Special holiday hours"
      },
      description: "Historic public market operating since 1876",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Produce Perks"],
        products: [
          "Fresh Produce",
          "Meat",
          "Seafood",
          "Baked Goods",
          "Prepared Foods",
          "Specialty Items"
        ],
        amenities: [
          "Indoor Location",
          "Restaurants",
          "Restrooms",
          "Wheelchair Accessible",
          "Parking"
        ],
        events: [
          "Food festivals",
          "Cooking classes",
          "Market tours",
          "Special events"
        ]
      },
      vendorInfo: {
        totalVendors: 35,
        applicationProcess: "Competitive application process",
        vendorFees: "Monthly: $800-1200",
        requirements: [
          "Ohio-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Ohio Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 20000,
        annualSales: "$8M",
        percentLocalProduce: 80
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-OH001",
      name: "Mid-Ohio Food Collective",
      type: "Regional Food Bank",
      address: "3960 Brookham Drive, Grove City, OH 43123",
      coordinates: {
        lat: 39.881944,
        lng: -83.083333
      },
      contact: {
        phone: "(614) 277-3663",
        email: "info@midohiofoodbank.org",
        website: "midohiofoodbank.org",
        emergencyContact: "(614) 277-3663 ext. 1"
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
      description: "Central and eastern Ohio's largest food bank",
      services: {
        primary: [
          "Food Distribution",
          "South Side Market",
          "Mobile Markets",
          "Wellness Programs"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Urban Farms"
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
        storageSpace: "204,000 sq ft",
        coldStorage: "50,000 sq ft",
        monthlyDistribution: "5M pounds",
        servingCapacity: "525,000 people/month"
      },
      partnerships: {
        retailers: ["Kroger", "Giant Eagle", "Walmart", "Meijer"],
        farms: ["Ohio Farm Bureau", "Local Produce Farms"],
        organizations: ["Feeding America", "Ohio Association of Food Banks"]
      },
      impact: {
        annualPoundsDistributed: "75M",
        peopleServed: "525,000",
        countiesServed: 20,
        volunteerHours: "128,000"
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
          "Mobile market",
          "Office support",
          "Urban farming"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Ohio Gleaners",
      description: "Recovering surplus crops from Ohio farms and orchards",
      contact: {
        name: "Program Director",
        phone: "(614) 555-0123",
        email: "glean@ohiogleaners.org"
      },
      website: "ohiogleaners.org",
      areas: ["Central Ohio", "Northeast Ohio", "Southwest Ohio"],
      schedule: "May through November",
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
        annualPounds: 750000,
        servingAgencies: 80,
        volunteerHours: 20000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Buckeye Fresh Distribution",
      type: "Regional Distributor",
      address: "789 Distribution Drive, Columbus, OH 43215",
      coordinates: {
        lat: 39.961389,
        lng: -82.998889
      },
      contact: {
        name: "Operations Director",
        phone: "(614) 555-0124",
        email: "ops@buckeyefresh.org"
      },
      website: "buckeyefresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Ohio and surrounding states",
      requirements: {
        minimumOrder: "$350",
        leadTime: "48 hours",
        delivery: "Available for orders over $700"
      },
      certifications: [
        "USDA Approved",
        "Ohio Proud Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Ohio Farm to School",
      website: "farmtoschool.osu.edu",
      coordinator: "State Farm to School Coordinator",
      phone: "(614) 688-4583",
      description: "Connecting Ohio schools with fresh, local food"
    },
    marketVouchers: {
      name: "Ohio Farmers Market Network",
      website: "ohiofarmersmarkets.org",
      programs: [
        "Produce Perks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default ohioResources;
