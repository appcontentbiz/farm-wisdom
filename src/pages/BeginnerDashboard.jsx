import { useState } from 'react';
import { farmingImages } from '../assets/images/farming-styles';
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

export default function BeginnerDashboard() {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [progressData, setProgressData] = useState({});
  const [learningMode, setLearningMode] = useState('guided');
  const [completedTasks, setCompletedTasks] = useState([]);
  const [userNotes, setUserNotes] = useState({});
  const [activeQuiz, setActiveQuiz] = useState(null);

  const handleTaskCompletion = (taskId) => {
    setCompletedTasks([...completedTasks, taskId]);
    setProgressData({
      ...progressData,
      [selectedStyle.id]: {
        ...progressData[selectedStyle.id],
        completedTasks: [...(progressData[selectedStyle.id]?.completedTasks || []), taskId]
      }
    });
  };

  const handleNoteAdd = (sectionId, note) => {
    setUserNotes({
      ...userNotes,
      [sectionId]: [...(userNotes[sectionId] || []), note]
    });
  };

  const startQuiz = (styleId) => {
    setActiveQuiz(styleId);
  };

  return (
    <div className="beginner-dashboard">
      <header>
        <h1>Welcome to Beginner Farming</h1>
        <p>Choose a farming style to get started:</p>
      </header>

      <div className="farming-styles">
        {farmingStyles.map(style => (
          <div 
            key={style.id} 
            className="style-card"
            onClick={() => setSelectedStyle(style)}
          >
            <img src={style.image} alt={style.name} className="style-image" />
            <h2>{style.name}</h2>
            <p className="description">{style.description}</p>
            <div className="tags">
              <span className="tag">Difficulty: {style.difficulty}</span>
              <span className="tag">Space: {style.spaceNeeded}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedStyle && (
        <div className="style-details">
          <Typography variant="h4" gutterBottom>
            {selectedStyle.name}
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" color="primary">
              Learning Journey
            </Typography>
            <Typography variant="body1" gutterBottom>
              Time to Basics: {selectedStyle.learningCurve.timeToBasics}
              <br />
              Time to Mastery: {selectedStyle.learningCurve.timeToMastery}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Key Milestones:
            </Typography>
            <List>
              {selectedStyle.learningCurve.keyMilestones.map((milestone, index) => (
                <ListItem key={index}>
                  <ListItemText primary={milestone} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" color="primary">
              Getting Started
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Essential Items:
            </Typography>
            <List>
              {selectedStyle.startupNeeds.essential.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
            <Typography variant="body2" color="text.secondary">
              Estimated Startup Cost: {selectedStyle.startupNeeds.estimatedCost}
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" color="primary">
              Seasonal Guide
            </Typography>
            {Object.entries(selectedStyle.guide.seasonalGuidance).map(([season, tasks]) => (
              <div key={season}>
                <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
                  {season}:
                </Typography>
                <List>
                  {tasks.map((task, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={task} />
                    </ListItem>
                  ))}
                </List>
              </div>
            ))}
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" color="primary">
              Learning Mode
            </Typography>
            <ToggleButtonGroup
              value={learningMode}
              exclusive
              onChange={(e, value) => setLearningMode(value)}
            >
              <ToggleButton value="guided">Guided Journey</ToggleButton>
              <ToggleButton value="self-paced">Self-Paced</ToggleButton>
              <ToggleButton value="expert">Expert Mode</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" color="primary">
              Your Progress
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={(completedTasks.length / selectedStyle.guide.preparationPhase.tasks.length) * 100} 
            />
            <Typography variant="body2" color="text.secondary">
              {completedTasks.length} of {selectedStyle.guide.preparationPhase.tasks.length} tasks completed
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" color="primary">
              Learning Tasks
            </Typography>
            <List>
              {selectedStyle.guide.preparationPhase.tasks.map((task, index) => (
                <ListItem key={index}>
                  <Checkbox
                    checked={completedTasks.includes(index)}
                    onChange={() => handleTaskCompletion(index)}
                  />
                  <ListItemText 
                    primary={task}
                    secondary={completedTasks.includes(index) ? "Completed!" : "In progress"}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" color="primary">
              Your Learning Notes
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Add your notes here..."
              onBlur={(e) => handleNoteAdd(selectedStyle.id, e.target.value)}
            />
            {userNotes[selectedStyle.id]?.map((note, index) => (
              <Paper key={index} sx={{ p: 2, mt: 1 }}>
                <Typography variant="body1">{note}</Typography>
              </Paper>
            ))}
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" color="primary">
              Knowledge Check
            </Typography>
            <Button
              variant="contained"
              onClick={() => startQuiz(selectedStyle.id)}
              disabled={activeQuiz !== null}
            >
              Start Quiz
            </Button>
            {activeQuiz === selectedStyle.id && (
              <div className="quiz-section">
                <List>
                  {selectedStyle.guide.preparationPhase.tasks.map((task, index) => (
                    <ListItem key={index}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          What is the key outcome of: {task}?
                        </FormLabel>
                        <RadioGroup>
                          <FormControlLabel
                            value="correct"
                            control={<Radio />}
                            label="Correct answer"
                          />
                          <FormControlLabel
                            value="incorrect1"
                            control={<Radio />}
                            label="Incorrect answer 1"
                          />
                          <FormControlLabel
                            value="incorrect2"
                            control={<Radio />}
                            label="Incorrect answer 2"
                          />
                        </RadioGroup>
                      </FormControl>
                    </ListItem>
                  ))}
                </List>
              </div>
            )}
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" color="primary">
              Learning Timeline
            </Typography>
            <Timeline>
              {selectedStyle.guide.preparationPhase.tasks.map((task, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color={completedTasks.includes(index) ? "success" : "grey"} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography>{task}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {completedTasks.includes(index) ? "Completed" : "Pending"}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" color="primary">
              Your Achievements
            </Typography>
            <Grid container spacing={2}>
              {completedTasks.map((taskId, index) => (
                <Grid item key={index}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <EmojiEventsIcon color="primary" />
                    <Typography>
                      {selectedStyle.guide.preparationPhase.tasks[taskId]} Mastered!
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
}
