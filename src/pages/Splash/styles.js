import styled from 'styled-components/native';
import { COLORS } from '../../global/colors';

export const Container = styled.View`
  flex: 1;
  background: ${COLORS.COLOR_MAIN};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;
