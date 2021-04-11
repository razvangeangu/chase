import React from 'react';
import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

export default function Input({
  label,
  ...props
}: // eslint-disable-next-line react/require-default-props
TextInputProps & { label?: string }) {
  return (
    <>
      <Label numberOfLines={1}>{label}</Label>
      <StyledInput {...props} />
    </>
  );
}

const Label = styled.Text`
  color: ${p => p.theme.textSecondary};
  font-size: 12px;
  margin-bottom: 4px;
`;

const StyledInput = styled.TextInput`
  border: 1px solid ${p => p.theme.border};
  border-radius: 4px;
  color: ${p => p.theme.surface.text};
  padding: 8px 12px;
`;
