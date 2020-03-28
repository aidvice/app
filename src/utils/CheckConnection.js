import NetInfo from '@react-native-community/netinfo';

export const CheckConnection = (error) => NetInfo.fetch()
  .then((state) => {
    let message = '';

    if (!state.isConnected) {
      message = 'Você precisa estar conectado a internet para carregar os dados.';
    } else if (error === 'Network Error') {
      message = 'Erro ao conectar com o servidor!';
    } else {
      message = error;
    }
    return message;
  })
  .catch((err) => err);
