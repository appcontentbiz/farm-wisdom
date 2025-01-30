const arizonaResources = {
  state: "Arizona",
  abbreviation: "AZ",
  stateInfo: {
    capital: "Phoenix",
    region: "Southwest",
    agriculturalZones: ["8b", "9a", "9b", "10a", "10b", "11a"],
    growingSeasons: {
      spring: "February to April",
      summer: "May to September",
      fall: "October to November",
      winter: "December to January"
    },
    keyCrops: [
      "Lettuce",
      "Cotton",
      "Citrus",
      "Dates",
      "Melons"
    ],
    agriculturalFacts: [
      "Arizona produces 90% of the nation's winter lettuce",
      "Over 26 million acres of farmland and ranches",
      "Agriculture contributes $23.3 billion annually to state economy",
      "Leader in specialty crop production"
    ]
  },
  farmersMarkets: [
    {
      id: "AZ001",
      name: "Phoenix Public Market",
      type: "Urban Community Market",
      address: "721 N Central Ave, Phoenix, AZ 85004",
      coordinates: {
        lat: 33.454666,
        lng: -112.073728
      },
      contact: {
        phone: "(602) 625-6736",
        email: "info@phxpublicmarket.com",
        website: "phxpublicmarket.com",
        socialMedia: {
          facebook: "PhoenixPublicMarket",
          instagram: "@phxpublicmarket",
          twitter: "@phxmarket"
        }
      },
      schedule: {
        regularHours: {
          saturday: "8:00 AM - 1:00 PM",
          wednesday: "5:00 PM - 9:00 PM" // Night market
        },
        seasonalNotes: "Extended morning hours during summer months",
        holidays: "Closed major holidays, special holiday markets in December"
      },
      description: "Year-round market featuring local produce, artisan foods, and crafts in downtown Phoenix",
      features: {
        paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "Double Up Food Bucks"],
        products: [
          "Desert Produce",
          "Citrus",
          "Local Honey",
          "Artisan Breads",
          "Native Foods",
          "Desert Plants"
        ],
        amenities: [
          "Covered Space",
          "Parking",
          "Restrooms",
          "Wheelchair Accessible",
          "Misting System",
          "Water Stations"
        ],
        events: [
          "Chef demonstrations",
          "Native food workshops",
          "Desert gardening classes",
          "Night markets"
        ]
      },
      vendorInfo: {
        totalVendors: 90,
        applicationProcess: "Online application with jury process",
        vendorFees: "Daily: $45, Monthly: $160, Annual: $1800",
        requirements: [
          "Local within 150 miles",
          "Arizona grown/made products",
          "Insurance required",
          "Food handlers permit for prepared foods"
        ]
      },
      certification: {
        type: "Arizona Certified Farmers Market",
        inspections: "Quarterly",
        lastInspection: "2024-12-10"
      },
      statistics: {
        averageWeeklyVisitors: 4000,
        annualSales: "$3.2M",
        percentLocalProduce: 85
      }
    }
  ],
  foodBanks: [
    {
      id: "FB-AZ001",
      name: "St. Mary's Food Bank Alliance",
      type: "World's First Food Bank",
      address: "2831 N 31st Ave, Phoenix, AZ 85009",
      coordinates: {
        lat: 33.478516,
        lng: -112.127795
      },
      contact: {
        phone: "(602) 242-3663",
        email: "info@stmarysfoodbank.org",
        website: "stmarysfoodbank.org",
        emergencyContact: "(602) 242-3663 ext. 1"
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
          friday: "7:00 AM - 5:00 PM",
          saturday: "8:00 AM - 12:00 PM"
        }
      },
      description: "The world's first food bank, serving Arizona since 1967",
      services: {
        primary: [
          "Emergency Food Boxes",
          "Kids Cafe",
          "Mobile Pantry",
          "Community Kitchen"
        ],
        additional: [
          "Nutrition Education",
          "Culinary Training Program",
          "SNAP Outreach",
          "School Pantry Program"
        ]
      },
      requirements: {
        documentation: [
          "Photo ID",
          "Proof of address",
          "Proof of household size"
        ],
        restrictions: "Service area residents only",
        frequency: "Once every 30 days"
      },
      capacity: {
        storageSpace: "150,000 sq ft",
        coldStorage: "40,000 sq ft",
        monthlyDistribution: "4M pounds",
        servingCapacity: "45,000 households/month"
      },
      partnerships: {
        retailers: ["Walmart", "Fry's Food", "Safeway", "Costco"],
        farms: ["Duncan Family Farms", "Rousseau Farming", "Arizona Fresh"],
        organizations: ["Feeding America", "Arizona Food Bank Network"]
      },
      impact: {
        annualPoundsDistributed: "48M",
        peopleServed: "700,000",
        countiesServed: 13,
        volunteerHours: "75,000"
      },
      needs: {
        criticalItems: [
          "Canned protein",
          "Peanut butter",
          "Rice",
          "Canned vegetables"
        ],
        volunteerRoles: [
          "Food sorting",
          "Box packing",
          "Kitchen assistance",
          "Delivery drivers"
        ]
      }
    }
  ],
  gleaningPrograms: [
    {
      name: "Borderlands Produce Rescue",
      description: "Rescuing produce from border regions and distributing to communities in need",
      contact: {
        name: "Program Director",
        phone: "(520) 287-2627",
        email: "info@borderlandsproducerescue.org"
      },
      website: "borderlandsproducerescue.org",
      areas: ["Nogales", "Tucson", "Phoenix", "Yuma"],
      schedule: "Year-round, peak season November-April",
      requirements: {
        volunteers: [
          "Must be 14 or older",
          "Sign waiver",
          "Attend orientation",
          "Able to lift 25 lbs"
        ],
        farmers: [
          "Must be within service area",
          "Provide advance notice",
          "Sign liability waiver",
          "Safe field access"
        ]
      },
      impact: {
        annualPounds: 30000000,
        servingAgencies: 200,
        volunteerHours: 12000
      }
    }
  ],
  distributionPartners: [
    {
      name: "Arizona Food Hub",
      type: "Regional Distributor",
      address: "2121 S 7th St, Phoenix, AZ 85034",
      coordinates: {
        lat: 33.425894,
        lng: -112.066436
      },
      contact: {
        name: "Operations Director",
        phone: "(602) 682-3900",
        email: "operations@azfoodhub.org"
      },
      website: "arizonafoodhub.org",
      services: [
        "Local Food Distribution",
        "Cold Chain Management",
        "Processing",
        "Cross-dock Services"
      ],
      coverage: "Statewide with focus on urban centers",
      requirements: {
        minimumOrder: "$250",
        leadTime: "48 hours",
        delivery: "Available for orders over $1000"
      },
      certifications: [
        "USDA Approved",
        "Arizona Grown Partner",
        "Food Safety Certified",
        "Organic Handler Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Arizona Farm to School Program",
      website: "azed.gov/hns/farmtoschool",
      coordinator: "State Farm to School Coordinator",
      phone: "(602) 542-8700",
      description: "Connecting schools with local farms to serve healthy meals and improve student nutrition"
    },
    marketVouchers: {
      name: "Arizona Farmers Market Nutrition Program",
      website: "azdhs.gov/prevention/azwic/farmers-market",
      programs: [
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program",
        "Double Up Food Bucks Arizona"
      ]
    }
  }
};

export default arizonaResources;
