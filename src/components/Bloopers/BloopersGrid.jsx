import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Dialog,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import farmBloopers from '../../data/bloopers';

function BloopersGrid() {
  const [selectedBlooper, setSelectedBlooper] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleBlooperClick = (blooper) => {
    setSelectedBlooper(blooper);
  };

  const handleClose = () => {
    setSelectedBlooper(null);
  };

  const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const getYouTubeEmbedUrl = (videoId, timestamp) => {
    // Convert timestamp (e.g., "1:23") to seconds
    const [minutes, seconds] = timestamp.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    return `https://www.youtube.com/embed/${videoId}?start=${totalSeconds}&autoplay=1`;
  };

  return (
    <>
      <Grid container spacing={3}>
        {farmBloopers.map((blooper) => (
          <Grid item xs={12} sm={6} md={4} key={blooper.id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.2s ease-in-out'
                }
              }}
              onClick={() => handleBlooperClick(blooper)}
            >
              <CardMedia
                component="img"
                height="200"
                image={getYouTubeThumbnail(blooper.videoId)}
                alt={blooper.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {blooper.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {blooper.description}
                </Typography>
                <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {blooper.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
                <Typography 
                  variant="caption" 
                  color="text.secondary"
                  sx={{ 
                    display: 'block',
                    mt: 1,
                    fontStyle: 'italic'
                  }}
                >
                  Category: {blooper.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        fullScreen={fullScreen}
        maxWidth="md"
        open={Boolean(selectedBlooper)}
        onClose={handleClose}
        aria-labelledby="blooper-dialog-title"
      >
        {selectedBlooper && (
          <>
            <Box sx={{ position: 'relative' }}>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  },
                  zIndex: 1
                }}
              >
                <CloseIcon />
              </IconButton>
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                  width: '100%',
                  backgroundColor: 'black'
                }}
              >
                <iframe
                  src={getYouTubeEmbedUrl(selectedBlooper.videoId, selectedBlooper.timestamp)}
                  title={selectedBlooper.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0
                  }}
                />
              </Box>
            </Box>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {selectedBlooper.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {selectedBlooper.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                {selectedBlooper.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
              <Typography variant="caption" color="text.secondary">
                Category: {selectedBlooper.category}
              </Typography>
            </CardContent>
          </>
        )}
      </Dialog>
    </>
  );
}

export default BloopersGrid;
