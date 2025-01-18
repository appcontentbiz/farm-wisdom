import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Paper,
  Container,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  Check as CheckIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import AuthService from '../../services/AuthService';
import { validatePassword, validateEmail } from '../../utils/passwordValidation';
import '../../styles/Auth.css';

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    farmingExperience: 'beginner'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordValidations, setPasswordValidations] = useState([]);

  useEffect(() => {
    if (formData.password) {
      const validation = validatePassword(formData.password);
      setPasswordStrength(validation.strength);
      setPasswordValidations(validation.messages);
    }
  }, [formData.password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      setError('Please fix password requirements');
      return;
    }

    setLoading(true);

    try {
      await AuthService.register(formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      if (provider === 'google') {
        await AuthService.googleLogin();
      } else if (provider === 'facebook') {
        await AuthService.facebookLogin();
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 40) return 'error';
    if (passwordStrength < 70) return 'warning';
    return 'success';
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} className="auth-card">
          <Typography component="h1" variant="h5">
            Create Account
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
            Join our farming community today
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2, width: '100%' }}>
              {error}
            </Alert>
          )}

          <Box sx={{ width: '100%', mb: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={() => handleSocialLogin('google')}
              sx={{ mb: 1 }}
            >
              Continue with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FacebookIcon />}
              onClick={() => handleSocialLogin('facebook')}
            >
              Continue with Facebook
            </Button>
          </Box>

          <Divider sx={{ width: '100%', mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              OR
            </Typography>
          </Divider>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              error={error && error.includes('email')}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
              error={passwordValidations.length > 0}
            />
            {formData.password && (
              <Box sx={{ width: '100%', mb: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={passwordStrength}
                  color={getPasswordStrengthColor()}
                  sx={{ height: 8, borderRadius: 4 }}
                />
                <List dense>
                  {passwordValidations.map((validation, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CloseIcon color="error" />
                      </ListItemIcon>
                      <ListItemText primary={validation} />
                    </ListItem>
                  ))}
                  {passwordValidations.length === 0 && (
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary="Password meets all requirements" />
                    </ListItem>
                  )}
                </List>
              </Box>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={loading}
              error={formData.confirmPassword && formData.password !== formData.confirmPassword}
              helperText={
                formData.confirmPassword && formData.password !== formData.confirmPassword
                  ? 'Passwords do not match'
                  : ''
              }
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="farming-experience-label">Farming Experience</InputLabel>
              <Select
                labelId="farming-experience-label"
                id="farmingExperience"
                name="farmingExperience"
                value={formData.farmingExperience}
                label="Farming Experience"
                onChange={handleChange}
                disabled={loading}
              >
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading || passwordValidations.length > 0}
            >
              {loading ? <CircularProgress size={24} /> : 'Sign Up'}
            </Button>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2">
                Already have an account?{' '}
                <Link to="/signin" className="auth-link">
                  Sign In
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
