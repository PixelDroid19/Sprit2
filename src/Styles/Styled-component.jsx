import styled from 'styled-components'

//Box Main
export const Container = styled.div`
display:flex;
flex-direction:column;
`;

export const Header = styled.div`
display:flex;
flex-direction: row;
background-color: rgb(15,14,23);
color:white;
padding:10px;
font-size:25px;
font-weight:bold;
justify-content: space-between;
align-items: center;
box-shadow:0 3px 6px 0 black;
`;

export const AppName = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
`;

//Search Bar 
export const LogoCustom = styled.img`
    width:78px;
`;

export const SearchBox = styled.div`
    display:flex;
    flex-direction:row;
    background-color: white;
    border-radius: 6px;
    margin-left:20px;
    width: 35%;
    height: 40%;
    align-items: center;
`;

export const SearchIcon = styled.img`
    display: block;
     max-height: 300px;
    max-width: 1000px;
    overflow: hidden;
    
`;

export const SearchInput = styled.input`
    color:black;
    font-size:16px;
    font-weight: bold;
    border:none;
    outline: none;
    width: 100%;
    margin-left:15px;
`;

export const BoxLink = styled.div`
    .Link{
        font-size:19px;
        color:white;
        margin-right: 25px;
        text-decoration: none;
}

.Link:hover{
        color:yellow;
        border-bottom: 1px solid yellow;
}
`;



//No found
export const SearchError = styled.div`
    color:white;
`;

//MovieComponent
export const MovieListContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    padding:30px;
    gap:24px;
    justify-content: space-evenly;
`;

export const MovieContainer = styled.div`
   display:flex;
   flex-direction: column;
   padding:10px;
   width: 280px;
   box-shadow: 0 3px 10px 0 black;
   cursor: pointer;
`;

export const CoverImg = styled.img`
  height: 362px;
`;

export const MovieName = styled.span`
    font-size:18px;
    font-weight: 600;
    color:white;
    margin: 15px 0px;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const InfoColumn = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
`;

export const MovieInfo = styled.span`
    font-size:16px;
    font-weight: 500;
    color:white;
    text-transform:capitalize;
`;

export const Star = styled.div`
    text-align: center;
    margin-top: 50px;
    position: absolute;
    width: 90px;
    height: 35px;
    border-radius: 0px 25px 25px 0px;
    border: none;
    border-top: 3px solid rgba(252, 228, 42);
    border-bottom: 3px solid rgb(252, 228, 42);
    background-color: rgba(0,0,0,0.5);
`;

//Modals
export const MainModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:100000;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  background-color:rgba(0,0,0,0.7);
  backdrop-filter: blur(10px);

  @media only screen and (max-width: 600px) {
  &{
    display:flex;
    flex-direction:column;
  }
}
`

export const InfoColumnModal = styled.div`
    display:grid;
    margin:0 auto;
    grid-template-columns: auto auto;
`;

export const MovieNameModal = styled.h1`
    font-size: 32px;
    font-weight: 600;
    color:white;
    margin: 15px 0px;
    white-space:nowrap;
    overflow: hidden;
    text-transform:capitalize;
    text-overflow: ellipsis;
`;

export const MovieInfModal  = styled.span`
    display:grid;
    //Mover
    grid-template-rows:20% auto 10%;
    font-size:19px;
    width:500px;
    font-weight: 600;
    color:white;
    margin-left:200px;
    overflow: hidden;
    text-transform:capitalize;
    text-overflow: ellipsis;

    & span{
        opacity: 0.9;
    }
`

export const MovieInfModalText = styled.span`
display:grid;
grid-template-columns:repeat( auto-fill, minmax(150px, auto) );
text-align: center;
`

export const MovieInfModalText2  = styled.span`
display:grid;
text-align: center;
`

export const TrailerButton = styled.button`
font-size: 18px;
width:70px;
height:30px;
border:none;
color:white;
background-color:rgba(0, 249, 233, 0.2);
box-shadow: rgba(0, 63, 32, 1) 0px 5px 15px;

&:hover{
    cursor:pointer;
    background-color:rgba(23, 149, 233, 0.2);
    box-shadow: rgba(23, 149, 233, 0.2) 0px 5px 15px;
}
`

export const Trailer = styled.div`
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:100001;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  background-color:rgba(0,0,0,0.7);
  backdrop-filter: blur(10px);
  visibility: hidden;
  opacity: 0;

  &.Active{
    visibility:visible;
  opacity: 1;
  }
`


export const Close = styled.span`
     position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  filter: invert();
  max-width: 32px;
`;

export const CoverImgBox = styled.div`
  margin: 20px;
  width: 200px;
`;

export const H1Custom = styled.h1`
  color:white;
  font-size:3em;
  margin-left:20px;
`;

export const CoverImgModal = styled.img`
  display: block;
  max-height: 300px;
  max-width: 1000px;
  overflow: hidden;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); 
  transform: matrix(0.91, -0.41, 1.22, 0.71, 0, 0);
`;

export const StarModal = styled.div`
    text-align: center;
    top:334px;
    position: absolute;
    width: 90px;
    height: 35px;
    border-radius: 0px 25px 25px 0px;
    border: none;
    color:white;
    border-top: 3px solid rgba(252, 228, 42);
    border-bottom: 3px solid rgb(252, 228, 42);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); 
    transform: matrix(0.91, -0.41, 1.22, 0.71, 0, 0);
    background-color: rgba(0,0,0,0.5);
    font-weight: 600;

    @media only screen and (max-width: 600px) {
  &{
    top:200px;
  }
}

`;