const nevadaResources = {
  state: "Nevada",
  abbreviation: "NV",
  stateInfo: {
    capital: "Carson City",
    region: "Southwest",
    agriculturalZones: ["4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Alfalfa",
      "Onions",
      "Garlic",
      "Timothy Hay",
      "Potatoes",
      "Dairy"
    ],
    agriculturalFacts: [
      "3,350 farms covering 6.1 million acres",
      "#1 producer of timothy hay in the US",
      "Agriculture contributes $1.2 billion annually to state economy",
      "Leading exporter of hay to Asian markets"
    ]
  },
  farmersMarkets: [
    {
      id: "NV001",
      name: "Downtown 3rd Farmers Market",
      type: "Urban Market",
      address: "300 N Casino Center Blvd, Las Vegas, NV 89101",
      coordinates: {
        lat: 36.171389,
        lng: -115.143889
      },
      contact: {
        phone: "(702) 541-3534",
        email: "info@dt3fm.com",
        website: "downtown3rdfarmersmarket.com",
        socialMedia: {
          facebook: "Downtown3rdFarmersMarket",
          instagram: "@dt3fm"
        }
      },
      schedule: {
        regularHours: {
          friday: "9:00 AM - 2:00 PM"
        },
        seasonalNotes: "Year-round market",
        holidays: "Closed on major holidays"
      },
      description: "Urban farmers market in downtown Las Vegas",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Fresh Produce",
          "Local Honey",
          "Artisan Bread",
          "Prepared Foods",
          "Crafts",
          "Desert-Adapted Plants"
        ],
        amenities: [
          "Indoor Location",
          "Air Conditioning",
          "Restrooms",
          "Wheelchair Accessible",
          "Parking Garage"
        ],
        events: [
          "Chef demonstrations",
          "Nutrition workshops",
          "Kids activities",
          "Local entertainment"
        ]
      },
      vendorInfo: {
        totalVendors: 40,
        applicationProcess: "Rolling application process",
        vendorFees: "Daily: $35, Month: $120",
        requirements: [
          "Nevada-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Nevada Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-15"
      },
      statistics: {
        averageWeeklyVisitors: 1500,
        annualSales: "$800K",
        percentLocalProduce: 85
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-NV001",
      name: "Three Square Food Bank",
      type: "Regional Food Bank",
      address: "4190 N Pecos Rd, Las Vegas, NV 89115",
      coordinates: {
        lat: 36.240278,
        lng: -115.098889
      },
      contact: {
        phone: "(702) 644-3663",
        email: "info@threesquare.org",
        website: "threesquare.org",
        emergencyContact: "(702) 644-3663 ext. 1"
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
      description: "Southern Nevada's only food bank providing food assistance",
      services: {
        primary: [
          "Food Distribution",
          "Kids Cafe",
          "Senior Share Program",
          "Mobile Pantry"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Summer Food Service"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Self-declared need"
        ],
        restrictions: "Southern Nevada residents only",
        frequency: "Once per month per household"
      },
      capacity: {
        storageSpace: "200,000 sq ft",
        coldStorage: "50,000 sq ft",
        monthlyDistribution: "4M pounds",
        servingCapacity: "130,000 people/month"
      },
      partnerships: {
        retailers: ["Smith's", "Albertsons", "Walmart", "Sam's Club"],
        farms: ["Nevada Farm Bureau", "Local Produce Farms"],
        organizations: ["Feeding America", "Nevada Department of Agriculture"]
      },
      impact: {
        annualPoundsDistributed: "47M",
        peopleServed: "364,000",
        countiesServed: 4,
        volunteerHours: "73,000"
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
          "Kids Cafe"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Project Garden Harvest",
      description: "Recovering surplus produce from urban gardens and farms in Nevada",
      contact: {
        name: "Program Director",
        phone: "(702) 555-0123",
        email: "glean@projectgardenharvest.org"
      },
      website: "projectgardenharvest.org",
      areas: ["Las Vegas Valley", "Reno Area", "Carson City"],
      schedule: "March through November",
      requirements: {
        volunteers: [
          "Must be 16 or older",
          "Sign waiver",
          "Attend orientation",
          "Physical ability to harvest"
        ],
        farmers: [
          "Provide garden/field access",
          "Sign liability waiver",
          "Advance notice",
          "Safe conditions"
        ]
      },
      impact: {
        annualPounds: 50000,
        servingAgencies: 15,
        volunteerHours: 3000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Silver State Fresh Distribution",
      type: "Regional Distributor",
      address: "456 Distribution Way, Sparks, NV 89431",
      coordinates: {
        lat: 39.541667,
        lng: -119.748889
      },
      contact: {
        name: "Operations Director",
        phone: "(775) 555-0124",
        email: "ops@silverstatefresh.org"
      },
      website: "silverstatefresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Nevada and Eastern California",
      requirements: {
        minimumOrder: "$300",
        leadTime: "48 hours",
        delivery: "Available for orders over $600"
      },
      certifications: [
        "USDA Approved",
        "Nevada Grown Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Nevada Farm to School",
      website: "agri.nv.gov/farmtoschool",
      coordinator: "State Farm to School Coordinator",
      phone: "(775) 353-3601",
      description: "Connecting Nevada schools with fresh, local food"
    },
    marketVouchers: {
      name: "Nevada Farmers Market Association",
      website: "nvfma.org",
      programs: [
        "Double Up Food Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default nevadaResources;
