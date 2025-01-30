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
  Divider
} from '@mui/material';
import {
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon,
  OpenInNew as OpenInNewIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon
} from '@mui/icons-material';
import { agriculturalResources } from '../data/agricultural-resources';

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
    <Box sx={{ p: 3 }}>
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
    </Box>
  );
};

export default AgResourceDirectory;
