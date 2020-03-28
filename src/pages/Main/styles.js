import styled from 'styled-components/native';
import { COLORS } from '../../global/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${COLORS.COLOR_MAIN};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
font-size: 20px;
color: ${COLORS.WHITE};
`;
