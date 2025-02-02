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
      <Toolbar sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 'max-content' }}>
          <StyledLink to="/" className="nav-brand">
            FarmWisdom
          </StyledLink>
          <Box sx={{ 
            display: 'flex', 
            gap: 1, 
            ml: 2, 
            alignItems: 'center',
            flexWrap: 'nowrap',
            '& .MuiButton-root': {
              minWidth: 'auto',
              px: 1.5,
              whiteSpace: 'nowrap',
              fontSize: '0.875rem'
            }
          }}>
            <StyledLink to="/beginner">
              <Button color="inherit">Beginner Guide</Button>
            </StyledLink>
            <StyledLink to="/resources">
              <Button color="inherit">Resources</Button>
            </StyledLink>
            <StyledLink to="/state-resources">
              <Button 
                color="inherit"
                sx={{
                  background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
                  }
                }}
              >
                State Resources
              </Button>
            </StyledLink>
            <StyledLink to="/bloopers">
              <Button 
                color="inherit"
                sx={{
                  background: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #f57c00 0%, #ef6c00 100%)',
                  }
                }}
              >
                Bloopers
              </Button>
            </StyledLink>
            <StyledLink to="/gleaning-programs">
              <Button 
                color="inherit"
                sx={{ 
                  background: 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #388e3c 0%, #2e7d32 100%)',
                  }
                }}
              >
                Gleaning Programs
              </Button>
            </StyledLink>
            <StyledLink to="/beginner-farmer">
              <Button 
                color="inherit"
                sx={{ 
                  background: 'linear-gradient(135deg, #8bc34a 0%, #689f38 100%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #689f38 0%, #558b2f 100%)',
                  }
                }}
              >
                Beginner Farmer
              </Button>
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
            <StyledLink to="/market-intelligence">
              <Button 
                color="inherit"
                sx={{
                  background: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #f57c00 0%, #e65100 100%)',
                  }
                }}
              >
                Market Intelligence
              </Button>
            </StyledLink>
            <StyledLink to="/resource-optimization">
              <Button 
                color="inherit"
                sx={{
                  background: 'linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #7b1fa2 0%, #4a148c 100%)',
                  }
                }}
              >
                Resource Optimization
              </Button>
            </StyledLink>
            <StyledLink to="/equipment-management">
              <Button 
                color="inherit"
                sx={{
                  background: 'linear-gradient(135deg, #607d8b 0%, #455a64 100%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #455a64 0%, #263238 100%)',
                  }
                }}
              >
                Equipment Management
              </Button>
            </StyledLink>
            <StyledLink to="/community-hub">
              <Button 
                color="inherit"
                sx={{
                  background: 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #388e3c 0%, #2e7d32 100%)',
                  }
                }}
              >
                Community Hub
              </Button>
            </StyledLink>
            <StyledLink to="/farm-designs">
              <Button 
                color="inherit"
                sx={{
                  background: 'linear-gradient(135deg, #795548 0%, #5d4037 100%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #5d4037 0%, #3e2723 100%)',
                  }
                }}
              >
                Farm Designs
              </Button>
            </StyledLink>
            <Button
              component={Link}
              to="/demo"
              color="inherit"
              sx={{ whiteSpace: 'nowrap' }}
            >
              Try Demo
            </Button>
            <Button
              component={Link}
              to="/resources"
              color="inherit"
              sx={{ whiteSpace: 'nowrap' }}
            >
              Articles
            </Button>
            <Button
              component={Link}
              to="/resource-directory"
              color="inherit"
              sx={{ whiteSpace: 'nowrap' }}
            >
              Resource Directory
            </Button>
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
