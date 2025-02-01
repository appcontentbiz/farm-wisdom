const oregonResources = {
  state: "Oregon",
  abbreviation: "OR",
  stateInfo: {
    capital: "Salem",
    region: "Pacific Northwest",
    agriculturalZones: ["4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Hazelnuts",
      "Berries",
      "Pears",
      "Wine Grapes",
      "Hops",
      "Christmas Trees"
    ],
    agriculturalFacts: [
      "37,200 farms covering 16.1 million acres",
      "#1 producer of hazelnuts in the US",
      "Agriculture contributes $5.4B annually to state economy",
      "Leading producer of many berry varieties and Christmas trees"
    ]
  },
  farmersMarkets: [
    {
      id: "OR001",
      name: "Portland Farmers Market at PSU",
      type: "Year-round Market",
      address: "1717 SW Park Avenue, Portland, OR 97201",
      coordinates: {
        lat: 45.511667,
        lng: -122.685556
      },
      contact: {
        phone: "(503) 241-0032",
        email: "info@portlandfarmersmarket.org",
        website: "portlandfarmersmarket.org",
        socialMedia: {
          facebook: "PortlandFarmersMarket",
          instagram: "@portlandfarmers"
        }
      },
      schedule: {
        regularHours: {
          saturday: "8:30 AM - 2:00 PM"
        },
        seasonalNotes: "Year-round market, peak season April-November",
        holidays: "Closed on major holidays"
      },
      description: "Portland's flagship farmers market at Portland State University",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Fresh Produce",
          "Meat",
          "Fish",
          "Dairy",
          "Baked Goods",
          "Prepared Foods",
          "Flowers"
        ],
        amenities: [
          "Live Music",
          "Chef Demonstrations",
          "Restrooms",
          "Wheelchair Accessible",
          "ATM"
        ],
        events: [
          "Cooking demonstrations",
          "Live music",
          "Kids activities",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 140,
        applicationProcess: "Annual competitive application process",
        vendorFees: "Daily: $45-65, Season: $800-1200",
        requirements: [
          "Oregon-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Oregon Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 12000,
        annualSales: "$8M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-OR001",
      name: "Oregon Food Bank",
      type: "State Food Bank",
      address: "7900 NE 33rd Drive, Portland, OR 97211",
      coordinates: {
        lat: 45.575556,
        lng: -122.631111
      },
      contact: {
        phone: "(503) 282-0555",
        email: "info@oregonfoodbank.org",
        website: "oregonfoodbank.org",
        emergencyContact: "(503) 282-0555 ext. 1"
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
      description: "Oregon's largest hunger-relief organization",
      services: {
        primary: [
          "Food Distribution",
          "FEAST Program",
          "Mobile Food Pantry",
          "Learning Gardens"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Food Systems Advocacy"
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
        storageSpace: "250,000 sq ft",
        coldStorage: "60,000 sq ft",
        monthlyDistribution: "4M pounds",
        servingCapacity: "260,000 people/month"
      },
      partnerships: {
        retailers: ["Fred Meyer", "New Seasons", "Safeway", "Whole Foods"],
        farms: ["Oregon Farm Bureau", "Local Organic Farms"],
        organizations: ["Feeding America", "Oregon Food Bank Network"]
      },
      impact: {
        annualPoundsDistributed: "47.5M",
        peopleServed: "260,000",
        countiesServed: 36,
        volunteerHours: "125,000"
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
          "Garden maintenance",
          "Office support",
          "Mobile pantry"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Oregon Gleaners Network",
      description: "Recovering surplus crops from Oregon farms and orchards",
      contact: {
        name: "Program Director",
        phone: "(503) 555-0123",
        email: "glean@oregongleaners.org"
      },
      website: "oregongleaners.org",
      areas: ["Willamette Valley", "Columbia River Gorge", "Southern Oregon"],
      schedule: "Year-round, peak season June-October",
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
        annualPounds: 850000,
        servingAgencies: 75,
        volunteerHours: 22000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Pacific Northwest Fresh Distribution",
      type: "Regional Distributor",
      address: "123 Distribution Lane, Salem, OR 97301",
      coordinates: {
        lat: 44.944444,
        lng: -123.035556
      },
      contact: {
        name: "Operations Director",
        phone: "(503) 555-0124",
        email: "ops@pnwfresh.org"
      },
      website: "pnwfresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Oregon and Southwest Washington",
      requirements: {
        minimumOrder: "$400",
        leadTime: "48 hours",
        delivery: "Available for orders over $800"
      },
      certifications: [
        "USDA Approved",
        "Oregon Grown Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Oregon Farm to School",
      website: "oregonfarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(503) 709-5360",
      description: "Connecting Oregon schools with fresh, local food"
    },
    marketVouchers: {
      name: "Oregon Farmers Markets Association",
      website: "oregonfarmersmarkets.org",
      programs: [
        "Double Up Food Bucks",
        "Senior Farm Direct Nutrition Program",
        "WIC Farm Direct Nutrition Program"
      ]
    }
  }
};

export default oregonResources;
