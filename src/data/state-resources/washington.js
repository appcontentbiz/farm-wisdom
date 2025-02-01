const washingtonResources = {
  state: "Washington",
  abbreviation: "WA",
  stateInfo: {
    capital: "Olympia",
    region: "Pacific Northwest",
    agriculturalZones: ["4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Apples",
      "Cherries",
      "Hops",
      "Potatoes",
      "Wheat",
      "Dairy"
    ],
    agriculturalFacts: [
      "35,300 farms covering 14.6 million acres",
      "#1 producer of apples, cherries, and hops in the US",
      "Agriculture contributes $51B annually to state economy",
      "Leading producer of mint for oil"
    ]
  },
  farmersMarkets: [
    {
      id: "WA001",
      name: "Pike Place Market",
      type: "Year-round Market",
      address: "85 Pike Street, Seattle, WA 98101",
      coordinates: {
        lat: 47.608889,
        lng: -122.340556
      },
      contact: {
        phone: "(206) 682-7453",
        email: "info@pikeplacemarket.org",
        website: "pikeplacemarket.org",
        socialMedia: {
          facebook: "PikePlaceMarket",
          instagram: "@pikeplacepublicmarket"
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
          sunday: "9:00 AM - 5:00 PM"
        },
        seasonalNotes: "Year-round market, historic Seattle landmark",
        holidays: "Modified hours on holidays"
      },
      description: "Historic public market overlooking Elliott Bay since 1907",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Fresh Bucks"],
        products: [
          "Fresh Produce",
          "Fish",
          "Flowers",
          "Artisan Foods",
          "Crafts",
          "Prepared Foods",
          "Specialty Items"
        ],
        amenities: [
          "Food Hall",
          "Restaurants",
          "Restrooms",
          "Wheelchair Accessible",
          "Parking Garage"
        ],
        events: [
          "Fish throwing shows",
          "Cooking demonstrations",
          "Live music",
          "Cultural festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 200,
        applicationProcess: "Competitive application process",
        vendorFees: "Daily: $50, Month: $800",
        requirements: [
          "Washington-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Washington State Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 40000,
        annualSales: "$25M",
        percentLocalProduce: 90
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-WA001",
      name: "Food Lifeline",
      type: "Regional Food Bank",
      address: "815 S 96th Street, Seattle, WA 98108",
      coordinates: {
        lat: 47.516667,
        lng: -122.333333
      },
      contact: {
        phone: "(206) 545-6600",
        email: "info@foodlifeline.org",
        website: "foodlifeline.org",
        emergencyContact: "(206) 545-6600 ext. 1"
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
      description: "Serving Western Washington through innovative programs",
      services: {
        primary: [
          "Food Distribution",
          "Mobile Food Bank",
          "School Food Share",
          "Grocery Rescue"
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
        storageSpace: "140,000 sq ft",
        coldStorage: "35,000 sq ft",
        monthlyDistribution: "4M pounds",
        servingCapacity: "350,000 people/month"
      },
      partnerships: {
        retailers: ["Safeway", "QFC", "Fred Meyer", "Costco"],
        farms: ["Washington Farm Bureau", "Local Orchards"],
        organizations: ["Feeding America", "Northwest Harvest"]
      },
      impact: {
        annualPoundsDistributed: "58M",
        peopleServed: "350,000",
        countiesServed: 17,
        volunteerHours: "100,000"
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
          "Food recovery"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Rotary First Harvest",
      description: "Connecting farmers, truckers, and volunteers to feed hungry people",
      contact: {
        name: "Program Director",
        phone: "(206) 555-0123",
        email: "glean@firstharvest.org"
      },
      website: "firstharvest.org",
      areas: ["Western Washington", "Eastern Washington", "Columbia Basin"],
      schedule: "Year-round with seasonal focus",
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
        annualPounds: 2000000,
        servingAgencies: 100,
        volunteerHours: 40000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Evergreen Distribution",
      type: "Regional Distributor",
      address: "123 Distribution Way, Kent, WA 98032",
      coordinates: {
        lat: 47.383333,
        lng: -122.250000
      },
      contact: {
        name: "Operations Director",
        phone: "(206) 555-0124",
        email: "ops@evergreendist.org"
      },
      website: "evergreendist.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Washington and surrounding states",
      requirements: {
        minimumOrder: "$500",
        leadTime: "48 hours",
        delivery: "Available for orders over $1000"
      },
      certifications: [
        "USDA Approved",
        "Washington State Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Washington Farm to School",
      website: "wafarmtoschool.org",
      coordinator: "Farm to School Coordinator",
      phone: "(360) 725-6200",
      description: "Connecting Washington schools with fresh, local food"
    },
    marketVouchers: {
      name: "Washington State Farmers Market Association",
      website: "wafarmersmarkets.org",
      programs: [
        "Fresh Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default washingtonResources;
