const newHampshireResources = {
  state: "New Hampshire",
  abbreviation: "NH",
  stateInfo: {
    capital: "Concord",
    region: "Northeast",
    agriculturalZones: ["3b", "4a", "4b", "5a", "5b", "6a"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Maple Syrup",
      "Apples",
      "Dairy",
      "Christmas Trees",
      "Blueberries",
      "Hay"
    ],
    agriculturalFacts: [
      "4,100 farms covering 425,000 acres",
      "Top maple syrup producer in New England",
      "Agriculture contributes $850M annually to state economy",
      "Leading producer of greenhouse and nursery products in New England"
    ]
  },
  farmersMarkets: [
    {
      id: "NH001",
      name: "Portsmouth Farmers' Market",
      type: "City Market",
      address: "1 Junkins Avenue, Portsmouth, NH 03801",
      coordinates: {
        lat: 43.076944,
        lng: -70.761667
      },
      contact: {
        phone: "(603) 431-2000",
        email: "info@seacoastgrowers.org",
        website: "seacoastgrowers.org",
        socialMedia: {
          facebook: "PortsmouthFarmersMarket",
          instagram: "@portsmouthmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "8:00 AM - 1:00 PM"
        },
        seasonalNotes: "May through November",
        holidays: "Special holiday markets"
      },
      description: "Historic seacoast farmers market",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Granite State Market Match"],
        products: [
          "Fresh Produce",
          "Maple Products",
          "Dairy",
          "Seafood",
          "Baked Goods",
          "Crafts"
        ],
        amenities: [
          "Waterfront Location",
          "Live Music",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking"
        ],
        events: [
          "Music performances",
          "Chef demonstrations",
          "Kids activities",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 60,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $30, Season: $500",
        requirements: [
          "New Hampshire-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "New Hampshire Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-20"
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
      id: "FB-NH001",
      name: "New Hampshire Food Bank",
      type: "State Food Bank",
      address: "700 East Industrial Park Drive, Manchester, NH 03109",
      coordinates: {
        lat: 42.995833,
        lng: -71.435556
      },
      contact: {
        phone: "(603) 669-9725",
        email: "info@nhfoodbank.org",
        website: "nhfoodbank.org",
        emergencyContact: "(603) 669-9725 ext. 1"
      },
      hours: {
        distribution: {
          monday: "8:00 AM - 3:30 PM",
          tuesday: "8:00 AM - 3:30 PM",
          wednesday: "8:00 AM - 3:30 PM",
          thursday: "8:00 AM - 3:30 PM",
          friday: "8:00 AM - 3:30 PM"
        },
        donation: {
          monday: "7:30 AM - 4:00 PM",
          tuesday: "7:30 AM - 4:00 PM",
          wednesday: "7:30 AM - 4:00 PM",
          thursday: "7:30 AM - 4:00 PM",
          friday: "7:30 AM - 4:00 PM"
        }
      },
      description: "Only food bank in New Hampshire, serving all counties",
      services: {
        primary: [
          "Food Distribution",
          "Recipe for Success",
          "Mobile Food Pantry",
          "Cooking Matters"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Culinary Job Training"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Self-declared need"
        ],
        restrictions: "New Hampshire residents only",
        frequency: "Varies by program"
      },
      capacity: {
        storageSpace: "60,000 sq ft",
        coldStorage: "15,000 sq ft",
        monthlyDistribution: "1M pounds",
        servingCapacity: "100,000 people/month"
      },
      partnerships: {
        retailers: ["Hannaford", "Market Basket", "Shaw's", "Walmart"],
        farms: ["NH Farm Bureau", "Local Apple Orchards"],
        organizations: ["Feeding America", "NH Food Alliance"]
      },
      impact: {
        annualPoundsDistributed: "14M",
        peopleServed: "100,000",
        countiesServed: 10,
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
          "Culinary program"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "NH Gleans",
      description: "Recovering surplus crops from New Hampshire farms and orchards",
      contact: {
        name: "Program Director",
        phone: "(603) 555-0123",
        email: "glean@nhgleans.org"
      },
      website: "nhgleans.org",
      areas: ["Seacoast", "Merrimack Valley", "Lakes Region"],
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
        servingAgencies: 20,
        volunteerHours: 4000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Granite State Fresh Distribution",
      type: "Regional Distributor",
      address: "123 Distribution Lane, Concord, NH 03301",
      coordinates: {
        lat: 43.208333,
        lng: -71.538889
      },
      contact: {
        name: "Operations Director",
        phone: "(603) 555-0124",
        email: "ops@granitefresh.org"
      },
      website: "granitefresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "New Hampshire and Southern Maine",
      requirements: {
        minimumOrder: "$250",
        leadTime: "48 hours",
        delivery: "Available for orders over $500"
      },
      certifications: [
        "USDA Approved",
        "NH Made Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "New Hampshire Farm to School",
      website: "nhfarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(603) 862-2542",
      description: "Connecting New Hampshire schools with fresh, local food"
    },
    marketVouchers: {
      name: "New Hampshire Farmers Market Association",
      website: "nhfma.org",
      programs: [
        "Granite State Market Match",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default newHampshireResources;
