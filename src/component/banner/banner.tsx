import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import banner from '../../assets/banner.png';

const Banner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        gap: { md: 4, xs: 2 },
        mt: { xs: '50px', md: '80px' },
        alignItems: 'center',
      }}
    >
      {/* banner heading */}
      <Box
        sx={{
          flex: {
            md: 1,
          },

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: { xs: 2, md: 3 },
          padding: { xs: 2, md: 3 },
        }}
      >
        <Typography
          sx={{ color: 'text.primary', textAlign: 'left', fontWeight: 600 }}
          variant="h3"
        >
          Unlock Your Potential with Expert-Led Courses
        </Typography>
        <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
          Learn new skills, gain knowledge, and transform your future—all from
          the comfort of your home. Explore a wide range of expert-led courses
          designed to help you achieve your goals, no matter where you are on
          your learning journey.
        </Typography>
        <Button
          sx={{
            backgroundColor: 'primary.main',
            color: 'primary.light',
            px: '15px',
            py: '8px',
            fontSize: '1rem',
          }}
        >
          Explore Now
        </Button>
      </Box>
      {/* banner image */}
      <Box
        sx={{
          flex: { md: 1 },

          width: '100%',
          padding: '20px',
        }}
      >
        <Image
          style={{ margin: '0px auto' }}
          src={banner}
          alt="banner"
          height={400}
          width={400}
        ></Image>
      </Box>
    </Box>
  );
};

export default Banner;
