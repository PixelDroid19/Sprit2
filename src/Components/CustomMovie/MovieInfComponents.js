import { useEffect, useState } from 'react';
import axios from 'axios';
import {TimeIcon, CalendarIcon, CategoryIcon} from '../../assets/ExportImg';
import {Icon} from '../../Styles/Style-icons';

import {
    CoverImgModal,
    CoverImgBox, 
    InfoColumnModal,
    MovieNameModal,
    MovieInfModal,
    MainModal,
    StarModal,
    MovieInfModalText2,
    Close,
    Trailer,
    TrailerButton} from '../../Styles/Styled-component';

//Variables Globales
const API_KEY = '7a40687';

let puntuacion, descripcion, video = '', img, fecha;

const MovieInfoComponent = (props) =>{
//Obtenido Estado de Peliculas
    const [MovieInfo, setMovieInfo] = useState();
    const { SelectedMovie } = props;
    const {MovieList} = props;

  
    useEffect(() => {
      reload()
     
      }, [SelectedMovie]);

      const reload = () =>{
        MovieList.map((e)=>{
          if(e.titulo === SelectedMovie){
            localStorage.setItem('title', e.titulo)
            localStorage.setItem('img',e.potster)
            localStorage.setItem('',e.fecha)
            localStorage.setItem('descripcion',e.descripcion)
            localStorage.setItem('puntuacion',e.puntuacion)
            video = e.trailer
            console.log(img)
            }
        }
          
        )
       console.log(SelectedMovie)
      }
      
      const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };


return (
  <MainModal >
      <InfoColumnModal>
        
        <CoverImgBox>
          <CoverImgModal src={localStorage.getItem('img')}/>
          <StarModal>{localStorage.getItem('puntuacion')}</StarModal>
        </CoverImgBox>

          <MovieInfModal>
          <MovieNameModal>
              {localStorage.getItem('title')}
          </MovieNameModal>

              <span>
              {localStorage.getItem('descripcion')}
              </span>
          <MovieInfModalText2>    
                <p>{localStorage.getItem('fecha')}</p>
          </MovieInfModalText2>
          
          
          </MovieInfModal> <TrailerButton onClick={()=>{handleToggle()}}>Trailer</TrailerButton> 
      </InfoColumnModal>
    <Close onClick={()=>props.setSelectedMovie()}>X</Close>

    <Trailer className={`${isActive? "" : "Active"}`}>
        <Close onClick={()=> handleToggle()}>X</Close>
        <iframe src={video}  height="80%" width="80%" title="Iframe Example"></iframe>
      </Trailer>

  </MainModal>
    )
}

export default MovieInfoComponent