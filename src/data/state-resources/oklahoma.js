const oklahomaResources = {
  state: "Oklahoma",
  abbreviation: "OK",
  stateInfo: {
    capital: "Oklahoma City",
    region: "South Central",
    agriculturalZones: ["6a", "6b", "7a", "7b", "8a"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Winter Wheat",
      "Cattle",
      "Cotton",
      "Hay",
      "Soybeans",
      "Pecans"
    ],
    agriculturalFacts: [
      "77,200 farms covering 34.2 million acres",
      "#4 producer of wheat in the US",
      "Agriculture contributes $7.1B annually to state economy",
      "Leading producer of winter wheat and rye"
    ]
  },
  farmersMarkets: [
    {
      id: "OK001",
      name: "OSU-OKC Farmers Market",
      type: "Year-round Market",
      address: "400 N Portland Ave, Oklahoma City, OK 73107",
      coordinates: {
        lat: 35.472222,
        lng: -97.516944
      },
      contact: {
        phone: "(405) 947-4421",
        email: "farmersmarket@osuokc.edu",
        website: "osuokc.edu/farmersmarket",
        socialMedia: {
          facebook: "OSUOKCFarmersMarket",
          instagram: "@osuokcmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "8:00 AM - 1:00 PM"
        },
        seasonalNotes: "Year-round market, indoor location",
        holidays: "Closed on major holidays"
      },
      description: "Year-round farmers market on OSU-OKC campus",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Oklahoma"],
        products: [
          "Fresh Produce",
          "Meat",
          "Eggs",
          "Honey",
          "Baked Goods",
          "Plants"
        ],
        amenities: [
          "Indoor Location",
          "Restrooms",
          "Wheelchair Accessible",
          "Free Parking",
          "ATM"
        ],
        events: [
          "Cooking demonstrations",
          "Kids activities",
          "Educational programs",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 65,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $25, Season: $400",
        requirements: [
          "Oklahoma-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Oklahoma Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 2500,
        annualSales: "$1.5M",
        percentLocalProduce: 95
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-OK001",
      name: "Regional Food Bank of Oklahoma",
      type: "Regional Food Bank",
      address: "3355 S Purdue, Oklahoma City, OK 73179",
      coordinates: {
        lat: 35.428889,
        lng: -97.576944
      },
      contact: {
        phone: "(405) 972-1111",
        email: "info@rfbo.org",
        website: "rfbo.org",
        emergencyContact: "(405) 972-1111 ext. 1"
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
      description: "Serving central and western Oklahoma",
      services: {
        primary: [
          "Food Distribution",
          "Food for Kids",
          "Senior Feeding Program",
          "Mobile Market"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Urban Harvest Program"
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
        storageSpace: "165,000 sq ft",
        coldStorage: "40,000 sq ft",
        monthlyDistribution: "4.5M pounds",
        servingCapacity: "136,000 people/month"
      },
      partnerships: {
        retailers: ["Homeland", "Walmart", "Sprouts", "Costco"],
        farms: ["Oklahoma Farm Bureau", "Local Wheat Farms"],
        organizations: ["Feeding America", "Oklahoma Farming and Ranching Foundation"]
      },
      impact: {
        annualPoundsDistributed: "54.2M",
        peopleServed: "136,000",
        countiesServed: 53,
        volunteerHours: "87,000"
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
          "Mobile market",
          "Office support",
          "Urban harvest"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Oklahoma Gleaning Network",
      description: "Recovering surplus crops from Oklahoma farms",
      contact: {
        name: "Program Director",
        phone: "(405) 555-0123",
        email: "glean@okgleaners.org"
      },
      website: "okgleaners.org",
      areas: ["Central Oklahoma", "Western Oklahoma", "Southern Oklahoma"],
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
        annualPounds: 300000,
        servingAgencies: 45,
        volunteerHours: 8000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Sooner Fresh Distribution",
      type: "Regional Distributor",
      address: "789 Distribution Way, Norman, OK 73069",
      coordinates: {
        lat: 35.222222,
        lng: -97.439444
      },
      contact: {
        name: "Operations Director",
        phone: "(405) 555-0124",
        email: "ops@soonerfresh.org"
      },
      website: "soonerfresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Oklahoma and North Texas",
      requirements: {
        minimumOrder: "$300",
        leadTime: "48 hours",
        delivery: "Available for orders over $600"
      },
      certifications: [
        "USDA Approved",
        "Made in Oklahoma Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Oklahoma Farm to School",
      website: "okfarmtoschool.com",
      coordinator: "State Farm to School Coordinator",
      phone: "(405) 522-2106",
      description: "Connecting Oklahoma schools with fresh, local food"
    },
    marketVouchers: {
      name: "Oklahoma Farmers Market Association",
      website: "okfarmersmarket.org",
      programs: [
        "Double Up Oklahoma",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default oklahomaResources;
