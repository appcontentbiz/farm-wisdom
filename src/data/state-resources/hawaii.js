const hawaiiResources = {
  state: "Hawaii",
  abbreviation: "HI",
  stateInfo: {
    capital: "Honolulu",
    region: "Pacific",
    agriculturalZones: ["11a", "11b", "12a", "12b", "13a"],
    growingSeasons: {
      spring: "Year-round",
      summer: "Year-round",
      fall: "Year-round",
      winter: "Year-round"
    },
    keyCrops: [
      "Pineapples",
      "Macadamia Nuts",
      "Coffee",
      "Taro",
      "Tropical Fruits",
      "Sugar Cane"
    ],
    agriculturalFacts: [
      "Over 7,000 farms covering 1.1 million acres",
      "Agriculture contributes $2.9 billion to state economy",
      "Only US state growing coffee commercially",
      "Year-round growing season"
    ]
  },
  farmersMarkets: [
    {
      id: "HI001",
      name: "KCC Farmers Market",
      type: "Community Market",
      address: "4303 Diamond Head Road, Honolulu, HI 96816",
      coordinates: {
        lat: 21.268839,
        lng: -157.798716
      },
      contact: {
        phone: "(808) 848-2074",
        email: "info@hfbf.org",
        website: "hfbf.org/markets",
        socialMedia: {
          facebook: "KCCFarmersMarket",
          instagram: "@kccfarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "7:30 AM - 11:00 AM",
          tuesday: "4:00 PM - 7:00 PM"
        },
        seasonalNotes: "Open year-round",
        holidays: "Closed on major holidays"
      },
      description: "Hawaii's largest farmers market featuring local produce and products",
      features: {
        paymentOptions: ["Cash", "Credit Card", "EBT", "DA BUX Double Up"],
        products: [
          "Tropical Fruits",
          "Local Vegetables",
          "Fresh Fish",
          "Coffee",
          "Prepared Foods",
          "Local Crafts"
        ],
        amenities: [
          "Ocean View",
          "Free Parking",
          "Restrooms",
          "Wheelchair Accessible",
          "Food Court"
        ],
        events: [
          "Cooking demonstrations",
          "Cultural performances",
          "Agricultural education",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 100,
        applicationProcess: "Competitive selection",
        vendorFees: "Daily: $45, Month: $160",
        requirements: [
          "Hawaii-grown/made products",
          "Insurance required",
          "Health permits",
          "Quality standards"
        ]
      },
      certification: {
        type: "Hawaii Seal of Quality",
        inspections: "Monthly",
        lastInspection: "2024-12-15"
      },
      statistics: {
        averageWeeklyVisitors: 7500,
        annualSales: "$3.5M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-HI001",
      name: "Hawaii Foodbank",
      type: "Statewide Food Bank",
      address: "2611 Kilihau Street, Honolulu, HI 96819",
      coordinates: {
        lat: 21.336389,
        lng: -157.875278
      },
      contact: {
        phone: "(808) 836-3600",
        email: "info@hawaiifoodbank.org",
        website: "hawaiifoodbank.org",
        emergencyContact: "(808) 836-3600 ext. 1"
      },
      hours: {
        distribution: {
          monday: "7:30 AM - 4:00 PM",
          tuesday: "7:30 AM - 4:00 PM",
          wednesday: "7:30 AM - 4:00 PM",
          thursday: "7:30 AM - 4:00 PM",
          friday: "7:30 AM - 4:00 PM"
        },
        donation: {
          monday: "7:00 AM - 5:00 PM",
          tuesday: "7:00 AM - 5:00 PM",
          wednesday: "7:00 AM - 5:00 PM",
          thursday: "7:00 AM - 5:00 PM",
          friday: "7:00 AM - 5:00 PM"
        }
      },
      description: "Serving all Hawaiian islands with emergency food assistance",
      services: {
        primary: [
          "Food Distribution",
          "Senior Food Box",
          "Keiki BackPack Program",
          "Mobile Pantry"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Disaster Response",
          "Agency Training"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of Hawaii residence",
          "Self-declared need"
        ],
        restrictions: "Hawaii residents only",
        frequency: "Monthly distribution"
      },
      capacity: {
        storageSpace: "94,000 sq ft",
        coldStorage: "25,000 sq ft",
        monthlyDistribution: "1M pounds",
        servingCapacity: "25,000 households/month"
      },
      partnerships: {
        retailers: ["Foodland", "Times", "Costco", "Sam's Club"],
        farms: ["Hawaii Farm Bureau", "Local Fruit Growers"],
        organizations: ["Feeding America", "Hawaii Food Alliance"]
      },
      impact: {
        annualPoundsDistributed: "12M",
        peopleServed: "200,000",
        islandsServed: 6,
        volunteerHours: "50,000"
      },
      needs: {
        criticalItems: [
          "Canned proteins",
          "Rice",
          "Fresh produce",
          "Shelf-stable milk"
        ],
        volunteerRoles: [
          "Food sorting",
          "Mobile pantry",
          "Office support",
          "Special events"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Hawaii Gleaning Network",
      description: "Harvesting surplus tropical fruits and produce across Hawaii",
      contact: {
        name: "Program Director",
        phone: "(808) 555-0123",
        email: "glean@hawaiigleans.org"
      },
      website: "hawaiigleans.org",
      areas: ["Oahu", "Maui", "Big Island", "Kauai"],
      schedule: "Year-round",
      requirements: {
        volunteers: [
          "Must be 14 or older",
          "Sign waiver",
          "Attend orientation",
          "Sun protection required"
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
        volunteerHours: 8000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Hawaii Fresh Distribution",
      type: "Inter-island Distributor",
      address: "91-319 Olai Street, Kapolei, HI 96707",
      coordinates: {
        lat: 21.316667,
        lng: -158.083333
      },
      contact: {
        name: "Operations Manager",
        phone: "(808) 555-0124",
        email: "ops@hawaiifreshdist.org"
      },
      website: "hawaiifreshdist.org",
      services: [
        "Inter-island Distribution",
        "Cold Chain Management",
        "Processing",
        "Export Services"
      ],
      coverage: "All Hawaiian Islands",
      requirements: {
        minimumOrder: "$250",
        leadTime: "72 hours",
        delivery: "Available for orders over $500"
      },
      certifications: [
        "USDA Approved",
        "Hawaii Seal of Quality",
        "Food Safety Certified",
        "GAP Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Hawaii Farm to School Hui",
      website: "hiphi.org/farmtoschool",
      coordinator: "State Farm to School Coordinator",
      phone: "(808) 369-9300",
      description: "Connecting Hawaii schools with fresh, local produce"
    },
    marketVouchers: {
      name: "DA BUX Double Up Food Bucks",
      website: "dabux.org",
      programs: [
        "SNAP Double-Up Program",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default hawaiiResources;
