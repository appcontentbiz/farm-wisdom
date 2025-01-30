const georgiaResources = {
  state: "Georgia",
  abbreviation: "GA",
  stateInfo: {
    capital: "Atlanta",
    region: "Southeast",
    agriculturalZones: ["6b", "7a", "7b", "8a", "8b", "9a"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Peanuts",
      "Pecans",
      "Cotton",
      "Broilers",
      "Blueberries",
      "Peaches"
    ],
    agriculturalFacts: [
      "Over 42,000 farms covering 9.6 million acres",
      "Agriculture contributes $76 billion to state economy",
      "#1 US producer of peanuts, broilers, and pecans",
      "Known as the Peach State"
    ]
  },
  farmersMarkets: [
    {
      id: "GA001",
      name: "Dekalb Farmers Market",
      type: "International Farmers Market",
      address: "3000 E Ponce de Leon Ave, Decatur, GA 30030",
      coordinates: {
        lat: 33.773697,
        lng: -84.281277
      },
      contact: {
        phone: "(404) 377-6400",
        email: "info@dekalbfarmersmarket.com",
        website: "dekalbfarmersmarket.com",
        socialMedia: {
          facebook: "YDFMarket",
          instagram: "@dekalbfarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          monday: "9:00 AM - 9:00 PM",
          tuesday: "9:00 AM - 9:00 PM",
          wednesday: "9:00 AM - 9:00 PM",
          thursday: "9:00 AM - 9:00 PM",
          friday: "9:00 AM - 9:00 PM",
          saturday: "9:00 AM - 9:00 PM",
          sunday: "9:00 AM - 9:00 PM"
        },
        seasonalNotes: "Open year-round",
        holidays: "Closed on major holidays"
      },
      description: "International market featuring local produce and global ingredients",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "WIC"],
        products: [
          "Local Produce",
          "International Foods",
          "Fresh Seafood",
          "Artisan Breads",
          "Prepared Foods",
          "Fresh Flowers"
        ],
        amenities: [
          "Indoor Facility",
          "Cafe",
          "Parking",
          "Restrooms",
          "Wheelchair Accessible"
        ],
        events: [
          "Cooking classes",
          "Food demonstrations",
          "Cultural celebrations",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: "Direct wholesale sourcing",
        applicationProcess: "Employment-based",
        requirements: [
          "Quality standards",
          "Health department compliance",
          "Food safety certification"
        ]
      },
      certification: {
        type: "Georgia Grown Partner",
        inspections: "Weekly",
        lastInspection: "2024-12-20"
      },
      statistics: {
        averageWeeklyVisitors: 100000,
        annualSales: "$100M+",
        percentLocalProduce: 40
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-GA001",
      name: "Atlanta Community Food Bank",
      type: "Regional Food Bank",
      address: "3400 North Desert Drive, Atlanta, GA 30344",
      coordinates: {
        lat: 33.688931,
        lng: -84.409736
      },
      contact: {
        phone: "(404) 892-9822",
        email: "info@acfb.org",
        website: "acfb.org",
        emergencyContact: "(404) 892-9822 ext. 1"
      },
      hours: {
        distribution: {
          monday: "8:30 AM - 4:30 PM",
          tuesday: "8:30 AM - 4:30 PM",
          wednesday: "8:30 AM - 4:30 PM",
          thursday: "8:30 AM - 4:30 PM",
          friday: "8:30 AM - 4:30 PM"
        },
        donation: {
          monday: "8:00 AM - 5:00 PM",
          tuesday: "8:00 AM - 5:00 PM",
          wednesday: "8:00 AM - 5:00 PM",
          thursday: "8:00 AM - 5:00 PM",
          friday: "8:00 AM - 5:00 PM"
        }
      },
      description: "Serving metro Atlanta and north Georgia with emergency food assistance",
      services: {
        primary: [
          "Food Distribution",
          "Mobile Markets",
          "Kids Programs",
          "Senior Programs"
        ],
        additional: [
          "SNAP Outreach",
          "Nutrition Education",
          "Agency Capacity Building",
          "Benefits Navigation"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Self-declared need"
        ],
        restrictions: "Service area residents only",
        frequency: "Monthly distribution"
      },
      capacity: {
        storageSpace: "129,000 sq ft",
        coldStorage: "40,000 sq ft",
        monthlyDistribution: "6M pounds",
        servingCapacity: "80,000 households/month"
      },
      partnerships: {
        retailers: ["Kroger", "Publix", "Walmart", "Sam's Club"],
        farms: ["Georgia Farm Bureau", "Local Peach Orchards"],
        organizations: ["Feeding America", "Georgia Food Bank Association"]
      },
      impact: {
        annualPoundsDistributed: "72M",
        peopleServed: "700,000",
        countiesServed: 29,
        volunteerHours: "160,000"
      },
      needs: {
        criticalItems: [
          "Protein items",
          "Fresh produce",
          "Baby food",
          "Whole grains"
        ],
        volunteerRoles: [
          "Food sorting",
          "Mobile market",
          "Office support",
          "Nutrition education"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Georgia Gleaning Network",
      description: "Connecting farms and food banks to reduce food waste",
      contact: {
        name: "Program Director",
        phone: "(404) 555-0123",
        email: "glean@georgiagleans.org"
      },
      website: "georgiagleans.org",
      areas: ["North Georgia", "Metro Atlanta", "South Georgia"],
      schedule: "Year-round",
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
        servingAgencies: 75,
        volunteerHours: 12000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Georgia Fresh Distribution",
      type: "Statewide Distributor",
      address: "123 Distribution Way, Macon, GA 31201",
      coordinates: {
        lat: 32.840695,
        lng: -83.632402
      },
      contact: {
        name: "Operations Director",
        phone: "(478) 555-0124",
        email: "ops@gafreshdist.org"
      },
      website: "georgiafreshdist.org",
      services: [
        "Local Food Distribution",
        "Cold Chain Management",
        "Processing",
        "Export Services"
      ],
      coverage: "Statewide with southeastern regional capabilities",
      requirements: {
        minimumOrder: "$300",
        leadTime: "48 hours",
        delivery: "Available for orders over $750"
      },
      certifications: [
        "USDA Approved",
        "Georgia Grown Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Georgia Farm to School Alliance",
      website: "gafarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(404) 656-3627",
      description: "Connecting Georgia schools with fresh, local produce"
    },
    marketVouchers: {
      name: "Georgia Fresh for Less",
      website: "georgiafreshforless.org",
      programs: [
        "Georgia SNAP Double-Up Program",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default georgiaResources;
