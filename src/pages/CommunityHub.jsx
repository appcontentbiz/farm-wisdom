import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Tabs,
  Tab,
  InputAdornment,
  Badge,
  Divider,
} from '@mui/material';
import {
  Search as SearchIcon,
  QuestionAnswer as QAIcon,
  BugReport as DiseaseIcon,
  Lightbulb as InsightIcon,
  Group as NetworkIcon,
  ThumbUp as LikeIcon,
  Comment as CommentIcon,
  Share as ShareIcon,
  Image as ImageIcon,
  Send as SendIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';

// Mock data for community content
const mockExperts = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Crop Disease Expert',
    avatar: 'SJ',
    rating: 4.8,
    responseTime: '2 hours',
  },
  {
    id: 2,
    name: 'Prof. Michael Chen',
    specialty: 'Soil Science',
    avatar: 'MC',
    rating: 4.9,
    responseTime: '1 hour',
  },
];

const mockQuestions = [
  {
    id: 1,
    user: 'James Wilson',
    avatar: 'JW',
    title: 'Identifying unusual corn leaf patterns',
    content: 'I've noticed some irregular patterns on my corn leaves. Could this be a sign of disease?',
    images: ['corn_leaf.jpg'],
    timestamp: '2 hours ago',
    responses: 3,
    status: 'Open',
  },
  {
    id: 2,
    user: 'Emily Parker',
    avatar: 'EP',
    title: 'Optimal irrigation timing',
    content: 'What's the best time to irrigate soybeans during the flowering stage?',
    timestamp: '4 hours ago',
    responses: 5,
    status: 'Answered',
  },
];

const mockSuccessStories = [
  {
    id: 1,
    user: 'Robert Smith',
    avatar: 'RS',
    title: 'Increased Yield with Smart Irrigation',
    content: 'Implemented precision irrigation system and saw a 30% increase in yield while reducing water usage by 25%.',
    images: ['success_story1.jpg'],
    likes: 156,
    comments: 23,
    shares: 45,
  },
  {
    id: 2,
    user: 'Maria Garcia',
    avatar: 'MG',
    title: 'Organic Pest Control Success',
    content: 'Switched to natural pest control methods and maintained crop quality while reducing costs.',
    images: ['success_story2.jpg'],
    likes: 98,
    comments: 15,
    shares: 32,
  },
];

const mockLocalFarmers = [
  {
    id: 1,
    name: 'Green Valley Farm',
    owner: 'David Brown',
    avatar: 'DB',
    distance: '5 miles',
    specialty: 'Organic Vegetables',
    collaboration: 'Equipment Sharing',
  },
  {
    id: 2,
    name: 'Sunrise Acres',
    owner: 'Lisa Chen',
    avatar: 'LC',
    distance: '8 miles',
    specialty: 'Sustainable Grains',
    collaboration: 'Knowledge Exchange',
  },
];

