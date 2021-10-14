import axiosClient from 'api';
const SearchLendCryApi = {
  search(param: any) {
    const url =
      'https://gwapi.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/pawn-shop/search-p2p-lenders';
    return axiosClient.get(url, { params: param });
  },
};
export default SearchLendCryApi;
