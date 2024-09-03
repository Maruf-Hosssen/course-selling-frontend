import React from 'react';
import Layout from './(withCommonLayout)/layout';
import Navbar from '@/component/navbar/navbar';
import Footer from '@/component/footer/footer';

const page = () => {
  return (
    <>
      <Navbar></Navbar>
      <Layout></Layout>
      <Footer></Footer>
    </>
  );
};

export default page;
