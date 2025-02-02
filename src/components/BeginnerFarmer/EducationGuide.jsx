import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  Paper,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  School as SchoolIcon,
  Book as BookIcon,
  YouTube as YouTubeIcon,
  Computer as ComputerIcon,
  Agriculture as FarmIcon,
  ExpandMore as ExpandMoreIcon,
  LocalLibrary as LibraryIcon,
  WorkHistory as InternshipIcon
} from '@mui/icons-material';

const onlineCourses = {
  microgreensAndMushrooms: {
    title: 'Microgreens & Mushrooms',
    platforms: [
      {
        name: 'Udemy',
        courses: [
          'Microgreens Mastery',
          'Mushroom Cultivation'
        ]
      },
      {
        name: 'GrowAce',
        courses: [
          'Comprehensive Mushroom Growing Guides'
        ]
      },
      {
        name: 'YouTube Channels',
        courses: [
          'Urban Farmer Curtis Stone',
          'FreshCap Mushrooms'
        ]
      }
    ]
  },
  garlicAndHerbs: {
    title: 'Garlic & Herbs',
    platforms: [
      {
        name: 'Oregon State University Extension',
        courses: [
          'Free Garlic Cultivation Course',
          'Herb Growing Fundamentals'
        ]
      },
      {
        name: 'Herbal Academy',
        courses: [
          'Medicinal Herb Growing',
          'Commercial Herb Production'
        ]
      },
      {
        name: 'Master Gardener Programs',
        courses: [
          'Online State-Specific Programs',
          'Herb Specialization Tracks'
        ]
      }
    ]
  },
  berriesAndAvocados: {
    title: 'Berries & Avocados',
    platforms: [
      {
        name: 'University of California Agriculture Extension',
        courses: [
          'Avocado Production',
          'Commercial Avocado Management'
        ]
      },
      {
        name: 'Cornell Small Farms Program',
        courses: [
          'Berry Production',
          'Small Fruit Management'
        ]
      },
      {
        name: 'YouTube Channels',
        courses: [
          'MI Gardener',
          'Epic Gardening'
        ]
      }
    ]
  }
};

const recommendedBooks = [
  {
    category: 'Microgreens',
    books: [
      {
        title: 'Year-Round Indoor Salad Gardening',
        author: 'Peter Burke',
        description: 'Complete guide to growing microgreens indoors'
      }
    ]
  },
  {
    category: 'Mushrooms',
    books: [
      {
        title: 'The Mushroom Cultivator',
        author: 'Paul Stamets',
        description: 'Comprehensive guide to mushroom cultivation'
      }
    ]
  },
  {
    category: 'Garlic & Herbs',
    books: [
      {
        title: 'The Complete Book of Herbs',
        author: 'Lesley Bremness',
        description: 'Detailed guide to growing and using herbs'
      }
    ]
  },
  {
    category: 'Berries',
    books: [
      {
        title: 'The Berry Grower',
        author: 'Blake Cothron',
        description: 'Small-scale organic berry production guide'
      }
    ]
  },
  {
    category: 'Avocados',
    books: [
      {
        title: "The Avocado Grower's Handbook",
        author: 'Laurelynn and Byron Martin',
        description: 'Complete guide to avocado cultivation'
      }
    ]
  }
];

const degreesAndCertifications = {
  degrees: [
    {
      university: 'Oregon State University',
      program: 'B.S. in Agricultural Sciences',
      type: 'Online',
      details: [
        'Highly ranked online ag program',
        'Flexible study options',
        'Courses in crop production',
        'Soil management training',
        'Farm business education'
      ]
    },
    {
      university: 'University of Massachusetts',
      program: 'Sustainable Food & Farming',
      type: 'B.S. or Certificate',
      details: [
        'Focus on organic farming',
        'Permaculture principles',
        'Sustainability emphasis',
        'Fully online program',
        'Practical applications'
      ]
    },
    {
      university: 'Texas Tech University',
      program: 'B.S. in Plant and Soil Science',
      type: 'Online',
      details: [
        'Commercial farming focus',
        'Greenhouse growing',
        'Plant science fundamentals',
        'Modern agriculture techniques',
        'Industry connections'
      ]
    },
    {
      university: 'Colorado State University',
      program: "Master's in Agriculture",
      type: 'Online',
      details: [
        'Advanced degree program',
        'Agribusiness focus',
        'Crop science specialization',
        'Soil management expertise',
        'Research opportunities'
      ]
    }
  ],
  certificates: [
    {
      university: 'Cornell University',
      program: 'Organic Agriculture Certificate',
      details: [
        'Organic farming principles',
        'Soil health management',
        'Market farming strategies',
        'Certification preparation',
        'Industry networking'
      ]
    },
    {
      university: 'Penn State',
      program: 'Agricultural Business Management',
      details: [
        'Farm finance basics',
        'Marketing strategies',
        'Business planning',
        'Risk management',
        'Market analysis'
      ]
    },
    {
      university: 'University of Florida',
      program: 'Agronomy & Crop Production Certificate',
      details: [
        'Crop science fundamentals',
        'Irrigation systems',
        'Farm efficiency',
        'Production planning',
        'Resource management'
      ]
    }
  ]
};

