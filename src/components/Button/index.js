/* eslint-disable react/prop-types */
import React from 'react';

import { ButtonCustom } from './styles';

export default function Button(props) {
  const {
    disabled, text, onPress, style,
  } = props;

  return (
    <ButtonCustom
      style={style}
      disabled={disabled}
      labelStyle={{ color: 'white' }}
      onPress={onPress}
    >
      {text}
    </ButtonCustom>
  );
}
