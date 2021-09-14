import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

import axios from 'axios';
import MovieComponent from './MovieComponent'
import MovieInfoComponent from './MovieInfComponents'
import Logo from '../assets/logo-blockBuster.png';
import iconSeach from '../assets/search.png';
import SearchImgError from '../assets/Stuck at Home Searching.png'
import Carousel from '../Components/carousel'

import {Container, 
        Header, 
        LogoCustom, 
        SearchBox,
        SearchIcon,
        AppName,
        SearchInput,
        MovieListContainer,
        SearchError,
        BoxLink,
        H1Custom} from '../Styles/Styled-component'

//Variables Globales
const API_KEY = '7a40687';


function App(){
    //Estados
    const [SearchQuery, setSearchQuery] = useState();
  
    const [movieList, setmovieList] = useState([]);
    const [SelectedMovie, setSelectedMovie] = useState();
    
    const [TimeoutId, setTimeoutId] = useState();

    //Funciones 

    //Obtener decorators
    const fetchData = async (SearchString = "Batman") =>{
        const res = await axios.get(`https://www.omdbapi.com/?s=${SearchString}&apikey=${API_KEY}&type=movie`);
        //console.log(res)
        setmovieList(res.data.Search)
        console.log(movieList)
    }

    useEffect(() => {
        fetchData()
    },[])

    //Funcion para actualizar estado de busqueda
    const onTextChange = (event) =>{
        setSelectedMovie('')
        clearTimeout(TimeoutId)
        setSearchQuery(event.target.value)
        const timeout = setTimeout(() => fetchData(event.target.value), 500);
        setTimeoutId(timeout)
    }

    return (
    <Container> 
        <Header>

        <AppName>
        <LogoCustom src={Logo} alt="..."/>
        
        </AppName>

        <BoxLink>
        <Link to="/Home" className="Link">Todas</Link>
        <Link to="/Valoradas" refresh="true" className="Link">Más valoradas</Link>
        <Link to="/Valoradas" refresh="true" className="Link">Menos valoradas</Link>
        </BoxLink>

        <SearchBox>
            <SearchInput placeholder="Buscar" value={SearchQuery} onChange={onTextChange}/>
            <SearchIcon src={iconSeach} alt="..."/>
        </SearchBox>

        </Header>
        <Carousel/>
        {//Enviar información de la pelicula al componentes Info
        SelectedMovie && <MovieInfoComponent SelectedMovie={SelectedMovie} setSelectedMovie={setSelectedMovie}/>
        }
        <H1Custom>Todas las peliculas</H1Custom>
        <MovieListContainer>
            
            {
                movieList?.length? 
                movieList.map((movie, index)=>
                <MovieComponent 
                key={index} 
                movie={movie} 
                setSelectedMovie={setSelectedMovie}/>
                ):<SearchError>
                    <img src={SearchImgError} alt="..."/>
                    <h2>No se encontraron resultados para "{SearchQuery}"</h2>
                    </SearchError>
            }
        </MovieListContainer>
    </Container>
    )
}

export default App