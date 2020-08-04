import React, {useEffect, useState} from 'react';
import locationService from '../../services/locationApi';

function useLocation(coords) {
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCityNameByCoords(coords) {
      try {
        const response = await locationService.getAddressInfoByCoords({
          ...coords,
        });

        setCity(response.data.address.city);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    getCityNameByCoords(coords);
  }, [coords]);

  return {city, isLoading};
}

export default useLocation;
