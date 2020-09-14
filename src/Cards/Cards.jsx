import React, {Component} from 'react'
import Card from './CardUI';

import img1 from '../assets/Marvel\'s Spider-Man_20200328124056.jpg';
import img2 from '../assets/iron-man-5120x2880-artwork-minimal-low-poly-dark-background-black-hd-14496.png';
import img3 from '../assets/Marvel\'s Spider-Man_20200328120341.jpg';

class Cards extends Component{
    render() {
        return(
            <div className="container-fluid justify-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="adventure"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="IronMan"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Spidey"/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;