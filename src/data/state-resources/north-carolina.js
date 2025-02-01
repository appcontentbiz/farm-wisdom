const northCarolinaResources = {
  state: "North Carolina",
  abbreviation: "NC",
  stateInfo: {
    capital: "Raleigh",
    region: "Southeast",
    agriculturalZones: ["6a", "6b", "7a", "7b", "8a"],
    growingSeasons: {
      spring: "March to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to February"
    },
    keyCrops: [
      "Sweet Potatoes",
      "Tobacco",
      "Soybeans",
      "Corn",
      "Cotton",
      "Christmas Trees"
    ],
    agriculturalFacts: [
      "46,400 farms covering 8.4 million acres",
      "#1 producer of sweet potatoes in the US",
      "Agriculture contributes $92.7B annually to state economy",
      "Leading producer of Christmas trees in the eastern US"
    ]
  },
  farmersMarkets: [
    {
      id: "NC001",
      name: "State Farmers Market Raleigh",
      type: "State-operated Market",
      address: "1201 Agriculture Street, Raleigh, NC 27603",
      coordinates: {
        lat: 35.765556,
        lng: -78.655833
      },
      contact: {
        phone: "(919) 733-7417",
        email: "info@ncsfm.com",
        website: "ncagr.gov/markets/facilities/markets/raleigh",
        socialMedia: {
          facebook: "StateFarmersMarket",
          instagram: "@ncsfm"
        }
      },
      schedule: {
        regularHours: {
          monday: "5:00 AM - 6:00 PM",
          tuesday: "5:00 AM - 6:00 PM",
          wednesday: "5:00 AM - 6:00 PM",
          thursday: "5:00 AM - 6:00 PM",
          friday: "5:00 AM - 6:00 PM",
          saturday: "5:00 AM - 6:00 PM",
          sunday: "8:00 AM - 6:00 PM"
        },
        seasonalNotes: "Year-round market",
        holidays: "Closed on major holidays"
      },
      description: "One of the largest farmers markets in the Southeast",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Market Fresh Bucks"],
        products: [
          "Fresh Produce",
          "Plants",
          "Meats",
          "Seafood",
          "Dairy",
          "Crafts",
          "Specialty Foods"
        ],
        amenities: [
          "Restaurant",
          "Restrooms",
          "Wheelchair Accessible",
          "Free Parking",
          "ATM"
        ],
        events: [
          "Seasonal festivals",
          "Cooking demonstrations",
          "School tours",
          "Educational programs"
        ]
      },
      vendorInfo: {
        totalVendors: 200,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $25, Month: $500",
        requirements: [
          "North Carolina-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "North Carolina Department of Agriculture Certified",
        inspections: "Weekly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 30000,
        annualSales: "$15M",
        percentLocalProduce: 95
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-NC001",
      name: "Food Bank of Central & Eastern North Carolina",
      type: "Regional Food Bank",
      address: "1924 Capital Boulevard, Raleigh, NC 27604",
      coordinates: {
        lat: 35.805556,
        lng: -78.633889
      },
      contact: {
        phone: "(919) 875-0707",
        email: "info@foodbankcenc.org",
        website: "foodbankcenc.org",
        emergencyContact: "(919) 875-0707 ext. 1"
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
      description: "Serving 34 counties in central and eastern North Carolina",
      services: {
        primary: [
          "Food Distribution",
          "Kids Summer Meals",
          "Mobile Markets",
          "Disaster Relief"
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
        storageSpace: "180,000 sq ft",
        coldStorage: "45,000 sq ft",
        monthlyDistribution: "6M pounds",
        servingCapacity: "600,000 people/month"
      },
      partnerships: {
        retailers: ["Food Lion", "Harris Teeter", "Walmart", "Publix"],
        farms: ["NC Farm Bureau", "Sweet Potato Growers"],
        organizations: ["Feeding America", "NC Association of Feeding America Food Banks"]
      },
      impact: {
        annualPoundsDistributed: "75M",
        peopleServed: "600,000",
        countiesServed: 34,
        volunteerHours: "200,000"
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
          "Disaster relief"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Society of St. Andrew - NC",
      description: "Recovering surplus crops from North Carolina farms",
      contact: {
        name: "Program Director",
        phone: "(919) 533-9609",
        email: "ncglean@endhunger.org"
      },
      website: "endhunger.org/north-carolina",
      areas: ["Triangle", "Triad", "Eastern NC", "Western NC"],
      schedule: "Year-round",
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
        annualPounds: 5000000,
        servingAgencies: 150,
        volunteerHours: 25000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Tar Heel Fresh Distribution",
      type: "Regional Distributor",
      address: "456 Distribution Drive, Durham, NC 27701",
      coordinates: {
        lat: 35.994444,
        lng: -78.898889
      },
      contact: {
        name: "Operations Director",
        phone: "(919) 555-0124",
        email: "ops@tarheelfresh.org"
      },
      website: "tarheelfresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "North Carolina and surrounding states",
      requirements: {
        minimumOrder: "$350",
        leadTime: "48 hours",
        delivery: "Available for orders over $700"
      },
      certifications: [
        "USDA Approved",
        "Got to Be NC Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "North Carolina Farm to School",
      website: "ncfarmtoschool.com",
      coordinator: "State Farm to School Coordinator",
      phone: "(919) 707-3136",
      description: "Connecting North Carolina schools with fresh, local food"
    },
    marketVouchers: {
      name: "NC Farmers Market Association",
      website: "ncfarmersmarkets.org",
      programs: [
        "Market Fresh Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default northCarolinaResources;
