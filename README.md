# Hulu-Clone
![Try Me](https://hulu-clone-6kdnqpb1j-jordanm96.vercel.app/)

## Overview
Hulu-Clone is an attempt to recreate similar features from the Hulu main screen using Next.js and Tailwind CSS. This clone is a single screen application that displays a wide range of movies taken from the TMDB API. This API grants access to hundreds of movies and categorizes them so that I could seperate the movies by genre in this application. Tailwind CSS let me use simple fun animations that would normally be harder to create using keyframes and basic CSS.

## API
https://www.themoviedb.org/documentation/api

## Code Snippet
From Thumbnail Component which contains each movie image, brief overview, title of the movie, the release/air date, and a thumbs up with the vote_count percentage provided by TMDB API.
```
   <div ref={ref} className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
      <Image
        layout='responsive'
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className='p-2'>
        <p className='truncate max-w-md'>{result.overview}</p>

        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
          {result.title || result.original_name}
        </h2>

        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          {result.release_date || result.first_air_date} ·{" "}
          <ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
        </p>
      </div>
    </div>
```
