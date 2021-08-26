import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {

    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <span>calories: {calories}</span>
            <ul>
                {
                    ingredients.map(ingredient=>(
                       <li>{ingredient.text}</li> 
                    ))
                }
            </ul>

            <img src={image} alt={title} />
        </div>
    )
}

export default Recipe;