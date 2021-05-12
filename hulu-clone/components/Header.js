// We are not using react so we use _rfce for RICE
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    // Be flex col until we reach the small breakpoint
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      {/* 2xl is another breakpoint */}
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon}/>
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
        <HeaderItem title='SEARCH' Icon={SearchIcon}/>
        <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
      </div>
      {/* Next.js image tag uses lazy loading
      lazy loading does not load all images that get mapped out right away. It waits until you scroll down to load*/}
      <Image
        // This is a tailwind css classname
        className="object-contain"
        src="https://links.papareact.com/ua6"
        height={100}
        width={200}
      />
    </header>
  );
}

export default Header;
