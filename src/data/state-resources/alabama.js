const alabamaResources = {
  state: "Alabama",
  abbreviation: "AL",
  stateInfo: {
    capital: "Montgomery",
    region: "Southeast",
    agriculturalZones: ["7a", "7b", "8a", "8b"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Cotton",
      "Soybeans",
      "Peanuts",
      "Corn",
      "Sweet Potatoes"
    ],
    agriculturalFacts: [
      "Alabama has over 40,000 farms covering 8.6 million acres",
      "Average farm size is 215 acres",
      "Agriculture contributes over $70 billion annually to state economy"
    ]
  },
  farmersMarkets: [
    {
      id: "AL001",
      name: "Montgomery State Farmers Market",
      type: "State-operated",
      address: "1655 Federal Dr, Montgomery, AL 36107",
      coordinates: {
        lat: 32.387646,
        lng: -86.282898
      },
      contact: {
        phone: "(334) 244-0415",
        email: "info@montgomeryfarmersmarket.com",
        website: "montgomeryfarmersmarket.com",
        socialMedia: {
          facebook: "MontgomeryFarmersMarket",
          instagram: "@mgmfarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          tuesday: "7:00 AM - 5:00 PM",
          wednesday: "7:00 AM - 5:00 PM",
          thursday: "7:00 AM - 5:00 PM",
          friday: "7:00 AM - 5:00 PM",
          saturday: "7:00 AM - 5:00 PM"
        },
        seasonalNotes: "Extended hours during peak season (June-August)",
        holidays: "Closed on major holidays"
      },
      description: "State-operated farmers market featuring local produce, crafts, and seasonal events",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "FMNP Vouchers"],
        products: ["Fresh Produce", "Dairy", "Meat", "Crafts", "Baked Goods"],
        amenities: ["Parking", "Restrooms", "Wheelchair Accessible"],
        events: [
          "Weekly cooking demonstrations",
          "Monthly farm-to-table workshops",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 45,
        applicationProcess: "Online application required",
        vendorFees: "Daily: $25, Monthly: $200, Annual: $2000",
        requirements: [
          "Must be local (within 150 miles)",
          "Product verification required",
          "Insurance required"
        ]
      },
      certification: {
        type: "State Certified Market",
        inspections: "Monthly",
        lastInspection: "2024-12-15"
      },
      statistics: {
        averageWeeklyVisitors: 2500,
        annualSales: "$1.2M",
        percentLocalProduce: 85
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-AL001",
      name: "Montgomery Area Food Bank",
      type: "Regional Distribution Center",
      address: "521 Trade Center St, Montgomery, AL 36108",
      coordinates: {
        lat: 32.377184,
        lng: -86.324851
      },
      contact: {
        phone: "(334) 263-3784",
        email: "info@montgomeryareafoodbank.org",
        website: "montgomeryareafoodbank.org",
        emergencyContact: "(334) 263-3785"
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
          monday: "7:00 AM - 5:30 PM",
          tuesday: "7:00 AM - 5:30 PM",
          wednesday: "7:00 AM - 5:30 PM",
          thursday: "7:00 AM - 5:30 PM",
          friday: "7:00 AM - 5:30 PM"
        }
      },
      description: "Serving 35 counties in Alabama with emergency food assistance",
      services: {
        primary: [
          "Emergency Food Assistance",
          "Senior Food Program",
          "Mobile Pantry",
          "Disaster Relief"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Application Assistance",
          "Food Safety Training"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Proof of income (if applicable)"
        ],
        restrictions: "Must be resident of service area",
        frequency: "Once per month per household"
      },
      capacity: {
        storageSpace: "100,000 sq ft",
        coldStorage: "20,000 sq ft",
        monthlyDistribution: "2.5M pounds",
        servingCapacity: "25,000 households/month"
      },
      partnerships: {
        retailers: ["Walmart", "Publix", "Kroger"],
        farms: ["Local Farm Network", "State Agriculture Program"],
        organizations: ["Feeding America", "United Way"]
      },
      impact: {
        annualPoundsDistributed: "30M",
        peopleServed: "300,000",
        countyReach: 35,
        volunteerHours: "50,000"
      },
      needs: {
        criticalItems: [
          "Canned protein",
          "Peanut butter",
          "Rice",
          "Beans"
        ],
        volunteerRoles: [
          "Food sorting",
          "Distribution",
          "Administrative",
          "Drivers"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Society of St. Andrew - Alabama",
      description: "Faith-based organization coordinating gleaning efforts across Alabama",
      contact: {
        name: "Alabama Program Coordinator",
        phone: "(205) 245-3214",
        email: "alabama@endhunger.org"
      },
      website: "endhunger.org/alabama",
      areas: ["North Alabama", "Central Alabama", "South Alabama"],
      schedule: "Year-round, seasonal variations",
      requirements: {
        volunteers: [
          "Must be 13 or older",
          "Sign waiver",
          "Attend brief orientation"
        ],
        farmers: [
          "Provide safe access to fields",
          "Specify gleaning window",
          "Sign liability waiver"
        ]
      },
      impact: {
        annualPounds: 500000,
        servingAgencies: 45,
        volunteerHours: 2500
      }
    }
  ],
  distributionPartners: [
    {
      name: "Alabama Food Hub",
      type: "Regional Distributor",
      address: "4791 Commerce Dr, Montgomery, AL 36116",
      coordinates: {
        lat: 32.328546,
        lng: -86.235687
      },
      contact: {
        name: "Operations Manager",
        phone: "(334) 284-3433",
        email: "operations@alfoodhub.org"
      },
      website: "alabamafoodhub.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Transportation"
      ],
      coverage: "Central and South Alabama",
      requirements: {
        minimumOrder: "$500",
        leadTime: "48 hours",
        delivery: "Available for orders over $1000"
      },
      certifications: [
        "USDA Approved",
        "GAP Certified",
        "Organic Handler Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Alabama Farm to School Program",
      website: "alabamafarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(334) 240-7247",
      description: "Connects schools with local farms to serve healthy meals in school cafeterias"
    },
    marketVouchers: {
      name: "Alabama Farmers Market Authority",
      website: "fma.alabama.gov",
      programs: [
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default alabamaResources;
