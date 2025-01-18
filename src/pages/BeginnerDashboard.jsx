import { useState } from 'react';
import { farmingImages } from '../assets/images/farming-styles';
import '../styles/BeginnerDashboard.css';

const farmingStyles = [
  {
    id: 1,
    name: 'Traditional Farming',
    description: 'Time-tested farming methods passed down through generations',
    difficulty: 'Moderate',
    spaceNeeded: 'Large',
    keyPoints: [
      'Uses basic tools and natural methods',
      'Relies on seasonal patterns',
      'Minimal technology required',
      'Good for staple crops'
    ],
    image: farmingImages.traditional,
    guide: {
      introduction: 'Traditional farming is a time-tested method that has sustained communities for generations.',
      steps: [
        'Choose your land - Look for well-draining soil with good sun exposure',
        'Prepare the soil - Remove weeds and add organic matter',
        'Plan crop rotation - Divide land into sections for different crops',
        'Start with easy crops - Begin with hardy vegetables like potatoes or beans',
        'Maintain regular watering schedule'
      ],
      tips: [
        'Start small and expand gradually',
        'Learn from local farmers',
        'Keep a farming journal'
      ]
    }
  },
  {
    id: 2,
    name: 'Container Gardening',
    description: 'Perfect for urban areas or limited space',
    difficulty: 'Easy',
    spaceNeeded: 'Small',
    keyPoints: [
      'Ideal for small spaces',
      'Great for herbs and vegetables',
      'Easy to maintain',
      'Perfect for beginners'
    ],
    image: farmingImages.container,
    guide: {
      introduction: 'Container gardening is perfect for urban dwellers or those with limited space.',
      steps: [
        'Select appropriate containers with drainage holes',
        'Use high-quality potting mix',
        'Choose suitable plants for container growing',
        'Position containers for optimal sunlight',
        'Establish watering and feeding routine'
      ],
      tips: [
        'Start with herbs - they\'re forgiving and useful',
        'Don\'t overcrowd containers',
        'Monitor soil moisture regularly'
      ]
    }
  },
  {
    id: 3,
    name: 'Raised Bed Farming',
    description: 'Efficient method with better soil control',
    difficulty: 'Easy',
    spaceNeeded: 'Medium',
    keyPoints: [
      'Better soil management',
      'Good drainage',
      'Less weeding needed',
      'Extended growing season'
    ],
    image: farmingImages.raisedBed,
    guide: {
      introduction: 'Raised bed farming offers excellent control over growing conditions and is easier on your back.',
      steps: [
        'Choose location and build raised beds',
        'Fill with quality soil mix',
        'Plan plant spacing carefully',
        'Install irrigation system if needed',
        'Implement crop rotation plan'
      ],
      tips: [
        'Make beds no wider than 4 feet for easy reach',
        'Use companion planting techniques',
        'Add mulch to retain moisture'
      ]
    }
  },
  {
    id: 4,
    name: 'Hydroponic Farming',
    description: 'Soil-less growing using nutrient-rich water',
    difficulty: 'Advanced',
    spaceNeeded: 'Small',
    keyPoints: [
      'No soil needed',
      'Year-round growing',
      'Water-efficient',
      'High yields'
    ],
    image: farmingImages.hydroponic,
    guide: {
      introduction: 'Hydroponic farming is a modern method that grows plants in nutrient-rich water without soil.',
      steps: [
        'Set up hydroponic system and pumps',
        'Prepare nutrient solution',
        'Start with easy crops like lettuce',
        'Monitor pH and nutrient levels',
        'Maintain clean growing environment'
      ],
      tips: [
        'Start with a simple system',
        'Keep detailed records of nutrient levels',
        'Have backup power for pumps'
      ]
    }
  },
  {
    id: 5,
    name: 'Vertical Farming',
    description: 'Maximize space by growing upward',
    difficulty: 'Moderate',
    spaceNeeded: 'Small',
    keyPoints: [
      'Space-efficient',
      'Good for urban areas',
      'Diverse crop options',
      'Modern approach'
    ],
    image: farmingImages.vertical,
    guide: {
      introduction: 'Vertical farming makes the most of limited space by growing plants in stacked layers.',
      steps: [
        'Install vertical growing structures',
        'Set up proper lighting systems',
        'Choose appropriate plants',
        'Establish irrigation system',
        'Monitor plant growth and adjust spacing'
      ],
      tips: [
        'Ensure strong support structures',
        'Consider weight when fully grown',
        'Plan for adequate lighting'
      ]
    }
  },
  {
    id: 6,
    name: 'Aquaponic Farming',
    description: 'Combines fish farming with plant growing',
    difficulty: 'Advanced',
    spaceNeeded: 'Medium',
    keyPoints: [
      'Self-sustaining system',
      'Produces fish and plants',
      'Water-efficient',
      'Organic method'
    ],
    image: farmingImages.aquaponic,
    guide: {
      introduction: 'Aquaponics creates a mini-ecosystem where fish and plants benefit each other.',
      steps: [
        'Set up fish tanks and growing beds',
        'Establish bacterial colonies',
        'Introduce fish gradually',
        'Start with hardy plants',
        'Monitor water quality daily'
      ],
      tips: [
        'Start with hardy fish like tilapia',
        'Keep water temperature stable',
        'Balance fish and plant populations'
      ]
    }
  },
  {
    id: 7,
    name: 'Greenhouse Farming',
    description: 'Controlled environment for year-round growing',
    difficulty: 'Moderate',
    spaceNeeded: 'Medium',
    keyPoints: [
      'Extended growing season',
      'Climate control',
      'Protection from pests',
      'Higher yields'
    ],
    image: farmingImages.greenhouse,
    guide: {
      introduction: 'Greenhouse farming provides a controlled environment for optimal plant growth.',
      steps: [
        'Choose and set up greenhouse structure',
        'Install ventilation and heating',
        'Prepare growing areas',
        'Plan crop layout',
        'Establish climate monitoring system'
      ],
      tips: [
        'Ensure proper ventilation',
        'Monitor temperature and humidity',
        'Plan for seasonal adjustments'
      ]
    }
  },
  {
    id: 8,
    name: 'Organic Farming',
    description: 'Natural farming without synthetic inputs',
    difficulty: 'Moderate',
    spaceNeeded: 'Large',
    keyPoints: [
      'No synthetic pesticides',
      'Environmentally friendly',
      'Better soil health',
      'Premium produce prices'
    ],
    image: farmingImages.organic,
    guide: {
      introduction: 'Organic farming focuses on natural methods and environmental sustainability.',
      steps: [
        'Build healthy soil with compost',
        'Implement natural pest control',
        'Choose resistant varieties',
        'Plan crop rotation',
        'Establish composting system'
      ],
      tips: [
        'Focus on soil health',
        'Learn about beneficial insects',
        'Keep detailed records for certification'
      ]
    }
  }
];

export default function BeginnerDashboard() {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [showGuide, setShowGuide] = useState(false);

  const handleStyleClick = (style) => {
    setSelectedStyle(style);
    setShowGuide(false);
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
            onClick={() => handleStyleClick(style)}
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
          <h2>{selectedStyle.name}</h2>
          <p>{selectedStyle.description}</p>
          
          <div className="details-content">
            <div className="left-panel">
              <h3>Key Points:</h3>
              <ul>
                {selectedStyle.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            
            <div className="right-panel">
              <button 
                className="guide-button"
                onClick={() => setShowGuide(!showGuide)}
              >
                {showGuide ? 'Hide Guide' : 'Show Step-by-Step Guide'}
              </button>
              
              {showGuide && (
                <div className="guide-content">
                  <p className="guide-intro">{selectedStyle.guide.introduction}</p>
                  
                  <h4>Steps to Get Started:</h4>
                  <ol>
                    {selectedStyle.guide.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                  
                  <h4>Pro Tips:</h4>
                  <ul>
                    {selectedStyle.guide.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <button 
            className="close-button"
            onClick={() => setSelectedStyle(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
