import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "../components/Social";
import Photo from '../components/Photo';
import Stats from '../components/Stats';


const Home = () => {
  
  const socialLinks = {
    github: 'https://github.com/itays77?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/itaysol/',
  };

  const handleSocialClick = (platform) => {
    window.open(socialLinks[platform], '_blank');
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24"
        >
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Itay Soldin</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Passionate about crafting elegant solutions through code. Always eager to tackle new challenges
              and bring innovative ideas to life.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconstyles="w-9 h-9 border border-accent rounded-full flex justify-center
                items-center text-accent text-base hover:bg-accent hover:text-primary
                hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;