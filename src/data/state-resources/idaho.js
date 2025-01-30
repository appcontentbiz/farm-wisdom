const idahoResources = {
  state: "Idaho",
  abbreviation: "ID",
  stateInfo: {
    capital: "Boise",
    region: "Northwest",
    agriculturalZones: ["3b", "4a", "4b", "5a", "5b", "6a", "6b"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Potatoes",
      "Wheat",
      "Sugar Beets",
      "Hay",
      "Barley",
      "Onions"
    ],
    agriculturalFacts: [
      "Over 25,000 farms covering 11.7 million acres",
      "Agriculture contributes $26 billion to state economy",
      "#1 US producer of potatoes",
      "Leader in dairy production"
    ]
  },
  farmersMarkets: [
    {
      id: "ID001",
      name: "Capital City Public Market",
      type: "Producer-Only Market",
      address: "Downtown Boise, ID 83702",
      coordinates: {
        lat: 43.615739,
        lng: -116.202316
      },
      contact: {
        phone: "(208) 345-9287",
        email: "info@capitalcitypublicmarket.com",
        website: "capitalcitypublicmarket.com",
        socialMedia: {
          facebook: "CapitalCityPublicMarket",
          instagram: "@boisefarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "9:30 AM - 1:30 PM"
        },
        seasonalNotes: "April through December, Indoor Winter Market",
        holidays: "Special holiday markets"
      },
      description: "Downtown Boise's premier farmers market featuring local producers",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Fresh Produce",
          "Local Meats",
          "Dairy Products",
          "Artisan Foods",
          "Baked Goods",
          "Local Crafts"
        ],
        amenities: [
          "Downtown Location",
          "Live Music",
          "Street Closure",
          "Restrooms",
          "Pet Friendly"
        ],
        events: [
          "Chef demonstrations",
          "Live music",
          "Kids activities",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 150,
        applicationProcess: "Annual jury process",
        vendorFees: "Daily: $40, Season: $600",
        requirements: [
          "Idaho-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer-only verification"
        ]
      },
      certification: {
        type: "Idaho Preferred Market",
        inspections: "Monthly",
        lastInspection: "2024-12-10"
      },
      statistics: {
        averageWeeklyVisitors: 5000,
        annualSales: "$2.5M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-ID001",
      name: "The Idaho Foodbank",
      type: "Statewide Food Bank",
      address: "3630 E Commercial Court, Meridian, ID 83642",
      coordinates: {
        lat: 43.605900,
        lng: -116.357300
      },
      contact: {
        phone: "(208) 336-9643",
        email: "info@idahofoodbank.org",
        website: "idahofoodbank.org",
        emergencyContact: "(208) 336-9643 ext. 1"
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
      description: "Serving all of Idaho with emergency food assistance",
      services: {
        primary: [
          "Food Distribution",
          "Mobile Pantry",
          "School Pantry",
          "Backpack Program"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Cooking Matters",
          "Agency Training"
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
        storageSpace: "110,000 sq ft",
        coldStorage: "30,000 sq ft",
        monthlyDistribution: "2M pounds",
        servingCapacity: "40,000 households/month"
      },
      partnerships: {
        retailers: ["Albertsons", "WinCo Foods", "Fred Meyer", "Walmart"],
        farms: ["Idaho Farm Bureau", "Local Potato Growers"],
        organizations: ["Feeding America", "Idaho Hunger Relief Task Force"]
      },
      impact: {
        annualPoundsDistributed: "24M",
        peopleServed: "250,000",
        countiesServed: 44,
        volunteerHours: "75,000"
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
          "Nutrition education"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Idaho Gleaners",
      description: "Harvesting surplus crops from Idaho farms and orchards",
      contact: {
        name: "Program Coordinator",
        phone: "(208) 555-0123",
        email: "glean@idahogleaners.org"
      },
      website: "idahogleaners.org",
      areas: ["Treasure Valley", "Magic Valley", "Eastern Idaho"],
      schedule: "May through October",
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
        annualPounds: 400000,
        servingAgencies: 50,
        volunteerHours: 10000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Idaho Fresh Distribution",
      type: "Regional Distributor",
      address: "456 Distribution Lane, Twin Falls, ID 83301",
      coordinates: {
        lat: 42.570822,
        lng: -114.460615
      },
      contact: {
        name: "Operations Director",
        phone: "(208) 555-0124",
        email: "ops@idahofreshdist.org"
      },
      website: "idahofreshdist.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Export Services"
      ],
      coverage: "Idaho and neighboring states",
      requirements: {
        minimumOrder: "$250",
        leadTime: "48 hours",
        delivery: "Available for orders over $600"
      },
      certifications: [
        "USDA Approved",
        "Idaho Preferred Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Idaho Farm to School",
      website: "idahofarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(208) 332-6800",
      description: "Connecting Idaho schools with fresh, local produce"
    },
    marketVouchers: {
      name: "Idaho Farmers Market Association",
      website: "idahofma.org",
      programs: [
        "Idaho Double Up Food Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default idahoResources;
