const marylandResources = {
  state: "Maryland",
  abbreviation: "MD",
  stateInfo: {
    capital: "Annapolis",
    region: "Mid-Atlantic",
    agriculturalZones: ["6b", "7a", "7b"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Blue Crabs",
      "Poultry",
      "Corn",
      "Soybeans",
      "Dairy",
      "Nursery Plants"
    ],
    agriculturalFacts: [
      "12,200 farms covering 2 million acres",
      "Agriculture contributes $8.25 billion to state economy",
      "#1 producer of blue crabs in the US",
      "Leading producer of horticultural products"
    ]
  },
  farmersMarkets: [
    {
      id: "MD001",
      name: "Baltimore Farmers' Market & Bazaar",
      type: "Producer-Only Market",
      address: "Beneath Jones Falls Expressway, Baltimore, MD 21202",
      coordinates: {
        lat: 39.305699,
        lng: -76.615767
      },
      contact: {
        phone: "(410) 752-8632",
        email: "info@promotionandarts.org",
        website: "promotionandarts.org",
        socialMedia: {
          facebook: "BmoreFarmersMarket",
          instagram: "@baltimorefarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          sunday: "7:00 AM - 12:00 PM"
        },
        seasonalNotes: "April through December",
        holidays: "Special holiday markets"
      },
      description: "Maryland's largest producers-only market",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Maryland Market Money"],
        products: [
          "Local Produce",
          "Seafood",
          "Poultry",
          "Dairy Products",
          "Baked Goods",
          "Prepared Foods"
        ],
        amenities: [
          "Covered Location",
          "Live Music",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking"
        ],
        events: [
          "Chef demonstrations",
          "Live music",
          "Cultural festivals",
          "Educational programs"
        ]
      },
      vendorInfo: {
        totalVendors: 100,
        applicationProcess: "Annual jury process",
        vendorFees: "Daily: $40, Season: $800",
        requirements: [
          "Maryland-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer-only verification"
        ]
      },
      certification: {
        type: "Maryland Farmers Market Association Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-10"
      },
      statistics: {
        averageWeeklyVisitors: 7000,
        annualSales: "$3M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-MD001",
      name: "Maryland Food Bank",
      type: "Regional Food Bank",
      address: "2200 Halethorpe Farms Road, Baltimore, MD 21227",
      coordinates: {
        lat: 39.251389,
        lng: -76.678889
      },
      contact: {
        phone: "(410) 737-8282",
        email: "info@mdfoodbank.org",
        website: "mdfoodbank.org",
        emergencyContact: "(410) 737-8282 ext. 1"
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
      description: "Serving central Maryland with emergency food assistance",
      services: {
        primary: [
          "Food Distribution",
          "FoodWorks Program",
          "School Pantry",
          "Summer Clubs"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Mobile Market"
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
        storageSpace: "150,000 sq ft",
        coldStorage: "40,000 sq ft",
        monthlyDistribution: "4M pounds",
        servingCapacity: "50,000 households/month"
      },
      partnerships: {
        retailers: ["Giant Food", "Safeway", "Walmart", "Wegmans"],
        farms: ["Maryland Farm Bureau", "Local Poultry Farms"],
        organizations: ["Feeding America", "Maryland Hunger Solutions"]
      },
      impact: {
        annualPoundsDistributed: "48M",
        peopleServed: "350,000",
        countiesServed: 21,
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
          "Mobile market",
          "Office support",
          "FoodWorks program"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Maryland Gleaners Network",
      description: "Recovering surplus crops from Maryland farms",
      contact: {
        name: "Program Director",
        phone: "(410) 555-0123",
        email: "glean@mdgleaners.org"
      },
      website: "mdgleaners.org",
      areas: ["Central Maryland", "Eastern Shore", "Western Maryland"],
      schedule: "April through November",
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
        servingAgencies: 50,
        volunteerHours: 12000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Chesapeake Fresh Distribution",
      type: "Regional Distributor",
      address: "789 Distribution Blvd, Columbia, MD 21046",
      coordinates: {
        lat: 39.203889,
        lng: -76.861944
      },
      contact: {
        name: "Operations Director",
        phone: "(410) 555-0124",
        email: "ops@chesapeakefresh.org"
      },
      website: "chesapeakefresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Maryland and DC metro area",
      requirements: {
        minimumOrder: "$400",
        leadTime: "48 hours",
        delivery: "Available for orders over $800"
      },
      certifications: [
        "USDA Approved",
        "Maryland's Best Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Maryland Farm to School",
      website: "mdfarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(410) 767-0214",
      description: "Connecting Maryland schools with fresh, local produce"
    },
    marketVouchers: {
      name: "Maryland Farmers Market Association",
      website: "marylandfma.org",
      programs: [
        "Maryland Market Money",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default marylandResources;
