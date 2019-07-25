import React, { Component } from 'react';
import axios from 'axios';
import './listeAtelier.css';


export default class ListTout extends Component {

    constructor(props) {
        super(props);
        this.state = { produit: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/projet/routes/atelier')
            .then(response => {
                console.log('i am a response', response)
                this.setState({ produit: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })



    }

    liste() {
        return <div>
            <div className="table-responsive">

                {
                    (this.state.produit.length > 0) ? (this.state.produit.map((obj) => {
                        return <div>
                            <div className="card">
                                <a href="https">
                                  <div className="card-image" key={obj._id}>
                                    <img width="400px" height="450" src={'http://localhost:8080/projet/routes/atelier/' + obj.image} alt="pdp" />
                                  </div>
                                  
                                  <div className="card-body">
                                    <div className="card-date">
                                      <time>{obj.date}</time>
                                    </div>
                                    <div className="card-date">
                                      <time>A {obj.heure}</time>
                                    </div>
                                    <div className="card-title">
                                      <h3>{obj.titre}</h3>
                                    </div>
                                    <div className="card-excerpt">
                                      <p>{obj.description}</p>
                                    </div>
                                  </div>
                                </a>
                            </div>
                            <br />
                        </div>

                    })) : ('')
                }
            </div>
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}