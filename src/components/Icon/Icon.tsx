import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface IconProps {
  name: string;
  color: string;
  size?: number;
}
const Icon = (props: IconProps) => {
  const {name, color, size = 30} = props;

  return <AntDesign name={name} size={size} color={color} />;
};

export default Icon;
