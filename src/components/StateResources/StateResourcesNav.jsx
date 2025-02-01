import React, { useState } from 'react';
import { 
  Tabs, 
  Tab, 
  Box, 
  Typography, 
  Card, 
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Chip
} from '@mui/material';
import * as stateResources from '../../data/state-resources';

// Custom TabPanel component
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`state-tabpanel-${index}`}
      aria-labelledby={`state-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function StateResourcesNav() {
  const [selectedTab, setSelectedTab] = useState(0);
  
  // Filter out the summary and get only state data
  const states = Object.entries(stateResources)
    .filter(([key]) => key !== 'summary')
    .map(([_, value]) => value)
    .sort((a, b) => a.state.localeCompare(b.state));

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const renderStateInfo = (state) => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        {state.state} ({state.abbreviation})
      </Typography>
      
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>State Information</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Capital: {state.stateInfo.capital}</Typography>
              <Typography variant="subtitle1">Region: {state.stateInfo.region}</Typography>
              <Typography variant="subtitle1">
                Growing Zones: {state.stateInfo.agriculturalZones.join(', ')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>Key Crops:</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {state.stateInfo.keyCrops.map((crop, index) => (
                  <Chip key={index} label={crop} color="primary" variant="outlined" />
                ))}
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Growing Seasons</Typography>
          <Grid container spacing={2}>
            {Object.entries(state.stateInfo.growingSeasons).map(([season, time]) => (
              <Grid item xs={12} sm={6} md={3} key={season}>
                <Typography variant="subtitle1">
                  <strong>{season.charAt(0).toUpperCase() + season.slice(1)}:</strong> {time}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Agricultural Facts</Typography>
          <List>
            {state.stateInfo.agriculturalFacts.map((fact, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText primary={fact} />
                </ListItem>
                {index < state.stateInfo.agriculturalFacts.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Farmers Markets Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Farmers Markets</Typography>
      {state.farmersMarkets.map((market, index) => (
        <Card key={index} sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6">{market.name}</Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {market.address}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>Hours:</Typography>
                <List dense>
                  {Object.entries(market.schedule.regularHours).map(([day, hours]) => (
                    <ListItem key={day}>
                      <ListItemText 
                        primary={`${day.charAt(0).toUpperCase() + day.slice(1)}: ${hours}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>Features:</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {market.features.products.map((product, idx) => (
                    <Chip key={idx} label={product} size="small" />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}

      {/* Food Banks Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Food Banks</Typography>
      {state.foodBanks.map((bank, index) => (
        <Card key={index} sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6">{bank.name}</Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {bank.address}
            </Typography>
            <Typography variant="body2" paragraph>
              {bank.description}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>Services:</Typography>
                <List dense>
                  {bank.services.primary.map((service, idx) => (
                    <ListItem key={idx}>
                      <ListItemText primary={service} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>Impact:</Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary={`People Served: ${bank.impact.peopleServed}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Counties Served: ${bank.impact.countiesServed}`} />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={selectedTab} 
          onChange={handleTabChange} 
          variant="scrollable"
          scrollButtons="auto"
          aria-label="state resources tabs"
        >
          {states.map((state, index) => (
            <Tab 
              key={state.abbreviation}
              label={`${state.state} (${state.abbreviation})`}
              id={`state-tab-${index}`}
              aria-controls={`state-tabpanel-${index}`}
            />
          ))}
        </Tabs>
      </Box>
      
      {states.map((state, index) => (
        <TabPanel key={state.abbreviation} value={selectedTab} index={index}>
          {renderStateInfo(state)}
        </TabPanel>
      ))}
    </Box>
  );
}

export default StateResourcesNav;
