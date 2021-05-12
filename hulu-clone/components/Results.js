import Thumbnail from "./Thumbnail";
import FlipMove from 'react-flip-move';
// Flip move is adding the fade effect when you pick between tabs in the nav. The screens load smoother
function Results({ results }) {
  // console.log(results)
  return (
    // small breakpoint= grid 
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  )
}

export default Results

