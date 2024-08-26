import { Box, Typography } from '@mui/material';
import React from 'react';
import samsung from '../../assets/samsung.png';
import apple from '../../assets/apple.png';
import amazon from '../../assets/amazon.png';
import microsoft from '../../assets/microsoft.png';
import meta from '../../assets/meta.png';
import Image from 'next/image';

const Trusted = () => {
  return (
    <Box sx={{ mt: { xs: '20px', md: '40px' } }}>
      <Typography
        sx={{ color: 'text.secondary', textAlign: 'justify', fontSize: '20px' }}
        style={{ textAlign: 'center' }}
      >
        Trusted by over 15,000 companies and millions of learners around the
        world
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Optional: add space between images
          alignItems: 'center', // Optional: vertically align images
          padding: '20px',
          gap: 3,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Image src={samsung} alt="samsung" width={100} height={200} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Image src={apple} alt="apple" width={80} height={200} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Image src={amazon} alt="amazon" width={100} height={200} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Image src={microsoft} alt="microsoft" width={100} height={200} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Image src={meta} alt="microsoft" width={100} height={200} />
        </Box>
      </Box>
    </Box>
  );
};

export default Trusted;
