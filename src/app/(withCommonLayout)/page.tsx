import Banner from '@/component/banner/banner';
import Courses from '@/component/courses/course';
import Goals from '@/component/gaols/Goals';
import Trusted from '@/component/trusted/Trusted';
import { Box, Container } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <Box sx={{ mx: { md: '10%', xs: '5%' } }}>
      <Banner></Banner>
      <Trusted></Trusted>
      <Courses></Courses>
      <Goals></Goals>
    </Box>
  );
};

export default HomePage;
