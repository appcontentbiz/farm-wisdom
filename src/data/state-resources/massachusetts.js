const massachusettsResources = {
  state: "Massachusetts",
  abbreviation: "MA",
  stateInfo: {
    capital: "Boston",
    region: "New England",
    agriculturalZones: ["5a", "5b", "6a", "6b", "7a"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Cranberries",
      "Apples",
      "Sweet Corn",
      "Greenhouse/Nursery",
      "Dairy",
      "Maple Syrup"
    ],
    agriculturalFacts: [
      "7,241 farms covering 491,653 acres",
      "#1 cranberry producer in the US",
      "Agriculture contributes $475 million to state economy",
      "Leading producer of aquaculture in New England"
    ]
  },
  farmersMarkets: [
    {
      id: "MA001",
      name: "Boston Public Market",
      type: "Year-Round Indoor Market",
      address: "100 Hanover Street, Boston, MA 02108",
      coordinates: {
        lat: 42.363889,
        lng: -71.059167
      },
      contact: {
        phone: "(617) 973-4909",
        email: "info@bostonpublicmarket.org",
        website: "bostonpublicmarket.org",
        socialMedia: {
          facebook: "BostonPublicMarket",
          instagram: "@bostonpublicmarket"
        }
      },
      schedule: {
        regularHours: {
          monday: "8:00 AM - 6:00 PM",
          tuesday: "8:00 AM - 6:00 PM",
          wednesday: "8:00 AM - 6:00 PM",
          thursday: "8:00 AM - 6:00 PM",
          friday: "8:00 AM - 6:00 PM",
          saturday: "8:00 AM - 6:00 PM",
          sunday: "10:00 AM - 6:00 PM"
        },
        seasonalNotes: "Open year-round",
        holidays: "Closed on major holidays"
      },
      description: "Year-round, indoor market featuring New England vendors",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "HIP"],
        products: [
          "Fresh Produce",
          "Seafood",
          "Dairy",
          "Meat",
          "Baked Goods",
          "Specialty Foods"
        ],
        amenities: [
          "Indoor Location",
          "Demonstration Kitchen",
          "Restrooms",
          "Wheelchair Accessible",
          "Public Transit Access"
        ],
        events: [
          "Cooking demonstrations",
          "Educational programs",
          "Seasonal festivals",
          "Kids activities"
        ]
      },
      vendorInfo: {
        totalVendors: 35,
        applicationProcess: "Competitive selection process",
        vendorFees: "Monthly lease",
        requirements: [
          "New England-sourced products",
          "Insurance required",
          "Health permits",
          "Year-round commitment"
        ]
      },
      certification: {
        type: "Mass Department of Agricultural Resources Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-20"
      },
      statistics: {
        averageWeeklyVisitors: 20000,
        annualSales: "$15M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-MA001",
      name: "Greater Boston Food Bank",
      type: "Regional Food Bank",
      address: "70 South Bay Avenue, Boston, MA 02118",
      coordinates: {
        lat: 42.333889,
        lng: -71.068889
      },
      contact: {
        phone: "(617) 427-5200",
        email: "info@gbfb.org",
        website: "gbfb.org",
        emergencyContact: "(617) 427-5200 ext. 1"
      },
      hours: {
        distribution: {
          monday: "8:00 AM - 4:00 PM",
          tuesday: "8:00 AM - 4:00 PM",
          wednesday: "8:00 AM - 4:00 PM",
          thursday: "8:00 AM - 4:00 PM",
          friday: "8:00 AM - 4:00 PM"
        },
        donation: {
          monday: "7:00 AM - 5:00 PM",
          tuesday: "7:00 AM - 5:00 PM",
          wednesday: "7:00 AM - 5:00 PM",
          thursday: "7:00 AM - 5:00 PM",
          friday: "7:00 AM - 5:00 PM"
        }
      },
      description: "Largest hunger-relief organization in New England",
      services: {
        primary: [
          "Food Distribution",
          "Click 'N Cook Program",
          "Mobile Markets",
          "School-Based Pantries"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Research and Advocacy"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Self-declared need"
        ],
        restrictions: "Eastern Massachusetts residents",
        frequency: "Varies by program"
      },
      capacity: {
        storageSpace: "117,000 sq ft",
        coldStorage: "35,000 sq ft",
        monthlyDistribution: "5M pounds",
        servingCapacity: "140,000 people/month"
      },
      partnerships: {
        retailers: ["Stop & Shop", "Market Basket", "Whole Foods", "Star Market"],
        farms: ["Massachusetts Farm Bureau", "Local Cranberry Growers"],
        organizations: ["Feeding America", "Project Bread"]
      },
      impact: {
        annualPoundsDistributed: "60M",
        peopleServed: "545,000",
        countiesServed: 9,
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
          "Mobile market",
          "Office support",
          "Nutrition education"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Boston Area Gleaners",
      description: "Recovering surplus crops from Massachusetts farms",
      contact: {
        name: "Program Director",
        phone: "(781) 894-3212",
        email: "info@bostonareagleaners.org"
      },
      website: "bostonareagleaners.org",
      areas: ["Greater Boston", "MetroWest", "North Shore"],
      schedule: "May through December",
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
        annualPounds: 820000,
        servingAgencies: 75,
        volunteerHours: 15000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Bay State Fresh Distribution",
      type: "Regional Distributor",
      address: "123 Distribution Way, Chelsea, MA 02150",
      coordinates: {
        lat: 42.391944,
        lng: -71.033889
      },
      contact: {
        name: "Operations Director",
        phone: "(617) 555-0124",
        email: "ops@baystatefresh.org"
      },
      website: "baystatefresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Massachusetts and southern New England",
      requirements: {
        minimumOrder: "$500",
        leadTime: "48 hours",
        delivery: "Available for orders over $1000"
      },
      certifications: [
        "USDA Approved",
        "Commonwealth Quality",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Massachusetts Farm to School",
      website: "massfarmtoschool.org",
      coordinator: "State Farm to School Director",
      phone: "(413) 253-3844",
      description: "Connecting Massachusetts schools with local food"
    },
    marketVouchers: {
      name: "Massachusetts Federation of Farmers Markets",
      website: "massfarmersmarkets.org",
      programs: [
        "HIP (Healthy Incentives Program)",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default massachusettsResources;
