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
  const [selectedProgram, setSelectedProgram] = useState(null);

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
      schedule: "Weekly harvests during growing season",
      coordinator: "Jane Smith",
      phone: "(555) 123-4567",
      availableDates: [
        "Every Tuesday and Thursday, 8 AM - 12 PM",
        "First Saturday of each month, 9 AM - 2 PM"
      ],
      equipment: [
        "Gloves (provided)",
        "Sun protection recommended",
        "Closed-toe shoes required",
        "Water bottle recommended"
      ],
      impact: "In 2024, we rescued over 50,000 pounds of produce that would have otherwise gone to waste",
      training: "30-minute orientation provided on-site before first gleaning session"
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
      schedule: "Flexible scheduling available",
      coordinator: "Mike Johnson",
      phone: "(555) 987-6543",
      availableDates: [
        "Monday through Friday, 9 AM - 3 PM",
        "Select weekends based on harvest schedule"
      ],
      equipment: [
        "Harvest baskets (provided)",
        "Garden gloves (provided)",
        "Comfortable clothing recommended"
      ],
      impact: "Serving 15 local food banks and community centers",
      training: "Online orientation video + in-person demonstration"
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
              <Card 
                sx={{ 
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6
                  }
                }}
                onClick={() => setSelectedProgram(program)}
              >
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

        {/* Program Details Dialog */}
        <Dialog
          open={Boolean(selectedProgram)}
          onClose={() => setSelectedProgram(null)}
          maxWidth="md"
          fullWidth
          fullScreen={isMobile}
        >
          {selectedProgram && (
            <>
              <DialogTitle>
                {selectedProgram.name}
                <IconButton
                  onClick={() => setSelectedProgram(null)}
                  sx={{ position: 'absolute', right: 8, top: 8 }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    About the Program
                  </Typography>
                  <Typography paragraph>
                    {selectedProgram.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {selectedProgram.impact}
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Contact Information
                  </Typography>
                  <Typography paragraph>
                    <strong>Coordinator:</strong> {selectedProgram.coordinator}
                  </Typography>
                  <Typography paragraph>
                    <strong>Email:</strong> {selectedProgram.contact}
                  </Typography>
                  <Typography paragraph>
                    <strong>Phone:</strong> {selectedProgram.phone}
                  </Typography>
                  <Button
                    variant="contained"
                    component={Link}
                    href={selectedProgram.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mr: 2, mt: 1 }}
                  >
                    Visit Website
                  </Button>
                  <Button
                    variant="outlined"
                    component={Link}
                    href={`mailto:${selectedProgram.contact}`}
                    sx={{ mt: 1 }}
                  >
                    Send Email
                  </Button>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Schedule & Availability
                  </Typography>
                  <Typography paragraph>
                    <strong>Season:</strong> {selectedProgram.season}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Available Times:
                  </Typography>
                  <ul>
                    {selectedProgram.availableDates.map((date, index) => (
                      <li key={index}>
                        <Typography>{date}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Requirements & Equipment
                  </Typography>
                  <Typography paragraph>
                    <strong>Requirements:</strong> {selectedProgram.requirements}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Equipment & Gear:
                  </Typography>
                  <ul>
                    {selectedProgram.equipment.map((item, index) => (
                      <li key={index}>
                        <Typography>{item}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Training
                  </Typography>
                  <Typography>
                    {selectedProgram.training}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Available Crops
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProgram.crops.map(crop => (
                      <Chip
                        key={crop}
                        label={crop}
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Box>
              </DialogContent>
              <DialogActions sx={{ p: 3 }}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  href={`mailto:${selectedProgram.contact}?subject=Interest in ${selectedProgram.name}&body=Hello, I am interested in participating in your gleaning program. Please send me more information about how to get involved.`}
                >
                  Sign Up Now
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setSelectedProgram(null)}
                >
                  Close
                </Button>
              </DialogActions>
            </>
          )}
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
