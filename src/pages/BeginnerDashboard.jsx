import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import '../styles/BeginnerDashboard.css';

const farmingStyles = [
  {
    id: 1,
    name: 'Traditional Farming',
    description: 'Time-tested farming methods passed down through generations',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
    difficulty: 'Moderate',
    spaceNeeded: 'Large',
    keyPoints: [
      'Uses basic tools and natural methods',
      'Relies on seasonal patterns',
      'Minimal technology required',
      'Good for staple crops'
    ],
    guide: {
      introduction: 'Traditional farming connects you with time-tested agricultural practices.',
      stepsToStart: [
        'Prepare the soil',
        'Plan your crops',
        'Get basic tools',
        'Learn about seasons',
        'Start composting'
      ],
      proTips: [
        'Start small and expand gradually',
        'Learn from local farmers',
        'Keep a farming journal',
        'Practice crop rotation'
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
    keyPoints: [
      'Perfect for small spaces',
      'Great for herbs and vegetables',
      'Easy to maintain',
      'Portable gardens'
    ],
    guide: {
      introduction: 'Container gardening is ideal for urban dwellers with limited space.',
      stepsToStart: [
        'Choose your containers',
        'Select appropriate plants',
        'Prepare potting mix',
        'Set up drainage',
        'Plan watering schedule'
      ],
      proTips: [
        'Use self-watering containers',
        'Mix flowers with vegetables',
        'Consider vertical space',
        'Monitor soil moisture'
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
    keyPoints: [
      'Better soil control',
      'Improved drainage',
      'Less weeding needed',
      'Extended growing season'
    ],
    guide: {
      introduction: 'Raised bed farming offers excellent control over growing conditions.',
      stepsToStart: [
        'Build or buy raised beds',
        'Fill with quality soil',
        'Plan bed layout',
        'Install irrigation',
        'Choose suitable crops'
      ],
      proTips: [
        'Use companion planting',
        'Install drip irrigation',
        'Add trellises for climbers',
        'Mulch to retain moisture'
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
    keyPoints: [
      'No soil needed',
      'Year-round growing',
      'Water-efficient',
      'High yields'
    ],
    guide: {
      introduction: 'Hydroponic farming is a modern method that grows plants in nutrient-rich water without soil.',
      stepsToStart: [
        'Set up hydroponic system and pumps',
        'Prepare nutrient solution',
        'Start with easy crops like lettuce',
        'Monitor pH and nutrient levels',
        'Maintain clean growing environment'
      ],
      proTips: [
        'Keep water temperature stable',
        'Clean system regularly',
        'Monitor plant health daily',
        'Have backup power ready'
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
    keyPoints: [
      'Space-efficient',
      'Good for urban areas',
      'High productivity',
      'Modern technology'
    ],
    guide: {
      introduction: 'Vertical farming maximizes growing space by utilizing vertical space effectively.',
      stepsToStart: [
        'Choose vertical system type',
        'Install growing structures',
        'Set up lighting',
        'Plan irrigation system',
        'Select suitable crops'
      ],
      proTips: [
        'Balance light exposure',
        'Use automated systems',
        'Monitor air circulation',
        'Maintain consistent conditions'
      ]
    }
  },
  {
    id: 6,
    name: 'Aquaponic Farming',
    description: 'Combines fish farming with plant growing',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
    difficulty: 'Advanced',
    spaceNeeded: 'Medium',
    keyPoints: [
      'Sustainable ecosystem',
      'Produces fish and plants',
      'Water-efficient',
      'Natural fertilization'
    ],
    guide: {
      introduction: 'Aquaponics creates a sustainable ecosystem combining fish and plant production.',
      stepsToStart: [
        'Set up fish tanks',
        'Install growing beds',
        'Choose fish species',
        'Select compatible plants',
        'Balance the ecosystem'
      ],
      proTips: [
        'Start with hardy fish',
        'Monitor water quality',
        'Keep system balanced',
        'Plan for power outages'
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
    keyPoints: [
      'Uses natural window light',
      'Perfect for herbs and microgreens',
      'No special equipment needed',
      'Year-round growing possible'
    ],
    guide: {
      introduction: 'Window sill farming is ideal for urban dwellers who want to grow fresh herbs and small vegetables right in their home.',
      stepsToStart: [
        'Choose a sunny window',
        'Select appropriate containers',
        'Use quality potting soil',
        'Pick suitable plants',
        'Set up a watering schedule'
      ],
      proTips: [
        'Rotate plants regularly',
        'Use self-watering containers',
        'Consider light requirements',
        'Group plants with similar needs'
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
    keyPoints: [
      'Extended growing season',
      'Climate control',
      'Protection from pests',
      'Higher crop yields'
    ],
    guide: {
      introduction: 'Greenhouse farming allows you to create an optimal growing environment and extend your growing season significantly.',
      stepsToStart: [
        'Set up greenhouse structure',
        'Install ventilation system',
        'Plan irrigation method',
        'Choose climate controls',
        'Select suitable crops'
      ],
      proTips: [
        'Monitor temperature daily',
        'Ensure proper ventilation',
        'Use shade cloths in summer',
        'Plan crop rotation'
      ]
    }
  },
  {
    id: 9,
    name: 'Permaculture Farming',
    description: 'Sustainable farming that mimics natural ecosystems',
    image: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74',
    difficulty: 'Moderate',
    spaceNeeded: 'Medium to Large',
    keyPoints: [
      'Sustainable design',
      'Works with nature',
      'Low maintenance once established',
      'Promotes biodiversity'
    ],
    guide: {
      introduction: 'Permaculture creates sustainable agricultural ecosystems by following natural patterns and relationships.',
      stepsToStart: [
        'Observe your land',
        'Design your layout',
        'Build soil fertility',
        'Plant perennials',
        'Create water systems'
      ],
      proTips: [
        'Stack functions',
        'Use companion planting',
        'Create microclimates',
        'Maximize edge zones'
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
    keyPoints: [
      'Utilizes unused space',
      'Reduces urban heat',
      'Local food production',
      'Community building'
    ],
    guide: {
      introduction: 'Rooftop farming transforms unused urban spaces into productive gardens while improving building efficiency.',
      stepsToStart: [
        'Check structural capacity',
        'Plan waterproofing and drainage',
        'Choose lightweight growing medium',
        'Select appropriate plants',
        'Install safety features'
      ],
      proTips: [
        'Use wind protection',
        'Install drip irrigation',
        'Consider weight limits',
        'Plan for accessibility'
      ]
    }
  }
];

const BeginnerDashboard = () => {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [showGuide, setShowGuide] = useState(false);

  const handleStyleClick = (style) => {
    if (selectedStyle?.id === style.id) {
      setShowGuide(!showGuide);
    } else {
      setSelectedStyle(style);
      setShowGuide(true);
    }
  };

  return (
    <div className="beginner-dashboard">
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Beginner Farming
      </Typography>
      <Typography variant="h6" align="center" gutterBottom sx={{ mb: 4 }}>
        Choose a farming style to get started:
      </Typography>

      <Grid container spacing={3}>
        {farmingStyles.map((style) => (
          <Grid item xs={12} sm={6} md={4} key={style.id}>
            <Paper
              className={`farming-style-card ${selectedStyle?.id === style.id ? 'selected' : ''}`}
              onClick={() => handleStyleClick(style)}
              elevation={selectedStyle?.id === style.id ? 8 : 1}
              sx={{ cursor: 'pointer', height: '100%' }}
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
              <Box p={2}>
                <Typography variant="h5" gutterBottom>
                  {style.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {style.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Difficulty: {style.difficulty}
                  </Typography>
                  <Typography variant="body2">
                    Space Needed: {style.spaceNeeded}
                  </Typography>
                </Box>
              </Box>
            </Paper>

            {selectedStyle?.id === style.id && showGuide && (
              <Paper className="style-guide" sx={{ mt: 2, p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6">Guide Content</Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setShowGuide(false)}
                  >
                    Hide Guide
                  </Button>
                </Box>

                <Typography variant="h6" gutterBottom>
                  Key Points:
                </Typography>
                <List>
                  {style.keyPoints.map((point, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={point} />
                    </ListItem>
                  ))}
                </List>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="body1" paragraph>
                    {style.guide.introduction}
                  </Typography>

                  <Typography variant="h6" gutterBottom>
                    Steps to Get Started:
                  </Typography>
                  <List>
                    {style.guide.stepsToStart.map((step, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={`${index + 1}. ${step}`} />
                      </ListItem>
                    ))}
                  </List>

                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Pro Tips:
                  </Typography>
                  <List>
                    {style.guide.proTips.map((tip, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={tip} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Paper>
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BeginnerDashboard;
