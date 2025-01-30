const alaskaResources = {
  state: "Alaska",
  abbreviation: "AK",
  stateInfo: {
    capital: "Juneau",
    region: "Pacific Northwest",
    agriculturalZones: ["1a", "1b", "2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b"],
    growingSeasons: {
      spring: "May to June",
      summer: "June to August",
      fall: "August to September",
      winter: "October to April"
    },
    keyCrops: [
      "Potatoes",
      "Hay",
      "Greenhouse Vegetables",
      "Berries",
      "Cole Crops"
    ],
    agriculturalFacts: [
      "Alaska has over 990 farms covering 850,000 acres",
      "Average farm size is 860 acres",
      "Agriculture contributes over $50 million annually to state economy",
      "Home to the famous Alaska State Fair giant vegetables"
    ]
  },
  farmersMarkets: [
    {
      id: "AK001",
      name: "Anchorage Farmers Market",
      type: "Community-operated",
      address: "1500 I St, Anchorage, AK 99501",
      coordinates: {
        lat: 61.207674,
        lng: -149.859039
      },
      contact: {
        phone: "(907) 272-5064",
        email: "info@anchoragefarmersmarket.org",
        website: "anchoragefarmersmarket.org",
        socialMedia: {
          facebook: "AnchorageFarmersMarket",
          instagram: "@akfarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          wednesday: "9:00 AM - 4:00 PM",
          saturday: "9:00 AM - 4:00 PM"
        },
        seasonalNotes: "Open May through October",
        holidays: "Closed during winter season"
      },
      description: "Year-round indoor/outdoor market featuring local produce, crafts, and Alaskan specialties",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "WIC"],
        products: [
          "Fresh Produce",
          "Wild-caught Fish",
          "Local Honey",
          "Handmade Crafts",
          "Native Alaskan Art",
          "Greenhouse Vegetables"
        ],
        amenities: [
          "Indoor Space",
          "Parking",
          "Restrooms",
          "Wheelchair Accessible",
          "Heating"
        ],
        events: [
          "Native cultural demonstrations",
          "Seasonal harvest festivals",
          "Winter markets (indoor)"
        ]
      },
      vendorInfo: {
        totalVendors: 75,
        applicationProcess: "Online application required",
        vendorFees: "Daily: $35, Monthly: $250, Seasonal: $1200",
        requirements: [
          "Alaska-grown or made products only",
          "Product verification required",
          "Insurance required",
          "Food safety certification for prepared foods"
        ]
      },
      certification: {
        type: "Alaska Grown Certified",
        inspections: "Bi-monthly",
        lastInspection: "2024-12-01"
      },
      statistics: {
        averageWeeklyVisitors: 3000,
        annualSales: "$2.1M",
        percentLocalProduce: 90
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-AK001",
      name: "Food Bank of Alaska",
      type: "State Distribution Center",
      address: "2121 Spar Avenue, Anchorage, AK 99501",
      coordinates: {
        lat: 61.221783,
        lng: -149.844390
      },
      contact: {
        phone: "(907) 272-3663",
        email: "info@foodbankofalaska.org",
        website: "foodbankofalaska.org",
        emergencyContact: "(907) 222-3663"
      },
      hours: {
        distribution: {
          monday: "9:00 AM - 5:00 PM",
          tuesday: "9:00 AM - 5:00 PM",
          wednesday: "9:00 AM - 5:00 PM",
          thursday: "9:00 AM - 5:00 PM",
          friday: "9:00 AM - 5:00 PM"
        },
        donation: {
          monday: "8:00 AM - 6:00 PM",
          tuesday: "8:00 AM - 6:00 PM",
          wednesday: "8:00 AM - 6:00 PM",
          thursday: "8:00 AM - 6:00 PM",
          friday: "8:00 AM - 6:00 PM"
        }
      },
      description: "Serving all of Alaska with emergency food assistance and rural village support",
      services: {
        primary: [
          "Emergency Food Assistance",
          "Rural Village Support",
          "Mobile Food Pantry",
          "SNAP Outreach"
        ],
        additional: [
          "Native Food Distribution",
          "Bush Order Program",
          "Food Safety Training",
          "Winter Emergency Supplies"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Tribal ID (if applicable)"
        ],
        restrictions: "Must be Alaska resident",
        frequency: "Twice per month per household"
      },
      capacity: {
        storageSpace: "80,000 sq ft",
        coldStorage: "30,000 sq ft",
        monthlyDistribution: "2M pounds",
        servingCapacity: "20,000 households/month"
      },
      partnerships: {
        retailers: ["Carrs-Safeway", "Fred Meyer", "Costco"],
        farms: ["Alaska Farm Network", "Mat-Su Farms"],
        organizations: ["Feeding America", "Alaska Native Tribal Health Consortium"]
      },
      impact: {
        annualPoundsDistributed: "24M",
        peopleServed: "155,000",
        villagesServed: 95,
        volunteerHours: "40,000"
      },
      needs: {
        criticalItems: [
          "Shelf-stable milk",
          "Canned meat",
          "Rice",
          "Dried fruits"
        ],
        volunteerRoles: [
          "Food sorting",
          "Bush order packing",
          "Administrative",
          "Pilots (for rural delivery)"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Alaska Gleaning Project",
      description: "Coordinating gleaning efforts across accessible farming regions of Alaska",
      contact: {
        name: "Alaska Program Coordinator",
        phone: "(907) 555-0123",
        email: "gleaning@alaskafoodbank.org"
      },
      website: "akgleaning.org",
      areas: ["Matanuska-Susitna Valley", "Anchorage Area", "Kenai Peninsula"],
      schedule: "June through September",
      requirements: {
        volunteers: [
          "Must be 16 or older",
          "Sign waiver",
          "Attend safety orientation",
          "Cold weather gear required"
        ],
        farmers: [
          "Provide safe access to fields",
          "Specify gleaning window",
          "Sign liability waiver",
          "Provide emergency contact"
        ]
      },
      impact: {
        annualPounds: 250000,
        servingAgencies: 25,
        volunteerHours: 1500
      }
    }
  ],
  distributionPartners: [
    {
      name: "Alaska Food Hub",
      type: "Regional Distributor",
      address: "2401 C Street, Anchorage, AK 99503",
      coordinates: {
        lat: 61.198757,
        lng: -149.886093
      },
      contact: {
        name: "Operations Manager",
        phone: "(907) 277-5529",
        email: "operations@akfoodhub.org"
      },
      website: "alaskafoodhub.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Rural Air Transport"
      ],
      coverage: "Southcentral Alaska",
      requirements: {
        minimumOrder: "$300",
        leadTime: "72 hours",
        delivery: "Available for orders over $750"
      },
      certifications: [
        "USDA Approved",
        "Alaska Grown Certified",
        "Safe Food Handling Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Alaska Farm to School Program",
      website: "education.alaska.gov/farmtoschool",
      coordinator: "State Farm to School Coordinator",
      phone: "(907) 465-8709",
      description: "Connects Alaska schools with local farms to serve healthy meals in school cafeterias"
    },
    marketVouchers: {
      name: "Alaska Farmers Market Association",
      website: "alaskafarmersmarkets.org",
      programs: [
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program",
        "Quest Card Double Up Food Bucks"
      ]
    }
  }
};

export default alaskaResources;
