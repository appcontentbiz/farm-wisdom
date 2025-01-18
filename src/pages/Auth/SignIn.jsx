import { useState } from 'react';
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
  Divider
} from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';
import AuthService from '../../services/AuthService';
import { validateEmail } from '../../utils/passwordValidation';
import '../../styles/Auth.css';

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      await AuthService.login(formData.email, formData.password);
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
            Welcome Back
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
            Sign in to continue your farming journey
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
              error={error && error.includes('password')}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Sign In'}
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <Link to="/forgot-password" className="auth-link">
                Forgot password?
              </Link>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2">
                Don't have an account?{' '}
                <Link to="/signup" className="auth-link">
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
