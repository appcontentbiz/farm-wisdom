import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Link,
  Chip,
  Collapse,
  IconButton,
  Divider,
  Paper
} from '@mui/material';
import {
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon,
  OpenInNew as OpenInNewIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorderIcon as BookmarkBorderIcon,
  PlayCircleOutline as PlayCircleOutlineIcon
} from '@mui/icons-material';
import { agriculturalResources } from '../data/agricultural-resources';

const backgroundStyle = {
  backgroundImage: 'url("/farm-field-sunset.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  padding: '2rem 0',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    zIndex: 1
  }
};

const contentStyle = {
  position: 'relative',
  zIndex: 2
};

const farmingVideos = [
  {
    title: "How to Make Money on a Small Farm",
    url: "https://www.youtube.com/watch?v=K3DwP1mYNpc",
    description: "Learn effective strategies for generating income from your small farm"
  },
  {
    title: "Farm Income Streams - Diversification Guide",
    url: "https://www.youtube.com/watch?v=dmnBrbg3fvQ",
    description: "Explore multiple income streams for your farming business"
  },
  {
    title: "Profitable Small Scale Farming",
    url: "https://www.youtube.com/watch?v=rHMvDy0_MhA",
    description: "Tips and techniques for profitable small-scale farming operations"
  },
  {
    title: "Market Garden Success Guide",
    url: "https://www.youtube.com/watch?v=9gE1nbfxYRg",
    description: "Learn how to create a successful market garden business"
  },
  {
    title: "Farm Business Planning",
    url: "https://www.youtube.com/watch?v=LJJWUwNGvPM",
    description: "Essential business planning strategies for farm success"
  },
  {
    title: "Sustainable Farm Income Guide",
    url: "https://www.youtube.com/watch?v=eamCawll6H4",
    description: "Creating sustainable income through farming practices"
  }
];

export const AgResourceDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (url) => {
    setFavorites(prev => 
      prev.includes(url) ? prev.filter(f => f !== url) : [...prev, url]
    );
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const filterResources = () => {
    const filtered = {};
    Object.entries(agriculturalResources).forEach(([key, category]) => {
      const filteredLinks = category.links.filter(link =>
        link.title.toLowerCase().includes(searchTerm) ||
        link.description.toLowerCase().includes(searchTerm)
      );
      if (filteredLinks.length > 0) {
        filtered[key] = { ...category, links: filteredLinks };
      }
    });
    return filtered;
  };

  const filteredResources = filterResources();

  return (
    <Box sx={backgroundStyle}>
      <Box sx={contentStyle}>
        <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <Typography variant="h4" gutterBottom>
            Agricultural Resources Directory
          </Typography>
          
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={handleSearch}
            sx={{ mb: 4 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Videos Section */}
          <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 3 }}>
            Farm Business & Income Videos
          </Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {farmingVideos.map((video, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <PlayCircleOutlineIcon sx={{ mr: 1, color: 'primary.main' }} />
                      <Typography variant="h6" component="h3">
                        {video.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {video.description}
                    </Typography>
                    <Link
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: 'primary.main',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      Watch Video <OpenInNewIcon sx={{ ml: 0.5, fontSize: '1rem' }} />
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Original Resource Categories */}
          <Grid container spacing={3}>
            {Object.entries(filteredResources).map(([key, category]) => (
              <Grid item xs={12} key={key}>
                <Card>
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                      onClick={() => toggleCategory(key)}
                    >
                      <Typography variant="h6" component="h2">
                        {category.title}
                      </Typography>
                      <IconButton
                        sx={{
                          transform: expandedCategory === key ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.3s',
                        }}
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </Box>

                    <Collapse in={expandedCategory === key}>
                      <Box sx={{ mt: 2 }}>
                        {category.links.map((link, index) => (
                          <React.Fragment key={link.url}>
                            {index > 0 && <Divider sx={{ my: 2 }} />}
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                              <Box sx={{ flex: 1 }}>
                                <Link
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    color: 'primary.main',
                                    textDecoration: 'none',
                                    '&:hover': { textDecoration: 'underline' },
                                  }}
                                >
                                  {link.title}
                                  <OpenInNewIcon sx={{ fontSize: 16 }} />
                                </Link>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  sx={{ mt: 0.5 }}
                                >
                                  {link.description}
                                </Typography>
                              </Box>
                              <IconButton
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleFavorite(link.url);
                                }}
                                size="small"
                              >
                                {favorites.includes(link.url) ? (
                                  <BookmarkIcon color="primary" />
                                ) : (
                                  <BookmarkBorderIcon />
                                )}
                              </IconButton>
                            </Box>
                          </React.Fragment>
                        ))}
                      </Box>
                    </Collapse>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {Object.keys(filteredResources).length === 0 && (
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Typography variant="h6" color="text.secondary">
                No resources found matching your search criteria
              </Typography>
            </Box>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default AgResourceDirectory;
