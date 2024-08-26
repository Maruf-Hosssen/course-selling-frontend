'use client';
import { AppBar, Box, Button, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import CourseCard from './courseCard';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Courses = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ mt: { xs: '40px', md: '80px' }, padding: '20px' }}>
      <Typography sx={{ fontWeight: 600, color: 'text.primary' }} variant="h4">
        A broad selection of courses
      </Typography>
      <Typography
        sx={{ color: 'text.secondary', textAlign: 'justify', mt: '10px' }}
      >
        Trusted by over 15,000 companies and millions of learners around the
        world
      </Typography>

      {/* tabs */}

      <Box sx={{ width: '100%', mt: '10px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="basic tabs example"
            sx={{ ml: '-15px' }}
          >
            <Tab label="Web Development" {...a11yProps(0)} />
            <Tab label="Software Engineering" {...a11yProps(1)} />
            <Tab label="Cyber Security" {...a11yProps(2)} />
            <Tab label="Machine Learning" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Typography
            sx={{ fontWeight: 600, color: 'primary.main' }}
            variant="h5"
          >
            Master the Art of Web Development
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              textAlign: 'justify',
              mt: '10px',
              width: { md: '50%', xs: '100%' },
            }}
          >
            Build Dynamic and Responsive Websites with the Latest Web
            Technologies.Start with Frontend Fundamentals and Advance to Full
            Stack Mastery.Unlock the Power of Coding and Create Seamless User
            Experiences.
          </Typography>
          <Button
            variant="outlined"
            style={{ marginTop: '10px', color: 'text.primary' }}
          >
            Explore More
          </Button>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item Four
        </CustomTabPanel>
      </Box>
      {/* course section */}
      <CourseCard></CourseCard>
    </Box>
  );
};

export default Courses;
