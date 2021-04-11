import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

type ExtractProps<P> = P extends React.ComponentType<infer T> ? T : never;
export interface FlatButtonProps
  extends Pick<ExtractProps<typeof TouchableOpacity>, 'onPress'> {
  title: string;
}

export default function FilledButton({ title, onPress }: FlatButtonProps) {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <Title>{title}</Title>
    </StyledTouchableOpacity>
  );
}

const StyledTouchableOpacity = styled(TouchableOpacity)`
  padding: 12px 4px;
`;

const Title = styled.Text`
  color: ${p => p.theme.primary};
  text-align: center;
`;
