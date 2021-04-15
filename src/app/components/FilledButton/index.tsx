import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export interface FilledButtonProps
  extends Pick<
    typeof TouchableOpacity extends React.ComponentType<infer T> ? T : never,
    'onPress' | 'testID'
  > {
  title: string;
}

export default function FilledButton({
  title,
  onPress,
  testID,
}: FilledButtonProps) {
  return (
    <StyledTouchableOpacity testID={testID} onPress={onPress}>
      <Title>{title}</Title>
    </StyledTouchableOpacity>
  );
}

const StyledTouchableOpacity = styled(TouchableOpacity)`
  background-color: ${p => p.theme.primary};
  border-radius: 20px;
  padding: 12px 4px;
`;

const Title = styled.Text`
  color: ${p => p.theme.text};
  text-align: center;
`;
