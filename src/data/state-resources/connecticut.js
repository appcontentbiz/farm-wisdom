const connecticutResources = {
  state: "Connecticut",
  abbreviation: "CT",
  stateInfo: {
    capital: "Hartford",
    region: "New England",
    agriculturalZones: ["5b", "6a", "6b", "7a"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Dairy",
      "Nursery/Greenhouse",
      "Maple Syrup",
      "Apples",
      "Sweet Corn",
      "Tobacco"
    ],
    agriculturalFacts: [
      "Over 5,500 farms covering 380,000 acres",
      "Average farm size is 69 acres",
      "Agriculture contributes $4 billion to state economy",
      "Leader in nursery and greenhouse production in New England"
    ]
  },
  farmersMarkets: [
    {
      id: "CT001",
      name: "Coventry Regional Farmers' Market",
      type: "Producer-Only Market",
      address: "2299 South Street, Coventry, CT 06238",
      coordinates: {
        lat: 41.770374,
        lng: -72.307519
      },
      contact: {
        phone: "(860) 742-5324",
        email: "info@coventryfarmersmarket.org",
        website: "coventryfarmersmarket.org",
        socialMedia: {
          facebook: "CoventryFarmersMarket",
          instagram: "@coventryfarmers"
        }
      },
      schedule: {
        regularHours: {
          sunday: "11:00 AM - 2:00 PM"
        },
        seasonalNotes: "June through October, Winter Market monthly November-May",
        holidays: "Special holiday markets"
      },
      description: "One of New England's largest and most diverse farmers markets",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "WIC", "Senior FMNP"],
        products: [
          "Local Produce",
          "Dairy Products",
          "Maple Products",
          "Artisan Foods",
          "Baked Goods",
          "Cut Flowers"
        ],
        amenities: [
          "Historic Location",
          "Parking",
          "Restrooms",
          "Wheelchair Accessible",
          "Live Music"
        ],
        events: [
          "Farm education",
          "Cooking demonstrations",
          "Live music",
          "Children's activities"
        ]
      },
      vendorInfo: {
        totalVendors: 75,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $35, Season: $500",
        requirements: [
          "Connecticut-grown/made products",
          "Insurance required",
          "Health department permits",
          "Producer-only verification"
        ]
      },
      certification: {
        type: "Connecticut Grown Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-01"
      },
      statistics: {
        averageWeeklyVisitors: 2000,
        annualSales: "$1.2M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-CT001",
      name: "Connecticut Food Bank",
      type: "Regional Food Bank",
      address: "2 Research Parkway, Wallingford, CT 06492",
      coordinates: {
        lat: 41.456778,
        lng: -72.823318
      },
      contact: {
        phone: "(203) 469-5000",
        email: "info@ctfoodbank.org",
        website: "ctfoodbank.org",
        emergencyContact: "(203) 469-5000 ext. 1"
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
      description: "Serving six of eight Connecticut counties with emergency food assistance",
      services: {
        primary: [
          "Mobile Pantry",
          "SNAP Outreach",
          "Senior Box Program",
          "Kids' BackPack Program"
        ],
        additional: [
          "Nutrition Education",
          "Agency Training",
          "Food Safety Training",
          "Benefits Screening"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Self-declared need"
        ],
        restrictions: "Service area residents only",
        frequency: "Varies by program"
      },
      capacity: {
        storageSpace: "85,000 sq ft",
        coldStorage: "20,000 sq ft",
        monthlyDistribution: "2.5M pounds",
        servingCapacity: "30,000 households/month"
      },
      partnerships: {
        retailers: ["Stop & Shop", "ShopRite", "Big Y", "Whole Foods"],
        farms: ["Connecticut Farm to Food Bank", "Local Dairy Farms"],
        organizations: ["Feeding America", "Connecticut Food System Alliance"]
      },
      impact: {
        annualPoundsDistributed: "30M",
        peopleServed: "200,000",
        countiesServed: 6,
        volunteerHours: "40,000"
      },
      needs: {
        criticalItems: [
          "Protein items",
          "Dairy products",
          "Fresh produce",
          "Whole grains"
        ],
        volunteerRoles: [
          "Food sorting",
          "Mobile pantry support",
          "Office support",
          "Drivers"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Connecticut Gleaners",
      description: "Harvesting surplus produce from Connecticut farms",
      contact: {
        name: "Program Coordinator",
        phone: "(860) 555-0123",
        email: "glean@ctgleaners.org"
      },
      website: "ctgleaners.org",
      areas: ["Hartford County", "New Haven County", "Fairfield County"],
      schedule: "May through November",
      requirements: {
        volunteers: [
          "Must be 14 or older",
          "Sign waiver",
          "Attend orientation",
          "Weather-appropriate clothing"
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
        volunteerHours: 5000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Connecticut Farm Fresh",
      type: "Regional Distributor",
      address: "123 Market Street, Hartford, CT 06103",
      coordinates: {
        lat: 41.763710,
        lng: -72.674205
      },
      contact: {
        name: "Operations Manager",
        phone: "(860) 555-0124",
        email: "ops@ctfarmfresh.org"
      },
      website: "ctfarmfresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Farm to Institution"
      ],
      coverage: "Statewide",
      requirements: {
        minimumOrder: "$200",
        leadTime: "48 hours",
        delivery: "Available for orders over $500"
      },
      certifications: [
        "USDA Approved",
        "Connecticut Grown Partner",
        "GAP Certified",
        "Organic Handler"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Connecticut Farm to School",
      website: "ctfarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(860) 713-5250",
      description: "Connecting schools with local farms for fresh, healthy meals"
    },
    marketVouchers: {
      name: "Connecticut Farmers' Market Program",
      website: "ct.gov/doag/farmersmarkets",
      programs: [
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program",
        "CT Fresh Match"
      ]
    }
  }
};

export default connecticutResources;
