import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  Paper,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  Store as MarketIcon,
  MonetizationOn as MoneyIcon,
  People as CustomersIcon,
  Inventory as ProductIcon,
  ExpandMore as ExpandMoreIcon,
  LocalShipping as DeliveryIcon,
  Assignment as PlanIcon,
  Campaign as MarketingIcon
} from '@mui/icons-material';

const marketingStrategies = {
  directToConsumer: {
    title: "Direct-to-Consumer Sales",
    channels: [
      {
        name: "Farmers Markets",
        tips: [
          "Create attractive displays",
          "Offer samples when possible",
          "Use clear pricing signs",
          "Collect customer emails",
          "Accept multiple payment methods"
        ],
        requirements: [
          "Market fees: $25-50 per day",
          "Tent and tables: $300-500",
          "Display materials: $200-300",
          "Refrigeration: $500-1000",
          "Transportation equipment"
        ]
      },
      {
        name: "CSA Programs",
        tips: [
          "Start with a small member base",
          "Offer flexible share sizes",
          "Provide weekly newsletters",
          "Include recipe suggestions",
          "Create pickup/delivery schedule"
        ],
        requirements: [
          "Website/ordering system",
          "Delivery vehicle",
          "Storage facilities",
          "Packaging materials",
          "Member management system"
        ]
      },
      {
        name: "Farm Stand",
        tips: [
          "Choose high-traffic location",
          "Keep regular hours",
          "Maintain fresh displays",
          "Offer seasonal specials",
          "Create loyalty program"
        ],
        requirements: [
          "Building/structure: $2000-5000",
          "Permits and licenses",
          "Point of sale system",
          "Storage equipment",
          "Signage"
        ]
      }
    ]
  },
  wholesale: {
    title: "Wholesale Markets",
    channels: [
      {
        name: "Restaurants",
        tips: [
          "Build relationships with chefs",
          "Provide consistent quality",
          "Offer specialty items",
          "Maintain reliable delivery",
          "Price competitively"
        ],
        requirements: [
          "Commercial kitchen certification",
          "Delivery vehicle",
          "Liability insurance",
          "Professional invoicing",
          "Quality control system"
        ]
      },
      {
        name: "Grocery Stores",
        tips: [
          "Meet packaging standards",
          "Maintain consistent supply",
          "Follow food safety protocols",
          "Build brand recognition",
          "Offer competitive pricing"
        ],
        requirements: [
          "Food safety certification",
          "Packaging equipment",
          "Barcode system",
          "Distribution network",
          "Marketing materials"
        ]
      }
    ]
  }
};

const valueAddedProducts = [
  {
    category: "Preserved Foods",
    products: [
      {
        name: "Jams and Jellies",
        ingredients: "Fruits, sugar, pectin",
        equipment: "Canning supplies, large pots, thermometer",
        certifications: "Food handling, kitchen certification",
        pricing: "$6-12 per jar",
        marketingTips: [
          "Unique flavor combinations",
          "Gift packaging options",
          "Seasonal varieties",
          "Wedding/event favors"
        ]
      },
      {
        name: "Dried Herbs",
        ingredients: "Fresh herbs",
        equipment: "Dehydrator, packaging materials",
        certifications: "Food handling",
        pricing: "$4-8 per package",
        marketingTips: [
          "Custom blends",
          "Recipe cards",
          "Bulk options",
          "Gift sets"
        ]
      }
    ]
  },
  {
    category: "Fresh-Cut Products",
    products: [
      {
        name: "Salad Mixes",
        ingredients: "Various lettuce, herbs, edible flowers",
        equipment: "Washing station, spinner, packaging",
        certifications: "Food safety, handling",
        pricing: "$5-10 per package",
        marketingTips: [
          "Seasonal blends",
          "Restaurant partnerships",
          "Subscription service",
          "Custom mixes"
        ]
      },
      {
        name: "Pre-Cut Vegetables",
        ingredients: "Fresh vegetables",
        equipment: "Processing equipment, packaging",
        certifications: "Food safety, handling",
        pricing: "$4-8 per package",
        marketingTips: [
          "Stir-fry kits",
          "Soup mixes",
          "Meal prep packages",
          "Bulk orders"
        ]
      }
    ]
  }
];

