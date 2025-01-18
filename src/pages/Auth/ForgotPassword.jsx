import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Paper,
  Container,
  CircularProgress
} from '@mui/material';
import AuthService from '../../services/AuthService';
import { validateEmail } from '../../utils/passwordValidation';
import '../../styles/Auth.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      await AuthService.forgotPassword(email);
      setSuccess('Password reset instructions have been sent to your email');
      setEmail('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
            Reset Password
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
            Enter your email to receive password reset instructions
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2, width: '100%' }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2, width: '100%' }}>
              {success}
            </Alert>
          )}

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Reset Password'}
            </Button>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2">
                Remember your password?{' '}
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
