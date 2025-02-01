const wisconsinResources = {
  state: "Wisconsin",
  abbreviation: "WI",
  stateInfo: {
    capital: "Madison",
    region: "Midwest",
    agriculturalZones: ["3b", "4a", "4b", "5a", "5b"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Dairy",
      "Corn",
      "Soybeans",
      "Cranberries",
      "Potatoes",
      "Ginseng"
    ],
    agriculturalFacts: [
      "64,100 farms covering 14.3 million acres",
      "#1 producer of cheese in the US",
      "Agriculture contributes $104.8B annually to state economy",
      "Leading producer of cranberries and ginseng"
    ]
  },
  farmersMarkets: [
    {
      id: "WI001",
      name: "Dane County Farmers' Market",
      type: "Seasonal Market",
      address: "Capitol Square, Madison, WI 53703",
      coordinates: {
        lat: 43.074722,
        lng: -89.384167
      },
      contact: {
        phone: "(608) 455-1999",
        email: "info@dcfm.org",
        website: "dcfm.org",
        socialMedia: {
          facebook: "DaneCountyFarmersMarket",
          instagram: "@danecountyfarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "6:15 AM - 1:45 PM",
          wednesday: "8:30 AM - 1:45 PM"
        },
        seasonalNotes: "Outdoor April-November, Indoor November-April",
        holidays: "Special holiday markets"
      },
      description: "Largest producer-only farmers market in the United States",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Market Match"],
        products: [
          "Fresh Produce",
          "Cheese",
          "Meat",
          "Baked Goods",
          "Maple Syrup",
          "Flowers",
          "Honey"
        ],
        amenities: [
          "Live Music",
          "Food Carts",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking"
        ],
        events: [
          "Chef demonstrations",
          "Live music",
          "Seasonal festivals",
          "Taste of the Market"
        ]
      },
      vendorInfo: {
        totalVendors: 275,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $35, Season: $600",
        requirements: [
          "Wisconsin-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Wisconsin Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 20000,
        annualSales: "$10M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-WI001",
      name: "Second Harvest Foodbank of Southern Wisconsin",
      type: "Regional Food Bank",
      address: "2802 Dairy Drive, Madison, WI 53718",
      coordinates: {
        lat: 43.116667,
        lng: -89.300000
      },
      contact: {
        phone: "(608) 223-9121",
        email: "info@secondharvestmadison.org",
        website: "secondharvestmadison.org",
        emergencyContact: "(608) 223-9121 ext. 1"
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
      description: "Serving southwestern Wisconsin",
      services: {
        primary: [
          "Food Distribution",
          "Mobile Pantry",
          "Kids Cafe",
          "FoodShare Outreach"
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
        storageSpace: "96,000 sq ft",
        coldStorage: "24,000 sq ft",
        monthlyDistribution: "2M pounds",
        servingCapacity: "140,000 people/month"
      },
      partnerships: {
        retailers: ["Woodman's", "Festival Foods", "Pick 'n Save", "Kwik Trip"],
        farms: ["Wisconsin Farm Bureau", "Local Dairy Farms"],
        organizations: ["Feeding America", "Hunger Task Force"]
      },
      impact: {
        annualPoundsDistributed: "24M",
        peopleServed: "140,000",
        countiesServed: 16,
        volunteerHours: "65,000"
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
      name: "Field & Fork Network",
      description: "Recovering surplus crops from Wisconsin farms",
      contact: {
        name: "Program Director",
        phone: "(608) 555-0123",
        email: "glean@fieldandfork.org"
      },
      website: "fieldandfork.org",
      areas: ["Southern Wisconsin", "Fox Valley", "Driftless Region"],
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
        annualPounds: 400000,
        servingAgencies: 60,
        volunteerHours: 12000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Badger State Distribution",
      type: "Regional Distributor",
      address: "123 Distribution Way, Madison, WI 53713",
      coordinates: {
        lat: 43.050000,
        lng: -89.383333
      },
      contact: {
        name: "Operations Director",
        phone: "(608) 555-0124",
        email: "ops@badgerstatedist.org"
      },
      website: "badgerstatedist.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Wisconsin and surrounding states",
      requirements: {
        minimumOrder: "$400",
        leadTime: "48 hours",
        delivery: "Available for orders over $800"
      },
      certifications: [
        "USDA Approved",
        "Something Special from Wisconsin Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Wisconsin Farm to School",
      website: "wifarmtoschool.org",
      coordinator: "Farm to School Coordinator",
      phone: "(608) 224-5017",
      description: "Connecting Wisconsin schools with fresh, local food"
    },
    marketVouchers: {
      name: "Wisconsin Farmers Market Association",
      website: "wifarmersmarkets.org",
      programs: [
        "Market Match",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default wisconsinResources;
