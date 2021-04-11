import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
import styled from 'styled-components/native';

export interface FlatButtonProps
  extends Pick<TouchableWithoutFeedbackProps, 'onPress'> {
  title: string;
}

export default function FilledButton({ title, onPress }: FlatButtonProps) {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <Title>{title}</Title>
    </StyledTouchableOpacity>
  );
}

const StyledTouchableOpacity = styled.TouchableOpacity`
  padding: 12px 4px;
`;

const Title = styled.Text`
  color: ${p => p.theme.primary};
  text-align: center;
`;
