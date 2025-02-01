const tennesseeResources = {
  state: "Tennessee",
  abbreviation: "TN",
  stateInfo: {
    capital: "Nashville",
    region: "Southeast",
    agriculturalZones: ["6a", "6b", "7a", "7b"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Soybeans",
      "Corn",
      "Cotton",
      "Tobacco",
      "Tomatoes",
      "Nursery Products"
    ],
    agriculturalFacts: [
      "69,500 farms covering 10.8 million acres",
      "#1 producer of hardwood lumber in the US",
      "Agriculture contributes $81.8B annually to state economy",
      "Leading producer of snap beans in the Southeast"
    ]
  },
  farmersMarkets: [
    {
      id: "TN001",
      name: "Nashville Farmers' Market",
      type: "Year-round Market",
      address: "900 Rosa L Parks Blvd, Nashville, TN 37208",
      coordinates: {
        lat: 36.171944,
        lng: -86.784722
      },
      contact: {
        phone: "(615) 880-2001",
        email: "info@nashvillefarmersmarket.org",
        website: "nashvillefarmersmarket.org",
        socialMedia: {
          facebook: "NashvilleFarmersMarket",
          instagram: "@nashvillefarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          monday: "8:00 AM - 4:00 PM",
          tuesday: "8:00 AM - 4:00 PM",
          wednesday: "8:00 AM - 4:00 PM",
          thursday: "8:00 AM - 4:00 PM",
          friday: "8:00 AM - 6:00 PM",
          saturday: "8:00 AM - 6:00 PM",
          sunday: "8:00 AM - 4:00 PM"
        },
        seasonalNotes: "Year-round market, peak season May-October",
        holidays: "Modified hours on holidays"
      },
      description: "Historic market in downtown Nashville since 1801",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Fresh Savings"],
        products: [
          "Fresh Produce",
          "Meat",
          "Dairy",
          "Baked Goods",
          "Prepared Foods",
          "Crafts",
          "Plants"
        ],
        amenities: [
          "Food Hall",
          "Restaurants",
          "Restrooms",
          "Wheelchair Accessible",
          "Free Parking"
        ],
        events: [
          "Night Markets",
          "Cooking demonstrations",
          "Live music",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 150,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $35, Month: $600",
        requirements: [
          "Tennessee-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Tennessee Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 25000,
        annualSales: "$12M",
        percentLocalProduce: 85
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-TN001",
      name: "Second Harvest Food Bank of Middle Tennessee",
      type: "Regional Food Bank",
      address: "331 Great Circle Road, Nashville, TN 37228",
      coordinates: {
        lat: 36.183333,
        lng: -86.766667
      },
      contact: {
        phone: "(615) 329-3491",
        email: "info@secondharvestmidtn.org",
        website: "secondharvestmidtn.org",
        emergencyContact: "(615) 329-3491 ext. 1"
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
      description: "Serving Middle and West Tennessee",
      services: {
        primary: [
          "Food Distribution",
          "Emergency Food Box",
          "Kids Cafe",
          "Mobile Pantry"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Cooking Matters"
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
        storageSpace: "160,000 sq ft",
        coldStorage: "40,000 sq ft",
        monthlyDistribution: "3M pounds",
        servingCapacity: "400,000 people/month"
      },
      partnerships: {
        retailers: ["Kroger", "Publix", "Walmart", "Food Lion"],
        farms: ["TN Farm Bureau", "Local Produce Farms"],
        organizations: ["Feeding America", "Tennessee Food Banks Association"]
      },
      impact: {
        annualPoundsDistributed: "41M",
        peopleServed: "400,000",
        countiesServed: 46,
        volunteerHours: "90,000"
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
      name: "Society of St. Andrew Tennessee",
      description: "Recovering surplus crops from Tennessee farms",
      contact: {
        name: "Program Director",
        phone: "(615) 555-0123",
        email: "glean@endhunger.org"
      },
      website: "endhunger.org/tennessee",
      areas: ["Middle Tennessee", "East Tennessee", "West Tennessee"],
      schedule: "March through November",
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
        annualPounds: 500000,
        servingAgencies: 70,
        volunteerHours: 15000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Volunteer State Distribution",
      type: "Regional Distributor",
      address: "123 Distribution Way, Nashville, TN 37204",
      coordinates: {
        lat: 36.150000,
        lng: -86.783333
      },
      contact: {
        name: "Operations Director",
        phone: "(615) 555-0124",
        email: "ops@volunteerstatefood.org"
      },
      website: "volunteerstatefood.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Tennessee and surrounding states",
      requirements: {
        minimumOrder: "$350",
        leadTime: "48 hours",
        delivery: "Available for orders over $700"
      },
      certifications: [
        "USDA Approved",
        "Pick Tennessee Products Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Tennessee Farm to School",
      website: "tnfarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(615) 837-5160",
      description: "Connecting Tennessee schools with fresh, local food"
    },
    marketVouchers: {
      name: "Tennessee Association of Farmers Markets",
      website: "tnfarmersmarkets.org",
      programs: [
        "Fresh Savings",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default tennesseeResources;
