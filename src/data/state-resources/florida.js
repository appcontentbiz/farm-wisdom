const floridaResources = {
  state: "Florida",
  abbreviation: "FL",
  stateInfo: {
    capital: "Tallahassee",
    region: "Southeast",
    agriculturalZones: ["8b", "9a", "9b", "10a", "10b", "11a"],
    growingSeasons: {
      spring: "February to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to January"
    },
    keyCrops: [
      "Citrus",
      "Tomatoes",
      "Strawberries",
      "Sweet Corn",
      "Sugarcane",
      "Tropical Fruits"
    ],
    agriculturalFacts: [
      "Over 47,000 farms covering 9.7 million acres",
      "Agriculture contributes $132 billion to state economy",
      "Leading US producer of citrus, sugarcane, tomatoes",
      "Year-round growing season in many areas"
    ]
  },
  farmersMarkets: [
    {
      id: "FL001",
      name: "St. Petersburg Saturday Morning Market",
      type: "Community Market",
      address: "Al Lang Stadium Parking Lot, St. Petersburg, FL 33701",
      coordinates: {
        lat: 27.768671,
        lng: -82.633104
      },
      contact: {
        phone: "(727) 455-4921",
        email: "info@saturdaymorningmarket.com",
        website: "saturdaymorningmarket.com",
        socialMedia: {
          facebook: "StPeteSaturdayMorningMarket",
          instagram: "@stpetemarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "9:00 AM - 2:00 PM"
        },
        seasonalNotes: "October through May, Summer Market June-September",
        holidays: "Special holiday markets"
      },
      description: "Florida's largest farmers market featuring local produce and artisans",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Fresh Access Bucks"],
        products: [
          "Tropical Fruits",
          "Fresh Vegetables",
          "Seafood",
          "Prepared Foods",
          "Plants",
          "Local Art"
        ],
        amenities: [
          "Waterfront Location",
          "Live Music",
          "Food Court",
          "Restrooms",
          "Pet Friendly"
        ],
        events: [
          "Chef demonstrations",
          "Live performances",
          "Kids activities",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 130,
        applicationProcess: "Competitive application process",
        vendorFees: "Daily: $50, Season: $1200",
        requirements: [
          "Local production emphasis",
          "Insurance required",
          "Health permits",
          "Tent/display requirements"
        ]
      },
      certification: {
        type: "Fresh From Florida Market",
        inspections: "Monthly",
        lastInspection: "2024-12-15"
      },
      statistics: {
        averageWeeklyVisitors: 10000,
        annualSales: "$5M",
        percentLocalProduce: 85
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-FL001",
      name: "Feeding Florida",
      type: "State Food Bank Network",
      address: "4000 W. Cypress Street, Tampa, FL 33607",
      coordinates: {
        lat: 27.951935,
        lng: -82.516588
      },
      contact: {
        phone: "(813) 254-1190",
        email: "info@feedingflorida.org",
        website: "feedingflorida.org",
        emergencyContact: "(813) 254-1190 ext. 1"
      },
      hours: {
        distribution: {
          monday: "8:00 AM - 5:00 PM",
          tuesday: "8:00 AM - 5:00 PM",
          wednesday: "8:00 AM - 5:00 PM",
          thursday: "8:00 AM - 5:00 PM",
          friday: "8:00 AM - 5:00 PM"
        },
        donation: {
          monday: "7:00 AM - 6:00 PM",
          tuesday: "7:00 AM - 6:00 PM",
          wednesday: "7:00 AM - 6:00 PM",
          thursday: "7:00 AM - 6:00 PM",
          friday: "7:00 AM - 6:00 PM"
        }
      },
      description: "Network of 12 food banks serving all 67 Florida counties",
      services: {
        primary: [
          "Food Distribution",
          "Disaster Response",
          "Mobile Pantries",
          "School Programs"
        ],
        additional: [
          "Benefits Screening",
          "Nutrition Education",
          "Farming Programs",
          "Senior Programs"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of Florida residence",
          "Self-declared need"
        ],
        restrictions: "Florida residents only",
        frequency: "Varies by program"
      },
      capacity: {
        storageSpace: "200,000 sq ft",
        coldStorage: "50,000 sq ft",
        monthlyDistribution: "12M pounds",
        servingCapacity: "100,000 households/month"
      },
      partnerships: {
        retailers: ["Publix", "Winn-Dixie", "Walmart", "Target"],
        farms: ["Florida Farm Bureau", "Local Citrus Growers"],
        organizations: ["Feeding America", "Florida Department of Agriculture"]
      },
      impact: {
        annualPoundsDistributed: "144M",
        peopleServed: "2.8M",
        countiesServed: 67,
        volunteerHours: "200,000"
      },
      needs: {
        criticalItems: [
          "Protein items",
          "Fresh produce",
          "Baby food",
          "Disaster supplies"
        ],
        volunteerRoles: [
          "Food sorting",
          "Disaster response",
          "Mobile pantry",
          "Administrative"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Society of St. Andrew Florida",
      description: "Gleaning network connecting farms with food banks across Florida",
      contact: {
        name: "Florida Program Coordinator",
        phone: "(407) 650-1956",
        email: "florida@endhunger.org"
      },
      website: "endhunger.org/florida",
      areas: ["Central Florida", "South Florida", "Tampa Bay", "North Florida"],
      schedule: "Year-round",
      requirements: {
        volunteers: [
          "Must be 13 or older",
          "Sign waiver",
          "Attend orientation",
          "Weather-appropriate clothing"
        ],
        farmers: [
          "Provide field access",
          "Sign liability waiver",
          "Advance notice",
          "Safe conditions"
        ]
      },
      impact: {
        annualPounds: 3000000,
        servingAgencies: 150,
        volunteerHours: 25000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Fresh From Florida Distribution",
      type: "Statewide Distributor",
      address: "789 Agriculture Way, Orlando, FL 32801",
      coordinates: {
        lat: 28.538336,
        lng: -81.379234
      },
      contact: {
        name: "Operations Director",
        phone: "(407) 555-0123",
        email: "ops@freshfromfldist.org"
      },
      website: "freshfromfloridadist.org",
      services: [
        "Local Food Distribution",
        "Cold Chain Management",
        "Processing",
        "Export Services"
      ],
      coverage: "Statewide with international export capabilities",
      requirements: {
        minimumOrder: "$500",
        leadTime: "72 hours",
        delivery: "Available for orders over $1000"
      },
      certifications: [
        "USDA Approved",
        "Fresh From Florida Partner",
        "Global GAP",
        "HACCP Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Florida Farm to School Program",
      website: "fdacs.gov/farmtoschool",
      coordinator: "State Farm to School Director",
      phone: "(850) 617-7400",
      description: "Connecting Florida schools with fresh, local produce"
    },
    marketVouchers: {
      name: "Fresh Access Bucks",
      website: "feedingflorida.org/fresh-access-bucks",
      programs: [
        "SNAP Double-Up Program",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default floridaResources;
