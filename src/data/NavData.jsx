import { HiHome } from 'react-icons/hi2';
import { MdPhoneCallback } from 'react-icons/md';
import { RiInformationFill } from 'react-icons/ri';
import { TiSpanner } from 'react-icons/ti';
import { IoIosConstruct } from 'react-icons/io';

const navData = [
  {
    id: 0,
    icon: <HiHome />,
    text: 'Home',
    link: '#home',
  },
  {
    id: 1,
    icon: <RiInformationFill />,
    text: 'About',
    link: '#about',
  },
  {
    id: 2,
    icon: <TiSpanner />,
    text: 'Skills',
    link: '#skills',
  },
  {
    id: 3,
    icon: <IoIosConstruct />,
    text: 'Projects',
    link: '#projects',
  },
  {
    id: 4,
    icon: <MdPhoneCallback />,
    text: 'Contact',
    link: '#contact',
  },
];

export default navData;
