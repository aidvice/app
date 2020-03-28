import Geolocation from '@react-native-community/geolocation';
import PermissionsAndroid, { Platform } from 'react-native';

const getUserLocationAndroid = () => new Promise((res, rej) => {
  PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  )
    .then((granted) => {
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Acesso a geolocalizacao foi aceita!!!');
        Geolocation.getCurrentPosition(res, rej, {
          enableHighAccuracy: true,
          timeout: 20000,
        });
      } else {
        rej(Error('Acesso a geolocalizacao foi negada!'));
      }
    })
    .catch((e) => {
      rej(e);
    });
});

const getUserLocationIOS = () => new Promise((res, rej) => {
  Geolocation.getCurrentPosition(res, rej, {
    enableHighAccuracy: true,
    timeout: 20000,
  });
});

export function getLocation() {
  return Platform.OS === 'ios'
    ? getUserLocationIOS()
    : getUserLocationAndroid();
}
