const westVirginiaResources = {
  state: "West Virginia",
  abbreviation: "WV",
  stateInfo: {
    capital: "Charleston",
    region: "Appalachian",
    agriculturalZones: ["5b", "6a", "6b", "7a"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Apples",
      "Peaches",
      "Corn",
      "Hay",
      "Cattle",
      "Poultry"
    ],
    agriculturalFacts: [
      "23,000 farms covering 3.6 million acres",
      "Leading producer of golden delicious apples",
      "Agriculture contributes $800M annually to state economy",
      "Strong maple syrup production in higher elevations"
    ]
  },
  farmersMarkets: [
    {
      id: "WV001",
      name: "Capitol Market",
      type: "Year-round Market",
      address: "800 Smith Street, Charleston, WV 25301",
      coordinates: {
        lat: 38.350000,
        lng: -81.633333
      },
      contact: {
        phone: "(304) 344-1905",
        email: "info@capitolmarket.net",
        website: "capitolmarket.net",
        socialMedia: {
          facebook: "CapitolMarket",
          instagram: "@capitolmarketwv"
        }
      },
      schedule: {
        regularHours: {
          monday: "9:00 AM - 6:00 PM",
          tuesday: "9:00 AM - 6:00 PM",
          wednesday: "9:00 AM - 6:00 PM",
          thursday: "9:00 AM - 6:00 PM",
          friday: "9:00 AM - 6:00 PM",
          saturday: "9:00 AM - 6:00 PM",
          sunday: "12:00 PM - 5:00 PM"
        },
        seasonalNotes: "Year-round market, outdoor pavilion April-December",
        holidays: "Modified hours on holidays"
      },
      description: "Historic railroad depot turned vibrant market",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Senior FMNP"],
        products: [
          "Fresh Produce",
          "Meat",
          "Dairy",
          "Baked Goods",
          "Plants",
          "Crafts",
          "Specialty Foods"
        ],
        amenities: [
          "Indoor/Outdoor Space",
          "Restaurants",
          "Restrooms",
          "Wheelchair Accessible",
          "Free Parking"
        ],
        events: [
          "Cooking demonstrations",
          "Live music",
          "Holiday markets",
          "Farm tours"
        ]
      },
      vendorInfo: {
        totalVendors: 30,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $25, Season: $400",
        requirements: [
          "West Virginia-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "West Virginia Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 3000,
        annualSales: "$1.5M",
        percentLocalProduce: 85
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-WV001",
      name: "Mountaineer Food Bank",
      type: "State Food Bank",
      address: "484 Enterprise Drive, Gassaway, WV 26624",
      coordinates: {
        lat: 38.666667,
        lng: -80.766667
      },
      contact: {
        phone: "(304) 364-5518",
        email: "info@mountaineerfoodbank.org",
        website: "mountaineerfoodbank.org",
        emergencyContact: "(304) 364-5518 ext. 1"
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
      description: "Serving 48 counties in West Virginia",
      services: {
        primary: [
          "Food Distribution",
          "Mobile Pantry",
          "BackPack Program",
          "Senior Box Program"
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
        storageSpace: "75,000 sq ft",
        coldStorage: "15,000 sq ft",
        monthlyDistribution: "1.5M pounds",
        servingCapacity: "120,000 people/month"
      },
      partnerships: {
        retailers: ["Kroger", "Save-A-Lot", "Walmart", "Food Lion"],
        farms: ["WV Farm Bureau", "Local Orchards"],
        organizations: ["Feeding America", "WV Food and Farm Coalition"]
      },
      impact: {
        annualPoundsDistributed: "18M",
        peopleServed: "120,000",
        countiesServed: 48,
        volunteerHours: "30,000"
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
      name: "WV Gleaning Network",
      description: "Recovering surplus crops from West Virginia farms and orchards",
      contact: {
        name: "Program Director",
        phone: "(304) 555-0123",
        email: "glean@wvglean.org"
      },
      website: "wvglean.org",
      areas: ["Eastern Panhandle", "Ohio Valley", "Southern WV"],
      schedule: "May through October",
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
        annualPounds: 150000,
        servingAgencies: 35,
        volunteerHours: 5000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Mountain State Distribution",
      type: "Regional Distributor",
      address: "123 Distribution Way, Bridgeport, WV 26330",
      coordinates: {
        lat: 39.283333,
        lng: -80.250000
      },
      contact: {
        name: "Operations Director",
        phone: "(304) 555-0124",
        email: "ops@mountainstatedist.org"
      },
      website: "mountainstatedist.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "West Virginia and surrounding states",
      requirements: {
        minimumOrder: "$250",
        leadTime: "48 hours",
        delivery: "Available for orders over $500"
      },
      certifications: [
        "USDA Approved",
        "West Virginia Grown Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "West Virginia Farm to School",
      website: "wvfarmtoschool.org",
      coordinator: "Farm to School Coordinator",
      phone: "(304) 558-2210",
      description: "Connecting West Virginia schools with fresh, local food"
    },
    marketVouchers: {
      name: "West Virginia Farmers Market Association",
      website: "wvfarmers.org",
      programs: [
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program",
        "SNAP Stretch"
      ]
    }
  }
};

export default westVirginiaResources;
