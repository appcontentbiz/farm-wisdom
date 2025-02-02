import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button,
  Link
} from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';

const DesignLayout = ({ title, description, imagePath, downloadPath, dimensions, keyFeatures, tips }) => {
  return (
    <Card elevation={3} sx={{ mb: 4 }}>
      <CardMedia
        component="img"
        height="400"
        image={imagePath}
        alt={title}
        sx={{ 
          objectFit: 'contain',
          bgcolor: 'background.paper',
          p: 2
        }}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        
        {dimensions && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Dimensions & Scale
            </Typography>
            <Typography variant="body2">
              {dimensions}
            </Typography>
          </Box>
        )}

        {keyFeatures && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Key Features
            </Typography>
            <Grid container spacing={2}>
              {keyFeatures.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Typography variant="body2">
                    • {feature}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {tips && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Implementation Tips
            </Typography>
            <Grid container spacing={2}>
              {tips.map((tip, index) => (
                <Grid item xs={12} key={index}>
                  <Typography variant="body2">
                    • {tip}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {downloadPath && (
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<DownloadIcon />}
              component={Link}
              href={downloadPath}
              target="_blank"
              download
            >
              Download CAD File
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default DesignLayout;
