const iowaResources = {
  state: "Iowa",
  abbreviation: "IA",
  stateInfo: {
    capital: "Des Moines",
    region: "Midwest",
    agriculturalZones: ["4b", "5a", "5b"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Corn",
      "Soybeans",
      "Hogs",
      "Eggs",
      "Cattle",
      "Wind Energy"
    ],
    agriculturalFacts: [
      "Over 85,000 farms covering 30.5 million acres",
      "Agriculture contributes $112 billion to state economy",
      "#1 producer of corn, soybeans, and pork in the US",
      "Leader in renewable energy from agriculture"
    ]
  },
  farmersMarkets: [
    {
      id: "IA001",
      name: "Downtown Farmers' Market",
      type: "Producer-Only Market",
      address: "Court Avenue District, Des Moines, IA 50309",
      coordinates: {
        lat: 41.585760,
        lng: -93.620179
      },
      contact: {
        phone: "(515) 286-4928",
        email: "info@desmoinesfarmersmarket.com",
        website: "desmoinesfarmersmarket.com",
        socialMedia: {
          facebook: "DesMoinesFarmersMarket",
          instagram: "@dsmfarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "7:00 AM - 12:00 PM"
        },
        seasonalNotes: "May through October, Winter Market November-April",
        holidays: "Special holiday markets"
      },
      description: "One of the largest farmers markets in the Midwest",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Fresh Produce",
          "Local Meats",
          "Dairy Products",
          "Baked Goods",
          "Local Honey",
          "Farm Crafts"
        ],
        amenities: [
          "Street Festival",
          "Live Entertainment",
          "Restrooms",
          "Wheelchair Accessible",
          "ATMs"
        ],
        events: [
          "Chef demonstrations",
          "Live music",
          "Kids activities",
          "Farm education"
        ]
      },
      vendorInfo: {
        totalVendors: 300,
        applicationProcess: "Annual jury process",
        vendorFees: "Daily: $45, Season: $800",
        requirements: [
          "Iowa-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer-only verification"
        ]
      },
      certification: {
        type: "Iowa Farmers Market Association Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-15"
      },
      statistics: {
        averageWeeklyVisitors: 25000,
        annualSales: "$10M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-IA001",
      name: "Food Bank of Iowa",
      type: "Regional Food Bank",
      address: "2220 E 17th Street, Des Moines, IA 50316",
      coordinates: {
        lat: 41.601389,
        lng: -93.596111
      },
      contact: {
        phone: "(515) 564-0330",
        email: "info@foodbankiowa.org",
        website: "foodbankiowa.org",
        emergencyContact: "(515) 564-0330 ext. 1"
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
      description: "Serving central and western Iowa with emergency food assistance",
      services: {
        primary: [
          "Food Distribution",
          "BackPack Program",
          "Mobile Pantry",
          "School Pantry"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Food Rescue"
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
        storageSpace: "175,000 sq ft",
        coldStorage: "40,000 sq ft",
        monthlyDistribution: "3M pounds",
        servingCapacity: "50,000 households/month"
      },
      partnerships: {
        retailers: ["Hy-Vee", "Fareway", "Walmart", "Target"],
        farms: ["Iowa Farm Bureau", "Local Grain Producers"],
        organizations: ["Feeding America", "Iowa Hunger Coalition"]
      },
      impact: {
        annualPoundsDistributed: "36M",
        peopleServed: "400,000",
        countiesServed: 55,
        volunteerHours: "80,000"
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
      name: "Iowa Gleaning Network",
      description: "Recovering surplus crops from Iowa farms",
      contact: {
        name: "Program Director",
        phone: "(515) 555-0123",
        email: "glean@iowagleans.org"
      },
      website: "iowagleans.org",
      areas: ["Central Iowa", "Eastern Iowa", "Western Iowa"],
      schedule: "June through October",
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
        annualPounds: 500000,
        servingAgencies: 60,
        volunteerHours: 15000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Iowa Fresh Distribution",
      type: "Regional Distributor",
      address: "789 Distribution Court, Cedar Rapids, IA 52404",
      coordinates: {
        lat: 41.977880,
        lng: -91.665627
      },
      contact: {
        name: "Operations Director",
        phone: "(319) 555-0124",
        email: "ops@iowafreshdist.org"
      },
      website: "iowafreshdist.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Iowa and neighboring states",
      requirements: {
        minimumOrder: "$400",
        leadTime: "48 hours",
        delivery: "Available for orders over $800"
      },
      certifications: [
        "USDA Approved",
        "Iowa Grown Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Iowa Farm to School Network",
      website: "iowafarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(515) 281-4756",
      description: "Connecting Iowa schools with fresh, local produce"
    },
    marketVouchers: {
      name: "Iowa Farmers Market Association",
      website: "iafarmersmarkets.org",
      programs: [
        "Double Up Food Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default iowaResources;
