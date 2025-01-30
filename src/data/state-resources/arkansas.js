const arkansasResources = {
  state: "Arkansas",
  abbreviation: "AR",
  stateInfo: {
    capital: "Little Rock",
    region: "South Central",
    agriculturalZones: ["6b", "7a", "7b", "8a"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Rice",
      "Soybeans",
      "Cotton",
      "Corn",
      "Poultry"
    ],
    agriculturalFacts: [
      "Arkansas is the largest rice producer in the U.S.",
      "Over 14 million acres of farmland",
      "Agriculture contributes $16 billion annually to state economy",
      "Leading producer of broiler chickens"
    ]
  },
  farmersMarkets: [
    {
      id: "AR001",
      name: "Little Rock Farmers' Market",
      type: "River Market District Market",
      address: "400 President Clinton Ave, Little Rock, AR 72201",
      coordinates: {
        lat: 34.748883,
        lng: -92.266524
      },
      contact: {
        phone: "(501) 375-2552",
        email: "info@rivermarket.org",
        website: "rivermarket.org",
        socialMedia: {
          facebook: "LittleRockFarmersMarket",
          instagram: "@lrfarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          tuesday: "7:00 AM - 3:00 PM",
          saturday: "7:00 AM - 3:00 PM"
        },
        seasonalNotes: "Open April through October",
        holidays: "Closed major holidays"
      },
      description: "Historic market in downtown Little Rock featuring local produce and crafts",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Fresh Produce",
          "Rice",
          "Local Honey",
          "Crafts",
          "Baked Goods",
          "Fresh Eggs"
        ],
        amenities: [
          "Covered Space",
          "Parking",
          "Restrooms",
          "Wheelchair Accessible",
          "ATM"
        ],
        events: [
          "Cooking demonstrations",
          "Live music",
          "Seasonal festivals",
          "Kids activities"
        ]
      },
      vendorInfo: {
        totalVendors: 65,
        applicationProcess: "Online application required",
        vendorFees: "Daily: $30, Monthly: $100, Seasonal: $500",
        requirements: [
          "Arkansas-grown products",
          "Insurance required",
          "Health department permits for prepared foods"
        ]
      },
      certification: {
        type: "Arkansas Certified Farmers Market",
        inspections: "Monthly",
        lastInspection: "2024-12-05"
      },
      statistics: {
        averageWeeklyVisitors: 3500,
        annualSales: "$1.8M",
        percentLocalProduce: 90
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-AR001",
      name: "Arkansas Food Bank",
      type: "Central Distribution Center",
      address: "4301 W 65th St, Little Rock, AR 72209",
      coordinates: {
        lat: 34.690179,
        lng: -92.316776
      },
      contact: {
        phone: "(501) 565-8121",
        email: "info@arkansasfoodbank.org",
        website: "arkansasfoodbank.org",
        emergencyContact: "(501) 565-8121 ext. 1"
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
      description: "Serving central and southern Arkansas with emergency food assistance",
      services: {
        primary: [
          "Emergency Food Distribution",
          "Mobile Pantry",
          "Senior Food Program",
          "Backpack Program"
        ],
        additional: [
          "Cooking Matters Classes",
          "SNAP Outreach",
          "Agency Capacity Building",
          "School Pantry Program"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Proof of income (if applicable)"
        ],
        restrictions: "Service area residents only",
        frequency: "Once per month per household"
      },
      capacity: {
        storageSpace: "120,000 sq ft",
        coldStorage: "25,000 sq ft",
        monthlyDistribution: "3M pounds",
        servingCapacity: "35,000 households/month"
      },
      partnerships: {
        retailers: ["Walmart", "Kroger", "Sam's Club", "Tyson Foods"],
        farms: ["Local Rice Farmers", "Arkansas Farm Bureau"],
        organizations: ["Feeding America", "Arkansas Hunger Relief Alliance"]
      },
      impact: {
        annualPoundsDistributed: "36M",
        peopleServed: "280,000",
        countiesServed: 33,
        volunteerHours: "45,000"
      },
      needs: {
        criticalItems: [
          "Rice",
          "Canned meat",
          "Peanut butter",
          "Canned vegetables"
        ],
        volunteerRoles: [
          "Food sorting",
          "Box packing",
          "Office support",
          "Drivers"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Arkansas Gleaning Project",
      description: "Coordinating gleaning efforts across Arkansas farmland",
      contact: {
        name: "Program Coordinator",
        phone: "(501) 565-8121",
        email: "gleaning@arkansasfoodbank.org"
      },
      website: "arkansasgleaning.org",
      areas: ["Central Arkansas", "Delta Region", "River Valley"],
      schedule: "March through November",
      requirements: {
        volunteers: [
          "Must be 16 or older",
          "Sign waiver",
          "Attend orientation",
          "Bring water and sunscreen"
        ],
        farmers: [
          "Provide field access",
          "Specify gleaning window",
          "Sign liability waiver",
          "Provide equipment access"
        ]
      },
      impact: {
        annualPounds: 400000,
        servingAgencies: 35,
        volunteerHours: 3000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Arkansas Food Distribution Network",
      type: "Regional Distributor",
      address: "1400 Gregory St, Little Rock, AR 72202",
      coordinates: {
        lat: 34.733849,
        lng: -92.283974
      },
      contact: {
        name: "Operations Manager",
        phone: "(501) 565-8122",
        email: "operations@arfdn.org"
      },
      website: "arkansasfdn.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Transportation"
      ],
      coverage: "Central and Southern Arkansas",
      requirements: {
        minimumOrder: "$200",
        leadTime: "48 hours",
        delivery: "Available for orders over $500"
      },
      certifications: [
        "USDA Approved",
        "Arkansas Grown Partner",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Arkansas Farm to School Program",
      website: "agriculture.arkansas.gov/farm-to-school",
      coordinator: "State Farm to School Coordinator",
      phone: "(501) 219-6300",
      description: "Connecting Arkansas schools with local farms to serve healthy meals in school cafeterias"
    },
    marketVouchers: {
      name: "Arkansas Farmers Market Program",
      website: "agriculture.arkansas.gov/farmers-market",
      programs: [
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program",
        "Double Up Food Bucks"
      ]
    }
  }
};

export default arkansasResources;
