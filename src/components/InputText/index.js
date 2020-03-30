import React from 'react';

import { Input } from './styles';

export default function InputText(props) {
  const { value, label, onChangeText } = props;

  const theme = {
    colors: {
      placeholder: '#444444',
      text: '#444444',
      primary: '#6461FF',
      underlineColor: '#6461FF',
    },
  };

  return (
    <Input
      outlined
      mode="outlined"
      value={value}
      label={label}
      onChangeText={onChangeText}
      autoCompleteType="off"
      theme={theme}
    />
  );
}
