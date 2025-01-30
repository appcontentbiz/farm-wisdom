const indianaResources = {
  state: "Indiana",
  abbreviation: "IN",
  stateInfo: {
    capital: "Indianapolis",
    region: "Midwest",
    agriculturalZones: ["5b", "6a", "6b"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Corn",
      "Soybeans",
      "Hogs",
      "Poultry",
      "Tomatoes",
      "Mint"
    ],
    agriculturalFacts: [
      "Over 56,000 farms covering 14.7 million acres",
      "Agriculture contributes $31.2 billion to state economy",
      "#1 producer of ducks in the US",
      "Leading producer of mint for processing"
    ]
  },
  farmersMarkets: [
    {
      id: "IN001",
      name: "Original Farmers' Market",
      type: "Producer-Only Market",
      address: "222 E Market St, Indianapolis, IN 46204",
      coordinates: {
        lat: 39.768703,
        lng: -86.153815
      },
      contact: {
        phone: "(317) 634-9266",
        email: "info@indycm.com",
        website: "indycm.com",
        socialMedia: {
          facebook: "IndyOriginalMarket",
          instagram: "@indyfarmmarket"
        }
      },
      schedule: {
        regularHours: {
          wednesday: "9:30 AM - 1:30 PM",
          saturday: "9:30 AM - 1:30 PM"
        },
        seasonalNotes: "May through October, Winter Market November-April",
        holidays: "Special holiday markets"
      },
      description: "Historic downtown Indianapolis farmers market since 1821",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Fresh Bucks"],
        products: [
          "Local Produce",
          "Amish Goods",
          "Dairy Products",
          "Meats",
          "Baked Goods",
          "Flowers"
        ],
        amenities: [
          "Historic Building",
          "Indoor/Outdoor Space",
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
        totalVendors: 80,
        applicationProcess: "Annual application",
        vendorFees: "Daily: $35, Season: $500",
        requirements: [
          "Indiana-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer-only verification"
        ]
      },
      certification: {
        type: "Indiana Grown Market",
        inspections: "Monthly",
        lastInspection: "2024-12-10"
      },
      statistics: {
        averageWeeklyVisitors: 4000,
        annualSales: "$2M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-IN001",
      name: "Gleaners Food Bank of Indiana",
      type: "Regional Food Bank",
      address: "3737 Waldemere Ave, Indianapolis, IN 46241",
      coordinates: {
        lat: 39.741281,
        lng: -86.220559
      },
      contact: {
        phone: "(317) 925-0191",
        email: "info@gleaners.org",
        website: "gleaners.org",
        emergencyContact: "(317) 925-0191 ext. 1"
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
      description: "Serving central and southeast Indiana with emergency food assistance",
      services: {
        primary: [
          "Food Distribution",
          "BackSacks Weekend Program",
          "Senior Hunger Initiative",
          "Mobile Pantry"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Summer Meals"
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
        storageSpace: "300,000 sq ft",
        coldStorage: "50,000 sq ft",
        monthlyDistribution: "4M pounds",
        servingCapacity: "60,000 households/month"
      },
      partnerships: {
        retailers: ["Kroger", "Meijer", "Walmart", "Target"],
        farms: ["Indiana Farm Bureau", "Local Dairy Farms"],
        organizations: ["Feeding America", "Indiana Food Council"]
      },
      impact: {
        annualPoundsDistributed: "48M",
        peopleServed: "350,000",
        countiesServed: 21,
        volunteerHours: "100,000"
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
          "BackSacks program"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Indiana Gleaning Project",
      description: "Recovering surplus crops from Indiana farms",
      contact: {
        name: "Program Director",
        phone: "(317) 555-0123",
        email: "glean@indianagleans.org"
      },
      website: "indianagleans.org",
      areas: ["Central Indiana", "Southern Indiana", "Northern Indiana"],
      schedule: "May through October",
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
        annualPounds: 300000,
        servingAgencies: 45,
        volunteerHours: 8000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Hoosier Fresh Distribution",
      type: "Regional Distributor",
      address: "456 Distribution Way, Fort Wayne, IN 46802",
      coordinates: {
        lat: 41.079273,
        lng: -85.139351
      },
      contact: {
        name: "Operations Director",
        phone: "(260) 555-0124",
        email: "ops@hoosierfresh.org"
      },
      website: "hoosierfreshdist.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Indiana and neighboring states",
      requirements: {
        minimumOrder: "$300",
        leadTime: "48 hours",
        delivery: "Available for orders over $750"
      },
      certifications: [
        "USDA Approved",
        "Indiana Grown Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Indiana Farm to School Network",
      website: "indianafarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(317) 232-8770",
      description: "Connecting Indiana schools with fresh, local produce"
    },
    marketVouchers: {
      name: "Indiana Farmers Market Association",
      website: "infarmersmarkets.org",
      programs: [
        "Fresh Bucks Program",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default indianaResources;
