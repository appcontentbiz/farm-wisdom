import { useState } from 'react';
import { 
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Tabs,
  Tab,
} from '@mui/material';
import {
  Check as CheckIcon,
  ArrowForward as ArrowForwardIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { farmingImages } from '../assets/images/farming-styles';
import { PricingTiers } from '../components/Enterprise/PricingTiers';
import '../styles/BeginnerDashboard.css';

const farmingStyles = [
  {
    id: 1,
    name: 'Traditional Farming',
    description: 'Time-tested farming methods that connect you with ancient wisdom and sustainable practices',
    difficulty: 'Moderate',
    spaceNeeded: 'Large',
    learningCurve: {
      timeToBasics: '2-3 weeks',
      timeToMastery: '1-2 growing seasons',
      keyMilestones: [
        'Understanding soil composition',
        'Learning seasonal patterns',
        'Mastering crop rotation',
        'Natural pest management'
      ]
    },
    startupNeeds: {
      essential: [
        'Basic hand tools (shovel, hoe, rake)',
        'Quality seeds or seedlings',
        'Composting space',
        'Water source'
      ],
      optional: [
        'Small greenhouse',
        'Storage shed',
        'Irrigation system',
        'Fencing'
      ],
      estimatedCost: '$500-1500 to start'
    },
    keyPoints: [
      'Uses basic tools and natural methods',
      'Relies on seasonal patterns',
      'Minimal technology required',
      'Good for staple crops',
      'Promotes biodiversity',
      'Builds soil health naturally',
      'Supports local ecosystems',
      'Preserves heritage varieties'
    ],
    guide: {
      introduction: 'Traditional farming connects you with ancient agricultural wisdom while building a sustainable future. This approach emphasizes working in harmony with nature\'s cycles.',
      preparationPhase: {
        tasks: [
          'Soil testing and amendment',
          'Site planning and layout',
          'Tool acquisition and maintenance',
          'Seed selection and storage',
          'Water source planning'
        ],
        timeline: '1-2 months',
        tips: [
          'Start with a small plot',
          'Research local growing conditions',
          'Connect with experienced farmers',
          'Join community gardens'
        ]
      },
      seasonalGuidance: {
        spring: [
          'Soil preparation techniques',
          'Early crop planting methods',
          'Frost protection strategies',
          'Seedling care'
        ],
        summer: [
          'Irrigation management',
          'Pest control methods',
          'Succession planting',
          'Heat management'
        ],
        fall: [
          'Harvest techniques',
          'Seed saving methods',
          'Soil preparation for winter',
          'Storage preparation'
        ],
        winter: [
          'Tool maintenance',
          'Crop planning',
          'Soil amendment',
          'Knowledge building'
        ]
      },
      holisticLiving: {
        mindfulness: [
          'Practice mindful farming by connecting with your land',
          'Observe natural cycles and patterns',
          'Maintain a gratitude journal for your farming journey',
          'Create sacred spaces in your garden',
          'Develop daily land connection rituals'
        ],
        sustainability: [
          'Zero-waste farming practices',
          'Closed-loop systems implementation',
          'Natural resource conservation',
          'Biodiversity preservation',
          'Local ecosystem support'
        ],
        wellness: [
          'Growing medicinal herbs',
          'Creating healing gardens',
          'Incorporating aromatherapy plants',
          'Designing meditation spaces',
          'Planning therapeutic gardens'
        ],
        community: [
          'Sharing harvest with neighbors',
          'Organizing community composting',
          'Teaching farming skills',
          'Supporting local seed libraries',
          'Creating learning spaces'
        ],
        spirituality: [
          'Moon phase planting',
          'Sacred geometry in garden design',
          'Blessing your seeds and land',
          'Creating seasonal rituals',
          'Honoring agricultural traditions'
        ],
        cognitive: {
          mindTraining: [
            'Developing pattern recognition in nature',
            'Enhancing problem-solving through garden challenges',
            'Building memory through plant identification',
            'Improving focus through mindful gardening',
            'Strengthening decision-making with crop planning'
          ],
          emotionalGrowth: [
            'Building resilience through crop challenges',
            'Developing patience with natural cycles',
            'Managing stress through garden meditation',
            'Finding joy in growth and harvest',
            'Creating emotional connections with nature'
          ],
          brainHealth: [
            'Physical exercise through farming activities',
            'Mental stimulation through learning',
            'Stress reduction through nature connection',
            'Social interaction in community gardens',
            'Nutritional benefits from fresh produce'
          ],
          learningStyles: {
            visual: [
              'Garden planning diagrams',
              'Plant identification charts',
              'Growth stage visualization',
              'Weather pattern mapping'
            ],
            kinesthetic: [
              'Hands-on planting exercises',
              'Tool handling practice',
              'Soil testing activities',
              'Harvest technique training'
            ],
            auditory: [
              'Nature sound awareness',
              'Verbal plant care instructions',
              'Community knowledge sharing',
              'Audio learning resources'
            ]
          }
        }
      },
      troubleshooting: {
        commonIssues: [
          'Poor soil quality',
          'Pest infestations',
          'Weather challenges',
          'Water management'
        ],
        solutions: [
          'Soil testing and amendment',
          'Integrated pest management',
          'Weather protection methods',
          'Irrigation system setup'
        ],
        preventiveMeasures: [
          'Regular soil maintenance',
          'Companion planting',
          'Crop rotation',
          'Natural barriers'
        ]
      },
      successMetrics: {
        shortTerm: [
          'Seedling survival rate',
          'Soil improvement',
          'Basic tool proficiency',
          'Weather pattern recognition'
        ],
        longTerm: [
          'Sustainable yield',
          'Soil health',
          'Biodiversity increase',
          'Community impact'
        ]
      }
    }
  },
  {
    id: 2,
    name: 'Container Gardening',
    description: 'Perfect for urban areas or limited space',
    difficulty: 'Easy',
    spaceNeeded: 'Small',
    learningCurve: {
      timeToBasics: '1-2 weeks',
      timeToMastery: '1-3 months',
      keyMilestones: [
        'Understanding container selection',
        'Learning soil mix preparation',
        'Mastering watering techniques',
        'Pest management'
      ]
    },
    startupNeeds: {
      essential: [
        'Containers with drainage holes',
        'High-quality potting mix',
        'Seeds or seedlings',
        'Watering can'
      ],
      optional: [
        'Self-watering systems',
        'Fertilizers',
        'Pruning tools',
        'Support structures'
      ],
      estimatedCost: '$100-500 to start'
    },
    keyPoints: [
      'Ideal for small spaces',
      'Great for herbs and vegetables',
      'Easy to maintain',
      'Perfect for beginners',
      'Controlled environment',
      'Resource efficient'
    ],
    guide: {
      introduction: 'Container gardening is perfect for urban dwellers or those with limited space, offering a way to grow food sustainably in any setting.',
      preparationPhase: {
        tasks: [
          'Container selection and preparation',
          'Soil mix preparation',
          'Seed selection and sowing',
          'Watering system setup'
        ],
        timeline: '1-2 weeks',
        tips: [
          'Start with a small container',
          'Research local growing conditions',
          'Connect with experienced gardeners',
          'Join online communities'
        ]
      },
      seasonalGuidance: {
        spring: [
          'Soil warming techniques',
          'Early crop planting methods',
          'Frost protection strategies',
          'Seedling care'
        ],
        summer: [
          'Irrigation management',
          'Pest control methods',
          'Succession planting',
          'Heat management'
        ],
        fall: [
          'Harvest techniques',
          'Seed saving methods',
          'Soil preparation for winter',
          'Storage preparation'
        ],
        winter: [
          'Tool maintenance',
          'Crop planning',
          'Soil amendment',
          'Knowledge building'
        ]
      },
      holisticLiving: {
        mindfulness: [
          'Practice mindful gardening by connecting with your plants',
          'Observe natural cycles and patterns',
          'Maintain a gratitude journal for your gardening journey',
          'Create sacred spaces in your garden',
          'Develop daily plant connection rituals'
        ],
        sustainability: [
          'Zero-waste gardening practices',
          'Closed-loop systems implementation',
          'Natural resource conservation',
          'Biodiversity preservation',
          'Local ecosystem support'
        ],
        wellness: [
          'Growing medicinal herbs',
          'Creating healing gardens',
          'Incorporating aromatherapy plants',
          'Designing meditation spaces',
          'Planning therapeutic gardens'
        ],
        community: [
          'Sharing harvest with neighbors',
          'Organizing community composting',
          'Teaching gardening skills',
          'Supporting local seed libraries',
          'Creating learning spaces'
        ],
        spirituality: [
          'Moon phase planting',
          'Sacred geometry in garden design',
          'Blessing your seeds and plants',
          'Creating seasonal rituals',
          'Honoring agricultural traditions'
        ],
        cognitive: {
          mindTraining: [
            'Developing pattern recognition in nature',
            'Enhancing problem-solving through garden challenges',
            'Building memory through plant identification',
            'Improving focus through mindful gardening',
            'Strengthening decision-making with crop planning'
          ],
          emotionalGrowth: [
            'Building resilience through crop challenges',
            'Developing patience with natural cycles',
            'Managing stress through garden meditation',
            'Finding joy in growth and harvest',
            'Creating emotional connections with nature'
          ],
          brainHealth: [
            'Physical exercise through gardening activities',
            'Mental stimulation through learning',
            'Stress reduction through nature connection',
            'Social interaction in community gardens',
            'Nutritional benefits from fresh produce'
          ],
          learningStyles: {
            visual: [
              'Garden planning diagrams',
              'Plant identification charts',
              'Growth stage visualization',
              'Weather pattern mapping'
            ],
            kinesthetic: [
              'Hands-on planting exercises',
              'Tool handling practice',
              'Soil testing activities',
              'Harvest technique training'
            ],
            auditory: [
              'Nature sound awareness',
              'Verbal plant care instructions',
              'Community knowledge sharing',
              'Audio learning resources'
            ]
          }
        }
      },
      troubleshooting: {
        commonIssues: [
          'Poor soil quality',
          'Pest infestations',
          'Weather challenges',
          'Water management'
        ],
        solutions: [
          'Soil testing and amendment',
          'Integrated pest management',
          'Weather protection methods',
          'Irrigation system setup'
        ],
        preventiveMeasures: [
          'Regular soil maintenance',
          'Companion planting',
          'Crop rotation',
          'Natural barriers'
        ]
      },
      successMetrics: {
        shortTerm: [
          'Seedling survival rate',
          'Soil improvement',
          'Basic tool proficiency',
          'Weather pattern recognition'
        ],
        longTerm: [
          'Sustainable yield',
          'Soil health',
          'Biodiversity increase',
          'Community impact'
        ]
      }
    }
  },
  {
    id: 3,
    name: 'Raised Bed Farming',
    description: 'Efficient method with better soil control',
    difficulty: 'Easy',
    spaceNeeded: 'Medium',
    learningCurve: {
      timeToBasics: '2-3 weeks',
      timeToMastery: '1-2 growing seasons',
      keyMilestones: [
        'Understanding raised bed construction',
        'Learning soil mix preparation',
        'Mastering irrigation techniques',
        'Crop rotation'
      ]
    },
    startupNeeds: {
      essential: [
        'Raised bed frames',
        'High-quality soil mix',
        'Seeds or seedlings',
        'Irrigation system'
      ],
      optional: [
        'Fencing',
        'Support structures',
        'Mulching materials',
        'Composting equipment'
      ],
      estimatedCost: '$500-1500 to start'
    },
    keyPoints: [
      'Better soil management',
      'Good drainage',
      'Less weeding needed',
      'Extended growing season',
      'Ergonomic design',
      'Intensive planting possible'
    ],
    guide: {
      introduction: 'Raised bed farming offers excellent control over growing conditions and is easier on your back, perfect for intensive organic gardening.',
      preparationPhase: {
        tasks: [
          'Raised bed construction',
          'Soil mix preparation',
          'Seed selection and sowing',
          'Irrigation system setup'
        ],
        timeline: '2-3 weeks',
        tips: [
          'Start with a small raised bed',
          'Research local growing conditions',
          'Connect with experienced gardeners',
          'Join online communities'
        ]
      },
      seasonalGuidance: {
        spring: [
          'Soil warming techniques',
          'Early crop planting methods',
          'Frost protection strategies',
          'Seedling care'
        ],
        summer: [
          'Irrigation management',
          'Pest control methods',
          'Succession planting',
          'Heat management'
        ],
        fall: [
          'Harvest techniques',
          'Seed saving methods',
          'Soil preparation for winter',
          'Storage preparation'
        ],
        winter: [
          'Tool maintenance',
          'Crop planning',
          'Soil amendment',
          'Knowledge building'
        ]
      },
      holisticLiving: {
        mindfulness: [
          'Practice mindful gardening by connecting with your plants',
          'Observe natural cycles and patterns',
          'Maintain a gratitude journal for your gardening journey',
          'Create sacred spaces in your garden',
          'Develop daily plant connection rituals'
        ],
        sustainability: [
          'Zero-waste gardening practices',
          'Closed-loop systems implementation',
          'Natural resource conservation',
          'Biodiversity preservation',
          'Local ecosystem support'
        ],
        wellness: [
          'Growing medicinal herbs',
          'Creating healing gardens',
          'Incorporating aromatherapy plants',
          'Designing meditation spaces',
          'Planning therapeutic gardens'
        ],
        community: [
          'Sharing harvest with neighbors',
          'Organizing community composting',
          'Teaching gardening skills',
          'Supporting local seed libraries',
          'Creating learning spaces'
        ],
        spirituality: [
          'Moon phase planting',
          'Sacred geometry in garden design',
          'Blessing your seeds and plants',
          'Creating seasonal rituals',
          'Honoring agricultural traditions'
        ],
        cognitive: {
          mindTraining: [
            'Developing pattern recognition in nature',
            'Enhancing problem-solving through garden challenges',
            'Building memory through plant identification',
            'Improving focus through mindful gardening',
            'Strengthening decision-making with crop planning'
          ],
          emotionalGrowth: [
            'Building resilience through crop challenges',
            'Developing patience with natural cycles',
            'Managing stress through garden meditation',
            'Finding joy in growth and harvest',
            'Creating emotional connections with nature'
          ],
          brainHealth: [
            'Physical exercise through gardening activities',
            'Mental stimulation through learning',
            'Stress reduction through nature connection',
            'Social interaction in community gardens',
            'Nutritional benefits from fresh produce'
          ],
          learningStyles: {
            visual: [
              'Garden planning diagrams',
              'Plant identification charts',
              'Growth stage visualization',
              'Weather pattern mapping'
            ],
            kinesthetic: [
              'Hands-on planting exercises',
              'Tool handling practice',
              'Soil testing activities',
              'Harvest technique training'
            ],
            auditory: [
              'Nature sound awareness',
              'Verbal plant care instructions',
              'Community knowledge sharing',
              'Audio learning resources'
            ]
          }
        }
      },
      troubleshooting: {
        commonIssues: [
          'Poor soil quality',
          'Pest infestations',
          'Weather challenges',
          'Water management'
        ],
        solutions: [
          'Soil testing and amendment',
          'Integrated pest management',
          'Weather protection methods',
          'Irrigation system setup'
        ],
        preventiveMeasures: [
          'Regular soil maintenance',
          'Companion planting',
          'Crop rotation',
          'Natural barriers'
        ]
      },
      successMetrics: {
        shortTerm: [
          'Seedling survival rate',
          'Soil improvement',
          'Basic tool proficiency',
          'Weather pattern recognition'
        ],
        longTerm: [
          'Sustainable yield',
          'Soil health',
          'Biodiversity increase',
          'Community impact'
        ]
      }
    }
  },
  {
    id: 4,
    name: 'Hydroponic Farming',
    description: 'Soil-less growing using nutrient-rich water',
    difficulty: 'Advanced',
    spaceNeeded: 'Small',
    learningCurve: {
      timeToBasics: '2-3 months',
      timeToMastery: '6-12 months',
      keyMilestones: [
        'Understanding hydroponic systems',
        'Learning nutrient solution preparation',
        'Mastering pH management',
        'Crop selection'
      ]
    },
    startupNeeds: {
      essential: [
        'Hydroponic system',
        'Nutrient solution',
        'Seeds or seedlings',
        'pH testing equipment'
      ],
      optional: [
        'Climate control systems',
        'Automated irrigation',
        'CO2 supplementation',
        'Grow lights'
      ],
      estimatedCost: '$1000-3000 to start'
    },
    keyPoints: [
      'No soil needed',
      'Year-round growing',
      'Water efficient',
      'High-yield potential',
      'Climate controlled',
      'Precise nutrient management'
    ],
    guide: {
      introduction: 'Hydroponic farming represents modern agriculture at its most efficient, offering precise control over growing conditions and nutrients.',
      preparationPhase: {
        tasks: [
          'Hydroponic system setup',
          'Nutrient solution preparation',
          'Seed selection and sowing',
          'pH management'
        ],
        timeline: '2-3 months',
        tips: [
          'Start with a small system',
          'Research local growing conditions',
          'Connect with experienced hydroponic farmers',
          'Join online communities'
        ]
      },
      seasonalGuidance: {
        spring: [
          'System setup and calibration',
          'Early crop planting methods',
          'Frost protection strategies',
          'Seedling care'
        ],
        summer: [
          'Irrigation management',
          'Pest control methods',
          'Succession planting',
          'Heat management'
        ],
        fall: [
          'Harvest techniques',
          'Seed saving methods',
          'System maintenance',
          'Storage preparation'
        ],
        winter: [
          'System maintenance',
          'Crop planning',
          'Nutrient solution adjustment',
          'Knowledge building'
        ]
      },
      holisticLiving: {
        mindfulness: [
          'Practice mindful gardening by connecting with your plants',
          'Observe natural cycles and patterns',
          'Maintain a gratitude journal for your gardening journey',
          'Create sacred spaces in your garden',
          'Develop daily plant connection rituals'
        ],
        sustainability: [
          'Zero-waste gardening practices',
          'Closed-loop systems implementation',
          'Natural resource conservation',
          'Biodiversity preservation',
          'Local ecosystem support'
        ],
        wellness: [
          'Growing medicinal herbs',
          'Creating healing gardens',
          'Incorporating aromatherapy plants',
          'Designing meditation spaces',
          'Planning therapeutic gardens'
        ],
        community: [
          'Sharing harvest with neighbors',
          'Organizing community composting',
          'Teaching gardening skills',
          'Supporting local seed libraries',
          'Creating learning spaces'
        ],
        spirituality: [
          'Moon phase planting',
          'Sacred geometry in garden design',
          'Blessing your seeds and plants',
          'Creating seasonal rituals',
          'Honoring agricultural traditions'
        ],
        cognitive: {
          mindTraining: [
            'Developing pattern recognition in nature',
            'Enhancing problem-solving through garden challenges',
            'Building memory through plant identification',
            'Improving focus through mindful gardening',
            'Strengthening decision-making with crop planning'
          ],
          emotionalGrowth: [
            'Building resilience through crop challenges',
            'Developing patience with natural cycles',
            'Managing stress through garden meditation',
            'Finding joy in growth and harvest',
            'Creating emotional connections with nature'
          ],
          brainHealth: [
            'Physical exercise through gardening activities',
            'Mental stimulation through learning',
            'Stress reduction through nature connection',
            'Social interaction in community gardens',
            'Nutritional benefits from fresh produce'
          ],
          learningStyles: {
            visual: [
              'Garden planning diagrams',
              'Plant identification charts',
              'Growth stage visualization',
              'Weather pattern mapping'
            ],
            kinesthetic: [
              'Hands-on planting exercises',
              'Tool handling practice',
              'Soil testing activities',
              'Harvest technique training'
            ],
            auditory: [
              'Nature sound awareness',
              'Verbal plant care instructions',
              'Community knowledge sharing',
              'Audio learning resources'
            ]
          }
        }
      },
      troubleshooting: {
        commonIssues: [
          'Poor nutrient solution quality',
          'pH imbalance',
          'Water management',
          'System maintenance'
        ],
        solutions: [
          'Nutrient solution adjustment',
          'pH management',
          'Water quality testing',
          'System maintenance'
        ],
        preventiveMeasures: [
          'Regular system maintenance',
          'pH monitoring',
          'Water quality testing',
          'Crop selection'
        ]
      },
      successMetrics: {
        shortTerm: [
          'Seedling survival rate',
          'Nutrient solution quality',
          'Basic system proficiency',
          'pH management'
        ],
        longTerm: [
          'Sustainable yield',
          'System efficiency',
          'Biodiversity increase',
          'Community impact'
        ]
      }
    }
  },
  {
    id: 5,
    name: 'Vertical Farming',
    description: 'Maximizing space by growing upward',
    difficulty: 'Moderate',
    spaceNeeded: 'Minimal',
    learningCurve: {
      timeToBasics: '2-3 months',
      timeToMastery: '6-12 months',
      keyMilestones: [
        'Understanding vertical farming systems',
        'Learning crop selection',
        'Mastering irrigation techniques',
        'System maintenance'
      ]
    },
    startupNeeds: {
      essential: [
        'Vertical farming system',
        'Seeds or seedlings',
        'Irrigation system',
        'Climate control equipment'
      ],
      optional: [
        'Automated irrigation',
        'CO2 supplementation',
        'Grow lights',
        'Monitoring systems'
      ],
      estimatedCost: '$1000-3000 to start'
    },
    keyPoints: [
      'Space efficient',
      'Perfect for urban areas',
      'High productivity',
      'Modern technology integration',
      'Resource optimization',
      'Year-round production'
    ],
    guide: {
      introduction: 'Vertical farming revolutionizes urban agriculture by maximizing space efficiency while minimizing resource use.',
      preparationPhase: {
        tasks: [
          'System setup and calibration',
          'Crop selection',
          'Irrigation system setup',
          'Climate control setup'
        ],
        timeline: '2-3 months',
        tips: [
          'Start with a small system',
          'Research local growing conditions',
          'Connect with experienced vertical farmers',
          'Join online communities'
        ]
      },
      seasonalGuidance: {
        spring: [
          'System setup and calibration',
          'Early crop planting methods',
          'Frost protection strategies',
          'Seedling care'
        ],
        summer: [
          'Irrigation management',
          'Pest control methods',
          'Succession planting',
          'Heat management'
        ],
        fall: [
          'Harvest techniques',
          'Seed saving methods',
          'System maintenance',
          'Storage preparation'
        ],
        winter: [
          'System maintenance',
          'Crop planning',
          'Nutrient solution adjustment',
          'Knowledge building'
        ]
      },
      holisticLiving: {
        mindfulness: [
          'Practice mindful gardening by connecting with your plants',
          'Observe natural cycles and patterns',
          'Maintain a gratitude journal for your gardening journey',
          'Create sacred spaces in your garden',
          'Develop daily plant connection rituals'
        ],
        sustainability: [
          'Zero-waste gardening practices',
          'Closed-loop systems implementation',
          'Natural resource conservation',
          'Biodiversity preservation',
          'Local ecosystem support'
        ],
        wellness: [
          'Growing medicinal herbs',
          'Creating healing gardens',
          'Incorporating aromatherapy plants',
          'Designing meditation spaces',
          'Planning therapeutic gardens'
        ],
        community: [
          'Sharing harvest with neighbors',
          'Organizing community composting',
          'Teaching gardening skills',
          'Supporting local seed libraries',
          'Creating learning spaces'
        ],
        spirituality: [
          'Moon phase planting',
          'Sacred geometry in garden design',
          'Blessing your seeds and plants',
          'Creating seasonal rituals',
          'Honoring agricultural traditions'
        ],
        cognitive: {
          mindTraining: [
            'Developing pattern recognition in nature',
            'Enhancing problem-solving through garden challenges',
            'Building memory through plant identification',
            'Improving focus through mindful gardening',
            'Strengthening decision-making with crop planning'
          ],
          emotionalGrowth: [
            'Building resilience through crop challenges',
            'Developing patience with natural cycles',
            'Managing stress through garden meditation',
            'Finding joy in growth and harvest',
            'Creating emotional connections with nature'
          ],
          brainHealth: [
            'Physical exercise through gardening activities',
            'Mental stimulation through learning',
            'Stress reduction through nature connection',
            'Social interaction in community gardens',
            'Nutritional benefits from fresh produce'
          ],
          learningStyles: {
            visual: [
              'Garden planning diagrams',
              'Plant identification charts',
              'Growth stage visualization',
              'Weather pattern mapping'
            ],
            kinesthetic: [
              'Hands-on planting exercises',
              'Tool handling practice',
              'Soil testing activities',
              'Harvest technique training'
            ],
            auditory: [
              'Nature sound awareness',
              'Verbal plant care instructions',
              'Community knowledge sharing',
              'Audio learning resources'
            ]
          }
        }
      },
      troubleshooting: {
        commonIssues: [
          'Poor system maintenance',
          'Crop selection',
          'Irrigation management',
          'Climate control'
        ],
        solutions: [
          'Regular system maintenance',
          'Crop selection adjustment',
          'Irrigation system adjustment',
          'Climate control adjustment'
        ],
        preventiveMeasures: [
          'Regular system maintenance',
          'Crop selection',
          'Irrigation management',
          'Climate control'
        ]
      },
      successMetrics: {
        shortTerm: [
          'Seedling survival rate',
          'System efficiency',
          'Basic system proficiency',
          'Crop selection'
        ],
        longTerm: [
          'Sustainable yield',
          'System efficiency',
          'Biodiversity increase',
          'Community impact'
        ]
      }
    }
  }
];

const BeginnerDashboard = () => {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleStyleClick = (style) => {
    setSelectedStyle(style);
  };

  const handleCloseDialog = () => {
    setSelectedStyle(null);
  };

  const handleUpgradeClick = () => {
    setShowUpgradeDialog(true);
  };

  const handleCloseUpgradeDialog = () => {
    setShowUpgradeDialog(false);
  };

  const renderGuideContent = (guide) => {
    if (!guide) return null;

    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          {selectedStyle.name} Guide
        </Typography>
        
        <Typography variant="body1" paragraph>
          {guide.introduction}
        </Typography>

        <Typography variant="h6" gutterBottom>
          Preparation Phase
        </Typography>
        <List>
          {guide.preparationPhase.tasks.map((task, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={task} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" gutterBottom>
          Seasonal Guidance
        </Typography>
        <Grid container spacing={2}>
          {Object.entries(guide.seasonalGuidance).map(([season, tasks]) => (
            <Grid item xs={12} md={3} key={season}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="subtitle1" gutterBottom sx={{ textTransform: 'capitalize' }}>
                  {season}
                </Typography>
                <List dense>
                  {tasks.map((task, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={task} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Holistic Living Integration
          </Typography>
          <Grid container spacing={2}>
            {Object.entries(guide.holisticLiving).map(([aspect, content]) => (
              <Grid item xs={12} md={4} key={aspect}>
                <Paper sx={{ p: 2, height: '100%' }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ textTransform: 'capitalize' }}>
                    {aspect}
                  </Typography>
                  <List dense>
                    {Array.isArray(content) ? content.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    )) : (
                      Object.entries(content).map(([subAspect, items]) => (
                        <Box key={subAspect}>
                          <Typography variant="subtitle2" sx={{ mt: 1, mb: 1 }}>
                            {subAspect.replace(/([A-Z])/g, ' $1').trim()}
                          </Typography>
                          <List dense>
                            {items.map((item, index) => (
                              <ListItem key={index}>
                                <ListItemIcon>
                                  <CheckIcon color="primary" fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      ))
                    )}
                  </List>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Beginner's Guide to Farming Styles
      </Typography>
      
      <Grid container spacing={3}>
        {farmingStyles.map((style) => (
          <Grid item xs={12} sm={6} md={4} key={style.id}>
            <Card 
              onClick={() => handleStyleClick(style)}
              sx={{ 
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.2s ease-in-out'
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={farmingImages[style.id]}
                alt={style.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {style.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {style.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2">
                    Difficulty: {style.difficulty}
                  </Typography>
                  <Typography variant="body2">
                    Space Needed: {style.spaceNeeded}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog 
        open={Boolean(selectedStyle)} 
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
      >
        {selectedStyle && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {selectedStyle.name}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpgradeClick}
                  startIcon={<StarIcon />}
                >
                  Upgrade to Enterprise Plus
                </Button>
              </Box>
            </DialogTitle>
            <DialogContent dividers>
              {renderGuideContent(selectedStyle.guide)}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      <Dialog
        open={showUpgradeDialog}
        onClose={handleCloseUpgradeDialog}
        maxWidth="xl"
        fullWidth
      >
        <DialogTitle>
          Upgrade to Enterprise Plus
        </DialogTitle>
        <DialogContent>
          <PricingTiers />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUpgradeDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BeginnerDashboard;
