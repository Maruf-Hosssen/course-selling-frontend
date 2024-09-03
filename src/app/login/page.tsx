'use client';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import { useRouter } from 'next/navigation';

interface IFormInput {
  email: string;
  password: string;
}
const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f9fa',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '400px',
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        {/* Logo */}

        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
          Welcome Back!
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 3 }}>
          Log in with your email and password
        </Typography>

        {/* Form */}
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ textAlign: 'left' }}
        >
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            {...register('email', { required: 'Email is required' })}
            error={!!errors.email}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            {...register('password', { required: 'Password is required' })}
            error={!!errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Log In
          </Button>
        </Box>

        {/* Forgot Password */}
        <MuiLink href="#" sx={{ display: 'block', mb: 3 }}>
          Forgot Password?
        </MuiLink>

        {/* Sign Up Link */}
        <Typography variant="body2">
          Don’t have an account?{' '}
          <MuiLink href="/register" sx={{ fontWeight: 600 }}>
            Sign Up
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
