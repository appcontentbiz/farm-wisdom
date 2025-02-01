const newMexicoResources = {
  state: "New Mexico",
  abbreviation: "NM",
  stateInfo: {
    capital: "Santa Fe",
    region: "Southwest",
    agriculturalZones: ["4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Chile Peppers",
      "Pecans",
      "Onions",
      "Cotton",
      "Hay",
      "Dairy"
    ],
    agriculturalFacts: [
      "24,700 farms covering 43.9 million acres",
      "#1 producer of chile peppers in the US",
      "Agriculture contributes $3.4B annually to state economy",
      "Leading producer of pecans and onions"
    ]
  },
  farmersMarkets: [
    {
      id: "NM001",
      name: "Santa Fe Farmers Market",
      type: "Year-round Market",
      address: "1607 Paseo De Peralta, Santa Fe, NM 87501",
      coordinates: {
        lat: 35.686389,
        lng: -105.938333
      },
      contact: {
        phone: "(505) 983-4098",
        email: "info@santafefarmersmarket.com",
        website: "santafefarmersmarket.com",
        socialMedia: {
          facebook: "SantaFeFarmersMarket",
          instagram: "@santafefarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          tuesday: "8:00 AM - 1:00 PM",
          saturday: "8:00 AM - 1:00 PM"
        },
        seasonalNotes: "Year-round market",
        holidays: "Special holiday markets"
      },
      description: "Historic market in the Santa Fe Railyard",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Fresh Produce",
          "Chile Products",
          "Local Honey",
          "Native Foods",
          "Artisan Crafts",
          "Prepared Foods"
        ],
        amenities: [
          "Indoor/Outdoor Space",
          "Restrooms",
          "Wheelchair Accessible",
          "Parking",
          "ATM"
        ],
        events: [
          "Cooking demonstrations",
          "Cultural celebrations",
          "Kids activities",
          "Educational programs"
        ]
      },
      vendorInfo: {
        totalVendors: 150,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $30, Season: $800",
        requirements: [
          "New Mexico-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "New Mexico Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 4000,
        annualSales: "$3.2M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-NM001",
      name: "Roadrunner Food Bank",
      type: "State Food Bank",
      address: "5840 Office Blvd NE, Albuquerque, NM 87109",
      coordinates: {
        lat: 35.150833,
        lng: -106.583889
      },
      contact: {
        phone: "(505) 247-2052",
        email: "info@rrfb.org",
        website: "rrfb.org",
        emergencyContact: "(505) 247-2052 ext. 1"
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
      description: "Largest hunger relief organization in New Mexico",
      services: {
        primary: [
          "Food Distribution",
          "Mobile Food Pantry",
          "Childhood Hunger Initiative",
          "Senior Hunger Initiative"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Food Rescue Program"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Self-declared need"
        ],
        restrictions: "New Mexico residents only",
        frequency: "Once per month per household"
      },
      capacity: {
        storageSpace: "166,000 sq ft",
        coldStorage: "40,000 sq ft",
        monthlyDistribution: "3M pounds",
        servingCapacity: "70,000 people/month"
      },
      partnerships: {
        retailers: ["Smith's", "Albertsons", "Walmart", "Costco"],
        farms: ["NM Farm & Livestock Bureau", "Local Chile Farms"],
        organizations: ["Feeding America", "NM Association of Food Banks"]
      },
      impact: {
        annualPoundsDistributed: "40M",
        peopleServed: "70,000",
        countiesServed: 33,
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
          "Food rescue"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Desert Harvest",
      description: "Recovering surplus crops from New Mexico farms and orchards",
      contact: {
        name: "Program Director",
        phone: "(505) 555-0123",
        email: "glean@desertharvest.org"
      },
      website: "desertharvest.org",
      areas: ["Albuquerque Metro", "Santa Fe Area", "Las Cruces Region"],
      schedule: "March through November",
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
        annualPounds: 200000,
        servingAgencies: 30,
        volunteerHours: 6000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Land of Enchantment Distribution",
      type: "Regional Distributor",
      address: "456 Distribution Way, Los Lunas, NM 87031",
      coordinates: {
        lat: 34.806944,
        lng: -106.733333
      },
      contact: {
        name: "Operations Director",
        phone: "(505) 555-0124",
        email: "ops@loedistribution.org"
      },
      website: "loedistribution.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "New Mexico and West Texas",
      requirements: {
        minimumOrder: "$300",
        leadTime: "48 hours",
        delivery: "Available for orders over $600"
      },
      certifications: [
        "USDA Approved",
        "New Mexico True Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "New Mexico Farm to School",
      website: "farmtoschool.nmsu.edu",
      coordinator: "State Farm to School Coordinator",
      phone: "(505) 841-9060",
      description: "Connecting New Mexico schools with fresh, local food"
    },
    marketVouchers: {
      name: "New Mexico Farmers' Marketing Association",
      website: "farmersmarketsnm.org",
      programs: [
        "Double Up Food Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default newMexicoResources;
