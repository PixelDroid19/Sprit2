import {MovieContainer, 
        CoverImg,
        MovieName,
        InfoColumn,
        MovieInfo,
        Star} from '../Styles/Styled-component'

const MovieComponent = (props) =>{
    //Obtenido Estado de Peliculas
    const {Title, Year, imdbID, Type, Poster} = props.movie;
    return (
        //Estado para informacion de la pelicula
        <MovieContainer onClick={()=>props.setSelectedMovie(imdbID)}>

            <CoverImg src={Poster}/>
        </MovieContainer>
        )
}

export default MovieComponent