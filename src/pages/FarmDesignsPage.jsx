import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Chip
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Park as ParkIcon,
  Grass as GrassIcon,
  Yard as YardIcon
} from '@mui/icons-material';
import DesignLayout from '../components/FarmDesigns/DesignLayout';

const foodForestLayouts = [
  {
    title: "Seven-Layer Food Forest Design",
    description: "A complete food forest incorporating all seven layers of the forest garden system, designed for a 1-acre plot.",
    imagePath: "/images/farm-designs/food-forest-layers.svg",
    downloadPath: "/files/food-forest-cad.dwg",
    dimensions: "100ft x 100ft (recommended minimum size)",
    keyFeatures: [
      "Canopy layer with mature height 30-80ft",
      "Understory layer 10-30ft",
      "Shrub layer 5-15ft",
      "Herbaceous layer 0-5ft",
      "Ground cover layer",
      "Root layer",
      "Vertical/vine layer"
    ],
    tips: [
      "Plant larger trees on the north side to prevent shading",
      "Include nitrogen-fixing plants in each layer",
      "Create paths for easy access and maintenance",
      "Plan for succession planting as the forest matures"
    ]
  },
  {
    title: "Urban Food Forest Design",
    description: "Compact food forest design optimized for urban lots and small spaces.",
    imagePath: "/images/farm-designs/urban-food-forest.svg",
    downloadPath: "/files/urban-food-forest-cad.dwg",
    dimensions: "30ft x 50ft",
    keyFeatures: [
      "Dwarf fruit trees as canopy",
      "Compact berry bushes",
      "Vertical growing systems",
      "Integrated seating area"
    ],
    tips: [
      "Focus on dwarf and semi-dwarf varieties",
      "Utilize vertical space efficiently",
      "Include multi-purpose plants",
      "Create social spaces within the design"
    ]
  }
];

const traditionalLayouts = [
  {
    title: "Market Garden Layout",
    description: "A commercial-scale market garden design optimized for efficient production. Features 30-inch beds organized into crop rotation zones with adequate space for equipment access.",
    imagePath: "/images/farm-designs/market-garden.svg",
    dimensions: "200' x 100'",
    keyFeatures: [
      "Four distinct crop rotation zones",
      "30-inch growing beds with 18-inch paths",
      "Equipment turn-around areas at both ends",
      "Integrated irrigation system",
      "Organized for efficient harvesting and maintenance"
    ],
    tips: [
      "Start with the zone closest to your processing area",
      "Ensure proper drainage before establishing beds",
      "Consider prevailing winds when planning irrigation",
      "Leave room for future expansion"
    ]
  },
  {
    title: "Mandala Garden Design",
    description: "A beautiful and functional garden design that combines aesthetics with practicality. The circular layout maximizes space efficiency while creating an engaging garden experience.",
    imagePath: "/images/farm-designs/mandala-garden.svg",
    dimensions: "40' diameter",
    keyFeatures: [
      "Central herb spiral",
      "Six themed growing sections",
      "Integrated composting areas",
      "Water features for beneficial insects",
      "Keyhole paths for easy access"
    ],
    tips: [
      "Plant taller crops towards the center",
      "Use companion planting principles",
      "Maintain paths for easy access",
      "Consider solar orientation for plant placement"
    ]
  }
];

const edibleLandscaping = [
  {
    title: "Edible Front Yard",
    description: "Transform your front yard into a beautiful and productive space that combines ornamental appeal with food production. This design maintains curb appeal while maximizing growing space.",
    imagePath: "/images/farm-designs/edible-frontyard.svg",
    dimensions: "50' x 30'",
    keyFeatures: [
      "Dwarf fruit trees for vertical interest",
      "Herb spiral as focal point",
      "Edible border gardens",
      "Berry bushes for privacy",
      "Maintained lawn area for recreation"
    ],
    tips: [
      "Choose attractive edible plants for borders",
      "Maintain clean edges for a tidy appearance",
      "Use mulch to reduce maintenance",
      "Consider neighborhood guidelines"
    ]
  },
  {
    title: "Edible Backyard Oasis",
    description: "Create a multi-functional backyard that combines food production with family recreation. This design creates distinct zones for different activities while maintaining a cohesive look.",
    imagePath: "/images/farm-designs/edible-backyard.svg",
    dimensions: "60' x 40'",
    keyFeatures: [
      "Raised vegetable beds",
      "Fruit tree guild",
      "Children's garden area",
      "Outdoor kitchen space",
      "Play area"
    ],
    tips: [
      "Start with the hardscaping elements",
      "Create clear pathways between zones",
      "Include child-friendly plants in the kids' area",
      "Plan for four-season interest"
    ]
  }
];

function FarmDesignsPage() {
  const [mainTab, setMainTab] = useState(0);

  const handleMainTabChange = (event, newValue) => {
    setMainTab(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Farm Design Layouts
      </Typography>

      <Paper elevation={3}>
        <Tabs
          value={mainTab}
          onChange={handleMainTabChange}
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab 
            icon={<ParkIcon />} 
            label="Food Forest" 
            iconPosition="start"
          />
          <Tab 
            icon={<GrassIcon />} 
            label="Traditional Layouts" 
            iconPosition="start"
          />
          <Tab 
            icon={<YardIcon />} 
            label="Edible Landscaping" 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 3 }}>
          <TabPanel value={mainTab} index={0}>
            <Typography variant="h4" gutterBottom>
              Food Forest Designs
            </Typography>
            {foodForestLayouts.map((layout, index) => (
              <DesignLayout key={index} {...layout} />
            ))}
          </TabPanel>

          <TabPanel value={mainTab} index={1}>
            <Typography variant="h4" gutterBottom>
              Traditional Farm Layouts
            </Typography>
            {traditionalLayouts.map((layout, index) => (
              <DesignLayout key={index} {...layout} />
            ))}
          </TabPanel>

          <TabPanel value={mainTab} index={2}>
            <Typography variant="h4" gutterBottom>
              Edible Landscaping Designs
            </Typography>
            {edibleLandscaping.map((layout, index) => (
              <DesignLayout key={index} {...layout} />
            ))}
          </TabPanel>
        </Box>
      </Paper>
    </Container>
  );
}

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && children}
    </div>
  );
}

export default FarmDesignsPage;
