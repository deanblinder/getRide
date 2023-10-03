import React from 'react';
import { Skeleton, VStack, Center, NativeBaseProvider } from 'native-base';
import { Card } from '@rneui/base';
import { FlatList } from 'react-native';

type Props = {
  numberOfItems?: number;
};

const rideCardSkeleton = (props: Props) => {
  const { numberOfItems = 3 } = props;
  const skeletonRepeatTimes = new Array(numberOfItems).fill(0);

  const skeletons = () => {
    return (
      <NativeBaseProvider>
        <Card>
          <Skeleton
            borderWidth={1}
            borderColor="coolGray.200"
            endColor="warmGray.50"
            size="10"
            rounded="full"
            marginBottom={'10%'}
          />
          <Skeleton.Text />
        </Card>
      </NativeBaseProvider>
    );
  };

  return <FlatList data={skeletonRepeatTimes} renderItem={skeletons} />;
};

export default rideCardSkeleton;
