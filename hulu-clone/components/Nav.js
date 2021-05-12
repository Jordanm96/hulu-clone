import requests from "../utils/requests";
import { useRouter } from 'next/router';

function Nav() {
  const router = useRouter();
  return (
    <nav className='relative'>
      {/* padding on the x axis is 10, whitespace-nowrap keeps top rated from wraping under, space-x-10 puts space between each title*/}
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {/* We need to loop thru all of our requests and pull out the title for each */}
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            // This onClick is same as "Link to=/genre/actionmovies"
            onClick={() => router.push(`/?genre=${key}`) }
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      {/* This div is creating the fade on the right of the nav scroll bar */}
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'/>
    </nav>
  );
}

export default Nav;
