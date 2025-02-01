const mississippiResources = {
  state: "Mississippi",
  abbreviation: "MS",
  stateInfo: {
    capital: "Jackson",
    region: "Southeast",
    agriculturalZones: ["7a", "7b", "8a", "8b"],
    growingSeasons: {
      spring: "February to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to January"
    },
    keyCrops: [
      "Cotton",
      "Soybeans",
      "Corn",
      "Poultry",
      "Sweet Potatoes",
      "Catfish"
    ],
    agriculturalFacts: [
      "34,700 farms covering 10.4 million acres",
      "#1 producer of farm-raised catfish in the US",
      "Agriculture contributes $7.35 billion annually to state economy",
      "Leading producer of sweet potatoes in the Southeast"
    ]
  },
  farmersMarkets: [
    {
      id: "MS001",
      name: "Mississippi Farmers Market",
      type: "State-Operated Market",
      address: "929 High Street, Jackson, MS 39202",
      coordinates: {
        lat: 32.310556,
        lng: -90.186389
      },
      contact: {
        phone: "(601) 354-6573",
        email: "info@msfarmersmarket.com",
        website: "mdac.ms.gov/bureaus-departments/farmers-market",
        socialMedia: {
          facebook: "MSFarmersMarket",
          instagram: "@msfarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          tuesday: "8:00 AM - 2:00 PM",
          thursday: "8:00 AM - 2:00 PM",
          saturday: "8:00 AM - 2:00 PM"
        },
        seasonalNotes: "Open year-round",
        holidays: "Closed on major holidays"
      },
      description: "State's largest farmers market featuring Mississippi grown products",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Senior FMNP"],
        products: [
          "Fresh Produce",
          "Sweet Potatoes",
          "Honey",
          "Eggs",
          "Baked Goods",
          "Crafts"
        ],
        amenities: [
          "Indoor Facility",
          "Demonstration Kitchen",
          "Restrooms",
          "Wheelchair Accessible",
          "Free Parking"
        ],
        events: [
          "Cooking demonstrations",
          "Seasonal festivals",
          "Educational programs",
          "Kids activities"
        ]
      },
      vendorInfo: {
        totalVendors: 75,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $20, Season: $500",
        requirements: [
          "Mississippi-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Mississippi Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-10"
      },
      statistics: {
        averageWeeklyVisitors: 3000,
        annualSales: "$2M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-MS001",
      name: "Mississippi Food Network",
      type: "Regional Food Bank",
      address: "440 West Beatty Street, Jackson, MS 39201",
      coordinates: {
        lat: 32.316667,
        lng: -90.191667
      },
      contact: {
        phone: "(601) 353-7286",
        email: "info@msfoodnet.org",
        website: "msfoodnet.org",
        emergencyContact: "(601) 353-7286 ext. 1"
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
      description: "Central Mississippi's largest hunger-relief organization",
      services: {
        primary: [
          "Food Distribution",
          "BackPack Program",
          "Mobile Pantry",
          "Senior Box Program"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Summer Feeding"
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
        coldStorage: "20,000 sq ft",
        monthlyDistribution: "1.5M pounds",
        servingCapacity: "100,000 people/month"
      },
      partnerships: {
        retailers: ["Kroger", "Walmart", "Save-A-Lot", "Food Depot"],
        farms: ["Mississippi Farm Bureau", "Sweet Potato Farms"],
        organizations: ["Feeding America", "Extra Table"]
      },
      impact: {
        annualPoundsDistributed: "18M",
        peopleServed: "150,000",
        countiesServed: 56,
        volunteerHours: "40,000"
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
      name: "Mississippi Gleaning Network",
      description: "Recovering surplus crops from Mississippi farms",
      contact: {
        name: "Program Director",
        phone: "(601) 555-0123",
        email: "glean@msgleaners.org"
      },
      website: "msgleaners.org",
      areas: ["Central MS", "Delta Region", "Gulf Coast"],
      schedule: "March through November",
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
        annualPounds: 300000,
        servingAgencies: 45,
        volunteerHours: 10000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Magnolia Fresh Distribution",
      type: "Regional Distributor",
      address: "123 Distribution Lane, Pearl, MS 39208",
      coordinates: {
        lat: 32.274722,
        lng: -90.132778
      },
      contact: {
        name: "Operations Director",
        phone: "(601) 555-0124",
        email: "ops@magnoliafresh.org"
      },
      website: "magnoliafresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Mississippi and surrounding states",
      requirements: {
        minimumOrder: "$300",
        leadTime: "48 hours",
        delivery: "Available for orders over $600"
      },
      certifications: [
        "USDA Approved",
        "Genuine MS Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Mississippi Farm to School",
      website: "mississippifarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(601) 359-1100",
      description: "Connecting Mississippi schools with fresh, local food"
    },
    marketVouchers: {
      name: "Mississippi Farmers Market Association",
      website: "msfarmersmarkets.org",
      programs: [
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program",
        "SNAP Double-Up Program"
      ]
    }
  }
};

export default mississippiResources;
