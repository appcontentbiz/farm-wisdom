const kansasResources = {
  state: "Kansas",
  abbreviation: "KS",
  stateInfo: {
    capital: "Topeka",
    region: "Midwest",
    agriculturalZones: ["5b", "6a", "6b"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Wheat",
      "Corn",
      "Soybeans",
      "Sorghum",
      "Cattle",
      "Sunflowers"
    ],
    agriculturalFacts: [
      "Over 58,000 farms covering 45.7 million acres",
      "Agriculture contributes $76 billion to state economy",
      "#1 producer of wheat in the US",
      "Leader in beef cattle production"
    ]
  },
  farmersMarkets: [
    {
      id: "KS001",
      name: "Lawrence Farmers Market",
      type: "Producer-Only Market",
      address: "824 New Hampshire St, Lawrence, KS 66044",
      coordinates: {
        lat: 38.971669,
        lng: -95.235250
      },
      contact: {
        phone: "(785) 505-0117",
        email: "info@lawrencefarmersmarket.org",
        website: "lawrencefarmersmarket.org",
        socialMedia: {
          facebook: "LawrenceFarmersMarket",
          instagram: "@lawrencefarmmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "7:30 AM - 11:30 AM",
          tuesday: "4:00 PM - 6:00 PM"
        },
        seasonalNotes: "April through November, Winter Market December-March",
        holidays: "Special holiday markets"
      },
      description: "Kansas's oldest farmers market, established in 1976",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Local Produce",
          "Grass-fed Meats",
          "Farm Eggs",
          "Artisan Breads",
          "Local Honey",
          "Cut Flowers"
        ],
        amenities: [
          "Downtown Location",
          "Live Music",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking"
        ],
        events: [
          "Chef demonstrations",
          "Live music",
          "Kids activities",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 100,
        applicationProcess: "Annual application",
        vendorFees: "Daily: $30, Season: $450",
        requirements: [
          "Kansas-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer-only verification"
        ]
      },
      certification: {
        type: "From the Land of Kansas Market",
        inspections: "Monthly",
        lastInspection: "2024-12-10"
      },
      statistics: {
        averageWeeklyVisitors: 3000,
        annualSales: "$1.8M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-KS001",
      name: "Kansas Food Bank",
      type: "Regional Food Bank",
      address: "1919 E Douglas, Wichita, KS 67211",
      coordinates: {
        lat: 37.686390,
        lng: -97.317780
      },
      contact: {
        phone: "(316) 265-3663",
        email: "info@kansasfoodbank.org",
        website: "kansasfoodbank.org",
        emergencyContact: "(316) 265-3663 ext. 1"
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
      description: "Serving central and western Kansas with emergency food assistance",
      services: {
        primary: [
          "Food Distribution",
          "Food 4 Kids Program",
          "Mobile Food Pantry",
          "Senior Box Program"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Rural Outreach"
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
        storageSpace: "140,000 sq ft",
        coldStorage: "35,000 sq ft",
        monthlyDistribution: "2.5M pounds",
        servingCapacity: "35,000 households/month"
      },
      partnerships: {
        retailers: ["Dillons", "Walmart", "Target", "Aldi"],
        farms: ["Kansas Farm Bureau", "Local Grain Producers"],
        organizations: ["Feeding America", "Kansas Hunger Coalition"]
      },
      impact: {
        annualPoundsDistributed: "30M",
        peopleServed: "215,000",
        countiesServed: 85,
        volunteerHours: "60,000"
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
          "Food 4 Kids program"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "After the Harvest",
      description: "Gleaning fresh produce from Kansas farms and gardens",
      contact: {
        name: "Program Director",
        phone: "(785) 555-0123",
        email: "glean@aftertheharvest.org"
      },
      website: "aftertheharvest.org",
      areas: ["Eastern Kansas", "Central Kansas", "Western Kansas"],
      schedule: "May through November",
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
        annualPounds: 450000,
        servingAgencies: 55,
        volunteerHours: 12000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Sunflower Fresh Distribution",
      type: "Regional Distributor",
      address: "456 Distribution Way, Salina, KS 67401",
      coordinates: {
        lat: 38.840281,
        lng: -97.611424
      },
      contact: {
        name: "Operations Director",
        phone: "(785) 555-0124",
        email: "ops@sunflowerfresh.org"
      },
      website: "sunflowerfreshdist.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Kansas and neighboring states",
      requirements: {
        minimumOrder: "$300",
        leadTime: "48 hours",
        delivery: "Available for orders over $750"
      },
      certifications: [
        "USDA Approved",
        "From the Land of Kansas Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Kansas Farm to School Program",
      website: "kansasfarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(785) 296-2276",
      description: "Connecting Kansas schools with fresh, local produce"
    },
    marketVouchers: {
      name: "Kansas Farmers Market Association",
      website: "ksfarmersmarkets.org",
      programs: [
        "Double Up Food Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default kansasResources;
