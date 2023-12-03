import React, { useState } from 'react';
import { Actionsheet, useDisclose, Input, Text } from 'native-base';

type Props = {
  items: number[];
  placeholder: string;
  title: string;
  onItemPressed: (value: number) => void;
  initialSelectedValue: number;
};

export const ActionSheet = (props: Props) => {
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
      <Input
        editable={false}
        value={selectedValue + ' ' + placeholder}
        onPressIn={onPressIn}
      />
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
