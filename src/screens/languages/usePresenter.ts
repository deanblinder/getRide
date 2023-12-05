import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const usePresenter = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState('');

  useEffect(() => {
    loadSelectedLanguage();
  }, []);

  const onLanguageChange = async (item: any) => {
    await saveSelectedLanguage(item);
    i18n.changeLanguage(item);
  };

  const loadSelectedLanguage = async () => {
    try {
      const language = await AsyncStorage.getItem('selectedLanguage');
      if (language) {
        setCurrentLang(language);
      } else {
        setCurrentLang('he');
      }
    } catch (error) {
      console.error('Error loading language:', error);
    }
  };

  const saveSelectedLanguage = async (language: string) => {
    try {
      await AsyncStorage.setItem('selectedLanguage', language);
      setCurrentLang(language);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  return { onLanguageChange, currentLang };
};
export default usePresenter;
