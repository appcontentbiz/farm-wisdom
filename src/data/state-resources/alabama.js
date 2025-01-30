const alabamaResources = {
  state: "Alabama",
  abbreviation: "AL",
  farmersMarkets: [
    {
      name: "Montgomery State Farmers Market",
      address: "1655 Federal Dr, Montgomery, AL 36107",
      coordinates: {
        lat: 32.387646,
        lng: -86.282898
      },
      phone: "(334) 244-0415",
      website: "montgomeryfarmersmarket.com",
      schedule: "Tuesday-Saturday: 7AM-5PM",
      description: "State-operated farmers market featuring local produce, crafts, and seasonal events",
      paymentOptions: ["Cash", "Credit Card", "SNAP/EBT", "FMNP Vouchers"],
      products: ["Fresh Produce", "Dairy", "Meat", "Crafts", "Baked Goods"],
      amenities: ["Parking", "Restrooms", "Wheelchair Accessible"]
    }
  ],
  foodBanks: [
    {
      name: "Montgomery Area Food Bank",
      address: "521 Trade Center St, Montgomery, AL 36108",
      coordinates: {
        lat: 32.377184,
        lng: -86.324851
      },
      phone: "(334) 263-3784",
      website: "montgomeryareafoodbank.org",
      hours: "Monday-Friday: 8AM-4:30PM",
      description: "Serving 35 counties in Alabama with emergency food assistance",
      requirements: [
        "Photo ID",
        "Proof of residence",
        "Proof of income (if applicable)"
      ],
      services: [
        "Emergency Food Assistance",
        "Senior Food Program",
        "Mobile Pantry",
        "Disaster Relief"
      ],
      coverage: "Central Alabama - 35 counties"
    }
  ],
  gleaningPrograms: [
    {
      name: "Society of St. Andrew - Alabama",
      description: "Faith-based organization coordinating gleaning efforts across Alabama",
      contact: {
        name: "Alabama Program Coordinator",
        phone: "(205) 245-3214",
        email: "alabama@endhunger.org"
      },
      website: "endhunger.org/alabama",
      areas: ["North Alabama", "Central Alabama", "South Alabama"],
      schedule: "Year-round, seasonal variations",
      requirements: {
        volunteers: [
          "Must be 13 or older",
          "Sign waiver",
          "Attend brief orientation"
        ],
        farmers: [
          "Provide safe access to fields",
          "Specify gleaning window",
          "Sign liability waiver"
        ]
      },
      impact: {
        annualPounds: 500000,
        servingAgencies: 45,
        volunteerHours: 2500
      }
    }
  ],
  distributionPartners: [
    {
      name: "Alabama Food Hub",
      type: "Regional Distributor",
      address: "4791 Commerce Dr, Montgomery, AL 36116",
      coordinates: {
        lat: 32.328546,
        lng: -86.235687
      },
      contact: {
        name: "Operations Manager",
        phone: "(334) 284-3433",
        email: "operations@alfoodhub.org"
      },
      website: "alabamafoodhub.org",
      services: [
        "Local Food Distribution",
        "Cold Storage",
        "Processing",
        "Transportation"
      ],
      coverage: "Central and South Alabama",
      requirements: {
        minimumOrder: "$500",
        leadTime: "48 hours",
        delivery: "Available for orders over $1000"
      },
      certifications: [
        "USDA Approved",
        "GAP Certified",
        "Organic Handler Certified"
      ]
    }
  ],
  statePrograms: {
    farmToSchool: {
      name: "Alabama Farm to School Program",
      website: "alabamafarmtoschool.org",
      coordinator: "State Farm to School Coordinator",
      phone: "(334) 240-7247",
      description: "Connects schools with local farms to serve healthy meals in school cafeterias"
    },
    marketVouchers: {
      name: "Alabama Farmers Market Authority",
      website: "fma.alabama.gov",
      programs: [
        "Senior Farmers Market Nutrition Program",
        "WIC Farmers Market Nutrition Program"
      ]
    }
  }
};

export default alabamaResources;
