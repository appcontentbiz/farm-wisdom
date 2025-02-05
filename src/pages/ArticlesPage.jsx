import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Divider,
  Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';

const ArticleContent = styled(Typography)(({ theme }) => ({
  '& p': {
    marginBottom: theme.spacing(2),
    lineHeight: 1.7,
  },
  '& h2': {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  '& h3': {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  '& ul, & ol': {
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    '& li': {
      marginBottom: theme.spacing(1),
    },
  },
}));

const articles = [
  {
    id: 'permaculture-guide',
    title: 'Permaculture: A Comprehensive Guide to Sustainable Agriculture',
    date: '2025-02-05',
    author: 'Farm Wisdom Team',
    content: `
Permaculture represents a revolutionary approach to agriculture and sustainable living that has gained significant traction in recent decades. This comprehensive guide explores the principles, benefits, and challenges of implementing permaculture systems.

## What is Permaculture?

Permaculture, a term coined by Bill Mollison and David Holmgren in the 1970s, combines "permanent" and "agriculture" to describe a design approach that creates sustainable agricultural ecosystems. At its core, permaculture works with, rather than against, nature to develop self-sustaining landscapes that mimic natural patterns and relationships.

## Key Principles

### 1. Working with Nature
Rather than imposing artificial systems, permaculture designs observe and replicate natural patterns. This approach reduces the need for constant intervention and external inputs, making the system more sustainable over time.

### 2. Energy Efficiency
Permaculture emphasizes capturing and storing energy in various forms – from solar and water to soil fertility and biodiversity. This principle extends to minimizing waste and maximizing resource utilization.

### 3. Integration Over Segregation
Unlike conventional farming's monoculture approach, permaculture integrates different elements – plants, animals, and structures – to create beneficial relationships that enhance overall system productivity.

## Benefits of Permaculture

- **Environmental Sustainability**: Reduces carbon footprint and enhances biodiversity
- **Resource Efficiency**: Minimizes water usage and eliminates chemical inputs
- **Economic Viability**: Lower operating costs once established
- **Food Security**: Provides diverse, year-round food production
- **Community Resilience**: Promotes local food systems and community self-reliance

## Challenges and Considerations

### Initial Setup
- Requires significant planning and design work
- Higher upfront investment in time and resources
- Steep learning curve for newcomers

### Land Requirements
- Need for adequate space to implement full systems
- May face zoning or regulatory restrictions
- Requires careful site analysis and preparation

### Time Investment
- Takes several years to reach full productivity
- Requires patience during establishment phase
- Ongoing observation and adjustment needed

## Practical Applications

### Food Forests
Multi-layered ecosystems that combine:
- Canopy trees for fruits and nuts
- Understory shrubs for berries
- Ground covers for herbs and vegetables
- Root crops for maximum space utilization

### Water Management
Innovative techniques including:
- Swales for water harvesting
- Rain gardens for filtration
- Greywater systems for reuse
- Strategic pond placement

### Soil Building
Natural approaches such as:
- Sheet mulching
- Companion planting
- Cover cropping
- Composting systems

## Getting Started

1. **Observe Your Space**: Study your land's patterns, including sun exposure, water flow, and existing vegetation.
2. **Start Small**: Begin with a manageable area and expand gradually.
3. **Plan for Success**: Design with multiple functions in mind for each element.
4. **Build Community**: Connect with local permaculture practitioners and share knowledge.

## Conclusion

Permaculture offers a viable solution to many of our current agricultural and environmental challenges. While it requires significant initial investment in planning and setup, the long-term benefits – from environmental sustainability to food security – make it an increasingly attractive option for those seeking to create resilient, productive landscapes.

Whether implemented on a small urban lot or a large rural property, permaculture principles can be adapted to various scales and contexts. As we face growing environmental challenges, these sustainable design principles become increasingly relevant for creating a more sustainable and regenerative future.
    `,
  },
];

function ArticlesPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Farm Wisdom Articles
      </Typography>

      <Grid container spacing={4}>
        {articles.map((article) => (
          <Grid item xs={12} key={article.id}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                {article.title}
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" color="text.secondary">
                  By {article.author} | {new Date(article.date).toLocaleDateString()}
                </Typography>
              </Box>
              
              <Divider sx={{ mb: 3 }} />
              
              <ArticleContent component="div">
                {article.content.split('\\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <Typography key={index} variant="h5" component="h2">
                        {paragraph.replace('## ', '')}
                      </Typography>
                    );
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <Typography key={index} variant="h6" component="h3">
                        {paragraph.replace('### ', '')}
                      </Typography>
                    );
                  } else if (paragraph.startsWith('- ')) {
                    return (
                      <Typography key={index} component="li" sx={{ ml: 3 }}>
                        {paragraph.replace('- ', '')}
                      </Typography>
                    );
                  } else if (paragraph.trim().length > 0) {
                    return (
                      <Typography key={index} paragraph>
                        {paragraph}
                      </Typography>
                    );
                  }
                  return null;
                })}
              </ArticleContent>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ArticlesPage;
