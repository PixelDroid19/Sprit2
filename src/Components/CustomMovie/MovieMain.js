import { useEffect, useState } from 'react';
import {Link, useHistory} from "react-router-dom";

import axios from 'axios';
import MovieComponent from './MovieComponent'
import MovieInfoComponent from './MovieInfComponents'
import Logo from '../../assets/logo-blockBuster.png';
import iconSeach from '../../assets/search.png';
import SearchImgError from '../../assets/Stuck at Home Searching.png'

import {Container, 
        Header, 
        LogoCustom, 
        SearchBox,
        SearchIcon,
        AppName,
        SearchInput,
        MovieListContainer,
        SearchError,
        BoxLink} from '../../Styles/Styled-component'

//Variables Globales
const API_KEY = '7a40687';

let mayor = []
function App(){

    let history = useHistory()

    //Estados
    const [SearchQuery, setSearchQuery] = useState();
  
    const [movieList, setmovieList] = useState([]);
    const [SelectedMovie, setSelectedMovie] = useState();
    
    const [TimeoutId, setTimeoutId] = useState();

    //Funciones 

    //Obtener decorators
    const fetchData = async () =>{
        const res = await axios.get(`https://api-block-master.herokuapp.com/Peliculas/`);
        //console.log(res)
        let sm = localStorage.getItem('value')
        console.log(sm)
        if(sm == 1){
            res.data[0].pelis.map((e)=>{
            if(e.puntuacion < 7)
            mayor.push(e);
        })
        }else{
            res.data[0].pelis.map((e)=>{
                if(e.puntuacion > 7)
                mayor.push(e);
            })
        }

        setmovieList(mayor)
        console.log(res.data[0].pelis)
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
        <Link  className="Link" to="/Home">Todas</Link>

        <Link className="Link" refresh="true" to="/Valoradas" onClick={()=>{
            
            history.push("/Valoradas")
            localStorage.setItem('value', 0)
            }}>Más valoradas</Link>

        <Link className="Link" refresh="true" to="/Valoradas" onClick={()=>{
            history.push("/Valoradas")
            localStorage.setItem('value', 1)}}> Menos valoradas</Link>
        </BoxLink>

        <SearchBox>
            <SearchInput placeholder="Buscar" value={SearchQuery} onChange={onTextChange}/>
            <SearchIcon src={iconSeach} alt="..."/>
        </SearchBox>

        </Header>
        
        {//Enviar información de la pelicula al componentes Info
        SelectedMovie && <MovieInfoComponent MovieList={movieList} SelectedMovie={SelectedMovie} setSelectedMovie={setSelectedMovie}/>
        }

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