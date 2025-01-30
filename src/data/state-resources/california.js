const californiaResources = {
  state: "California",
  abbreviation: "CA",
  stateInfo: {
    capital: "Sacramento",
    region: "West Coast",
    agriculturalZones: ["5a", "6a", "7a", "8a", "9a", "10a", "11a"],
    growingSeasons: {
      spring: "February to May",
      summer: "June to September",
      fall: "October to November",
      winter: "December to January"
    },
    keyCrops: [
      "Almonds",
      "Grapes",
      "Strawberries",
      "Tomatoes",
      "Dairy",
      "Lettuce"
    ],
    agriculturalFacts: [
      "California produces over 400 agricultural commodities",
      "Produces over 1/3 of US vegetables and 2/3 of US fruits and nuts",
      "Agriculture contributes $50 billion annually to state economy",
      "Home to the Central Valley, one of world's most productive agricultural regions"
    ]
  },
  farmersMarkets: [
    {
      id: "CA001",
      name: "Ferry Plaza Farmers Market",
      type: "Certified Farmers Market",
      address: "1 Ferry Building, San Francisco, CA 94111",
      coordinates: {
        lat: 37.795873,
        lng: -122.393378
      },
      contact: {
        phone: "(415) 291-3276",
        email: "info@cuesa.org",
        website: "cuesa.org",
        socialMedia: {
          facebook: "CUESA",
          instagram: "@cuesa",
          twitter: "@CUESA"
        }
      },
      schedule: {
        regularHours: {
          tuesday: "10:00 AM - 2:00 PM",
          thursday: "10:00 AM - 2:00 PM",
          saturday: "8:00 AM - 2:00 PM"
        },
        seasonalNotes: "Open year-round, rain or shine",
        holidays: "Modified schedule on major holidays"
      },
      description: "Iconic San Francisco farmers market featuring California's finest produce and artisanal foods",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Market Match"],
        products: [
          "Organic Produce",
          "Artisanal Cheese",
          "Fresh Seafood",
          "Specialty Foods",
          "Prepared Foods",
          "Cut Flowers"
        ],
        amenities: [
          "Indoor/Outdoor Space",
          "Restrooms",
          "Wheelchair Accessible",
          "Public Transit Access",
          "Demonstration Kitchen"
        ],
        events: [
          "Chef demonstrations",
          "Seasonal tastings",
          "Educational programs",
          "Cooking classes"
        ]
      },
      vendorInfo: {
        totalVendors: 120,
        applicationProcess: "Competitive application process",
        vendorFees: "Daily: $75, Monthly: $280, Annual: $3000",
        requirements: [
          "California-grown products",
          "Organic certification preferred",
          "Insurance required",
          "Health permits for prepared foods"
        ]
      },
      certification: {
        type: "CDFA Certified Farmers Market",
        inspections: "Monthly",
        lastInspection: "2024-12-15"
      },
      statistics: {
        averageWeeklyVisitors: 15000,
        annualSales: "$12M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-CA001",
      name: "San Francisco-Marin Food Bank",
      type: "Regional Food Bank",
      address: "900 Pennsylvania Ave, San Francisco, CA 94107",
      coordinates: {
        lat: 37.754124,
        lng: -122.393378
      },
      contact: {
        phone: "(415) 282-1900",
        email: "info@sfmfoodbank.org",
        website: "sfmfoodbank.org",
        emergencyContact: "(415) 282-1907"
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
          friday: "7:00 AM - 6:00 PM",
          saturday: "8:00 AM - 2:00 PM"
        }
      },
      description: "Serving San Francisco and Marin counties with innovative food programs",
      services: {
        primary: [
          "Pantry Network",
          "Home-Delivered Groceries",
          "Morning Snack Program",
          "Community Food Box"
        ],
        additional: [
          "CalFresh Outreach",
          "Nutrition Education",
          "Food Pharmacy Program",
          "Advocacy Training"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of address",
          "Self-declared income"
        ],
        restrictions: "Service area residents only",
        frequency: "Weekly access available"
      },
      capacity: {
        storageSpace: "200,000 sq ft",
        coldStorage: "60,000 sq ft",
        monthlyDistribution: "6M pounds",
        servingCapacity: "60,000 households/month"
      },
      partnerships: {
        retailers: ["Safeway", "Whole Foods", "Costco", "Amazon Fresh"],
        farms: ["California Farmers", "Central Valley Growers"],
        organizations: ["Feeding America", "California Association of Food Banks"]
      },
      impact: {
        annualPoundsDistributed: "72M",
        peopleServed: "140,000",
        pantryLocations: 275,
        volunteerHours: "120,000"
      },
      needs: {
        criticalItems: [
          "Protein items",
          "Fresh produce",
          "Whole grains",
          "Healthy snacks"
        ],
        volunteerRoles: [
          "Food sorting",
          "Pantry support",
          "Delivery drivers",
          "Administrative"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Farm to Pantry",
      description: "Gleaning from farms and orchards across California",
      contact: {
        name: "Program Director",
        phone: "(415) 555-0123",
        email: "glean@farmtopantry.org"
      },
      website: "farmtopantry.org",
      areas: ["Bay Area", "Central Valley", "North Coast"],
      schedule: "Year-round",
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
          "Advance notice of availability",
          "Safe working conditions"
        ]
      },
      impact: {
        annualPounds: 2000000,
        servingAgencies: 150,
        volunteerHours: 25000
      }
    }
  ],
  distributionPartners: [
    {
      name: "California Fresh Network",
      type: "Statewide Distributor",
      address: "1100 Richards Blvd, Sacramento, CA 95814",
      coordinates: {
        lat: 38.596361,
        lng: -121.504074
      },
      contact: {
        name: "Operations Director",
        phone: "(916) 555-0123",
        email: "ops@cafreshnetwork.org"
      },
      website: "cafreshnetwork.org",
      services: [
        "Local Food Distribution",
        "Cold Chain Management",
        "Processing",
        "Export Services"
      ],
      coverage: "Statewide with international export capabilities",
      requirements: {
        minimumOrder: "$500",
        leadTime: "48 hours",
        delivery: "Available for orders over $1000"
      },
      certifications: [
        "USDA Approved",
        "California Certified Organic",
        "Global GAP",
        "HACCP Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "California Farm to School Network",
      website: "cafarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(916) 555-0124",
      description: "Connecting schools with local farms to serve healthy meals and improve student nutrition"
    },
    marketVouchers: {
      name: "California Market Match Program",
      website: "marketmatch.org",
      programs: [
        "Market Match",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default californiaResources;
