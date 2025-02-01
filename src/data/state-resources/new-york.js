const newYorkResources = {
  state: "New York",
  abbreviation: "NY",
  stateInfo: {
    capital: "Albany",
    region: "Northeast",
    agriculturalZones: ["3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Apples",
      "Dairy",
      "Cabbage",
      "Sweet Corn",
      "Maple Syrup",
      "Wine Grapes"
    ],
    agriculturalFacts: [
      "33,400 farms covering 6.9 million acres",
      "#2 producer of apples in the US",
      "Agriculture contributes $5.7B annually to state economy",
      "Leading producer of cabbage and maple syrup"
    ]
  },
  farmersMarkets: [
    {
      id: "NY001",
      name: "Union Square Greenmarket",
      type: "Urban Market",
      address: "E 17th St & Union Square W, New York, NY 10003",
      coordinates: {
        lat: 40.737222,
        lng: -73.990278
      },
      contact: {
        phone: "(212) 788-7476",
        email: "info@grownyc.org",
        website: "grownyc.org/greenmarket",
        socialMedia: {
          facebook: "UnionSquareGreenmarket",
          instagram: "@unsqgreenmarket"
        }
      },
      schedule: {
        regularHours: {
          monday: "8:00 AM - 6:00 PM",
          wednesday: "8:00 AM - 6:00 PM",
          friday: "8:00 AM - 6:00 PM",
          saturday: "8:00 AM - 6:00 PM"
        },
        seasonalNotes: "Year-round market",
        holidays: "Special holiday markets"
      },
      description: "NYC's largest and most diverse outdoor market",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Health Bucks"],
        products: [
          "Fresh Produce",
          "Dairy",
          "Meat",
          "Fish",
          "Baked Goods",
          "Wine",
          "Plants"
        ],
        amenities: [
          "Public Transit Access",
          "Restrooms",
          "Wheelchair Accessible",
          "ATM",
          "Information Booth"
        ],
        events: [
          "Chef demonstrations",
          "Seasonal celebrations",
          "Educational programs",
          "Tastings"
        ]
      },
      vendorInfo: {
        totalVendors: 140,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $45, Season: $1200",
        requirements: [
          "New York-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "New York State Department of Agriculture Certified",
        inspections: "Weekly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 60000,
        annualSales: "$12M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-NY001",
      name: "Food Bank For New York City",
      type: "Regional Food Bank",
      address: "39 Broadway, New York, NY 10006",
      coordinates: {
        lat: 40.705556,
        lng: -74.013889
      },
      contact: {
        phone: "(212) 566-7855",
        email: "info@foodbanknyc.org",
        website: "foodbanknyc.org",
        emergencyContact: "(212) 566-7855 ext. 1"
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
      description: "Major hunger-relief organization serving NYC",
      services: {
        primary: [
          "Food Distribution",
          "Campus Pantry Program",
          "Senior Food Program",
          "Mobile Pantry"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Culinary Training"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Self-declared need"
        ],
        restrictions: "NYC residents only",
        frequency: "Varies by program"
      },
      capacity: {
        storageSpace: "90,000 sq ft",
        coldStorage: "30,000 sq ft",
        monthlyDistribution: "12M pounds",
        servingCapacity: "1.5M people/month"
      },
      partnerships: {
        retailers: ["Whole Foods", "Trader Joe's", "Key Food", "C-Town"],
        farms: ["NY Farm Bureau", "Hudson Valley Farms"],
        organizations: ["Feeding America", "City Harvest"]
      },
      impact: {
        annualPoundsDistributed: "140M",
        peopleServed: "1.5M",
        boroughsServed: 5,
        volunteerHours: "150,000"
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
          "Nutrition education"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "GleanNY",
      description: "Recovering surplus crops from New York farms and orchards",
      contact: {
        name: "Program Director",
        phone: "(607) 555-0123",
        email: "glean@gleanny.org"
      },
      website: "gleanny.org",
      areas: ["Hudson Valley", "Finger Lakes", "Capital Region"],
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
        annualPounds: 500000,
        servingAgencies: 100,
        volunteerHours: 15000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Empire State Distribution",
      type: "Regional Distributor",
      address: "789 Distribution Drive, Syracuse, NY 13202",
      coordinates: {
        lat: 43.048611,
        lng: -76.147222
      },
      contact: {
        name: "Operations Director",
        phone: "(315) 555-0124",
        email: "ops@empiredistribution.org"
      },
      website: "empiredistribution.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "New York State and surrounding regions",
      requirements: {
        minimumOrder: "$400",
        leadTime: "48 hours",
        delivery: "Available for orders over $800"
      },
      certifications: [
        "USDA Approved",
        "Pride of NY Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "New York Farm to School",
      website: "agriculture.ny.gov/farming/farm-school",
      coordinator: "State Farm to School Coordinator",
      phone: "(518) 457-7076",
      description: "Connecting New York schools with fresh, local food"
    },
    marketVouchers: {
      name: "Farmers Market Federation of NY",
      website: "nyfarmersmarket.com",
      programs: [
        "FreshConnect Checks",
        "Health Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default newYorkResources;
