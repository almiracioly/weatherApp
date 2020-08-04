import React, {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';

function usePermissions(togglePermissionPrompt) {
  const [allWasGranted, setAllWasGranted] = useState(false);

  useEffect(() => {
    async function checkPermissions() {
      const allWasGranted = await multiplePermissionsRequest([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);
      setAllWasGranted(allWasGranted);
    }

    checkPermissions();
  }, [togglePermissionPrompt]);
  return allWasGranted;
}

export default usePermissions;

async function multiplePermissionsRequest(permissions) {
  try {
    const responses = await PermissionsAndroid.requestMultiple(permissions);
    const deniedPermissions = Object.values(responses).filter(
      (response) => response === 'denied',
    );
    if (deniedPermissions.length) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    throw new Error('Não foi possível solicitar permissões de acesso!');
  }
}
