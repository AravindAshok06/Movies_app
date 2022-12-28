import { Link } from "react-router-dom";

function EachMovie({movie}) {

    const convertDateToString=(date)=>{
        const dateObj=new Date(date);
        const dateStr=dateObj.toLocaleString("en-us",{
            dateStyle:"long",
        });
        return dateStr;
    };

  return (
    <div className='movie'>
        <Link to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="{movie.title}" className='movie-img'/>
        </Link>
        <div className='movie-info'>
            <h3>{movie.title}</h3>
            <p className='movie-info-date'>{convertDateToString(movie.release_date)}</p>
            <p>{movie.overview.length>100
                ? `${movie.overview.slice(0,100)}...`:
                movie.overview}</p>
        </div>
        
    </div>
  )
}

export default EachMovie;