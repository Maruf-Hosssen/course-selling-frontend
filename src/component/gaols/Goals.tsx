import { Avatar, Box, Divider, Typography } from '@mui/material';
import React from 'react';

const Goals = () => {
  return (
    <Box sx={{ mt: { xs: '40px', md: '80px' }, padding: '20px' }}>
      <Typography sx={{ fontWeight: 600, color: 'text.primary' }} variant="h4">
        How learners like you are achieving their goals
      </Typography>
      <Box
        sx={{
          display: { xs: 'block', md: 'flex' },
          gap: 3,
          mt: { md: '40px', xs: '30px' },
        }}
      >
        <Box
          sx={{
            flex: 1,
            border: '1px solid rgba(0, 0, 0, 0.2);',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: '25px' }}>
            &quot;
          </Typography>
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
            I am proud to say that after a few months of taking this course...I
            passed my exam and am now an AWS Certified Cloud Practitioner! This
            content was exactly what the CCP exam covered.
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: '25px' }}>
            &quot;
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Avatar alt="Wemy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>
              Will A
            </Typography>
          </Box>
          <Divider sx={{ mt: '15px' }}></Divider>
          <Box sx={{ mt: '15px', color: 'info.main' }}>
            <Typography sx={{ fontWeight: 500, mb: 1 }}>
              Course Completed:{' '}
              <strong>AWS Certified Cloud Practitioner</strong>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            border: '1px solid rgba(0, 0, 0, 0.2);',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: '25px' }}>
            &quot;
          </Typography>
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
            This course helped me freshen up on my product manager skills and
            land a job at Facebook! Thanks guys .
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: '25px' }}>
            &quot;
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>
              Ron F
            </Typography>
          </Box>
          <Divider sx={{ mt: '15px' }}></Divider>
          <Box sx={{ mt: '15px', color: 'info.main' }}>
            <Typography sx={{ fontWeight: 500, mb: 1 }}>
              Course Completed:{' '}
              <strong>AWS Certified Cloud Practitioner</strong>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            border: '1px solid rgba(0, 0, 0, 0.2);',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: '25px' }}>
            &quot;
          </Typography>
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
            One of the best courses on management and leadership I have come
            across so far. The advice is practical, and examples highly
            relatable. Would help anyone become a better manager.
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: '25px' }}>
            &quot;
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar alt="Pemy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>
              Phillip W
            </Typography>
          </Box>
          <Divider sx={{ mt: '15px' }}></Divider>
          <Box sx={{ mt: '15px', color: 'info.main' }}>
            <Typography sx={{ fontWeight: 500, mb: 1 }}>
              Course Completed:{' '}
              <strong>AWS Certified Cloud Practitioner</strong>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Goals;
