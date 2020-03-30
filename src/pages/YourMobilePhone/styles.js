import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { COLORS } from '../../global/colors';

const { height } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #6461FF;
  align-items: center;
  justify-content: center;
`;

export const ContainerWhite = styled.View`
  width: 100%;
  height: ${height / 2};
  background: ${COLORS.BORDER_GRAY};
  position: absolute;
  bottom: 0;
  z-index: -1;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: ${COLORS.TEXT_BLACK};
  margin-bottom: 10px;
`;

export const Logo = styled.Image`
  position: absolute;
  top: 0;
  margin-top: 100px;
  height: 120px;
  width: 120px;
`;

export const ContainerForm = styled.View`
  background: ${COLORS.WHITE};
  border-radius: 8px;
  width: 80%;
  padding: 20px;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.03);
`;
