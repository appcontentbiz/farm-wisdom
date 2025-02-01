const virginiaResources = {
  state: "Virginia",
  abbreviation: "VA",
  stateInfo: {
    capital: "Richmond",
    region: "Mid-Atlantic",
    agriculturalZones: ["5b", "6a", "6b", "7a", "7b", "8a"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Tobacco",
      "Soybeans",
      "Corn",
      "Cotton",
      "Peanuts",
      "Apples"
    ],
    agriculturalFacts: [
      "43,225 farms covering 7.8 million acres",
      "#4 producer of tobacco in the US",
      "Agriculture contributes $70B annually to state economy",
      "Leading producer of tomatoes on the East Coast"
    ]
  },
  farmersMarkets: [
    {
      id: "VA001",
      name: "Old Town Alexandria Farmers' Market",
      type: "Year-round Market",
      address: "301 King Street, Alexandria, VA 22314",
      coordinates: {
        lat: 38.804722,
        lng: -77.047222
      },
      contact: {
        phone: "(703) 746-3200",
        email: "info@oldtownfarmersmarket.com",
        website: "oldtownfarmersmarket.com",
        socialMedia: {
          facebook: "OldTownMarket",
          instagram: "@oldtownmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "7:00 AM - 12:00 PM"
        },
        seasonalNotes: "Year-round market, oldest farmers' market in the US",
        holidays: "Modified schedule on holidays"
      },
      description: "Nation's oldest continuously operating farmers' market since 1753",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Virginia Fresh Match"],
        products: [
          "Fresh Produce",
          "Meat",
          "Dairy",
          "Baked Goods",
          "Flowers",
          "Crafts",
          "Prepared Foods"
        ],
        amenities: [
          "Historic Setting",
          "Street Musicians",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking"
        ],
        events: [
          "Chef demonstrations",
          "Live music",
          "Historical tours",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 70,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $30, Season: $500",
        requirements: [
          "Virginia-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Virginia Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 5000,
        annualSales: "$3.5M",
        percentLocalProduce: 95
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-VA001",
      name: "Feed More",
      type: "Regional Food Bank",
      address: "1415 Rhoadmiller Street, Richmond, VA 23220",
      coordinates: {
        lat: 37.566667,
        lng: -77.450000
      },
      contact: {
        phone: "(804) 521-2500",
        email: "info@feedmore.org",
        website: "feedmore.org",
        emergencyContact: "(804) 521-2500 ext. 1"
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
      description: "Serving Central Virginia through innovative programs",
      services: {
        primary: [
          "Food Distribution",
          "Mobile Pantry",
          "Kids Cafe",
          "Meals on Wheels"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Community Kitchen"
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
        storageSpace: "100,000 sq ft",
        coldStorage: "25,000 sq ft",
        monthlyDistribution: "2.5M pounds",
        servingCapacity: "200,000 people/month"
      },
      partnerships: {
        retailers: ["Food Lion", "Kroger", "Walmart", "Publix"],
        farms: ["Virginia Farm Bureau", "Local Produce Farms"],
        organizations: ["Feeding America", "Virginia Food Banks"]
      },
      impact: {
        annualPoundsDistributed: "30M",
        peopleServed: "200,000",
        countiesServed: 34,
        volunteerHours: "75,000"
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
          "Meals on Wheels"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Society of St. Andrew Virginia",
      description: "Recovering surplus crops from Virginia farms",
      contact: {
        name: "Program Director",
        phone: "(804) 555-0123",
        email: "glean@endhunger.org"
      },
      website: "endhunger.org/virginia",
      areas: ["Northern Virginia", "Central Virginia", "Tidewater"],
      schedule: "April through November",
      requirements: {
        volunteers: [
          "Must be 13 or older",
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
        annualPounds: 750000,
        servingAgencies: 85,
        volunteerHours: 20000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Commonwealth Distribution",
      type: "Regional Distributor",
      address: "789 Distribution Way, Richmond, VA 23219",
      coordinates: {
        lat: 37.533333,
        lng: -77.466667
      },
      contact: {
        name: "Operations Director",
        phone: "(804) 555-0124",
        email: "ops@commonwealthdist.org"
      },
      website: "commonwealthdist.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Virginia and surrounding states",
      requirements: {
        minimumOrder: "$400",
        leadTime: "48 hours",
        delivery: "Available for orders over $800"
      },
      certifications: [
        "USDA Approved",
        "Virginia Grown Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Virginia Farm to School",
      website: "vafarmtoschool.org",
      coordinator: "Farm to School Coordinator",
      phone: "(804) 786-2042",
      description: "Connecting Virginia schools with fresh, local food"
    },
    marketVouchers: {
      name: "Virginia Farmers Market Association",
      website: "vafma.org",
      programs: [
        "Virginia Fresh Match",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default virginiaResources;
