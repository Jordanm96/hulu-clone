function HeaderItem({ Icon, title }) {

  return (
    // When we hit the small breakboint (sm) change width to 20
    <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
      {/* height-8, marginbutton-1 */}
      <Icon className='h-8 mb-1 group-hover:animate-bounce' />
      {/* hide it until we hover over the div called 'group', spreads out the letters, */}
      <p className='opacity-0 group-hover:opacity-100 tracking-widest' >{title}</p>
    </div>
  )
}

export default HeaderItem
