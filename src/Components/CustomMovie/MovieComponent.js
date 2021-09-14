import styled from 'styled-components'
import {StarIcon} from '../../assets/ExportImg'
import {StarCustom} from '../../Styles/Style-icons'

import {MovieContainer, 
        CoverImg,
        MovieName,
        InfoColumn,
        MovieInfo} from '../../Styles/Styled-component'

const MovieComponent = (props) =>{
        //Obtenido Estado de Peliculas
        
    const {titulo, Year, color, puntuacion, potster} = props.movie;

    const Star = styled.div`
    display:flex;
    justify-content: center;
    align-content: center;
    place-content: center;
     text-align: center;
    color:white;
   font-size:24px;
    margin-top: 50px;
    position: absolute;
    width: 120px;
    height: 35px;
    border-radius: 0px 25px 25px 0px;
    border: none;
    border-top: 3px solid ${color};
    border-bottom: 3px solid ${color};
    border-right: 3px solid ${color};
    background-color: rgba(0,0,0,0.5);
`;

    return (
        //Estado para informacion de la pelicula
        <MovieContainer onClick={()=>props.setSelectedMovie(titulo)}>
            <CoverImg src={potster}/>
            <Star><StarCustom src={StarIcon} alt="..." /><h3>{puntuacion}</h3></Star>
        </MovieContainer>
        )
}

export default MovieComponent