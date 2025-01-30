const delawareResources = {
  state: "Delaware",
  abbreviation: "DE",
  stateInfo: {
    capital: "Dover",
    region: "Mid-Atlantic",
    agriculturalZones: ["7a", "7b"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Broiler Chickens",
      "Corn",
      "Soybeans",
      "Watermelons",
      "Lima Beans",
      "Sweet Corn"
    ],
    agriculturalFacts: [
      "Over 2,300 farms covering 510,000 acres",
      "Agriculture contributes $8 billion to state economy",
      "Leading lima bean producer in the US",
      "Major poultry production state"
    ]
  },
  farmersMarkets: [
    {
      id: "DE001",
      name: "Historic New Castle Farmers Market",
      type: "Community Market",
      address: "2nd and Delaware Streets, New Castle, DE 19720",
      coordinates: {
        lat: 39.659843,
        lng: -75.566004
      },
      contact: {
        phone: "(302) 323-5950",
        email: "info@newcastlefarmmarket.org",
        website: "newcastlefarmmarket.org",
        socialMedia: {
          facebook: "NewCastleFarmersMarket",
          instagram: "@ncfarmmarket"
        }
      },
      schedule: {
        regularHours: {
          wednesday: "3:00 PM - 7:00 PM",
          saturday: "8:00 AM - 12:00 PM"
        },
        seasonalNotes: "May through October",
        holidays: "Special holiday markets in December"
      },
      description: "Historic waterfront market featuring local Delaware farmers and artisans",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "FMNP Vouchers"],
        products: [
          "Fresh Produce",
          "Poultry",
          "Seafood",
          "Baked Goods",
          "Local Honey",
          "Cut Flowers"
        ],
        amenities: [
          "Historic Setting",
          "Waterfront Views",
          "Parking",
          "Restrooms",
          "Wheelchair Accessible"
        ],
        events: [
          "Cooking demonstrations",
          "Historic tours",
          "Live music",
          "Children's activities"
        ]
      },
      vendorInfo: {
        totalVendors: 40,
        applicationProcess: "Annual application",
        vendorFees: "Daily: $25, Season: $400",
        requirements: [
          "Delaware-grown products",
          "Insurance required",
          "Health permits for prepared foods"
        ]
      },
      certification: {
        type: "Delaware Fresh Market",
        inspections: "Monthly",
        lastInspection: "2024-12-05"
      },
      statistics: {
        averageWeeklyVisitors: 1500,
        annualSales: "$800K",
        percentLocalProduce: 90
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-DE001",
      name: "Food Bank of Delaware",
      type: "Statewide Food Bank",
      address: "222 Lake Drive, Newark, DE 19702",
      coordinates: {
        lat: 39.683250,
        lng: -75.745636
      },
      contact: {
        phone: "(302) 292-1305",
        email: "info@fbd.org",
        website: "fbd.org",
        emergencyContact: "(302) 292-1305 ext. 1"
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
      description: "Serving all three counties in Delaware with emergency food assistance",
      services: {
        primary: [
          "Mobile Pantry",
          "Backpack Program",
          "Senior Nutrition",
          "Culinary School"
        ],
        additional: [
          "Workforce Training",
          "SNAP Outreach",
          "Nutrition Education",
          "L.O.G.I.C. Program"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of Delaware residence",
          "Self-declared need"
        ],
        restrictions: "Delaware residents only",
        frequency: "Once every 30 days"
      },
      capacity: {
        storageSpace: "80,000 sq ft",
        coldStorage: "15,000 sq ft",
        monthlyDistribution: "1.5M pounds",
        servingCapacity: "20,000 households/month"
      },
      partnerships: {
        retailers: ["Giant", "Food Lion", "ShopRite", "Walmart"],
        farms: ["Delaware Farm Bureau", "Local Poultry Farms"],
        organizations: ["Feeding America", "Delaware Hunger Coalition"]
      },
      impact: {
        annualPoundsDistributed: "18M",
        peopleServed: "114,000",
        countiesServed: 3,
        volunteerHours: "25,000"
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
          "Culinary program",
          "Office support"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Delaware Gleaning Network",
      description: "Connecting farms, volunteers, and food banks to reduce food waste",
      contact: {
        name: "Program Director",
        phone: "(302) 555-0123",
        email: "glean@delawaregleans.org"
      },
      website: "delawaregleans.org",
      areas: ["New Castle County", "Kent County", "Sussex County"],
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
        annualPounds: 150000,
        servingAgencies: 25,
        volunteerHours: 3000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Delaware Fresh Foods",
      type: "Statewide Distributor",
      address: "456 Commerce Way, Dover, DE 19901",
      coordinates: {
        lat: 39.158168,
        lng: -75.524368
      },
      contact: {
        name: "Operations Director",
        phone: "(302) 555-0124",
        email: "ops@defreshfoods.org"
      },
      website: "delawarefreshfoods.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Farm to School"
      ],
      coverage: "All three Delaware counties",
      requirements: {
        minimumOrder: "$150",
        leadTime: "48 hours",
        delivery: "Available for orders over $400"
      },
      certifications: [
        "USDA Approved",
        "Delaware Fresh Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Delaware Farm to School Program",
      website: "doe.k12.de.us/farmtoschool",
      coordinator: "State Farm to School Coordinator",
      phone: "(302) 735-4060",
      description: "Connecting Delaware schools with local farms for fresh, nutritious meals"
    },
    marketVouchers: {
      name: "Delaware Farmers' Market Program",
      website: "de.gov/farmersmarkets",
      programs: [
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program",
        "Delaware Fresh EBT Match"
      ]
    }
  }
};

export default delawareResources;
