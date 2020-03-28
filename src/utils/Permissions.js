import PermissionsAndroid, { Platform } from 'react-native';

export async function getPermissions() {
  if (Platform.OS !== 'ios') {
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    ]).then((result) => {
      if (
        result['android.permission.ACCESS_COARSE_LOCATION']
        && result['android.permission.ACCESS_FINE_LOCATION']
        && result['android.permission.READ_EXTERNAL_STORAGE']
        && result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
      ) {
        return true;
      }
      if (
        result['android.permission.ACCESS_COARSE_LOCATION']
        || result['android.permission.ACCESS_FINE_LOCATION']
        || result['android.permission.READ_EXTERNAL_STORAGE']
        || result['android.permission.WRITE_EXTERNAL_STORAGE']
        === 'never_ask_again'
      ) {
        return false;
      }
      return false;
    });
  }
}
