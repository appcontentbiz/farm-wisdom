import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { AppBar, Toolbar, Button, Box, styled } from '@mui/material';
import '../../styles/Navbar.css';

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit'
});

const EnterpriseButton = styled(Button)({
  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '8px',
  fontWeight: 600,
  fontSize: '1.1em',
  margin: '0 15px',
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(79, 70, 229, 0.3)'
  }
});

export default function Navbar() {
  const navigate = useNavigate();
  const { userRole, isAuthenticated, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: 'white' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <StyledLink to="/" className="nav-brand">
            FarmWisdom
          </StyledLink>
          <Box sx={{ display: 'flex', gap: 2, ml: 4, alignItems: 'center' }}>
            <StyledLink to="/beginner">
              <Button color="inherit">Beginner Guide</Button>
            </StyledLink>
            <StyledLink to="/resources">
              <Button color="inherit">Resources</Button>
            </StyledLink>
            <StyledLink to="/smart-crop-planning">
              <Button 
                color="inherit"
                sx={{
                  background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
                  }
                }}
              >
                Smart Crop Planning
              </Button>
            </StyledLink>
            <StyledLink to="/precision-weather">
              <Button 
                color="inherit"
                sx={{
                  background: 'linear-gradient(135deg, #03a9f4 0%, #0288d1 100%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0288d1 0%, #01579b 100%)',
                  }
                }}
              >
                Precision Weather
              </Button>
            </StyledLink>
            <StyledLink to="/demo">
              <Button color="inherit">Try Demo</Button>
            </StyledLink>
            <StyledLink to="/try-enterprise">
              <EnterpriseButton variant="contained">
                Try Enterprise ERP 
              </EnterpriseButton>
            </StyledLink>
            <StyledLink to="/weather">
              <Button color="inherit">Weather</Button>
            </StyledLink>
            <StyledLink to="/market">
              <Button color="inherit">Market Prices</Button>
            </StyledLink>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <StyledLink to="/pricing">
            <Button variant="outlined" color="primary">Upgrade</Button>
          </StyledLink>
          {!isAuthenticated ? (
            <>
              <StyledLink to="/signin">
                <Button variant="outlined" color="primary">Sign In</Button>
              </StyledLink>
              <StyledLink to="/signup">
                <Button variant="contained" color="primary">Sign Up</Button>
              </StyledLink>
            </>
          ) : (
            <>
              <StyledLink to="/dashboard">
                <Button variant="outlined" color="primary">Dashboard</Button>
              </StyledLink>
              <Button 
                variant="outlined" 
                color="error" 
                onClick={handleLogout}
              >
                Sign Out
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
