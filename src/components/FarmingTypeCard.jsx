import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Divider,
  CardActionArea,
  Collapse,
  ChevronRight
} from '@mui/material';

export default function FarmingTypeCard({ type, expanded, onExpand, index }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea onClick={() => onExpand(index)}>
        <CardMedia
          component="img"
          height="200"
          image={type.image}
          alt={type.title}
          sx={{
            objectFit: 'cover',
            backgroundColor: 'grey.200'
          }}
        />
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box sx={{ color: 'primary.main', mr: 1 }}>{type.icon}</Box>
            <Typography variant="h5">
              {type.title}
            </Typography>
          </Box>
          <Typography color="text.secondary" variant="subtitle1">
            {type.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Collapse in={expanded}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Key Benefits:</Typography>
          <List>
            {type.benefits.map((benefit) => (
              <ListItem key={benefit}>
                <ListItemIcon>
                  <ChevronRight color="primary" />
                </ListItemIcon>
                <ListItemText primary={benefit} />
              </ListItem>
            ))}
          </List>
          {type.guide && (
            <>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>Complete Guide:</Typography>
              <Grid container spacing={2}>
                {Object.entries(type.guide).map(([section, items]) => (
                  <Grid item xs={12} md={6} key={section}>
                    <Typography variant="subtitle1" color="primary" gutterBottom sx={{ textTransform: 'capitalize' }}>
                      {section}:
                    </Typography>
                    <List dense>
                      {items.map((item) => (
                        <ListItem key={item}>
                          <ListItemIcon>
                            <ChevronRight color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}
