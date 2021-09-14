import styled from 'styled-components'

//Box Main
export const BoxImg = styled.div`
    width:95%;
    padding-top: 30px;
    margin: 0 auto;
`;

export const InputBox = styled.div`
    top:250px;
    left:30px;
    position: absolute;
    display:grid;
    grid-template-columns:50% 50%;
    gap:20px;
`;

export const InputCustom = styled.button`
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    background-color:yellow;
    border:none;
    padding: 10px;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
`;

export const InputCustomlater = styled.button`
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    background-color:#0C0E16;
    color:yellow;
    border:3px solid yellow;
    padding: 10px;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
`;

export const DivBox = styled.div`
    margin: 0 auto;
     overflow: hidden;
`;

export const CoverImg = styled.img`
width: 100%;
`;