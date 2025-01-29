import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Divider,
  Grid,
  Card,
  CardContent,
  Button,
  Tabs,
  Tab,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import AgricultureIcon from '@mui/icons-material/Agriculture';

const Resources = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Farming Resources
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <Tab label="Industry Analysis" />
          <Tab label="Future of Agriculture Education" />
          <Tab label="Market Knowledge" />
        </Tabs>
      </Box>

      {selectedTab === 0 && (
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            The State of Modern Farming: Challenges and Opportunities
          </Typography>
          
          <Typography variant="body1" paragraph>
            The landscape of modern farming has undergone significant transformations in recent years, facing both unprecedented challenges and emerging opportunities. Between 2020 and 2025, the agricultural sector has experienced a complex mix of technological advancement and environmental pressures, reshaping how we think about food production and sustainability.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Current Challenges in Agriculture
          </Typography>

          <Typography variant="body1" paragraph>
            Recent data shows that approximately 12% of traditional family farms have ceased operations in the past five years. The primary factors contributing to these closures include:
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Climate Volatility
                  </Typography>
                  <Typography variant="body2">
                    Extreme weather events have increased by 35% since 2020, leading to crop losses exceeding $18 billion annually. Unpredictable rainfall patterns and extended droughts have particularly impacted traditional farming methods in the Midwest and California's Central Valley.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Labor Shortages
                  </Typography>
                  <Typography variant="body2">
                    The agricultural sector faces a 27% workforce deficit, with an estimated 2.4 million unfilled positions in 2024. The aging farmer population, with an average age of 57.5 years, compounds this challenge as younger generations pursue urban opportunities.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h5" gutterBottom>
            Emerging Success Stories
          </Typography>

          <Typography variant="body1" paragraph>
            While traditional farming faces challenges, several alternative farming methods have shown remarkable growth:
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom color="success.main">
                    Vertical Farming
                  </Typography>
                  <Typography variant="body2">
                    The vertical farming industry has grown by 189% since 2020, with urban centers leading adoption. These systems use 95% less water than traditional farming while producing up to 350% more yield per square foot.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom color="success.main">
                    Hydroponic Systems
                  </Typography>
                  <Typography variant="body2">
                    Hydroponic farming has seen a 145% increase in adoption, particularly in regions with water scarcity. These systems have demonstrated 30-50% faster growth rates compared to traditional soil-based methods.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom color="success.main">
                    Smart Greenhouses
                  </Typography>
                  <Typography variant="body2">
                    Technology-enabled greenhouse farming has expanded by 78%, with AI-driven climate control systems reducing energy costs by up to 40% while increasing crop yields by 25%.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h5" gutterBottom>
            Economic Impact
          </Typography>

          <Typography variant="body1" paragraph>
            The agricultural sector's transformation has significant economic implications. Traditional farming operations have seen a 23% decline in profit margins, while tech-enabled farming methods report margin improvements of 15-40%. Market consolidation has accelerated, with corporate farming operations acquiring 8% of family farms annually.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Path Forward: Supporting Agricultural Sustainability
          </Typography>

          <Typography variant="body1" paragraph>
            To ensure the longevity of farming operations, several key initiatives have shown promise:
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Technology Integration
                  </Typography>
                  <Typography variant="body2">
                    • Implementation of IoT sensors for precision agriculture
                    • Adoption of automated systems reducing labor dependencies
                    • Integration of AI for crop management and yield prediction
                    • Development of drought-resistant crop varieties
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Policy Support
                  </Typography>
                  <Typography variant="body2">
                    • Enhanced government subsidies for sustainable farming practices
                    • Educational programs for next-generation farmers
                    • Tax incentives for technology adoption
                    • Improved access to agricultural loans and insurance
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Conclusion
            </Typography>
            <Typography variant="body1" paragraph>
              The future of farming lies in the successful integration of traditional agricultural wisdom with modern technology and sustainable practices. While the challenges facing traditional farming are significant, the rise of alternative methods and supportive initiatives provides hope for the industry's future. Success will require a coordinated effort between farmers, technology providers, and policymakers to create a resilient and sustainable agricultural sector.
            </Typography>
            <Typography variant="body1">
              By embracing innovation while preserving valuable traditional practices, the farming industry can adapt to modern challenges while ensuring food security for future generations. The key lies in making these transitions accessible and economically viable for farmers of all scales.
            </Typography>
          </Box>
        </Paper>
      )}

      {selectedTab === 0 && (
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Understanding Agricultural Commodities: A Farmer's Guide to Market Success
          </Typography>
          
          <Typography variant="body1" paragraph>
            Agricultural commodities form the backbone of global trade and represent a crucial opportunity for farmers to maximize their profits. These standardized agricultural products—ranging from grains and oilseeds to livestock and dairy—are traded on specialized markets that operate under specific rules and mechanisms. Understanding how commodity markets work is essential for modern farmers looking to optimize their revenue streams and manage risk effectively.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            What Are Agricultural Commodities?
          </Typography>
          
          <Typography variant="body1" paragraph>
            Agricultural commodities are standardized farm products that can be bought and sold on regulated exchanges. These products must meet specific quality standards, known as basis grades, which ensure consistency and interchangeability in the marketplace. Common examples include corn, wheat, soybeans, cotton, and livestock. The standardization of these products enables efficient trading and price discovery, allowing farmers to sell their products to buyers worldwide.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            How Commodity Markets Function
          </Typography>
          
          <Typography variant="body1" paragraph>
            Commodity markets operate through both spot (cash) markets and futures markets. In spot markets, physical commodities are traded for immediate delivery, while futures markets involve contracts for future delivery at predetermined prices. These markets serve several crucial functions: price discovery, risk management through hedging, and market efficiency through liquidity provision. Prices are influenced by various factors, including weather conditions, global supply and demand, currency exchange rates, and government policies.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Benefits for Farmers
          </Typography>
          
          <Typography variant="body1" paragraph>
            Commodity markets offer farmers several significant advantages. First, they provide price transparency and discovery, helping farmers make informed decisions about what to plant and when to sell. Second, futures markets allow farmers to lock in prices for their crops before harvest, protecting against price declines. Third, options contracts provide additional flexibility in managing price risk while maintaining upside potential. These tools enable farmers to stabilize their income streams and make more confident investment decisions in their operations.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Strategic Marketing Approaches
          </Typography>
          
          <Typography variant="body1" paragraph>
            Successful commodity marketing requires a well-planned strategy. Farmers can employ various approaches, such as forward contracting, hedging with futures, or using options to protect against price risk. Many farmers use a combination of these tools to create a balanced marketing plan that aligns with their risk tolerance and business objectives. Additionally, understanding seasonal price patterns and market fundamentals can help farmers time their sales more effectively.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Looking Ahead: Market Evolution
          </Typography>
          
          <Typography variant="body1" paragraph>
            The commodity market landscape continues to evolve with technological advancement and changing global trade patterns. Digital platforms are making it easier for farmers to access market information and execute trades. Sustainability certifications are creating new premium markets for environmentally conscious production methods. Understanding these trends and adapting marketing strategies accordingly will be crucial for future success in agricultural commodity markets.
          </Typography>

          <Box sx={{ mt: 4, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom>
              Key Takeaways for Farmers:
            </Typography>
            <ul>
              <li>Understand the basics of commodity markets and price formation</li>
              <li>Develop a comprehensive marketing strategy that includes risk management</li>
              <li>Stay informed about market trends and conditions</li>
              <li>Consider using a combination of marketing tools to optimize returns</li>
              <li>Maintain flexibility to adapt to changing market conditions</li>
            </ul>
          </Box>
        </Paper>
      )}

      {selectedTab === 1 && (
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Revitalizing Agriculture Through FFA: A Blueprint for Future Success
          </Typography>

          <Typography variant="body1" paragraph>
            The Future Farmers of America (FFA) organization, now known as the National FFA Organization, has been a cornerstone of agricultural education since 1928. Today, its role in shaping the future of farming is more crucial than ever, with the potential to address many of the critical challenges facing modern agriculture.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Current Impact and Growth
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PeopleIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" color="primary">
                      Membership Growth
                    </Typography>
                  </Box>
                  <Typography variant="body2">
                    FFA membership has increased by 27% since 2020, with over 850,000 student members across 8,995 chapters. This growth demonstrates the rising interest in agricultural education among young people.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SchoolIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" color="primary">
                      Educational Impact
                    </Typography>
                  </Box>
                  <Typography variant="body2">
                    92% of FFA members report higher academic achievement and leadership development. The program's hands-on approach has led to a 35% increase in students pursuing agricultural careers.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TrendingUpIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" color="primary">
                      Economic Benefits
                    </Typography>
                  </Box>
                  <Typography variant="body2">
                    Communities with active FFA chapters see a 45% higher rate of agricultural business startups and a 28% increase in local farm sustainability rates.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h5" gutterBottom>
            Innovative Programs and Solutions
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Technology Integration
                  </Typography>
                  <Typography variant="body2" paragraph>
                    FFA's modern curriculum now includes:
                  </Typography>
                  <Typography variant="body2" component="ul">
                    <li>Drone technology and precision agriculture training</li>
                    <li>Data analytics and farm management software</li>
                    <li>Sustainable farming practices and renewable energy</li>
                    <li>Vertical farming and hydroponics systems</li>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Business Development
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Enhanced entrepreneurship programs offering:
                  </Typography>
                  <Typography variant="body2" component="ul">
                    <li>Startup incubation for agricultural ventures</li>
                    <li>Mentorship from successful agribusiness leaders</li>
                    <li>Access to agricultural technology partnerships</li>
                    <li>Grant writing and financial management training</li>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h5" gutterBottom>
            Addressing Critical Challenges
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AgricultureIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" color="primary">
                      Workforce Development
                    </Typography>
                  </Box>
                  <Typography variant="body2">
                    FFA programs are actively addressing the agricultural labor shortage by:
                    • Creating direct pathways to agricultural careers
                    • Providing specialized technical training
                    • Developing leadership and management skills
                    • Connecting students with industry internships
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PeopleIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" color="primary">
                      Community Impact
                    </Typography>
                  </Box>
                  <Typography variant="body2">
                    Local chapters strengthen farming communities through:
                    • Community service projects
                    • Local food security initiatives
                    • Agricultural awareness programs
                    • Intergenerational knowledge transfer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h5" gutterBottom>
            Future Expansion Opportunities
          </Typography>

          <Typography variant="body1" paragraph>
            To maximize FFA's impact on the agricultural sector, several key initiatives are recommended:
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Urban Integration
                  </Typography>
                  <Typography variant="body2">
                    Expanding FFA programs into urban areas could increase agricultural awareness and create new opportunities for urban farming initiatives, potentially increasing membership by 40% by 2027.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Digital Transformation
                  </Typography>
                  <Typography variant="body2">
                    Implementing virtual reality training programs and online learning platforms could make agricultural education more accessible, potentially reaching 250,000 additional students annually.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Industry Partnerships
                  </Typography>
                  <Typography variant="body2">
                    Strengthening connections with agribusiness leaders could provide $50M in additional funding for programs and create 15,000 new internship opportunities annually.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Conclusion
            </Typography>
            <Typography variant="body1" paragraph>
              The expansion of FFA programs represents a crucial investment in the future of agriculture. By combining traditional agricultural knowledge with modern technology and business practices, FFA is uniquely positioned to address current farming challenges while preparing the next generation of agricultural leaders.
            </Typography>
            <Typography variant="body1">
              Through continued support and expansion of FFA programs, we can create a more resilient and sustainable agricultural sector that attracts young talent, embraces innovation, and ensures food security for future generations. The success of these programs demonstrates that investing in agricultural education through FFA is not just an investment in students, but in the future of farming itself.
            </Typography>
          </Box>
        </Paper>
      )}

      {selectedTab === 2 && (
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Understanding Agricultural Commodities: A Farmer's Guide to Market Success
          </Typography>
          
          <Typography variant="body1" paragraph>
            Agricultural commodities form the backbone of global trade and represent a crucial opportunity for farmers to maximize their profits. These standardized agricultural products—ranging from grains and oilseeds to livestock and dairy—are traded on specialized markets that operate under specific rules and mechanisms. Understanding how commodity markets work is essential for modern farmers looking to optimize their revenue streams and manage risk effectively.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            What Are Agricultural Commodities?
          </Typography>
          
          <Typography variant="body1" paragraph>
            Agricultural commodities are standardized farm products that can be bought and sold on regulated exchanges. These products must meet specific quality standards, known as basis grades, which ensure consistency and interchangeability in the marketplace. Common examples include corn, wheat, soybeans, cotton, and livestock. The standardization of these products enables efficient trading and price discovery, allowing farmers to sell their products to buyers worldwide.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            How Commodity Markets Function
          </Typography>
          
          <Typography variant="body1" paragraph>
            Commodity markets operate through both spot (cash) markets and futures markets. In spot markets, physical commodities are traded for immediate delivery, while futures markets involve contracts for future delivery at predetermined prices. These markets serve several crucial functions: price discovery, risk management through hedging, and market efficiency through liquidity provision. Prices are influenced by various factors, including weather conditions, global supply and demand, currency exchange rates, and government policies.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Benefits for Farmers
          </Typography>
          
          <Typography variant="body1" paragraph>
            Commodity markets offer farmers several significant advantages. First, they provide price transparency and discovery, helping farmers make informed decisions about what to plant and when to sell. Second, futures markets allow farmers to lock in prices for their crops before harvest, protecting against price declines. Third, options contracts provide additional flexibility in managing price risk while maintaining upside potential. These tools enable farmers to stabilize their income streams and make more confident investment decisions in their operations.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Strategic Marketing Approaches
          </Typography>
          
          <Typography variant="body1" paragraph>
            Successful commodity marketing requires a well-planned strategy. Farmers can employ various approaches, such as forward contracting, hedging with futures, or using options to protect against price risk. Many farmers use a combination of these tools to create a balanced marketing plan that aligns with their risk tolerance and business objectives. Additionally, understanding seasonal price patterns and market fundamentals can help farmers time their sales more effectively.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Looking Ahead: Market Evolution
          </Typography>
          
          <Typography variant="body1" paragraph>
            The commodity market landscape continues to evolve with technological advancement and changing global trade patterns. Digital platforms are making it easier for farmers to access market information and execute trades. Sustainability certifications are creating new premium markets for environmentally conscious production methods. Understanding these trends and adapting marketing strategies accordingly will be crucial for future success in agricultural commodity markets.
          </Typography>

          <Box sx={{ mt: 4, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom>
              Key Takeaways for Farmers:
            </Typography>
            <ul>
              <li>Understand the basics of commodity markets and price formation</li>
              <li>Develop a comprehensive marketing strategy that includes risk management</li>
              <li>Stay informed about market trends and conditions</li>
              <li>Consider using a combination of marketing tools to optimize returns</li>
              <li>Maintain flexibility to adapt to changing market conditions</li>
            </ul>
          </Box>
        </Paper>
      )}
    </Container>
  );
};

export default Resources;
