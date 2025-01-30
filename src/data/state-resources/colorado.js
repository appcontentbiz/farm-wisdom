const coloradoResources = {
  state: "Colorado",
  abbreviation: "CO",
  stateInfo: {
    capital: "Denver",
    region: "Rocky Mountain",
    agriculturalZones: ["3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a"],
    growingSeasons: {
      spring: "April to May",
      summer: "June to August",
      fall: "September to October",
      winter: "November to March"
    },
    keyCrops: [
      "Cattle",
      "Corn",
      "Hay",
      "Wheat",
      "Potatoes",
      "Hemp"
    ],
    agriculturalFacts: [
      "Colorado has over 38,900 farms and ranches",
      "Agriculture contributes $47 billion to state economy",
      "Leader in winter wheat production",
      "San Luis Valley is largest high-altitude agricultural valley in world"
    ]
  },
  farmersMarkets: [
    {
      id: "CO001",
      name: "Boulder County Farmers Markets",
      type: "Producer-Only Market",
      address: "13th Street, Boulder, CO 80302",
      coordinates: {
        lat: 40.017236,
        lng: -105.279503
      },
      contact: {
        phone: "(303) 910-2236",
        email: "info@bcfm.org",
        website: "bcfm.org",
        socialMedia: {
          facebook: "BoulderFarmersMarket",
          instagram: "@boulderfarmers",
          twitter: "@BCFMarkets"
        }
      },
      schedule: {
        regularHours: {
          wednesday: "4:00 PM - 8:00 PM",
          saturday: "8:00 AM - 2:00 PM"
        },
        seasonalNotes: "April through November, Winter Market in December",
        holidays: "Special holiday markets"
      },
      description: "Producer-only market featuring local Colorado farmers and food artisans",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Organic Produce",
          "Grass-fed Meats",
          "Artisan Cheese",
          "Local Honey",
          "CBD Products",
          "Mountain Herbs"
        ],
        amenities: [
          "Street Closure",
          "Live Music",
          "Restrooms",
          "Wheelchair Accessible",
          "Pet Friendly"
        ],
        events: [
          "Chef demonstrations",
          "Farm education",
          "Kids activities",
          "Seasonal festivals"
        ]
      },
      vendorInfo: {
        totalVendors: 150,
        applicationProcess: "Annual jury process",
        vendorFees: "Daily: $45, Season: $800",
        requirements: [
          "100-mile radius produce",
          "Producer-only items",
          "Insurance required",
          "Health department certification"
        ]
      },
      certification: {
        type: "Colorado Proud Market",
        inspections: "Bi-monthly",
        lastInspection: "2024-12-10"
      },
      statistics: {
        averageWeeklyVisitors: 5000,
        annualSales: "$4.5M",
        percentLocalProduce: 100
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-CO001",
      name: "Food Bank of the Rockies",
      type: "Regional Distribution Center",
      address: "10700 E 45th Ave, Denver, CO 80239",
      coordinates: {
        lat: 39.776691,
        lng: -104.859909
      },
      contact: {
        phone: "(303) 371-9250",
        email: "info@foodbankrockies.org",
        website: "foodbankrockies.org",
        emergencyContact: "(303) 371-9250 ext. 1"
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
          monday: "7:00 AM - 5:00 PM",
          tuesday: "7:00 AM - 5:00 PM",
          wednesday: "7:00 AM - 5:00 PM",
          thursday: "7:00 AM - 5:00 PM",
          friday: "7:00 AM - 5:00 PM"
        }
      },
      description: "Serving Colorado and Wyoming with emergency food assistance",
      services: {
        primary: [
          "Mobile Pantry",
          "Kids Cafe",
          "USDA Commodities",
          "Totes of Hope"
        ],
        additional: [
          "Nutrition Education",
          "SNAP Outreach",
          "Agency Training",
          "Mountain Resource Distribution"
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
        storageSpace: "170,000 sq ft",
        coldStorage: "45,000 sq ft",
        monthlyDistribution: "5M pounds",
        servingCapacity: "50,000 households/month"
      },
      partnerships: {
        retailers: ["King Soopers", "Safeway", "Walmart", "Target"],
        farms: ["Colorado Proud Farms", "Rocky Mountain Growers"],
        organizations: ["Feeding America", "Colorado Farm to Table"]
      },
      impact: {
        annualPoundsDistributed: "60M",
        peopleServed: "400,000",
        countiesServed: 30,
        volunteerHours: "80,000"
      },
      needs: {
        criticalItems: [
          "Protein items",
          "Whole grains",
          "Canned goods",
          "Baby food"
        ],
        volunteerRoles: [
          "Food sorting",
          "Box packing",
          "Mountain delivery",
          "Administrative"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "We Don't Waste",
      description: "Recovering and redistributing fresh food across Colorado",
      contact: {
        name: "Program Director",
        phone: "(720) 443-6113",
        email: "info@wedontwaste.org"
      },
      website: "wedontwaste.org",
      areas: ["Denver Metro", "Front Range", "Mountain Communities"],
      schedule: "Year-round",
      requirements: {
        volunteers: [
          "Must be 16 or older",
          "Sign waiver",
          "Attend orientation",
          "Reliable transportation"
        ],
        farmers: [
          "Advance notice",
          "Accessible fields",
          "Sign liability waiver",
          "Safe conditions"
        ]
      },
      impact: {
        annualPounds: 1500000,
        servingAgencies: 120,
        volunteerHours: 15000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Colorado Fresh Distribution",
      type: "Regional Distributor",
      address: "5800 Pecos St, Denver, CO 80221",
      coordinates: {
        lat: 39.802563,
        lng: -105.006165
      },
      contact: {
        name: "Operations Manager",
        phone: "(303) 555-0123",
        email: "ops@cofreshdist.org"
      },
      website: "coloradofreshdist.org",
      services: [
        "Local Food Distribution",
        "Mountain Delivery",
        "Cold Storage",
        "Processing"
      ],
      coverage: "Colorado and neighboring states",
      requirements: {
        minimumOrder: "$300",
        leadTime: "48 hours",
        delivery: "Available for orders over $750"
      },
      certifications: [
        "USDA Approved",
        "Colorado Proud Partner",
        "High Altitude Certified",
        "Food Safety Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Colorado Farm to School Task Force",
      website: "coloradofarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(303) 866-6650",
      description: "Supporting farm to school initiatives across Colorado's diverse regions"
    },
    marketVouchers: {
      name: "Colorado Farmers Market Association",
      website: "coloradofarmers.org",
      programs: [
        "Double Up Food Bucks Colorado",
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default coloradoResources;
