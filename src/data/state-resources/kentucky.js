const kentuckyResources = {
  state: "Kentucky",
  abbreviation: "KY",
  stateInfo: {
    capital: "Frankfort",
    region: "South",
    agriculturalZones: ["6a", "6b", "7a"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Tobacco",
      "Corn",
      "Soybeans",
      "Horses",
      "Cattle",
      "Hemp"
    ],
    agriculturalFacts: [
      "Over 75,000 farms covering 13 million acres",
      "Agriculture contributes $45.6 billion to state economy",
      "#1 producer of horses in the US",
      "Leading producer of tobacco and hemp"
    ]
  },
  farmersMarkets: [
    {
      id: "KY001",
      name: "Lexington Farmers' Market",
      type: "Producer-Only Market",
      address: "241 W Main St, Lexington, KY 40507",
      coordinates: {
        lat: 38.047760,
        lng: -84.497990
      },
      contact: {
        phone: "(859) 255-8312",
        email: "info@lexingtonfarmersmarket.com",
        website: "lexingtonfarmersmarket.com",
        socialMedia: {
          facebook: "LexingtonFarmersMarket",
          instagram: "@lexfarmmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "7:00 AM - 2:00 PM",
          sunday: "10:00 AM - 2:00 PM"
        },
        seasonalNotes: "Year-round market, Indoor location during winter",
        holidays: "Special holiday markets"
      },
      description: "Central Kentucky's largest producer-only farmers market",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Dollars"],
        products: [
          "Local Produce",
          "Grass-fed Meats",
          "Artisan Cheese",
          "Baked Goods",
          "Local Honey",
          "Hemp Products"
        ],
        amenities: [
          "Downtown Location",
          "Live Music",
          "Restrooms",
          "Wheelchair Accessible",
          "Parking Garage"
        ],
        events: [
          "Chef demonstrations",
          "Live music",
          "Kids activities",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 85,
        applicationProcess: "Annual jury process",
        vendorFees: "Daily: $35, Season: $600",
        requirements: [
          "Kentucky-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer-only verification"
        ]
      },
      certification: {
        type: "Kentucky Proud Market",
        inspections: "Quarterly",
        lastInspection: "2024-12-15"
      },
      statistics: {
        averageWeeklyVisitors: 5000,
        annualSales: "$3M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-KY001",
      name: "God's Pantry Food Bank",
      type: "Regional Food Bank",
      address: "1685 Jaggie Fox Way, Lexington, KY 40511",
      coordinates: {
        lat: 38.082222,
        lng: -84.527778
      },
      contact: {
        phone: "(859) 255-6592",
        email: "info@godspantry.org",
        website: "godspantry.org",
        emergencyContact: "(859) 255-6592 ext. 1"
      },
      hours: {
        distribution: {
          monday: "9:00 AM - 5:00 PM",
          tuesday: "9:00 AM - 5:00 PM",
          wednesday: "9:00 AM - 5:00 PM",
          thursday: "9:00 AM - 5:00 PM",
          friday: "9:00 AM - 5:00 PM"
        },
        donation: {
          monday: "8:00 AM - 5:30 PM",
          tuesday: "8:00 AM - 5:30 PM",
          wednesday: "8:00 AM - 5:30 PM",
          thursday: "8:00 AM - 5:30 PM",
          friday: "8:00 AM - 5:30 PM"
        }
      },
      description: "Serving central and eastern Kentucky with emergency food assistance",
      services: {
        primary: [
          "Food Distribution",
          "BackPack Program",
          "Senior Grocery Program",
          "Mobile Pantry"
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
        restrictions: "Service area residents only",
        frequency: "Once per month per household"
      },
      capacity: {
        storageSpace: "120,000 sq ft",
        coldStorage: "30,000 sq ft",
        monthlyDistribution: "2M pounds",
        servingCapacity: "40,000 households/month"
      },
      partnerships: {
        retailers: ["Kroger", "Walmart", "Target", "Save A Lot"],
        farms: ["Kentucky Farm Bureau", "Local Tobacco Farms"],
        organizations: ["Feeding America", "Kentucky Hunger Initiative"]
      },
      impact: {
        annualPoundsDistributed: "24M",
        peopleServed: "250,000",
        countiesServed: 50,
        volunteerHours: "70,000"
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
      name: "Kentucky Gleaners",
      description: "Recovering surplus crops from Kentucky farms",
      contact: {
        name: "Program Director",
        phone: "(859) 555-0123",
        email: "glean@kygleaners.org"
      },
      website: "kygleaners.org",
      areas: ["Central Kentucky", "Eastern Kentucky", "Western Kentucky"],
      schedule: "April through November",
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
        annualPounds: 350000,
        servingAgencies: 40,
        volunteerHours: 10000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Bluegrass Fresh Distribution",
      type: "Regional Distributor",
      address: "789 Distribution Lane, Louisville, KY 40217",
      coordinates: {
        lat: 38.239470,
        lng: -85.758456
      },
      contact: {
        name: "Operations Director",
        phone: "(502) 555-0124",
        email: "ops@bluegrassfresh.org"
      },
      website: "bluegrassfreshdist.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Kentucky and neighboring states",
      requirements: {
        minimumOrder: "$350",
        leadTime: "48 hours",
        delivery: "Available for orders over $700"
      },
      certifications: [
        "USDA Approved",
        "Kentucky Proud Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Kentucky Farm to School Program",
      website: "kyf2s.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(502) 564-5625",
      description: "Connecting Kentucky schools with fresh, local produce"
    },
    marketVouchers: {
      name: "Kentucky Farmers Market Association",
      website: "kyfarmersmarket.org",
      programs: [
        "Double Dollars Program",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default kentuckyResources;
