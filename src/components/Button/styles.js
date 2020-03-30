import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { COLORS } from '~/global/colors';

export const ButtonCustom = styled(Button)`
  background: ${(props) => (props.disabled ? COLORS.PURPLE_TRANSPARENT : COLORS.PURPLE)};
  top: 20px;
  padding: 10px;
  margin-left: 40px;
  margin-right: 40px;
  border-radius: 8px;
`;
