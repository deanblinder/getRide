import React from 'react';
import { View, Text, Divider } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

export type Props = {
  title: string;
  icon: any;
  onPress: () => void;
  showDivider?: boolean;
};

export const ListItem = (props: Props) => {
  const { title, icon, onPress, showDivider = true } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        marginX={'5%'}
        flexDirection={'row'}
        marginY={'5%'}
        justifyContent={'space-between'}
      >
        <View flexDirection={'row'} alignItems={'center'}>
          <MaterialIcons name={icon} size={24} color="black" />
          <Text marginLeft={'15%'} fontFamily={'Roboto-Regular'} fontSize={15}>
            {title}
          </Text>
        </View>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
      <View marginLeft={'20%'}>{showDivider && <Divider />}</View>
    </TouchableOpacity>
  );
};
export default ListItem;
