import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Link,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
  Group as GroupIcon,
  Close as CloseIcon,
  Info as InfoIcon
} from '@mui/icons-material';

const cropTypes = [
  'Vegetables',
  'Fruits',
  'Grains',
  'Legumes',
  'Root Crops',
  'Tree Fruits',
  'Berries'
];

const seasons = [
  'Spring',
  'Summer',
  'Fall',
  'Winter'
];

function GleaningPrograms() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrops, setSelectedCrops] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState('');
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
  const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false);

  const handleCropSelect = (crop) => {
    if (selectedCrops.includes(crop)) {
      setSelectedCrops(selectedCrops.filter(c => c !== crop));
    } else {
      setSelectedCrops([...selectedCrops, crop]);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  const gleaningPrograms = [
    {
      id: 1,
      name: "Community Harvest Network",
      description: "Connecting farmers with volunteers to harvest surplus crops for food banks",
      location: "Multiple locations across the state",
      season: "Summer",
      crops: ["Vegetables", "Fruits"],
      contact: "contact@communityharvestnetwork.org",
      website: "https://www.communityharvestnetwork.org",
      requirements: "Must be 16+ years old, physical activity required",
      schedule: "Weekly harvests during growing season"
    },
    {
      id: 2,
      name: "Urban Gleaners Initiative",
      description: "Rescuing fresh produce from urban farms and gardens",
      location: "City-wide program",
      season: "Spring",
      crops: ["Vegetables", "Herbs"],
      contact: "info@urbangleaners.org",
      website: "https://www.urbangleaners.org",
      requirements: "No experience necessary, training provided",
      schedule: "Flexible scheduling available"
    },
    // Add more programs as needed
  ];

  const filteredPrograms = gleaningPrograms.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCrops = selectedCrops.length === 0 || 
                        selectedCrops.some(crop => program.crops.includes(crop));
    const matchesSeason = !selectedSeason || program.season === selectedSeason;
    
    return matchesSearch && matchesCrops && matchesSeason;
  });

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Gleaning Programs
          <IconButton 
            onClick={() => setIsInfoDialogOpen(true)}
            sx={{ ml: 1 }}
          >
            <InfoIcon />
          </IconButton>
        </Typography>
        
        <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            label="Search Programs"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            sx={{ flexGrow: 1 }}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1 }} />,
            }}
          />
          <Button
            variant="contained"
            startIcon={<FilterIcon />}
            onClick={() => setIsFilterDialogOpen(true)}
          >
            Filters
          </Button>
        </Box>

        {selectedCrops.length > 0 && (
          <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {selectedCrops.map(crop => (
              <Chip
                key={crop}
                label={crop}
                onDelete={() => handleCropSelect(crop)}
                color="primary"
              />
            ))}
          </Box>
        )}

        <Grid container spacing={3}>
          {filteredPrograms.map(program => (
            <Grid item xs={12} md={6} key={program.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {program.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {program.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationIcon sx={{ mr: 1 }} color="action" />
                    <Typography variant="body2">
                      {program.location}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CalendarIcon sx={{ mr: 1 }} color="action" />
                    <Typography variant="body2">
                      {program.season} - {program.schedule}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {program.crops.map(crop => (
                      <Chip
                        key={crop}
                        label={crop}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="contained"
                      size="small"
                      component={Link}
                      href={program.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      component={Link}
                      href={`mailto:${program.contact}`}
                    >
                      Contact
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Filter Dialog */}
        <Dialog 
          open={isFilterDialogOpen} 
          onClose={() => setIsFilterDialogOpen(false)}
          fullScreen={isMobile}
        >
          <DialogTitle>
            Filter Programs
            <IconButton
              onClick={() => setIsFilterDialogOpen(false)}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Season</InputLabel>
              <Select
                value={selectedSeason}
                label="Season"
                onChange={handleSeasonChange}
              >
                <MenuItem value="">All Seasons</MenuItem>
                {seasons.map(season => (
                  <MenuItem key={season} value={season}>
                    {season}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Typography variant="subtitle1" gutterBottom>
              Crop Types
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {cropTypes.map(crop => (
                <Chip
                  key={crop}
                  label={crop}
                  onClick={() => handleCropSelect(crop)}
                  color={selectedCrops.includes(crop) ? "primary" : "default"}
                  variant={selectedCrops.includes(crop) ? "filled" : "outlined"}
                />
              ))}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsFilterDialogOpen(false)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>

        {/* Info Dialog */}
        <Dialog 
          open={isInfoDialogOpen} 
          onClose={() => setIsInfoDialogOpen(false)}
        >
          <DialogTitle>
            About Gleaning Programs
            <IconButton
              onClick={() => setIsInfoDialogOpen(false)}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Typography paragraph>
              Gleaning is the act of collecting leftover crops from farmers' fields after they have been commercially harvested or from fields where it is not economically profitable to harvest.
            </Typography>
            <Typography paragraph>
              Benefits of gleaning:
            </Typography>
            <ul>
              <li>Reduces food waste</li>
              <li>Provides fresh produce to food banks and communities in need</li>
              <li>Creates connections between farmers and their communities</li>
              <li>Educates participants about local agriculture</li>
              <li>Promotes sustainable farming practices</li>
            </ul>
            <Typography paragraph>
              How to participate:
            </Typography>
            <ol>
              <li>Browse available programs in your area</li>
              <li>Check requirements and schedules</li>
              <li>Contact the program coordinator</li>
              <li>Attend any required training</li>
              <li>Start gleaning!</li>
            </ol>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsInfoDialogOpen(false)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}

export default GleaningPrograms;
