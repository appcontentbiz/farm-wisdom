const missouriResources = {
  state: "Missouri",
  abbreviation: "MO",
  stateInfo: {
    capital: "Jefferson City",
    region: "Midwest",
    agriculturalZones: ["5b", "6a", "6b", "7a"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Soybeans",
      "Corn",
      "Cattle",
      "Hogs",
      "Cotton",
      "Rice"
    ],
    agriculturalFacts: [
      "95,000 farms covering 27.8 million acres",
      "#6 beef cattle producer in the US",
      "Agriculture contributes $88.4 billion annually to state economy",
      "2nd ranked state in number of farms"
    ]
  },
  farmersMarkets: [
    {
      id: "MO001",
      name: "City Market Kansas City",
      type: "Historic Public Market",
      address: "20 E 5th St, Kansas City, MO 64106",
      coordinates: {
        lat: 39.108333,
        lng: -94.583889
      },
      contact: {
        phone: "(816) 842-1271",
        email: "info@thecitymarket.org",
        website: "thecitymarket.org",
        socialMedia: {
          facebook: "KCCityMarket",
          instagram: "@kccitymarket"
        }
      },
      schedule: {
        regularHours: {
          wednesday: "8:00 AM - 3:00 PM",
          saturday: "7:00 AM - 3:00 PM",
          sunday: "8:00 AM - 3:00 PM"
        },
        seasonalNotes: "Open year-round, peak season April-November",
        holidays: "Special holiday markets"
      },
      description: "Historic market operating since 1857",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Fresh Produce",
          "Meat",
          "Dairy",
          "Flowers",
          "Specialty Foods",
          "International Foods"
        ],
        amenities: [
          "Historic District",
          "Restaurants",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking"
        ],
        events: [
          "Food festivals",
          "Cultural celebrations",
          "Live music",
          "Educational programs"
        ]
      },
      vendorInfo: {
        totalVendors: 140,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $30, Season: $900",
        requirements: [
          "Missouri-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Missouri Department of Agriculture Certified",
        inspections: "Quarterly",
        lastInspection: "2024-12-01"
      },
      statistics: {
        averageWeeklyVisitors: 15000,
        annualSales: "$8M",
        percentLocalProduce: 85
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-MO001",
      name: "Harvesters Community Food Network",
      type: "Regional Food Bank",
      address: "3801 Topping Avenue, Kansas City, MO 64129",
      coordinates: {
        lat: 39.056944,
        lng: -94.520833
      },
      contact: {
        phone: "(816) 929-3000",
        email: "info@harvesters.org",
        website: "harvesters.org",
        emergencyContact: "(816) 929-3000 ext. 1"
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
      description: "Serving northwestern Missouri and northeastern Kansas",
      services: {
        primary: [
          "Food Distribution",
          "BackSnack Program",
          "Kids Cafe",
          "Mobile Food Pantry"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Culinary Program"
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
        coldStorage: "50,000 sq ft",
        monthlyDistribution: "4M pounds",
        servingCapacity: "140,000 people/month"
      },
      partnerships: {
        retailers: ["Price Chopper", "Hy-Vee", "Walmart", "Sam's Club"],
        farms: ["Missouri Farm Bureau", "Local Produce Farms"],
        organizations: ["Feeding America", "Missouri Food Bank Association"]
      },
      impact: {
        annualPoundsDistributed: "48M",
        peopleServed: "226,000",
        countiesServed: 26,
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
          "BackSnack program"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "After the Harvest",
      description: "Recovering fresh produce from farms and gardens in Missouri and Kansas",
      contact: {
        name: "Program Director",
        phone: "(816) 921-1903",
        email: "info@aftertheharvestkc.org"
      },
      website: "aftertheharvestkc.org",
      areas: ["Kansas City Metro", "Western Missouri", "Eastern Kansas"],
      schedule: "April through November",
      requirements: {
        volunteers: [
          "Must be 12 or older",
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
        servingAgencies: 60,
        volunteerHours: 15000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Show Me Fresh Distribution",
      type: "Regional Distributor",
      address: "456 Distribution Way, Columbia, MO 65201",
      coordinates: {
        lat: 38.951944,
        lng: -92.333889
      },
      contact: {
        name: "Operations Director",
        phone: "(573) 555-0124",
        email: "ops@showmefresh.org"
      },
      website: "showmefresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Missouri and surrounding states",
      requirements: {
        minimumOrder: "$350",
        leadTime: "48 hours",
        delivery: "Available for orders over $700"
      },
      certifications: [
        "USDA Approved",
        "Missouri Grown Member",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Missouri Farm to School",
      website: "mofarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(573) 751-4211",
      description: "Connecting Missouri schools with fresh, local food"
    },
    marketVouchers: {
      name: "Missouri Farmers Market Association",
      website: "mofma.org",
      programs: [
        "Double Up Food Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default missouriResources;
