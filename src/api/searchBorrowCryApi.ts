// import { LoginPayload } from './../redux/slices/authSlice';
import axiosClient from 'api';
const SearchBorrowCryApi = {
  search() {
    const url =
      'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/pawn-shop-package/search?collateralAmount=1000&collateralSymbols=ETH&durationQty=0&durationTypes=0&loanAmount=1200&loanSymbols=USDT&status=1&size=10&page=0';
    return axiosClient.get(url);
  },
};
export default SearchBorrowCryApi;
