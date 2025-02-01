const minnesotaResources = {
  state: "Minnesota",
  abbreviation: "MN",
  stateInfo: {
    capital: "Saint Paul",
    region: "Midwest",
    agriculturalZones: ["3a", "3b", "4a", "4b"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Corn",
      "Soybeans",
      "Sugar Beets",
      "Sweet Corn",
      "Wheat",
      "Wild Rice"
    ],
    agriculturalFacts: [
      "68,500 farms covering 25.5 million acres",
      "#1 producer of sugar beets and green peas in the US",
      "Agriculture contributes $112 billion annually to state economy",
      "Leading producer of spring wheat and sweet corn"
    ]
  },
  farmersMarkets: [
    {
      id: "MN001",
      name: "Minneapolis Farmers Market",
      type: "Producer-Only Market",
      address: "312 East Lyndale Avenue North, Minneapolis, MN 55405",
      coordinates: {
        lat: 44.978889,
        lng: -93.288056
      },
      contact: {
        phone: "(612) 333-1737",
        email: "info@mplsfarmersmarket.com",
        website: "mplsfarmersmarket.com",
        socialMedia: {
          facebook: "MinneapolisFarmersMarket",
          instagram: "@mplsfarmersmarket"
        }
      },
      schedule: {
        regularHours: {
          monday: "6:00 AM - 1:00 PM",
          tuesday: "6:00 AM - 1:00 PM",
          wednesday: "6:00 AM - 1:00 PM",
          thursday: "6:00 AM - 1:00 PM",
          friday: "6:00 AM - 1:00 PM",
          saturday: "6:00 AM - 1:00 PM",
          sunday: "6:00 AM - 1:00 PM"
        },
        seasonalNotes: "Open year-round, peak season May-October",
        holidays: "Limited hours on major holidays"
      },
      description: "Largest open-air farmers market in the Upper Midwest",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Market Bucks"],
        products: [
          "Fresh Produce",
          "Meat",
          "Dairy",
          "Flowers",
          "Honey",
          "Wild Rice"
        ],
        amenities: [
          "Covered Stalls",
          "Food Trucks",
          "Restrooms",
          "Wheelchair Accessible",
          "Free Parking"
        ],
        events: [
          "Chef demonstrations",
          "Master gardener clinics",
          "Cultural festivals",
          "Educational programs"
        ]
      },
      vendorInfo: {
        totalVendors: 230,
        applicationProcess: "Annual application process",
        vendorFees: "Daily: $35, Season: $1200",
        requirements: [
          "Minnesota-grown/made products",
          "Insurance required",
          "Health permits",
          "Producer verification"
        ]
      },
      certification: {
        type: "Minnesota Grown Certified",
        inspections: "Monthly",
        lastInspection: "2024-12-15"
      },
      statistics: {
        averageWeeklyVisitors: 25000,
        annualSales: "$10M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-MN001",
      name: "Second Harvest Heartland",
      type: "Regional Food Bank",
      address: "7101 Winnetka Avenue North, Brooklyn Park, MN 55428",
      coordinates: {
        lat: 45.089722,
        lng: -93.364167
      },
      contact: {
        phone: "(651) 484-5117",
        email: "info@2harvest.org",
        website: "2harvest.org",
        emergencyContact: "(651) 484-5117 ext. 1"
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
      description: "One of the largest food banks in the nation",
      services: {
        primary: [
          "Food Distribution",
          "SNAP Outreach",
          "Minnesota Central Kitchen",
          "FOODRx Program"
        ],
        additional: [
          "Nutrition Education",
          "Agency Training",
          "Research and Advocacy",
          "Mobile Pantry"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of residence",
          "Self-declared need"
        ],
        restrictions: "Service area residents only",
        frequency: "Varies by program"
      },
      capacity: {
        storageSpace: "250,000 sq ft",
        coldStorage: "75,000 sq ft",
        monthlyDistribution: "10M pounds",
        servingCapacity: "200,000 people/month"
      },
      partnerships: {
        retailers: ["Target", "Cub Foods", "Walmart", "ALDI"],
        farms: ["Minnesota Farmers Union", "Local Produce Farms"],
        organizations: ["Feeding America", "Hunger Solutions Minnesota"]
      },
      impact: {
        annualPoundsDistributed: "120M",
        peopleServed: "813,000",
        countiesServed: 59,
        volunteerHours: "100,000"
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
          "Minnesota Central Kitchen"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Minnesota Gleaning Network",
      description: "Recovering surplus crops from Minnesota farms",
      contact: {
        name: "Program Director",
        phone: "(612) 555-0123",
        email: "glean@mngleaners.org"
      },
      website: "mngleaners.org",
      areas: ["Twin Cities Metro", "Southern MN", "Central MN"],
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
        annualPounds: 1200000,
        servingAgencies: 95,
        volunteerHours: 25000
      }
    }
  ],
  distributionPartners: [
    {
      name: "North Star Fresh Distribution",
      type: "Regional Distributor",
      address: "789 Distribution Way, Rogers, MN 55374",
      coordinates: {
        lat: 45.189167,
        lng: -93.553056
      },
      contact: {
        name: "Operations Director",
        phone: "(612) 555-0124",
        email: "ops@northstarfresh.org"
      },
      website: "northstarfresh.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Cross-docking"
      ],
      coverage: "Minnesota and Upper Midwest",
      requirements: {
        minimumOrder: "$400",
        leadTime: "48 hours",
        delivery: "Available for orders over $800"
      },
      certifications: [
        "USDA Approved",
        "Minnesota Grown Partner",
        "GAP Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Minnesota Farm to School",
      website: "farm2schoolmn.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(651) 201-6000",
      description: "Connecting Minnesota schools with fresh, local food"
    },
    marketVouchers: {
      name: "Minnesota Farmers' Market Association",
      website: "mfma.org",
      programs: [
        "Market Bucks",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default minnesotaResources;
