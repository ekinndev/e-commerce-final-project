import { Button, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useGlobalContext } from '../context/globalCtx';
import { ActionType } from '../context/globalReducer';
import apiClient from '../lib/api';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

type Inputs = {
  email: string;
  password: string;
  name: string;
  password2: string;
};

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { dispatch } = useGlobalContext();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    if (data.password !== data.password2) {
      return toast('Passwords do not match');
    }

    const profile = await apiClient.post('/user/register', {
      email: data.email,
      password: data.password,
      name: data.name,
    });
    dispatch({ type: ActionType.SET_PROFILE, data: profile.data });
    toast.success('Account created');
    router.replace('/');
  };

  return (
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="text-4xl font-bold">Sign up</h1>
      <form className="flex flex-col w-full max-w-[560px] gap-y-4 my-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center ">
          <label className="text-xl font-bold">Email</label>
          <TextField className="w-full" type="email" {...register('email')} />
        </div>
        <div className="flex flex-col justify-center ">
          <label className="text-xl font-bold">Name</label>
          <TextField className="w-full" type="text" {...register('name')} />
        </div>
        <div className="flex flex-col justify-center ">
          <label className="text-xl font-bold">Password</label>
          <TextField label="Password" type="password" className="w-full" {...register('password')} />
        </div>
        <div className="flex flex-col justify-center ">
          <label className="text-xl font-bold">Password</label>
          <TextField label="Password2" type="password" className="w-full" {...register('password2')} />
        </div>
        <Button variant="outlined" type="submit">
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default Signin;
