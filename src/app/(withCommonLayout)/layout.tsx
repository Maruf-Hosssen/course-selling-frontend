import Footer from '@/component/footer/footer';
import Navbar from '@/component/navbar/navbar';
import { Box } from '@mui/material';
import React from 'react';
import HomePage from './page';

const layout = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Footer></Footer>
    </Box>
  );
};

export default layout;
