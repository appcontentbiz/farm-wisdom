const southCarolinaResources = {
  state: "South Carolina",
  abbreviation: "SC",
  stateInfo: {
    capital: "Columbia",
    region: "Southeast",
    agriculturalZones: ["7a", "7b", "8a", "8b"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Peaches",
      "Cotton",
      "Tobacco",
      "Soybeans",
      "Peanuts",
      "Watermelons"
    ],
    agriculturalFacts: [
      "24,600 farms covering 4.7 million acres",
      "#2 producer of peaches in the US",
      "Agriculture contributes $46.2B annually to state economy",
      "Leading producer of tobacco in the Southeast"
    ]
  },
  farmersMarkets: [
    {
      id: "SC001",
      name: "Charleston Farmers Market",
      type: "City Market",
      address: "329 Meeting Street, Charleston, SC 29403",
      coordinates: {
        lat: 32.783333,
        lng: -79.933333
      },
      contact: {
        phone: "(843) 724-7305",
        email: "farmersmarket@charleston-sc.gov",
        website: "charlestonfarmersmarket.com",
        socialMedia: {
          facebook: "CharlestonFarmersMarket",
          instagram: "@chasfarmersmkt"
        }
      },
      schedule: {
        regularHours: {
          saturday: "8:00 AM - 2:00 PM"
        },
        seasonalNotes: "April through November",
        holidays: "Special holiday markets in December"
      },
      description: "Award-winning farmers market in historic Marion Square",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Healthy Bucks"],
        products: [
          "Fresh Produce",
          "Seafood",
          "Meat",
          "Dairy",
          "Baked Goods",
          "Prepared Foods",
          "Crafts"
        ],
        amenities: [
          "Live Music",
          "Food Trucks",
          "Restrooms",
          "Wheelchair Accessible",
          "ATM"
        ],
        events: [
          "Chef demonstrations",
          "Live music",
          "Kids activities",
          "Cultural celebrations"
        ]
      },
      vendorInfo: {
        totalVendors: 100,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $30, Season: $500",
        requirements: [
          "South Carolina-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "South Carolina Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 5000,
        annualSales: "$2.5M",
        percentLocalProduce: 90
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-SC001",
      name: "Lowcountry Food Bank",
      type: "Regional Food Bank",
      address: "2864 Azalea Drive, Charleston, SC 29405",
      coordinates: {
        lat: 32.841667,
        lng: -79.975000
      },
      contact: {
        phone: "(843) 747-8146",
        email: "info@lowcountryfoodbank.org",
        website: "lowcountryfoodbank.org",
        emergencyContact: "(843) 747-8146 ext. 1"
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
      description: "Serving coastal South Carolina communities",
      services: {
        primary: [
          "Food Distribution",
          "BackPack Buddies",
          "School Market",
          "Senior Food Box"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Cooking Matters"
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
        storageSpace: "90,000 sq ft",
        coldStorage: "20,000 sq ft",
        monthlyDistribution: "2M pounds",
        servingCapacity: "200,000 people/month"
      },
      partnerships: {
        retailers: ["Food Lion", "Publix", "Harris Teeter", "Walmart"],
        farms: ["SC Farm Bureau", "Local Peach Orchards"],
        organizations: ["Feeding America", "SC Food Bank Association"]
      },
      impact: {
        annualPoundsDistributed: "32M",
        peopleServed: "200,000",
        countiesServed: 10,
        volunteerHours: "60,000"
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
          "BackPack Buddies",
          "Office support",
          "Mobile pantry"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "South Carolina Gleaning Network",
      description: "Recovering surplus crops from South Carolina farms",
      contact: {
        name: "Program Director",
        phone: "(803) 555-0123",
        email: "glean@scgleaners.org"
      },
      website: "scgleaners.org",
      areas: ["Lowcountry", "Midlands", "Upstate"],
      schedule: "March through November",
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
        annualPounds: 400000,
        servingAgencies: 60,
        volunteerHours: 12000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Palmetto Fresh Distribution",
      type: "Regional Distributor",
      address: "456 Distribution Drive, Columbia, SC 29201",
      coordinates: {
        lat: 34.000000,
        lng: -81.033333
      },
      contact: {
        name: "Operations Director",
        phone: "(803) 555-0124",
        email: "ops@palmettofresh.org"
      },
      website: "palmettofresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "South Carolina and coastal Georgia",
      requirements: {
        minimumOrder: "$300",
        leadTime: "48 hours",
        delivery: "Available for orders over $600"
      },
      certifications: [
        "USDA Approved",
        "Certified SC Grown Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "South Carolina Farm to School",
      website: "scfarmtoschool.com",
      coordinator: "State Farm to School Coordinator",
      phone: "(803) 734-2210",
      description: "Connecting South Carolina schools with fresh, local food"
    },
    marketVouchers: {
      name: "South Carolina Farmers Market Association",
      website: "scfarmersmarkets.com",
      programs: [
        "Healthy Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default southCarolinaResources;
