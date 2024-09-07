'use client';
import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link as MuiLink,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';

import { registerUser } from '@/service/action/registerUser';
import { toast } from 'react-toastify';
import { userLogin } from '@/service/action/loginUser';
import { useRouter } from 'next/navigation';
import { storeUserInfo } from '@/service/auth.service';

interface IFormInput {
  username: string;
  email: string;
  password: string;
  role: string;
}
const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    defaultValues: {
      role: 'user', // Set default value to 'user'
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data: FieldValues) => {
    console.log(data);
    try {
      const res = await registerUser(data);

      if (res?.data?._id) {
        toast.success('User registered successfully');
        const result = await userLogin({
          username: data?.username,
          password: data?.password,
        });
        if (result?.data?.token) {
          storeUserInfo({ accessToken: result?.data?.token });
          reset();
          router.push('/');
        }
      }
    } catch (err: any) {
      console.log(err.message);
    }
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
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
          Create Your Account
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 3 }}>
          Please fill in the details to register.
        </Typography>

        {/* Form */}
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ textAlign: 'left' }}
        >
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            {...register('username', { required: 'Username is required' })}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            {...register('password', { required: 'Password is required' })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select label="Role" defaultValue="user" {...register('role')}>
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2 }}
          >
            Register
          </Button>
        </Box>

        {/* Sign In Link */}
        <Typography variant="body2">
          Already have an account?{' '}
          <MuiLink href="/login" sx={{ fontWeight: 600 }}>
            Sign In
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterPage;
