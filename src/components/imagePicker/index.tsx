// ...rest of the import statements remain unchanged
import { Button } from 'native-base';

export type Props = {
  pickImageAsync: () => void;
};

const MyImagePicker = (props: Props) => {
  const { pickImageAsync } = props;
  return <Button onPress={pickImageAsync}>Choose</Button>;
};
export default MyImagePicker;
