import { useEffect, useState } from 'react';
import axios from 'axios';
import {TimeIcon, CalendarIcon, CategoryIcon} from '../assets/ExportImg';
import {Icon} from '../Styles/Style-icons';

import {
    CoverImgModal,
    CoverImgBox, 
    InfoColumnModal,
    MovieNameModal,
    MovieInfModal,
    MainModal,
    StarModal,
    MovieInfModalText,
    Close} from '../Styles/Styled-component';

//Variables Globales
const API_KEY = '7a40687';


const MovieInfoComponent = (props) =>{
//Obtenido Estado de Peliculas
    const [MovieInfo, setMovieInfo] = useState();
    const { SelectedMovie } = props;

    useEffect(() => {
        axios.get(
          `https://www.omdbapi.com/?i=${SelectedMovie}&apikey=${API_KEY}`,
        ).then((res) => setMovieInfo(res.data));
      
      }, [SelectedMovie]);

   console.log(MovieInfo)
return (
  <MainModal>
    {MovieInfo?<>
      <InfoColumnModal>
        
        <CoverImgBox>
          <CoverImgModal src={MovieInfo?.Poster}/>
          <StarModal>{MovieInfo?.imdbRating}</StarModal>
        </CoverImgBox>

          <MovieInfModal>
          <MovieNameModal>
              {MovieInfo?.Title}
          </MovieNameModal>

              <span>
              {MovieInfo?.Plot}
              </span>
              <MovieInfModalText>
              
                <p><Icon src={CalendarIcon} alt="Calendar_icon"/> {MovieInfo?.Released}</p>
                <p><Icon src={CategoryIcon} alt="Category_icon"/> {MovieInfo?.Genre}</p>
                <p><Icon src={TimeIcon} alt="Time_icon"/> {MovieInfo?.Runtime}</p>
                
              </MovieInfModalText>
          </MovieInfModal>
      </InfoColumnModal>
    </>:"Loading..."}
    <Close onClick={()=>props.setSelectedMovie()}>X</Close>
  </MainModal>
    )
}

export default MovieInfoComponent