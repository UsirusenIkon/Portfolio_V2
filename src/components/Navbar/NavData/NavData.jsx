import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BuildIcon from '@mui/icons-material/Build';
import CallIcon from '@mui/icons-material/Call';

const navData = [
  {
    id: 0,
    icon: <HomeIcon />,
    text: 'Home',
    link: '#home',
  },
  {
    id: 1,
    icon: <InfoIcon />,
    text: 'About',
    link: '#about',
  },
  {
    id: 2,
    icon: <BuildIcon />,
    text: 'Skills',
    link: '#skills',
  },
  {
    id: 3,
    icon: <AutoStoriesIcon />,
    text: 'Projects',
    link: '#projects',
  },
  {
    id: 4,
    icon: <CallIcon />,
    text: 'Contact',
    link: '#contact',
  },
];

export default navData;
