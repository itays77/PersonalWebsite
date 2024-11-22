import Link from "next/link";
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/itays77?tab=repositories' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/itaysol/' },
];


const Social = ({containerStyles, iconstyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
      return ( 
      <Link key={index} href={item.path} className={iconstyles}>
        {item.icon}
      </Link>
      );
    })}
  </div>
}

export default Social