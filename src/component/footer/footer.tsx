'use client';
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2F4F4F', // Dark Slate Gray
        color: 'white',
        py: 4,
        mt: 5,
      }}
    >
      <Container>
        <Grid container spacing={2}>
          {/* Links Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/about-us" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="/privacy-policy" color="inherit" underline="hover">
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                color="inherit"
                underline="hover"
              >
                Terms and Conditions
              </Link>
              <Link href="/faq" color="inherit" underline="hover">
                FAQ
              </Link>
            </Box>
          </Grid>
          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Email: support@knowledgehub.com
            </Typography>
            <Typography variant="body2">Phone: +1 234 567 890</Typography>
          </Grid>
          {/* Follow Us Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton href="#" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <YouTubeIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            textAlign: 'center',
            mt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            pt: 3,
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} KnowledgeHub. All rights reserved.
          </Typography>
          {/* Company logo */}
          <Box sx={{}} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: 'text.primary',
              fontWeight: 600,
              display: 'inline-block',
              letterSpacing: 1.5,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            Knowledge
            <span
              style={{
                color: '#2f27ce',
                fontWeight: 700,
                fontStyle: 'italic',
                textShadow: '2px 2px 6px rgba(47, 39, 206, 0.5)',
                fontSize: '25px',
              }}
            >
              H
            </span>
            ub
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
