const texasResources = {
  state: "Texas",
  abbreviation: "TX",
  stateInfo: {
    capital: "Austin",
    region: "South Central",
    agriculturalZones: ["6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a"],
    growingSeasons: {
      spring: "February to May",
      summer: "June to August",
      fall: "September to November",
      winter: "December to January"
    },
    keyCrops: [
      "Cotton",
      "Cattle",
      "Corn",
      "Sorghum",
      "Citrus",
      "Rice"
    ],
    agriculturalFacts: [
      "247,000 farms covering 127 million acres",
      "#1 producer of cattle and cotton in the US",
      "Agriculture contributes $115B annually to state economy",
      "Leading producer of sheep, goats, and mohair"
    ]
  },
  farmersMarkets: [
    {
      id: "TX001",
      name: "Pearl Farmers Market",
      type: "Year-round Market",
      address: "312 Pearl Parkway, San Antonio, TX 78215",
      coordinates: {
        lat: 29.442222,
        lng: -98.480833
      },
      contact: {
        phone: "(210) 212-7260",
        email: "info@pearlfarmersmarket.com",
        website: "pearlfarmersmarket.com",
        socialMedia: {
          facebook: "PearlFarmersMarket",
          instagram: "@pearlfarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "9:00 AM - 1:00 PM",
          sunday: "10:00 AM - 2:00 PM"
        },
        seasonalNotes: "Year-round market",
        holidays: "Modified schedule on holidays"
      },
      description: "Producer-only farmers market at historic Pearl Brewery",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Fresh Produce",
          "Meat",
          "Eggs",
          "Dairy",
          "Baked Goods",
          "Prepared Foods",
          "Herbs"
        ],
        amenities: [
          "Live Music",
          "Chef Demos",
          "Restrooms",
          "Wheelchair Accessible",
          "Free Parking"
        ],
        events: [
          "Cooking demonstrations",
          "Live music",
          "Kids activities",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 45,
        applicationProcess: "Competitive application process",
        vendorFees: "Daily: $45, Month: $700",
        requirements: [
          "Texas-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Texas Department of Agriculture Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-30"
      },
      statistics: {
        averageWeeklyVisitors: 6000,
        annualSales: "$4M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-TX001",
      name: "San Antonio Food Bank",
      type: "Regional Food Bank",
      address: "5200 Enrique M. Barrera Parkway, San Antonio, TX 78227",
      coordinates: {
        lat: 29.416667,
        lng: -98.583333
      },
      contact: {
        phone: "(210) 337-3663",
        email: "info@safoodbank.org",
        website: "safoodbank.org",
        emergencyContact: "(210) 337-3663 ext. 1"
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
          monday: "7:30 AM - 5:30 PM",
          tuesday: "7:30 AM - 5:30 PM",
          wednesday: "7:30 AM - 5:30 PM",
          thursday: "7:30 AM - 5:30 PM",
          friday: "7:30 AM - 5:30 PM"
        }
      },
      description: "Serving Southwest Texas with innovative programs",
      services: {
        primary: [
          "Food Distribution",
          "Mobile Pantry",
          "Culinary Training",
          "Urban Farms"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Workforce Development"
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
        storageSpace: "200,000 sq ft",
        coldStorage: "50,000 sq ft",
        monthlyDistribution: "5M pounds",
        servingCapacity: "500,000 people/month"
      },
      partnerships: {
        retailers: ["H-E-B", "Walmart", "Target", "Costco"],
        farms: ["Texas Farm Bureau", "Local Ranches"],
        organizations: ["Feeding America", "Feeding Texas"]
      },
      impact: {
        annualPoundsDistributed: "74M",
        peopleServed: "500,000",
        countiesServed: 16,
        volunteerHours: "160,000"
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
          "Urban farming",
          "Office support",
          "Culinary program"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Gleaning Texas",
      description: "Recovering surplus crops from Texas farms and orchards",
      contact: {
        name: "Program Director",
        phone: "(512) 555-0123",
        email: "glean@gleaningtexas.org"
      },
      website: "gleaningtexas.org",
      areas: ["Central Texas", "Gulf Coast", "Rio Grande Valley"],
      schedule: "Year-round with seasonal focus",
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
        annualPounds: 1200000,
        servingAgencies: 120,
        volunteerHours: 35000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Lone Star Distribution",
      type: "Regional Distributor",
      address: "789 Distribution Drive, Austin, TX 78701",
      coordinates: {
        lat: 30.266667,
        lng: -97.733333
      },
      contact: {
        name: "Operations Director",
        phone: "(512) 555-0124",
        email: "ops@lonestardist.org"
      },
      website: "lonestardist.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Texas and surrounding states",
      requirements: {
        minimumOrder: "$500",
        leadTime: "48 hours",
        delivery: "Available for orders over $1000"
      },
      certifications: [
        "USDA Approved",
        "GO TEXAN Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Texas Farm to School",
      website: "squaremeals.org/farmtoschool",
      coordinator: "State Farm to School Coordinator",
      phone: "(877) 839-6325",
      description: "Connecting Texas schools with fresh, local food"
    },
    marketVouchers: {
      name: "Texas Farmers Market Association",
      website: "texasfarmersmarket.org",
      programs: [
        "Double Up Food Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default texasResources;
