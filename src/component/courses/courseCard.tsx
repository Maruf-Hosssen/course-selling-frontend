import { Box } from '@mui/material';
import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material';
import Image from 'next/image';
const course = {
  image:
    'https://img.freepik.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?t=st=1724659535~exp=1724663135~hmac=2cc6cf7a030e52491e6e483170dafbafab9b998d337f936429e87cd5db030786&w=900',
  name: 'Web Development Mastery',
  description:
    'Become a full-stack web developer with hands-on projects and expert instruction.',
  rating: 4.5,
  ratingCount: 120,
  price: 49.99,
};

const CourseCard = () => {
  return (
    <Card sx={{ maxWidth: 320 }}>
      {/* Course Image */}
      <CardMedia
        component="img"
        height="100px"
        image={course.image}
        alt={course.name}
      />

      {/* Course Details */}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {course.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.description}
        </Typography>
        {/* Course Rating */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Rating value={course.rating} readOnly precision={0.5} />
          <Typography variant="body2" sx={{ ml: 0.5 }}>
            ({course.ratingCount})
          </Typography>
        </Box>
        {/* Course Price */}
        <Typography variant="h6" color="primary">
          ${course.price}
        </Typography>
      </CardContent>
      {/* Enroll Button */}
      <CardActions>
        <Button size="large" variant="contained" color="primary" fullWidth>
          Enroll Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