const onlinePresence = {
  website: {
    essentials: [
      "Product catalog",
      "Online ordering system",
      "Blog/recipe section",
      "Newsletter signup",
      "Contact information"
    ],
    costs: [
      "Domain: $10-15/year",
      "Hosting: $5-20/month",
      "E-commerce platform: $30-100/month",
      "Professional photos: $200-500",
      "Website design: $500-2000"
    ]
  },
  socialMedia: {
    platforms: [
      {
        name: "Instagram",
        focus: "Visual content, stories, reels",
        content: [
          "Behind-the-scenes",
          "Product highlights",
          "Farm life",
          "Customer features"
        ]
      },
      {
        name: "Facebook",
        focus: "Community building, events",
        content: [
          "Market schedules",
          "Product availability",
          "Farm events",
          "Customer reviews"
        ]
      }
    ]
  }
};

export default function MarketingGuide() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Marketing & Value-Added Products Guide
      </Typography>

      {/* Marketing Strategies Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          <MarketIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Marketing Strategies
        </Typography>
        {Object.entries(marketingStrategies).map(([key, strategy]) => (
          <Accordion key={key} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{strategy.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                {strategy.channels.map((channel) => (
                  <Grid item xs={12} md={6} key={channel.name}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {channel.name}
                        </Typography>
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="subtitle2" color="primary">Tips:</Typography>
                          <List dense>
                            {channel.tips.map((tip) => (
                              <ListItem key={tip}>
                                <ListItemIcon>
                                  <MarketingIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary={tip} />
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Box>
                          <Typography variant="subtitle2" color="error">Requirements:</Typography>
                          <List dense>
                            {channel.requirements.map((req) => (
                              <ListItem key={req}>
                                <ListItemIcon>
                                  <PlanIcon color="error" />
                                </ListItemIcon>
                                <ListItemText primary={req} />
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>

      {/* Value-Added Products Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          <ProductIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Value-Added Products
        </Typography>
        <Grid container spacing={3}>
          {valueAddedProducts.map((category) => (
            <Grid item xs={12} key={category.category}>
              <Typography variant="h6" gutterBottom>
                {category.category}
              </Typography>
              <Grid container spacing={3}>
                {category.products.map((product) => (
                  <Grid item xs={12} md={6} key={product.name}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {product.name}
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemText 
                              primary="Ingredients"
                              secondary={product.ingredients}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText 
                              primary="Equipment Needed"
                              secondary={product.equipment}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText 
                              primary="Required Certifications"
                              secondary={product.certifications}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText 
                              primary="Suggested Pricing"
                              secondary={product.pricing}
                            />
                          </ListItem>
                        </List>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="subtitle2" color="primary">
                          Marketing Tips:
                        </Typography>
                        <List dense>
                          {product.marketingTips.map((tip) => (
                            <ListItem key={tip}>
                              <ListItemIcon>
                                <MarketingIcon color="primary" />
                              </ListItemIcon>
                              <ListItemText primary={tip} />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Online Presence Section */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          <Campaign sx={{ mr: 1, verticalAlign: 'middle' }} />
          Online Presence
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Website Essentials
                </Typography>
                <List dense>
                  {onlinePresence.website.essentials.map((item) => (
                    <ListItem key={item}>
                      <ListItemIcon>
                        <PlanIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" color="error">
                  Expected Costs:
                </Typography>
                <List dense>
                  {onlinePresence.website.costs.map((cost) => (
                    <ListItem key={cost}>
                      <ListItemIcon>
                        <MoneyIcon color="error" />
                      </ListItemIcon>
                      <ListItemText primary={cost} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Social Media Strategy
                </Typography>
                {onlinePresence.socialMedia.platforms.map((platform) => (
                  <Box key={platform.name} sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {platform.name} - {platform.focus}
                    </Typography>
                    <List dense>
                      {platform.content.map((item) => (
                        <ListItem key={item}>
                          <ListItemIcon>
                            <MarketingIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                    <Divider sx={{ my: 1 }} />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
