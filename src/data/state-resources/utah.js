const utahResources = {
  state: "Utah",
  abbreviation: "UT",
  stateInfo: {
    capital: "Salt Lake City",
    region: "Mountain West",
    agriculturalZones: ["4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Hay",
      "Cattle",
      "Dairy",
      "Sweet Cherries",
      "Apricots",
      "Tart Cherries"
    ],
    agriculturalFacts: [
      "18,100 farms covering 10.7 million acres",
      "#2 producer of tart cherries in the US",
      "Agriculture contributes $21.2B annually to state economy",
      "Leading producer of mink pelts"
    ]
  },
  farmersMarkets: [
    {
      id: "UT001",
      name: "Downtown Farmers Market",
      type: "Seasonal Market",
      address: "300 S 300 W, Salt Lake City, UT 84101",
      coordinates: {
        lat: 40.761389,
        lng: -111.901111
      },
      contact: {
        phone: "(801) 359-2658",
        email: "market@urbancrossoads.org",
        website: "slcfarmersmarket.org",
        socialMedia: {
          facebook: "SLCFarmersMarket",
          instagram: "@slcfarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "8:00 AM - 2:00 PM",
          tuesday: "4:00 PM - 8:00 PM"
        },
        seasonalNotes: "June through October, Winter Market November-April",
        holidays: "Closed on major holidays"
      },
      description: "Salt Lake City's largest farmers market at Pioneer Park",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Fresh Produce",
          "Meat",
          "Dairy",
          "Baked Goods",
          "Honey",
          "Arts & Crafts",
          "Prepared Foods"
        ],
        amenities: [
          "Live Music",
          "Food Trucks",
          "Restrooms",
          "Wheelchair Accessible",
          "Street Parking"
        ],
        events: [
          "Chef demonstrations",
          "Live music",
          "Kids activities",
          "Cultural festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 200,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $35, Season: $600",
        requirements: [
          "Utah-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Utah Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 10000,
        annualSales: "$3M",
        percentLocalProduce: 90
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-UT001",
      name: "Utah Food Bank",
      type: "State Food Bank",
      address: "3150 S 900 W, Salt Lake City, UT 84119",
      coordinates: {
        lat: 40.700000,
        lng: -111.916667
      },
      contact: {
        phone: "(801) 978-2452",
        email: "info@utahfoodbank.org",
        website: "utahfoodbank.org",
        emergencyContact: "(801) 978-2452 ext. 1"
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
      description: "Serving all 29 counties in Utah",
      services: {
        primary: [
          "Food Distribution",
          "Mobile Pantry",
          "Kids Cafe",
          "BackPack Program"
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
        restrictions: "Utah residents only",
        frequency: "Once per month per household"
      },
      capacity: {
        storageSpace: "182,000 sq ft",
        coldStorage: "45,000 sq ft",
        monthlyDistribution: "3.5M pounds",
        servingCapacity: "200,000 people/month"
      },
      partnerships: {
        retailers: ["Smith's", "Walmart", "Associated Food Stores", "Costco"],
        farms: ["Utah Farm Bureau", "Local Orchards"],
        organizations: ["Feeding America", "Utah Food Coalition"]
      },
      impact: {
        annualPoundsDistributed: "44.1M",
        peopleServed: "200,000",
        countiesServed: 29,
        volunteerHours: "85,000"
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
      name: "Green Urban Lunch Box",
      description: "Recovering surplus crops from Utah farms and urban orchards",
      contact: {
        name: "Program Director",
        phone: "(801) 555-0123",
        email: "glean@gulb.org"
      },
      website: "greenurbanlunchbox.org",
      areas: ["Salt Lake Valley", "Utah Valley", "Davis County"],
      schedule: "June through October",
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
        annualPounds: 250000,
        servingAgencies: 40,
        volunteerHours: 10000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Beehive Fresh Distribution",
      type: "Regional Distributor",
      address: "123 Distribution Way, Salt Lake City, UT 84104",
      coordinates: {
        lat: 40.750000,
        lng: -111.916667
      },
      contact: {
        name: "Operations Director",
        phone: "(801) 555-0124",
        email: "ops@beehivefresh.org"
      },
      website: "beehivefresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Utah and surrounding states",
      requirements: {
        minimumOrder: "$300",
        leadTime: "48 hours",
        delivery: "Available for orders over $600"
      },
      certifications: [
        "USDA Approved",
        "Utah's Own Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Utah Farm to School",
      website: "utahfarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(801) 538-7513",
      description: "Connecting Utah schools with fresh, local food"
    },
    marketVouchers: {
      name: "Utah Farmers Market Association",
      website: "utahfarmersmarkets.org",
      programs: [
        "Double Up Food Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default utahResources;