export default function CommunityHub() {
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [openAskDialog, setOpenAskDialog] = useState(false);
  const [openDiseaseDialog, setOpenDiseaseDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    content: '',
    images: [],
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new questions and responses
      setMockQuestions(prev => [...prev]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleAskQuestion = () => {
    // Add new question logic
    setOpenAskDialog(false);
    setNewQuestion({ title: '', content: '', images: [] });
  };

  const handleDiseaseIdentification = () => {
    // Process disease identification
    setOpenDiseaseDialog(false);
    setSelectedImage(null);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" component="h1" gutterBottom>
              Community Knowledge Hub
            </Typography>
            <Box>
              <Button
                variant="contained"
                startIcon={<QAIcon />}
                onClick={() => setOpenAskDialog(true)}
                sx={{ mr: 2 }}
              >
                Ask Question
              </Button>
              <Button
                variant="contained"
                startIcon={<DiseaseIcon />}
                onClick={() => setOpenDiseaseDialog(true)}
              >
                Identify Disease
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Search Bar */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search questions, success stories, or connect with local farmers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Main Content */}
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab icon={<QAIcon />} label="Expert Q&A" />
              <Tab icon={<InsightIcon />} label="Success Stories" />
              <Tab icon={<NetworkIcon />} label="Local Network" />
            </Tabs>

            {/* Expert Q&A Tab */}
            {tabValue === 0 && (
              <Box p={3}>
                <Grid container spacing={3}>
                  {/* Expert List */}
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                      Available Experts
                    </Typography>
                    <List>
                      {mockExperts.map((expert) => (
                        <ListItem key={expert.id}>
                          <ListItemAvatar>
                            <Avatar>{expert.avatar}</Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={expert.name}
                            secondary={
                              <>
                                <Typography component="span" variant="body2" color="text.primary">
                                  {expert.specialty}
                                </Typography>
                                {' — Response time: ' + expert.responseTime}
                              </>
                            }
                          />
                          <Chip label={expert.rating + '★'} color="primary" size="small" />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>

                  {/* Questions List */}
                  <Grid item xs={12} md={8}>
                    <Typography variant="h6" gutterBottom>
                      Recent Questions
                    </Typography>
                    {mockQuestions.map((question) => (
                      <Card key={question.id} sx={{ mb: 2 }}>
                        <CardContent>
                          <Box display="flex" alignItems="center" mb={2}>
                            <Avatar sx={{ mr: 2 }}>{question.avatar}</Avatar>
                            <Box>
                              <Typography variant="subtitle1">{question.user}</Typography>
                              <Typography variant="body2" color="text.secondary">
                                {question.timestamp}
                              </Typography>
                            </Box>
                            <Chip
                              label={question.status}
                              color={question.status === 'Answered' ? 'success' : 'warning'}
                              size="small"
                              sx={{ ml: 'auto' }}
                            />
                          </Box>
                          <Typography variant="h6" gutterBottom>
                            {question.title}
                          </Typography>
                          <Typography variant="body1" paragraph>
                            {question.content}
                          </Typography>
                          {question.images && (
                            <Box display="flex" gap={1} mb={2}>
                              {question.images.map((image, index) => (
                                <Card key={index} sx={{ width: 100, height: 100 }}>
                                  <CardMedia
                                    component="img"
                                    height="100"
                                    image={image}
                                    alt={`Question image ${index + 1}`}
                                  />
                                </Card>
                              ))}
                            </Box>
                          )}
                          <Box display="flex" alignItems="center">
                            <Chip
                              icon={<CommentIcon />}
                              label={question.responses + ' responses'}
                              variant="outlined"
                              size="small"
                            />
                          </Box>
                        </CardContent>
                      </Card>
                    ))}
                  </Grid>
                </Grid>
              </Box>
            )}

            {/* Success Stories Tab */}
            {tabValue === 1 && (
              <Box p={3}>
                <Grid container spacing={3}>
                  {mockSuccessStories.map((story) => (
                    <Grid item xs={12} md={6} key={story.id}>
                      <Card>
                        <CardContent>
                          <Box display="flex" alignItems="center" mb={2}>
                            <Avatar sx={{ mr: 2 }}>{story.avatar}</Avatar>
                            <Typography variant="subtitle1">{story.user}</Typography>
                          </Box>
                          <Typography variant="h6" gutterBottom>
                            {story.title}
                          </Typography>
                          <Typography variant="body1" paragraph>
                            {story.content}
                          </Typography>
                          {story.images && (
                            <CardMedia
                              component="img"
                              height="200"
                              image={story.images[0]}
                              alt="Success story image"
                              sx={{ borderRadius: 1, mb: 2 }}
                            />
                          )}
                          <Box display="flex" justifyContent="space-between">
                            <Button startIcon={<LikeIcon />} size="small">
                              {story.likes}
                            </Button>
                            <Button startIcon={<CommentIcon />} size="small">
                              {story.comments}
                            </Button>
                            <Button startIcon={<ShareIcon />} size="small">
                              {story.shares}
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Local Network Tab */}
            {tabValue === 2 && (
              <Box p={3}>
                <Grid container spacing={3}>
                  {mockLocalFarmers.map((farmer) => (
                    <Grid item xs={12} md={6} key={farmer.id}>
                      <Card>
                        <CardContent>
                          <Box display="flex" alignItems="center" mb={2}>
                            <Avatar sx={{ mr: 2 }}>{farmer.avatar}</Avatar>
                            <Box>
                              <Typography variant="h6">{farmer.name}</Typography>
                              <Typography variant="subtitle2">
                                Owner: {farmer.owner}
                              </Typography>
                            </Box>
                          </Box>
                          <Box display="flex" alignItems="center" mb={1}>
                            <LocationIcon sx={{ mr: 1 }} color="action" />
                            <Typography variant="body2" color="text.secondary">
                              {farmer.distance}
                            </Typography>
                          </Box>
                          <Typography variant="body1" paragraph>
                            Specialty: {farmer.specialty}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Open for: {farmer.collaboration}
                          </Typography>
                          <Box display="flex" justifyContent="flex-end" mt={2}>
                            <Button variant="outlined" size="small">
                              Connect
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* Ask Question Dialog */}
      <Dialog open={openAskDialog} onClose={() => setOpenAskDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Ask a Question</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Question Title"
            fullWidth
            value={newQuestion.title}
            onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Question Details"
            fullWidth
            multiline
            rows={4}
            value={newQuestion.content}
            onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
          />
          <Box mt={2}>
            <Button
              variant="outlined"
              startIcon={<ImageIcon />}
              component="label"
            >
              Add Images
              <input
                type="file"
                hidden
                accept="image/*"
                multiple
                onChange={(e) => {
                  // Handle image upload
                }}
              />
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAskDialog(false)}>Cancel</Button>
          <Button onClick={handleAskQuestion} variant="contained">
            Post Question
          </Button>
        </DialogActions>
      </Dialog>

      {/* Disease Identification Dialog */}
      <Dialog open={openDiseaseDialog} onClose={() => setOpenDiseaseDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>AI Disease Identification</DialogTitle>
        <DialogContent>
          <Typography variant="body1" paragraph>
            Upload an image of the affected plant for AI-powered disease identification.
          </Typography>
          <Box
            sx={{
              border: '2px dashed #ccc',
              borderRadius: 2,
              p: 3,
              textAlign: 'center',
              cursor: 'pointer',
              '&:hover': {
                borderColor: 'primary.main',
              },
            }}
            component="label"
          >
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => {
                // Handle image upload for disease identification
              }}
            />
            <ImageIcon sx={{ fontSize: 48, color: 'action.active', mb: 1 }} />
            <Typography>
              Click or drag and drop to upload an image
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDiseaseDialog(false)}>Cancel</Button>
          <Button
            onClick={handleDiseaseIdentification}
            variant="contained"
            disabled={!selectedImage}
          >
            Analyze Image
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
