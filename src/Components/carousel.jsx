import React from 'react';
import {CoverImg, DivBox, BoxImg, InputBox, InputCustom, InputCustomlater} from '../Styles/Style-Carousel'
import {UnidosCarousel, RayanCarousel, MulanCarousel, Arrowicon,AddIcon} from '../assets/ExportImg.js'
import Slider from 'infinite-react-carousel';

const SimpleSlider = () => (
    <BoxImg>
  <Slider dots autoplay="true" arrows={0}>
    <DivBox>
      <CoverImg src={UnidosCarousel}/>

      <InputBox>
      <InputCustom><img src={Arrowicon} alt="..."/> Ver más</InputCustom>
         <InputCustomlater><img src={AddIcon}  alt="..."/> Ver más</InputCustomlater>
      </InputBox>
    </DivBox>
    <DivBox>
         <CoverImg src={RayanCarousel}/>

         <InputBox>
         <InputCustom><img src={Arrowicon}  alt="..."/> Ver más</InputCustom>
         <InputCustomlater><img src={AddIcon}  alt="..."/> Ver más</InputCustomlater>
      </InputBox>
    </DivBox>
    <DivBox>
        <CoverImg src={MulanCarousel}/>

        <InputBox>
         <InputCustom><img src={Arrowicon}  alt="..."/> Ver más</InputCustom>
         <InputCustomlater><img src={AddIcon}  alt="..."/> Ver más</InputCustomlater>
      </InputBox>
    </DivBox>
  </Slider>
  </BoxImg>
);

export default SimpleSlider;