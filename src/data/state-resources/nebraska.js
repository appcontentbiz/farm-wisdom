const nebraskaResources = {
  state: "Nebraska",
  abbreviation: "NE",
  stateInfo: {
    capital: "Lincoln",
    region: "Midwest",
    agriculturalZones: ["4a", "4b", "5a", "5b"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Corn",
      "Soybeans",
      "Cattle",
      "Hogs",
      "Wheat",
      "Dry Beans"
    ],
    agriculturalFacts: [
      "45,700 farms covering 45.2 million acres",
      "#3 producer of corn in the US",
      "Agriculture contributes $21.4 billion annually to state economy",
      "Leading producer of Great Northern beans"
    ]
  },
  farmersMarkets: [
    {
      id: "NE001",
      name: "Haymarket Farmers' Market",
      type: "Historic District Market",
      address: "8th & P Streets, Lincoln, NE 68508",
      coordinates: {
        lat: 40.816667,
        lng: -96.708333
      },
      contact: {
        phone: "(402) 435-7496",
        email: "info@lincolnhaymarket.org",
        website: "lincolnhaymarket.org",
        socialMedia: {
          facebook: "HaymarketFarmersMarket",
          instagram: "@haymarketmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "8:00 AM - 12:00 PM"
        },
        seasonalNotes: "May through October",
        holidays: "Special holiday markets"
      },
      description: "Historic market in Lincoln's Haymarket District",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Fresh Produce",
          "Meat",
          "Dairy",
          "Baked Goods",
          "Honey",
          "Crafts"
        ],
        amenities: [
          "Historic Location",
          "Live Music",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking"
        ],
        events: [
          "Music performances",
          "Chef demonstrations",
          "Kids activities",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 100,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $25, Season: $450",
        requirements: [
          "Nebraska-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Nebraska Department of Agriculture Certified",
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
      id: "FB-NE001",
      name: "Food Bank of Lincoln",
      type: "Regional Food Bank",
      address: "4840 Doris Bair Circle, Lincoln, NE 68504",
      coordinates: {
        lat: 40.850000,
        lng: -96.683333
      },
      contact: {
        phone: "(402) 466-8170",
        email: "info@lincolnfoodbank.org",
        website: "lincolnfoodbank.org",
        emergencyContact: "(402) 466-8170 ext. 1"
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
      description: "Serving southeast Nebraska with emergency food assistance",
      services: {
        primary: [
          "Food Distribution",
          "BackPack Program",
          "Mobile Food Pantry",
          "School Food Market"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Rural Delivery"
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
        storageSpace: "60,000 sq ft",
        coldStorage: "15,000 sq ft",
        monthlyDistribution: "1M pounds",
        servingCapacity: "50,000 people/month"
      },
      partnerships: {
        retailers: ["Hy-Vee", "Super Saver", "Walmart", "Sam's Club"],
        farms: ["Nebraska Farm Bureau", "Local Grain Farms"],
        organizations: ["Feeding America", "Nebraska Food Bank Network"]
      },
      impact: {
        annualPoundsDistributed: "12M",
        peopleServed: "57,000",
        countiesServed: 16,
        volunteerHours: "45,000"
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
      name: "Nebraska Gleaning Network",
      description: "Recovering surplus crops from Nebraska farms",
      contact: {
        name: "Program Director",
        phone: "(402) 555-0123",
        email: "glean@negleaning.org"
      },
      website: "negleaning.org",
      areas: ["Southeast Nebraska", "Central Nebraska", "Platte Valley"],
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
        annualPounds: 250000,
        servingAgencies: 35,
        volunteerHours: 8000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Cornhusker Fresh Distribution",
      type: "Regional Distributor",
      address: "123 Distribution Drive, Grand Island, NE 68801",
      coordinates: {
        lat: 40.925000,
        lng: -98.341667
      },
      contact: {
        name: "Operations Director",
        phone: "(308) 555-0124",
        email: "ops@cornhuskerfresh.org"
      },
      website: "cornhuskerfresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Nebraska and surrounding states",
      requirements: {
        minimumOrder: "$300",
        leadTime: "48 hours",
        delivery: "Available for orders over $600"
      },
      certifications: [
        "USDA Approved",
        "Nebraska Proud Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Nebraska Farm to School",
      website: "education.ne.gov/ns/farm-to-school",
      coordinator: "State Farm to School Coordinator",
      phone: "(402) 471-2488",
      description: "Connecting Nebraska schools with fresh, local food"
    },
    marketVouchers: {
      name: "Nebraska Farmers Market Association",
      website: "nefarmersmarkets.org",
      programs: [
        "Double Up Food Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default nebraskaResources;
