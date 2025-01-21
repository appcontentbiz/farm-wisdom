import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Chip,
  Stack,
  Card,
  CardContent,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WarningIcon from '@mui/icons-material/Warning';
import '../styles/BeginnerDashboard.css';

const farmingStyles = [
  {
    id: 1,
    name: 'Traditional Farming',
    description: 'Time-tested farming methods passed down through generations',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
    difficulty: 'Moderate',
    spaceNeeded: 'Large',
    timeToHarvest: '3-6 months',
    startupCost: 'Moderate to High',
    bestSeasons: ['Spring', 'Summer'],
    keyPoints: [
      'Sustainable practices',
      'Natural pest control',
      'Crop rotation',
      'Soil enrichment'
    ],
    guide: {
      introduction: 'Traditional farming relies on time-tested methods that have been refined over generations. It emphasizes working in harmony with nature and local ecosystems. This approach focuses on sustainable practices that maintain soil health and biodiversity while producing nutritious crops.',
      requirements: {
        land: 'At least 1 acre of arable land',
        soil: 'Well-draining, fertile soil with good organic content',
        tools: 'Basic farming equipment (tractor optional)',
        climate: 'Suitable for most climates with adequate rainfall'
      },
      stepsToStart: [
        'Choose suitable land with good soil quality and proper drainage',
        'Test soil composition and pH, amend as needed',
        'Plan your crop rotation schedule based on seasons',
        'Prepare soil using natural amendments and composting',
        'Implement natural pest control methods like companion planting',
        'Practice water conservation through mulching and timing'
      ],
      commonChallenges: [
        'Weather dependence',
        'Pest and disease management',
        'Labor intensive',
        'Seasonal limitations'
      ],
      proTips: [
        'Start with easy-to-grow crops native to your region',
        'Learn from experienced local farmers and join farming communities',
        'Keep detailed records of planting and harvesting cycles',
        'Save seeds from successful crops for next season',
        'Invest in good quality tools that will last'
      ],
      monthlyMaintenance: [
        'Regular soil testing and amendment',
        'Crop monitoring and pest management',
        'Weed control and mulching',
        'Irrigation system maintenance'
      ]
    }
  },
  {
    id: 2,
    name: 'Container Gardening',
    description: 'Perfect for urban areas or limited space',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    difficulty: 'Easy',
    spaceNeeded: 'Small',
    timeToHarvest: '1-3 months',
    startupCost: 'Low',
    bestSeasons: ['Spring', 'Summer', 'Fall'],
    keyPoints: [
      'Perfect for small spaces',
      'Great for herbs and vegetables',
      'Easy to maintain',
      'Portable gardens'
    ],
    guide: {
      introduction: 'Container gardening is ideal for urban dwellers with limited space.',
      requirements: {
        containers: 'At least 5-gallon containers with good drainage',
        soil: 'Well-draining potting mix',
        tools: 'Basic gardening tools (trowel, pruners, etc.)',
        climate: 'Suitable for most climates with adequate sunlight'
      },
      stepsToStart: [
        'Choose your containers and location',
        'Select appropriate plants for container gardening',
        'Prepare potting mix and plant your selection',
        'Set up drainage and irrigation systems',
        'Plan for regular maintenance and fertilization'
      ],
      commonChallenges: [
        'Limited space',
        'Soil drying out',
        'Pests and diseases',
        'Temperature fluctuations'
      ],
      proTips: [
        'Use self-watering containers',
        'Mix flowers with vegetables',
        'Consider vertical space',
        'Monitor soil moisture'
      ],
      monthlyMaintenance: [
        'Watering and fertilization',
        'Pruning and training',
        'Pest and disease management',
        'Soil testing and amendment'
      ]
    }
  },
  {
    id: 3,
    name: 'Raised Bed Farming',
    description: 'Efficient method with better soil control',
    image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c',
    difficulty: 'Easy',
    spaceNeeded: 'Medium',
    timeToHarvest: '2-4 months',
    startupCost: 'Moderate',
    bestSeasons: ['Spring', 'Summer', 'Fall'],
    keyPoints: [
      'Better soil control',
      'Improved drainage',
      'Less weeding needed',
      'Extended growing season'
    ],
    guide: {
      introduction: 'Raised bed farming offers excellent control over growing conditions.',
      requirements: {
        beds: 'At least 4x8 feet raised beds with good drainage',
        soil: 'Well-draining, fertile soil with good organic content',
        tools: 'Basic gardening tools (trowel, pruners, etc.)',
        climate: 'Suitable for most climates with adequate sunlight'
      },
      stepsToStart: [
        'Build or buy raised beds',
        'Fill with quality soil and compost',
        'Plan bed layout and plant selection',
        'Install irrigation and drainage systems',
        'Plan for regular maintenance and fertilization'
      ],
      commonChallenges: [
        'Soil drying out',
        'Pests and diseases',
        'Temperature fluctuations',
        'Limited accessibility'
      ],
      proTips: [
        'Use companion planting',
        'Install drip irrigation',
        'Add trellises for climbers',
        'Mulch to retain moisture'
      ],
      monthlyMaintenance: [
        'Watering and fertilization',
        'Pruning and training',
        'Pest and disease management',
        'Soil testing and amendment'
      ]
    }
  },
  {
    id: 4,
    name: 'Hydroponic Farming',
    description: 'Soil-less growing using nutrient-rich water',
    image: 'https://images.unsplash.com/photo-1558665869-b1a38a6425cc',
    difficulty: 'Advanced',
    spaceNeeded: 'Small',
    timeToHarvest: '1-3 months',
    startupCost: 'High',
    bestSeasons: ['Year-round'],
    keyPoints: [
      'No soil needed',
      'Year-round growing',
      'Water-efficient',
      'High yields'
    ],
    guide: {
      introduction: 'Hydroponic farming is a modern method that grows plants in nutrient-rich water without soil.',
      requirements: {
        system: 'Hydroponic system with pumps and reservoir',
        nutrients: 'Balanced nutrient solution',
        tools: 'pH test kit, EC meter, etc.',
        climate: 'Climate-controlled environment'
      },
      stepsToStart: [
        'Set up hydroponic system and pumps',
        'Prepare nutrient solution',
        'Start with easy crops like lettuce',
        'Monitor pH and nutrient levels',
        'Maintain clean growing environment'
      ],
      commonChallenges: [
        'High initial cost',
        'Requires precise control',
        'Limited crop selection',
        'Energy consumption'
      ],
      proTips: [
        'Keep water temperature stable',
        'Clean system regularly',
        'Monitor plant health daily',
        'Have backup power ready'
      ],
      monthlyMaintenance: [
        'Water testing and adjustment',
        'pH and nutrient management',
        'System cleaning and maintenance',
        'Crop monitoring and pruning'
      ]
    }
  },
  {
    id: 5,
    name: 'Vertical Farming',
    description: 'Maximize space by growing upward',
    image: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2',
    difficulty: 'Moderate',
    spaceNeeded: 'Small',
    timeToHarvest: '2-4 months',
    startupCost: 'Moderate to High',
    bestSeasons: ['Year-round'],
    keyPoints: [
      'Space-efficient',
      'Good for urban areas',
      'High productivity',
      'Modern technology'
    ],
    guide: {
      introduction: 'Vertical farming maximizes growing space by utilizing vertical space effectively.',
      requirements: {
        system: 'Vertical farming system with LED grow lights',
        climate: 'Climate-controlled environment',
        tools: 'pH test kit, EC meter, etc.',
        space: 'Limited space with good air circulation'
      },
      stepsToStart: [
        'Choose vertical system type',
        'Install growing structures',
        'Set up lighting and climate control',
        'Plan irrigation system',
        'Select suitable crops'
      ],
      commonChallenges: [
        'High initial cost',
        'Requires precise control',
        'Limited crop selection',
        'Energy consumption'
      ],
      proTips: [
        'Balance light exposure',
        'Use automated systems',
        'Monitor air circulation',
        'Maintain consistent conditions'
      ],
      monthlyMaintenance: [
        'Water testing and adjustment',
        'pH and nutrient management',
        'System cleaning and maintenance',
        'Crop monitoring and pruning'
      ]
    }
  },
  {
    id: 6,
    name: 'Aquaponic Farming',
    description: 'Combines fish farming with plant growing',
    image: 'https://images.unsplash.com/photo-1519666336592-e225a99dcd2f',
    difficulty: 'Advanced',
    spaceNeeded: 'Medium',
    timeToHarvest: '3-6 months',
    startupCost: 'High',
    bestSeasons: ['Year-round'],
    keyPoints: [
      'Combines aquaculture and hydroponics',
      'Water-efficient system',
      'Year-round production',
      'High yield potential'
    ],
    guide: {
      introduction: 'Aquaponic farming creates a symbiotic environment where fish and plants help each other thrive.',
      requirements: {
        system: 'Aquaponic system with fish tanks and biofilter',
        fish: 'Compatible fish species',
        plants: 'Suitable plants for aquaponics',
        climate: 'Climate-controlled environment'
      },
      stepsToStart: [
        'Set up fish tanks and growing beds',
        'Install water circulation system',
        'Choose compatible fish species',
        'Select appropriate plants',
        'Balance the ecosystem'
      ],
      commonChallenges: [
        'High initial cost',
        'Requires precise control',
        'Limited crop selection',
        'Energy consumption'
      ],
      proTips: [
        'Start with hardy fish like tilapia',
        'Monitor water quality daily',
        'Maintain proper fish-to-plant ratios',
        'Keep backup power for water pumps'
      ],
      monthlyMaintenance: [
        'Water testing and adjustment',
        'pH and nutrient management',
        'System cleaning and maintenance',
        'Crop monitoring and pruning'
      ]
    }
  },
  {
    id: 7,
    name: 'Window Sill Farming',
    description: 'Perfect for apartments and small spaces with good natural light',
    image: 'https://images.unsplash.com/photo-1524236812388-15a7162c8ca1',
    difficulty: 'Easy',
    spaceNeeded: 'Minimal',
    timeToHarvest: '1-3 months',
    startupCost: 'Low',
    bestSeasons: ['Year-round'],
    keyPoints: [
      'Uses natural window light',
      'Perfect for herbs and microgreens',
      'No special equipment needed',
      'Year-round growing possible'
    ],
    guide: {
      introduction: 'Window sill farming is ideal for urban dwellers who want to grow fresh herbs and small vegetables right in their home.',
      requirements: {
        window: 'South-facing window with good natural light',
        containers: 'Small containers with good drainage',
        soil: 'Well-draining potting mix',
        tools: 'Basic gardening tools (trowel, pruners, etc.)'
      },
      stepsToStart: [
        'Choose a sunny window',
        'Select appropriate containers',
        'Use quality potting soil',
        'Pick suitable plants',
        'Set up a watering schedule'
      ],
      commonChallenges: [
        'Limited space',
        'Soil drying out',
        'Pests and diseases',
        'Temperature fluctuations'
      ],
      proTips: [
        'Rotate plants regularly',
        'Use self-watering containers',
        'Consider light requirements',
        'Group plants with similar needs'
      ],
      monthlyMaintenance: [
        'Watering and fertilization',
        'Pruning and training',
        'Pest and disease management',
        'Soil testing and amendment'
      ]
    }
  },
  {
    id: 8,
    name: 'Greenhouse Farming',
    description: 'Controlled environment for year-round growing',
    image: 'https://images.unsplash.com/photo-1584844115436-473eb2a816cf',
    difficulty: 'Moderate',
    spaceNeeded: 'Medium',
    timeToHarvest: '2-4 months',
    startupCost: 'Moderate to High',
    bestSeasons: ['Year-round'],
    keyPoints: [
      'Extended growing season',
      'Climate control',
      'Protection from pests',
      'Higher crop yields'
    ],
    guide: {
      introduction: 'Greenhouse farming allows you to create an optimal growing environment and extend your growing season significantly.',
      requirements: {
        greenhouse: 'Greenhouse structure with climate control',
        climate: 'Climate-controlled environment',
        tools: 'pH test kit, EC meter, etc.',
        space: 'Limited space with good air circulation'
      },
      stepsToStart: [
        'Set up greenhouse structure',
        'Install ventilation system',
        'Plan irrigation method',
        'Choose climate controls',
        'Select suitable crops'
      ],
      commonChallenges: [
        'High initial cost',
        'Requires precise control',
        'Limited crop selection',
        'Energy consumption'
      ],
      proTips: [
        'Monitor temperature daily',
        'Ensure proper ventilation',
        'Use shade cloths in summer',
        'Plan crop rotation'
      ],
      monthlyMaintenance: [
        'Water testing and adjustment',
        'pH and nutrient management',
        'System cleaning and maintenance',
        'Crop monitoring and pruning'
      ]
    }
  },
  {
    id: 9,
    name: 'Permaculture Farming',
    description: 'Sustainable farming that mimics natural ecosystems',
    image: 'https://images.unsplash.com/photo-1472653525502-f225a99dcd2f',
    difficulty: 'Moderate',
    spaceNeeded: 'Medium to Large',
    timeToHarvest: '3-6 months',
    startupCost: 'Moderate',
    bestSeasons: ['Year-round'],
    keyPoints: [
      'Sustainable design',
      'Works with nature',
      'Low maintenance once established',
      'Promotes biodiversity'
    ],
    guide: {
      introduction: 'Permaculture creates sustainable agricultural ecosystems by following natural patterns and relationships.',
      requirements: {
        land: 'At least 1 acre of arable land',
        soil: 'Well-draining, fertile soil with good organic content',
        tools: 'Basic farming equipment (tractor optional)',
        climate: 'Suitable for most climates with adequate rainfall'
      },
      stepsToStart: [
        'Observe your land',
        'Design your layout',
        'Build soil fertility',
        'Plant perennials',
        'Create water systems'
      ],
      commonChallenges: [
        'Requires patience',
        'Needs careful planning',
        'May require additional labor',
        'Can be affected by weather'
      ],
      proTips: [
        'Stack functions',
        'Use companion planting',
        'Create microclimates',
        'Maximize edge zones'
      ],
      monthlyMaintenance: [
        'Soil testing and amendment',
        'Crop monitoring and pruning',
        'Pest and disease management',
        'Water system maintenance'
      ]
    }
  },
  {
    id: 10,
    name: 'Urban Rooftop Farming',
    description: 'Transform unused roof space into productive gardens',
    image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e',
    difficulty: 'Moderate',
    spaceNeeded: 'Medium',
    timeToHarvest: '2-4 months',
    startupCost: 'Moderate to High',
    bestSeasons: ['Year-round'],
    keyPoints: [
      'Utilizes unused space',
      'Reduces urban heat',
      'Local food production',
      'Community building'
    ],
    guide: {
      introduction: 'Rooftop farming transforms unused urban spaces into productive gardens while improving building efficiency.',
      requirements: {
        roof: 'Structurally sound roof with good drainage',
        climate: 'Climate-controlled environment',
        tools: 'pH test kit, EC meter, etc.',
        space: 'Limited space with good air circulation'
      },
      stepsToStart: [
        'Check structural capacity',
        'Plan waterproofing and drainage',
        'Choose lightweight growing medium',
        'Select appropriate plants',
        'Install safety features'
      ],
      commonChallenges: [
        'High initial cost',
        'Requires precise control',
        'Limited crop selection',
        'Energy consumption'
      ],
      proTips: [
        'Use wind protection',
        'Install drip irrigation',
        'Consider weight limits',
        'Plan for accessibility'
      ],
      monthlyMaintenance: [
        'Water testing and adjustment',
        'pH and nutrient management',
        'System cleaning and maintenance',
        'Crop monitoring and pruning'
      ]
    }
  }
];

