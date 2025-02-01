const pennsylvaniaResources = {
  state: "Pennsylvania",
  abbreviation: "PA",
  stateInfo: {
    capital: "Harrisburg",
    region: "Northeast",
    agriculturalZones: ["5b", "6a", "6b", "7a"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Mushrooms",
      "Dairy",
      "Corn",
      "Apples",
      "Christmas Trees",
      "Maple Syrup"
    ],
    agriculturalFacts: [
      "52,700 farms covering 7.3 million acres",
      "#1 producer of mushrooms in the US",
      "Agriculture contributes $135.7B annually to state economy",
      "Leading producer of organic products in the Northeast"
    ]
  },
  farmersMarkets: [
    {
      id: "PA001",
      name: "Reading Terminal Market",
      type: "Historic Public Market",
      address: "51 N 12th Street, Philadelphia, PA 19107",
      coordinates: {
        lat: 39.952778,
        lng: -75.159444
      },
      contact: {
        phone: "(215) 922-2317",
        email: "info@readingterminalmarket.org",
        website: "readingterminalmarket.org",
        socialMedia: {
          facebook: "ReadingTerminalMarket",
          instagram: "@readingterminal"
        }
      },
      schedule: {
        regularHours: {
          monday: "8:00 AM - 6:00 PM",
          tuesday: "8:00 AM - 6:00 PM",
          wednesday: "8:00 AM - 6:00 PM",
          thursday: "8:00 AM - 6:00 PM",
          friday: "8:00 AM - 6:00 PM",
          saturday: "8:00 AM - 6:00 PM",
          sunday: "9:00 AM - 5:00 PM"
        },
        seasonalNotes: "Year-round market",
        holidays: "Closed on major holidays"
      },
      description: "Historic indoor food market operating since 1893",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Food Bucks"],
        products: [
          "Fresh Produce",
          "Meat",
          "Seafood",
          "Dairy",
          "Baked Goods",
          "Prepared Foods",
          "Pennsylvania Dutch Specialties"
        ],
        amenities: [
          "Indoor Location",
          "Restaurants",
          "Restrooms",
          "Wheelchair Accessible",
          "ATM"
        ],
        events: [
          "Cooking demonstrations",
          "Food festivals",
          "Market tours",
          "Special events"
        ]
      },
      vendorInfo: {
        totalVendors: 80,
        applicationProcess: "Competitive application process",
        vendorFees: "Monthly: $1000-2000",
        requirements: [
          "Pennsylvania-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Pennsylvania Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 100000,
        annualSales: "$50M",
        percentLocalProduce: 75
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-PA001",
      name: "Philabundance",
      type: "Regional Food Bank",
      address: "3616 South Galloway Street, Philadelphia, PA 19148",
      coordinates: {
        lat: 39.911111,
        lng: -75.183333
      },
      contact: {
        phone: "(215) 339-0900",
        email: "info@philabundance.org",
        website: "philabundance.org",
        emergencyContact: "(215) 339-0900 ext. 1"
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
      description: "Delaware Valley's largest hunger relief organization",
      services: {
        primary: [
          "Food Distribution",
          "Community Kitchen",
          "Fresh For All Program",
          "LunchBox Program"
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
        storageSpace: "160,000 sq ft",
        coldStorage: "45,000 sq ft",
        monthlyDistribution: "3M pounds",
        servingCapacity: "135,000 people/month"
      },
      partnerships: {
        retailers: ["ACME", "Giant", "ShopRite", "Whole Foods"],
        farms: ["PA Farm Bureau", "Local Mushroom Farms"],
        organizations: ["Feeding America", "Coalition Against Hunger"]
      },
      impact: {
        annualPoundsDistributed: "50M",
        peopleServed: "135,000",
        countiesServed: 9,
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
          "Community Kitchen",
          "Office support",
          "Fresh For All"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Pennsylvania Gleaning Network",
      description: "Recovering surplus crops from Pennsylvania farms",
      contact: {
        name: "Program Director",
        phone: "(717) 555-0123",
        email: "glean@pagleaners.org"
      },
      website: "pagleaners.org",
      areas: ["Southeast PA", "Central PA", "Lancaster County"],
      schedule: "April through November",
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
        annualPounds: 600000,
        servingAgencies: 90,
        volunteerHours: 18000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Keystone Fresh Distribution",
      type: "Regional Distributor",
      address: "456 Distribution Drive, Harrisburg, PA 17101",
      coordinates: {
        lat: 40.266667,
        lng: -76.883333
      },
      contact: {
        name: "Operations Director",
        phone: "(717) 555-0124",
        email: "ops@keystonefresh.org"
      },
      website: "keystonefresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Pennsylvania and surrounding states",
      requirements: {
        minimumOrder: "$400",
        leadTime: "48 hours",
        delivery: "Available for orders over $800"
      },
      certifications: [
        "USDA Approved",
        "PA Preferred Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Pennsylvania Farm to School",
      website: "pafarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(717) 787-5085",
      description: "Connecting Pennsylvania schools with fresh, local food"
    },
    marketVouchers: {
      name: "Pennsylvania Farmers Market Association",
      website: "pafarmersmarkets.org",
      programs: [
        "Food Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default pennsylvaniaResources;