const handsonTraining = {
  programs: [
    {
      name: 'Agriculture Extension Programs',
      description: 'State-based agriculture offices offering free training',
      benefits: [
        'Local expertise',
        'Hands-on experience',
        'Networking opportunities',
        'Free resources',
        'Community support'
      ]
    },
    {
      name: 'WWOOF (Worldwide Opportunities on Organic Farms)',
      description: 'Work-exchange program on organic farms',
      benefits: [
        'Practical experience',
        'Cultural exchange',
        'Room and board included',
        'Global opportunities',
        'Skill development'
      ]
    },
    {
      name: 'Local Nurseries & Farms',
      description: 'Apprenticeships and volunteer opportunities',
      benefits: [
        'Direct mentorship',
        'Local market insight',
        'Seasonal experience',
        'Professional connections',
        'Career opportunities'
      ]
    }
  ]
};

function EducationGuide() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Education & Training Guide
      </Typography>

      {/* Online Courses Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          <ComputerIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Online Courses & Certifications
        </Typography>
        {Object.values(onlineCourses).map((category) => (
          <Accordion key={category.title} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{category.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                {category.platforms.map((platform) => (
                  <Grid item xs={12} md={4} key={platform.name}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {platform.name}
                        </Typography>
                        <List dense>
                          {platform.courses.map((course) => (
                            <ListItem key={course}>
                              <ListItemIcon>
                                {platform.name === 'YouTube Channels' ? (
                                  <YouTubeIcon color="error" />
                                ) : (
                                  <SchoolIcon color="primary" />
                                )}
                              </ListItemIcon>
                              <ListItemText primary={course} />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>

      {/* Books Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          <BookIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Recommended Books & Guides
        </Typography>
        <Grid container spacing={3}>
          {recommendedBooks.map((category) => (
            <Grid item xs={12} md={4} key={category.category}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {category.category}
                  </Typography>
                  {category.books.map((book) => (
                    <Box key={book.title} sx={{ mb: 2 }}>
                      <Typography variant="subtitle1" color="primary">
                        {book.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        by {book.author}
                      </Typography>
                      <Typography variant="body2">
                        {book.description}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Degrees & Certifications Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          <LibraryIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Degrees & Certifications
        </Typography>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Online Degrees</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              {degreesAndCertifications.degrees.map((degree) => (
                <Grid item xs={12} md={6} key={degree.program}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {degree.university}
                      </Typography>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        {degree.program} ({degree.type})
                      </Typography>
                      <List dense>
                        {degree.details.map((detail) => (
                          <ListItem key={detail}>
                            <ListItemIcon>
                              <SchoolIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={detail} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Professional Certificates</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              {degreesAndCertifications.certificates.map((cert) => (
                <Grid item xs={12} md={4} key={cert.program}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {cert.university}
                      </Typography>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        {cert.program}
                      </Typography>
                      <List dense>
                        {cert.details.map((detail) => (
                          <ListItem key={detail}>
                            <ListItemIcon>
                              <SchoolIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={detail} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Paper>

      {/* Hands-On Training Section */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          <InternshipIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Hands-On Training & Internships
        </Typography>
        <Grid container spacing={3}>
          {handsonTraining.programs.map((program) => (
            <Grid item xs={12} md={4} key={program.name}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {program.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {program.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle2" color="primary">
                    Benefits:
                  </Typography>
                  <List dense>
                    {program.benefits.map((benefit) => (
                      <ListItem key={benefit}>
                        <ListItemIcon>
                          <FarmIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}

export default EducationGuide;
