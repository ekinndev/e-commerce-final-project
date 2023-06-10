import { Button } from '@mui/material';
import { useGlobalContext } from '../context/globalCtx';
import { ActionType } from '../context/globalReducer';
import apiClient from '../lib/api';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const Profile = () => {
  const { state, dispatch } = useGlobalContext();
  const router = useRouter();

  const onLogout = async () => {
    await apiClient.delete('/user/logout');
    toast.error('Logged out');
    dispatch({ type: ActionType.CLEAR_PROFILE });
    router.replace('/');
  };

  return (
    <div className="flex flex-col container mx-auto py-10">
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="text-xl">Name: {state.profile?.name}</p>
      <p className="text-xl">Email: {state.profile?.email}</p>
      <Button type="button" color="error" className="w-min" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Profile;
