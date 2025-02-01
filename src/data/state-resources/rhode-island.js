const rhodeIslandResources = {
  state: "Rhode Island",
  abbreviation: "RI",
  stateInfo: {
    capital: "Providence",
    region: "New England",
    agriculturalZones: ["6a", "6b", "7a"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Nursery Products",
      "Greenhouse Vegetables",
      "Apples",
      "Sweet Corn",
      "Dairy",
      "Aquaculture"
    ],
    agriculturalFacts: [
      "1,200 farms covering 56,000 acres",
      "Leading producer of nursery and greenhouse products in New England",
      "Agriculture contributes $239M annually to state economy",
      "Strong focus on urban agriculture and aquaculture"
    ]
  },
  farmersMarkets: [
    {
      id: "RI001",
      name: "Hope Street Farmers Market",
      type: "Seasonal Market",
      address: "1000 Hope Street, Providence, RI 02906",
      coordinates: {
        lat: 41.855556,
        lng: -71.383333
      },
      contact: {
        phone: "(401) 533-2345",
        email: "info@hopestreetmarket.com",
        website: "hopestreetmarket.org",
        socialMedia: {
          facebook: "HopeStreetMarket",
          instagram: "@hopestreetfm"
        }
      },
      schedule: {
        regularHours: {
          wednesday: "3:00 PM - 7:00 PM",
          saturday: "9:00 AM - 1:00 PM"
        },
        seasonalNotes: "May through October",
        holidays: "Closed on major holidays"
      },
      description: "Providence's largest farmers market",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Bonus Bucks"],
        products: [
          "Fresh Produce",
          "Seafood",
          "Dairy",
          "Baked Goods",
          "Prepared Foods",
          "Flowers",
          "Artisanal Products"
        ],
        amenities: [
          "Live Music",
          "Food Trucks",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking"
        ],
        events: [
          "Chef demonstrations",
          "Live music",
          "Kids activities",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 40,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $35, Season: $500",
        requirements: [
          "Rhode Island-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Rhode Island Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 2000,
        annualSales: "$800K",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-RI001",
      name: "Rhode Island Community Food Bank",
      type: "State Food Bank",
      address: "200 Niantic Avenue, Providence, RI 02907",
      coordinates: {
        lat: 41.805556,
        lng: -71.433333
      },
      contact: {
        phone: "(401) 942-6325",
        email: "info@rifoodbank.org",
        website: "rifoodbank.org",
        emergencyContact: "(401) 942-6325 ext. 1"
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
      description: "Serving all of Rhode Island through member agencies",
      services: {
        primary: [
          "Food Distribution",
          "Kids Cafe",
          "Senior Food Box",
          "Mobile Food Pantry"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Community Kitchen"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Self-declared need"
        ],
        restrictions: "Rhode Island residents only",
        frequency: "Once per month per household"
      },
      capacity: {
        storageSpace: "77,000 sq ft",
        coldStorage: "15,000 sq ft",
        monthlyDistribution: "1M pounds",
        servingCapacity: "68,000 people/month"
      },
      partnerships: {
        retailers: ["Stop & Shop", "Shaw's", "Dave's Fresh Marketplace"],
        farms: ["RI Farm Bureau", "Local Urban Farms"],
        organizations: ["Feeding America", "Farm Fresh Rhode Island"]
      },
      impact: {
        annualPoundsDistributed: "12M",
        peopleServed: "68,000",
        countiesServed: 5,
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
          "Community Kitchen",
          "Office support",
          "Mobile pantry"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Rhode Island Gleaners",
      description: "Recovering surplus crops from Rhode Island farms",
      contact: {
        name: "Program Director",
        phone: "(401) 555-0123",
        email: "glean@rigleaners.org"
      },
      website: "rigleaners.org",
      areas: ["Providence County", "Kent County", "Newport County"],
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
        annualPounds: 100000,
        servingAgencies: 25,
        volunteerHours: 5000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Ocean State Fresh Distribution",
      type: "Regional Distributor",
      address: "123 Distribution Way, Warwick, RI 02886",
      coordinates: {
        lat: 41.716667,
        lng: -71.483333
      },
      contact: {
        name: "Operations Director",
        phone: "(401) 555-0124",
        email: "ops@oceanstatefresh.org"
      },
      website: "oceanstatefresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Rhode Island and southeastern Massachusetts",
      requirements: {
        minimumOrder: "$250",
        leadTime: "48 hours",
        delivery: "Available for orders over $500"
      },
      certifications: [
        "USDA Approved",
        "Rhode Island Grown Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Rhode Island Farm to School",
      website: "rifarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(401) 222-2781",
      description: "Connecting Rhode Island schools with fresh, local food"
    },
    marketVouchers: {
      name: "Farm Fresh Rhode Island",
      website: "farmfreshri.org",
      programs: [
        "Bonus Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default rhodeIslandResources;
