import { Box, Typography } from '@mui/material';
import React from 'react';
import learning from '../../assets/learning.png';
import content from '../../assets/content.png';
import tool from '../../assets/tool.png';
import Image from 'next/image';

const Why = () => {
  return (
    <Box sx={{ mt: { xs: '40px', md: '80px' }, padding: '20px' }}>
      <Typography
        sx={{ fontWeight: 600, color: 'text.primary', textAlign: 'center' }}
        variant="h4"
      >
        Why KnoledgeHub works?
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column' },
          gap: { md: 6, xs: 2 },
          mt: { md: '40px', xs: '30px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <Image src={learning} alt="learning" height={100} width={100}></Image>
          <Typography sx={{ fontSize: '25px', color: 'text.seconday' }}>
            Personalized learning
          </Typography>
          <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
            Students practice at their own pace, first filling in gaps in their
            understanding and then accelerating their learning.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            gap: { md: 3, xs: 2 },
          }}
        >
          <Image src={content} alt="content" height={100} width={100}></Image>
          <Typography sx={{ fontSize: '25px', color: 'text.seconday' }}>
            Trusted content
          </Typography>
          <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
            Created by experts, Khan Academy’s library of trusted,
            standards-aligned practice and lessons covers math K-12 through for
            learners and teachers.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <Image src={tool} alt="tool" height={100} width={100}></Image>
          <Typography sx={{ fontSize: '25px', color: 'text.seconday' }}>
            Tools to empower teachers
          </Typography>
          <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
            With Khan Academy, teachers can identify gaps in their students’
            understanding, tailor instruction, and meet the needs of every
            student.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Why;
