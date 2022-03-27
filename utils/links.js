import github from './../public/icons/github.svg';
import mail from './../public/icons/mail.svg';
import whats from './../public/icons/whatsapp.svg';
import telegram from './../public/icons/telegram.svg';

const phoneNumber = '+79964165496';

const links = [
  {
    id: 1,
    title: 'Lioger',
    alt: 'Github',
    href: 'https://github.com/Lioger',
    icon: github,
  },
  {
    id: 2,
    title: 'nickstepanovdev@gmail.com',
    alt: 'Email',
    href: 'mailto:nickstepanovdev@gmail.com',
    icon: mail,
  },
  {
    id: 3,
    title: 'Nikita Stepanov',
    alt: 'Telegram',
    href: `https://t.me/${phoneNumber}`,
    icon: telegram,
  },
  {
    id: 4,
    title: 'Nikita Stepanov',
    alt: 'WhatsApp',
    href: `https://wa.me/${phoneNumber}`,
    icon: whats,
  },
];

export default links;
