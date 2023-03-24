import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaAngellist, FaLinkedinIn, FaMediumM } from "react-icons/fa";


const socialItems = [
  {
    id: 0,
    icon: <BsTwitter />,
    link: 'https://twitter.com/Usirusen_Ikon',
    name: 'twitter',
  },
  {
    id: 1,
    icon: <BsGithub />,
    link: 'https://github.com/UsirusenIkon',
    name: 'github',
  },
  {
    id: 2,
    icon: <FaAngellist />,
    link: 'https://angel.co/u/usirusen-ikon',
    name: 'angelist',
  },
  {
    id: 3,
    icon: <FaMediumM />,
    link: 'https://medium.com/@usirusenIkon',
    name: 'medium',
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/usirusen-ikon/',
    name: 'linkedIn',
  },
]

export default socialItems;
