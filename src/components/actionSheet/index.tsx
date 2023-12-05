import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Actionsheet, useDisclose, Input, Text } from 'native-base';
import { useTranslation } from 'react-i18next';

type Props = {
  items: number[];
  placeholder: string;
  title: string;
  onItemPressed: (value: number) => void;
  initialSelectedValue: number;
};

export const ActionSheet = (props: Props) => {
  const { i18n } = useTranslation();

  const { items, placeholder, title, onItemPressed, initialSelectedValue } =
    props;

  const [selectedValue, setSelectedValue] = useState(initialSelectedValue);

  const { isOpen, onOpen, onClose } = useDisclose();

  const handleItemPress = (item: number) => {
    onItemPressed(item);
    setSelectedValue(item);
    onClose();
  };

  const onPressIn = () => {
    onOpen();
  };

  return (
    <>
      <TouchableOpacity onPress={onPressIn}>
        <Input
          textAlign={i18n.language === 'he' ? 'right' : 'left'}
          onPressIn={onPressIn}
          editable={false}
          value={selectedValue + ' ' + placeholder}
        />
      </TouchableOpacity>
      <Actionsheet isOpen={isOpen} onClose={onClose} zIndex={100000}>
        <Actionsheet.Content>
          <Text fontSize={'lg'}>{title}</Text>

          {items.map((item: number, index: number) => {
            return (
              <Actionsheet.Item
                key={index}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                onPress={() => handleItemPress(item)}
              >
                {item}
              </Actionsheet.Item>
            );
          })}
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
export default ActionSheet;
