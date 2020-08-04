import locationApiClient from '../configs/axios/locationApiClient';

const locationService = {
  getAddressInfoByCoords: (params) => locationApiClient.get('', {params}),
};

export default locationService;
