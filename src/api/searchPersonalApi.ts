import axiosClient from 'api';
const SearchPersonalApi = {
  search() {
    const url =
      'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/pawn-shop/search-p2p-lenders?status=3&size=10';
    return axiosClient.get(url);
  },
};
export default SearchPersonalApi;
