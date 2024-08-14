import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Add a Task": "Add a Task",
      "All": "All",
      "Pending": "Pending",
      "Completed": "Completed",
      "What is today's to-do list?": "What is today's to-do list?",
      "Add Todo": "Add Todo",
      "Sắp xếp A-Z": "Sort A-Z",
      "Sắp xếp Z-A": "Sort Z-A"
    }
  },
  vi: {
    translation: {
      "Add a Task": "Thêm công việc",
      "All": "Tất cả",
      "Pending": "Đang chờ",
      "Completed": "Đã hoàn thành",
      "What is today's to-do list?": "Danh sách công việc hôm nay là gì?",
      "Add Todo": "Thêm công việc",
      "Sắp xếp A-Z": "Sắp xếp A-Z",
      "Sắp xếp Z-A":  "Sắp xếp Z-A"

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use by default
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
