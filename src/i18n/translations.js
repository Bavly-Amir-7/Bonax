export const translate = (lang, key) => {
  const dict = translations[lang] || translations.en
  const parts = key.split('.')
  return parts.reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : key), dict)
}

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      company: 'Company',
      services: 'Services',
      pages: 'Pages',
      blog: 'Blog',
      contact: 'Contact',
      contactNow: 'Contact Now',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      company: 'الشركة',
      services: 'الخدمات',
      pages: 'الصفحات',
      blog: 'المدونة',
      contact: 'اتصل بنا',
      contactNow: 'تواصل الآن',
    },
  },
}