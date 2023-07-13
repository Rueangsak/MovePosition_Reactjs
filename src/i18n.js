import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// กำหนดค่า i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        goToPage2: 'Go to Page 2',
        moveLeft: 'Move Left',
        moveRight: 'Move Right',
        moveUp: 'Move Up',
        moveDown: 'Move Down',
        Test1: 'Test 1',
        Test2: 'Test 2',
        Test3: 'Test 3',
      },
    },
    th: {
      translation: {
        goToPage2: 'ไปหน้าที่ 2',
        moveLeft: 'ไปทางซ้าย',
        moveRight: 'ไปทางขวา',
        moveUp: 'ไปข้างบน',
        moveDown: 'ไปข้างล่าง',
        Test1: 'แบบทดสอบ 1',
        Test2: 'แบบทดสอบ 2',
        Test3: 'แบบทดสอบ 3',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
