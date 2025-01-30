const louisianaResources = {
  state: "Louisiana",
  abbreviation: "LA",
  stateInfo: {
    capital: "Baton Rouge",
    region: "South",
    agriculturalZones: ["8a", "8b", "9a", "9b"],
    growingSeasons: {
      spring: "February to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to January"
    },
    keyCrops: [
      "Sugarcane",
      "Rice",
      "Cotton",
      "Sweet Potatoes",
      "Crawfish",
      "Soybeans"
    ],
    agriculturalFacts: [
      "Over 27,000 farms covering 8 million acres",
      "Agriculture contributes $12.7 billion to state economy",
      "#1 producer of crawfish in the US",
      "Leading producer of sugarcane"
    ]
  },
  farmersMarkets: [
    {
      id: "LA001",
      name: "Crescent City Farmers Market",
      type: "Producer-Only Market",
      address: "750 Carondelet St, New Orleans, LA 70130",
      coordinates: {
        lat: 29.945557,
        lng: -90.070280
      },
      contact: {
        phone: "(504) 861-4488",
        email: "info@crescentcityfarmersmarket.org",
        website: "crescentcityfarmersmarket.org",
        socialMedia: {
          facebook: "CrescentCityFarmersMarket",
          instagram: "@crescentcityfm"
        }
      },
      schedule: {
        regularHours: {
          tuesday: "9:00 AM - 1:00 PM",
          thursday: "3:00 PM - 7:00 PM",
          sunday: "9:00 AM - 1:00 PM"
        },
        seasonalNotes: "Year-round market",
        holidays: "Special holiday markets"
      },
      description: "New Orleans' premier farmers market since 1995",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Market Match"],
        products: [
          "Local Produce",
          "Gulf Seafood",
          "Cajun Specialties",
          "Baked Goods",
          "Local Honey",
          "Prepared Foods"
        ],
        amenities: [
          "Urban Location",
          "Live Music",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking"
        ],
        events: [
          "Chef demonstrations",
          "Live music",
          "Cultural celebrations",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 70,
        applicationProcess: "Annual jury process",
        vendorFees: "Daily: $40, Season: $700",
        requirements: [
          "Louisiana-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer-only verification"
        ]
      },
      certification: {
        type: "Certified Louisiana Farmers Market",
        inspections: "Monthly",
        lastInspection: "2024-12-10"
      },
      statistics: {
        averageWeeklyVisitors: 6000,
        annualSales: "$2.5M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-LA001",
      name: "Second Harvest Food Bank",
      type: "Regional Food Bank",
      address: "700 Edwards Ave, New Orleans, LA 70123",
      coordinates: {
        lat: 29.960833,
        lng: -90.161389
      },
      contact: {
        phone: "(504) 734-1322",
        email: "info@secondharvest.org",
        website: "no-hunger.org",
        emergencyContact: "(504) 734-1322 ext. 1"
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
      description: "Serving south Louisiana with emergency food assistance",
      services: {
        primary: [
          "Food Distribution",
          "Kids Cafe",
          "Summer Feeding",
          "Mobile Pantry"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Disaster Response",
          "Community Kitchen"
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
        storageSpace: "200,000 sq ft",
        coldStorage: "45,000 sq ft",
        monthlyDistribution: "3M pounds",
        servingCapacity: "45,000 households/month"
      },
      partnerships: {
        retailers: ["Rouses", "Walmart", "Winn-Dixie", "Whole Foods"],
        farms: ["Louisiana Farm Bureau", "Local Sugar Farms"],
        organizations: ["Feeding America", "Louisiana Food Bank Association"]
      },
      impact: {
        annualPoundsDistributed: "36M",
        peopleServed: "325,000",
        countiesServed: 23,
        volunteerHours: "85,000"
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
          "Community Kitchen"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Louisiana Harvest",
      description: "Recovering surplus crops from Louisiana farms",
      contact: {
        name: "Program Director",
        phone: "(504) 555-0123",
        email: "glean@laharvest.org"
      },
      website: "laharvest.org",
      areas: ["South Louisiana", "Central Louisiana", "North Louisiana"],
      schedule: "Year-round",
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
        annualPounds: 400000,
        servingAgencies: 45,
        volunteerHours: 11000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Bayou Fresh Distribution",
      type: "Regional Distributor",
      address: "456 Distribution Ave, Lafayette, LA 70506",
      coordinates: {
        lat: 30.224090,
        lng: -92.019843
      },
      contact: {
        name: "Operations Director",
        phone: "(337) 555-0124",
        email: "ops@bayoufresh.org"
      },
      website: "bayoufreshdist.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Louisiana and Gulf Coast states",
      requirements: {
        minimumOrder: "$400",
        leadTime: "48 hours",
        delivery: "Available for orders over $800"
      },
      certifications: [
        "USDA Approved",
        "Certified Louisiana Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Louisiana Farm to School Program",
      website: "louisianafarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(225) 578-2978",
      description: "Connecting Louisiana schools with fresh, local produce"
    },
    marketVouchers: {
      name: "Louisiana Farmers Market Association",
      website: "lafma.org",
      programs: [
        "Market Match Program",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default louisianaResources;
