import React from 'react';
import { Text, View } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

type Props = {
  title: string;
  subtitle: string;
  icon: any;
};

const AboutParagraph = (props: Props) => {
  const { i18n, t } = useTranslation();
  const { title, subtitle, icon } = props;

  return (
    <>
      <View flexDirection={i18n.language === 'he' ? 'row-reverse' : 'row'}>
        <View marginTop={'3px'} marginLeft={'2%'}>
          <AntDesign color={'green'} name={icon} size={20} />
        </View>
        <Text
          marginLeft={'2%'}
          fontSize={'lg'}
          fontFamily={'Roboto-Regular'}
          marginBottom={'2%'}
        >
          {t(title)}
        </Text>
      </View>
      <Text
        textAlign={i18n.language === 'he' ? 'right' : 'left'}
        fontSize={'md'}
        fontFamily={'Roboto-Regular'}
        marginBottom={'2%'}
      >
        {t(subtitle)}
      </Text>
    </>
  );
};
export default AboutParagraph;
