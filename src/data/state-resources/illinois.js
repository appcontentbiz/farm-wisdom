const illinoisResources = {
  state: "Illinois",
  abbreviation: "IL",
  stateInfo: {
    capital: "Springfield",
    region: "Midwest",
    agriculturalZones: ["5a", "5b", "6a", "6b"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Corn",
      "Soybeans",
      "Swine",
      "Cattle",
      "Wheat",
      "Pumpkins"
    ],
    agriculturalFacts: [
      "Over 72,000 farms covering 27 million acres",
      "Agriculture contributes $19 billion to state economy",
      "#1 producer of pumpkins in the US",
      "Leading producer of corn and soybeans"
    ]
  },
  farmersMarkets: [
    {
      id: "IL001",
      name: "Green City Market",
      type: "Producer-Only Market",
      address: "1817 N Clark St, Chicago, IL 60614",
      coordinates: {
        lat: 41.915138,
        lng: -87.636935
      },
      contact: {
        phone: "(773) 880-1266",
        email: "info@greencitymarket.org",
        website: "greencitymarket.org",
        socialMedia: {
          facebook: "GreenCityMarket",
          instagram: "@greencitymarket",
          twitter: "@GreenCityMarket"
        }
      },
      schedule: {
        regularHours: {
          wednesday: "7:00 AM - 1:00 PM",
          saturday: "7:00 AM - 1:00 PM"
        },
        seasonalNotes: "Outdoor May-October, Indoor November-April",
        holidays: "Special holiday markets"
      },
      description: "Chicago's premier sustainable farmers market",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Link Match"],
        products: [
          "Organic Produce",
          "Heritage Meats",
          "Artisan Cheese",
          "Baked Goods",
          "Local Honey",
          "Prepared Foods"
        ],
        amenities: [
          "Chef Demonstrations",
          "Educational Programs",
          "Restrooms",
          "Wheelchair Accessible",
          "Public Transit Access"
        ],
        events: [
          "Cooking demonstrations",
          "Club Sprouts kids program",
          "Chef talks",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 50,
        applicationProcess: "Annual jury process",
        vendorFees: "Daily: $60, Season: $1200",
        requirements: [
          "Local production within 250 miles",
          "Third-party sustainability certification",
          "Insurance required",
          "Health department permits"
        ]
      },
      certification: {
        type: "Illinois Farmers Market Association Certified",
        inspections: "Quarterly",
        lastInspection: "2024-12-15"
      },
      statistics: {
        averageWeeklyVisitors: 8000,
        annualSales: "$4M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-IL001",
      name: "Greater Chicago Food Depository",
      type: "Regional Food Bank",
      address: "4100 W Ann Lurie Place, Chicago, IL 60632",
      coordinates: {
        lat: 41.813778,
        lng: -87.728472
      },
      contact: {
        phone: "(773) 247-3663",
        email: "info@gcfd.org",
        website: "chicagosfoodbank.org",
        emergencyContact: "(773) 247-3663 ext. 1"
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
          monday: "7:00 AM - 5:00 PM",
          tuesday: "7:00 AM - 5:00 PM",
          wednesday: "7:00 AM - 5:00 PM",
          thursday: "7:00 AM - 5:00 PM",
          friday: "7:00 AM - 5:00 PM"
        }
      },
      description: "Serving Cook County with emergency food assistance",
      services: {
        primary: [
          "Food Distribution",
          "SNAP Outreach",
          "Workforce Training",
          "Children's Programs"
        ],
        additional: [
          "Nutrition Education",
          "Benefits Screening",
          "Agency Training",
          "Mobile Pantry"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of Cook County residence",
          "Self-declared need"
        ],
        restrictions: "Cook County residents only",
        frequency: "Once per month per household"
      },
      capacity: {
        storageSpace: "268,000 sq ft",
        coldStorage: "60,000 sq ft",
        monthlyDistribution: "8M pounds",
        servingCapacity: "120,000 households/month"
      },
      partnerships: {
        retailers: ["Jewel-Osco", "Mariano's", "Walmart", "Aldi"],
        farms: ["Illinois Farm Bureau", "Local Urban Farms"],
        organizations: ["Feeding America", "Illinois Hunger Coalition"]
      },
      impact: {
        annualPoundsDistributed: "96M",
        peopleServed: "800,000",
        countiesServed: 1,
        volunteerHours: "250,000"
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
          "Workforce training"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Illinois Gleaning Network",
      description: "Harvesting surplus crops from Illinois farms",
      contact: {
        name: "Program Coordinator",
        phone: "(312) 555-0123",
        email: "glean@illinoisgleans.org"
      },
      website: "illinoisgleans.org",
      areas: ["Chicago Metro", "Central Illinois", "Southern Illinois"],
      schedule: "May through November",
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
        annualPounds: 750000,
        servingAgencies: 100,
        volunteerHours: 20000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Illinois Fresh Distribution",
      type: "Regional Distributor",
      address: "789 Distribution Parkway, Bloomington, IL 61701",
      coordinates: {
        lat: 40.484203,
        lng: -88.993687
      },
      contact: {
        name: "Operations Director",
        phone: "(309) 555-0124",
        email: "ops@ilfreshdist.org"
      },
      website: "illinoisfreshdist.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Illinois and neighboring states",
      requirements: {
        minimumOrder: "$500",
        leadTime: "48 hours",
        delivery: "Available for orders over $1000"
      },
      certifications: [
        "USDA Approved",
        "Illinois Product Seal",
        "GAP Certified",
        "Organic Handler"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Illinois Farm to School Network",
      website: "illinoisfarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(708) 524-9100",
      description: "Connecting Illinois schools with fresh, local produce"
    },
    marketVouchers: {
      name: "Illinois Farmers Market Association",
      website: "ilfma.org",
      programs: [
        "Link Match Program",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default illinoisResources;
