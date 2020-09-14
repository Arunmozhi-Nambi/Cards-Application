import React from 'react';
import img1 from '../assets/wp1829254.jpg'
import './card-style.css';

const Card = props => {
    return(

        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image 1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet optio minus magnam facilis sapiente, dignissimos quidem accusantium incidunt, 
                    cum nobis ipsa esse earum, quas repellat neque quo consequuntur libero distinctio?
                </p>
                <a href="#" className="btn btn-outline-success"> Go Anywhere </a>
            </div>
        </div>



    );
}

export default Card;