import React from 'react';
import "./App.css";
function Tweet(props){
    return(
        <div className="tweet">
            <h3>Nome do Dev: {props.name}</h3>
            <p>Mensagem: {props.message}</p>
            <h3>Total de Likes: {props.number}</h3>
        </div>
    );
}
export default Tweet;