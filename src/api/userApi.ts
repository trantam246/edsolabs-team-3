import { LoginPayload } from './../redux/slices/authSlice';
import axiosClient from 'api';
const userApi = {
  login(data: LoginPayload) {
    const url =
      'https://staginggw.defiforyou.uk/defi-user-service/public-api/v1.0.0/users/login';
    return axiosClient.post(url, data);
  },
  getNameAcc(data: any) {
    const url =
      'https://staginggw.defiforyou.uk/defi-user-service/api/v1.0.0/users/profile';
    let config = { headers: { Authorization: 'Bearer ' + data } };
    return axiosClient.get(url, config);
  },
  register(data: any) {
    console.log('api', data);
    const url =
      'https://staginggw.defiforyou.uk/defi-user-service/public-api/v1.0.0/users/signup';
    return axiosClient.post(url, data);
  },
};
export default userApi;
