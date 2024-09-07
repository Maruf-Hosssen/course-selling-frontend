import { decodedToken } from '@/utils/jwtDecode';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage';

export const authKey = 'accessToken';
export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  //   console.log(accessToken);
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
    };
  }
};