const BeginnerDashboard = () => {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [showGuide, setShowGuide] = useState(false);

  const handleStyleClick = (style) => {
    setSelectedStyle(style);
    setShowGuide(true);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'success';
      case 'moderate':
        return 'warning';
      case 'advanced':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <div className="beginner-dashboard">
      <Typography variant="h2" align="center" gutterBottom>
        Beginner Farming Styles
      </Typography>
      <Typography variant="h6" align="center" gutterBottom sx={{ mb: 4 }}>
        Choose a farming style to learn more:
      </Typography>

      <Grid container spacing={3}>
        {farmingStyles.map((style) => (
          <Grid item xs={12} sm={6} md={4} key={style.id}>
            <Paper
              className={`farming-style-card ${selectedStyle?.id === style.id ? 'selected' : ''}`}
              onClick={() => handleStyleClick(style)}
              elevation={selectedStyle?.id === style.id ? 8 : 1}
              sx={{
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}
            >
              <img 
                src={style.image} 
                alt={style.name} 
                className="style-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?w=800';
                }}
              />
              <Box p={3}>
                <Typography variant="h5" gutterBottom>
                  {style.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {style.description}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <Chip
                    label={style.difficulty}
                    size="small"
                    color={getDifficultyColor(style.difficulty)}
                  />
                  <Chip
                    label={style.spaceNeeded}
                    size="small"
                    variant="outlined"
                  />
                </Stack>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleStyleClick(style)}
                >
                  Learn More
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {selectedStyle && showGuide && (
        <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4">{selectedStyle.name} Guide</Typography>
            <Button
              variant="outlined"
              onClick={() => setShowGuide(false)}
              sx={{ minWidth: 120 }}
            >
              Hide Guide
            </Button>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card elevation={2} sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Quick Facts
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <AccessTimeIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Time to Harvest"
                        secondary={selectedStyle.timeToHarvest}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <AttachMoneyIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Startup Cost"
                        secondary={selectedStyle.startupCost}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CalendarMonthIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Best Seasons"
                        secondary={selectedStyle.bestSeasons.join(', ')}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>

              <Typography variant="h6" gutterBottom>
                Key Points
              </Typography>
              <List>
                {selectedStyle.keyPoints.map((point, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography variant="body1" paragraph>
                {selectedStyle.guide.introduction}
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Requirements
              </Typography>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                {Object.entries(selectedStyle.guide.requirements).map(([key, value]) => (
                  <Grid item xs={12} sm={6} key={key}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="subtitle2" color="primary" gutterBottom>
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Typography>
                        <Typography variant="body2">{value}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="h6" gutterBottom>
                Steps to Get Started
              </Typography>
              <List>
                {selectedStyle.guide.stepsToStart.map((step, index) => (
                  <ListItem key={index}>
                    <ListItemText 
                      primary={`${index + 1}. ${step}`}
                      sx={{ '& .MuiTypography-root': { color: 'text.primary' } }}
                    />
                  </ListItem>
                ))}
              </List>

              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Common Challenges
              </Typography>
              <List>
                {selectedStyle.guide.commonChallenges.map((challenge, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <WarningIcon color="warning" />
                    </ListItemIcon>
                    <ListItemText primary={challenge} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Pro Tips
              </Typography>
              <List>
                {selectedStyle.guide.proTips.map((tip, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <LightbulbIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={tip} />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom>
                Monthly Maintenance
              </Typography>
              <List>
                {selectedStyle.guide.monthlyMaintenance.map((task, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary={task} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default BeginnerDashboard;
