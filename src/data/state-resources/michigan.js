const michiganResources = {
  state: "Michigan",
  abbreviation: "MI",
  stateInfo: {
    capital: "Lansing",
    region: "Midwest",
    agriculturalZones: ["4a", "4b", "5a", "5b", "6a", "6b"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Cherries",
      "Apples",
      "Blueberries",
      "Dairy",
      "Corn",
      "Christmas Trees"
    ],
    agriculturalFacts: [
      "47,600 farms covering 9.8 million acres",
      "#1 producer of tart cherries in the US",
      "Agriculture contributes $104.7 billion annually to state economy",
      "Second most agriculturally diverse state after California"
    ]
  },
  farmersMarkets: [
    {
      id: "MI001",
      name: "Eastern Market",
      type: "Historic Public Market",
      address: "2934 Russell St, Detroit, MI 48207",
      coordinates: {
        lat: 42.347778,
        lng: -83.040556
      },
      contact: {
        phone: "(313) 833-9300",
        email: "info@easternmarket.org",
        website: "easternmarket.org",
        socialMedia: {
          facebook: "EasternMarket",
          instagram: "@easternmarket"
        }
      },
      schedule: {
        regularHours: {
          tuesday: "9:00 AM - 3:00 PM",
          saturday: "6:00 AM - 4:00 PM",
          sunday: "10:00 AM - 4:00 PM"
        },
        seasonalNotes: "Open year-round, additional summer markets",
        holidays: "Special holiday markets"
      },
      description: "Historic market district operating since 1891",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Fresh Produce",
          "Meat",
          "Dairy",
          "Flowers",
          "Specialty Foods",
          "Art"
        ],
        amenities: [
          "Historic District",
          "Food Trucks",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking"
        ],
        events: [
          "Flower Day",
          "Food truck rallies",
          "Cultural festivals",
          "Educational programs"
        ]
      },
      vendorInfo: {
        totalVendors: 225,
        applicationProcess: "Seasonal application process",
        vendorFees: "Daily: $25-45, Season: Variable",
        requirements: [
          "Michigan-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Michigan Farmers Market Association Certified",
        inspections: "Quarterly",
        lastInspection: "2024-12-05"
      },
      statistics: {
        averageWeeklyVisitors: 45000,
        annualSales: "$25M",
        percentLocalProduce: 90
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-MI001",
      name: "Feeding America West Michigan",
      type: "Regional Food Bank",
      address: "864 West River Center Drive NE, Comstock Park, MI 49321",
      coordinates: {
        lat: 43.040556,
        lng: -85.666667
      },
      contact: {
        phone: "(616) 784-3250",
        email: "info@feedwm.org",
        website: "feedwm.org",
        emergencyContact: "(616) 784-3250 ext. 1"
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
      description: "Serving western Michigan with emergency food assistance",
      services: {
        primary: [
          "Food Distribution",
          "Mobile Pantries",
          "Kids Food Basket",
          "Senior Food Program"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Farm to Food Bank"
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
        coldStorage: "45,000 sq ft",
        monthlyDistribution: "2.5M pounds",
        servingCapacity: "160,000 people/month"
      },
      partnerships: {
        retailers: ["Meijer", "Kroger", "Walmart", "SpartanNash"],
        farms: ["Michigan Farm Bureau", "Local Fruit Farms"],
        organizations: ["Feeding America", "Food Bank Council of Michigan"]
      },
      impact: {
        annualPoundsDistributed: "30M",
        peopleServed: "492,100",
        countiesServed: 40,
        volunteerHours: "65,000"
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
          "Nutrition education"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Michigan Gleaning Network",
      description: "Recovering surplus crops from Michigan farms",
      contact: {
        name: "Program Director",
        phone: "(517) 555-0123",
        email: "glean@migleaners.org"
      },
      website: "migleaners.org",
      areas: ["West Michigan", "Southeast Michigan", "Northern Michigan"],
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
        annualPounds: 750000,
        servingAgencies: 85,
        volunteerHours: 20000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Great Lakes Fresh Distribution",
      type: "Regional Distributor",
      address: "456 Distribution Pkwy, Grand Rapids, MI 49548",
      coordinates: {
        lat: 42.913889,
        lng: -85.668889
      },
      contact: {
        name: "Operations Director",
        phone: "(616) 555-0124",
        email: "ops@greatlakesfresh.org"
      },
      website: "greatlakesfresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Michigan and surrounding states",
      requirements: {
        minimumOrder: "$350",
        leadTime: "48 hours",
        delivery: "Available for orders over $750"
      },
      certifications: [
        "USDA Approved",
        "Michigan Agriculture Environmental Assurance Program",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Michigan Farm to School",
      website: "mifarmtoschool.msu.edu",
      coordinator: "State Farm to School Specialist",
      phone: "(517) 432-0310",
      description: "Connecting Michigan schools with local food"
    },
    marketVouchers: {
      name: "Michigan Farmers Market Association",
      website: "mifma.org",
      programs: [
        "Double Up Food Bucks",
        "Senior Project FRESH/Market FRESH",
        "WIC Project FRESH"
      ]
    }
  }
};

export default michiganResources;
