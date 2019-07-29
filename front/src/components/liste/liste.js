import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Particulier from '../newPart/Particulier';

export default class ListTout extends Component {

     constructor(props) {
        super(props);

        this.state = {
            nom: '',
            prenom: '',
            email: '',
            phone: '',
            produit: []
        };

        this.onChange = this.onChange.bind(this)
    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/users/newArticle')
            .then(response => {
                this.setState({ produit: response.data });
                localStorage.setItem('loc', response.data[1].place)
            })
            .catch(function (error) {
                console.log(error);
            })



    }

    liste() {
        return <div>
            <div className="container-fluid">
                <div className="row">
                {
                    (this.state.produit.length > 0) ? (this.state.produit.map((obj) => {
                        return <div class="item col-xs-3 col-lg-3" id="carte">
                            <div className="card card-cascade narrower card-ecommerce">
                                <img width="auto" id="imageproduit" height="230px" src={'http://localhost:8080/api/users/newArticleImage/' + obj.image} alt={obj.image} />

                                <div className="card-body card-body-cascade">

                                    <center><h6 id="description"><span id="nomproduit">{obj.titre}</span></h6></center>
                                    <div className="row">
                                        <div className="col-md-6">

                                            <p className="card-text"><strong><span id="description">Description</span></strong>&nbsp;&nbsp; <div id="point">{obj.description}</div> </p>
                                            <p className="card-text"><strong><span id="description">Date</span></strong>&nbsp;&nbsp; <div id="point">{obj.date}</div> </p>
                                            <p className="card-text"><strong><span id="description">Nombre de place disponible</span></strong>&nbsp;&nbsp; <div id="point">{obj.place_dispo}</div> </p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="card-text"><strong><span id="description">Horaire de debut</span></strong>&nbsp;&nbsp; <div id="point">{obj.horaire}</div> </p>
                                            <p className="card-text" id="colonne2"><strong><span id="description">Durée de l'atelier</span></strong>&nbsp;&nbsp; <div id="point">{obj.duree}</div> </p>
                                            <p className="card-text"><strong><span id="description">Nombre de place reserve</span></strong>&nbsp;&nbsp; <div id="point">{obj.place}</div> </p>
                                        </div>
                                    </div>
                                    <span className="spanprix">
                                        <strong>Prix: {obj.prix} €</strong>
                                    </span><br />

                                    <span class="float-right">

                                        <button className="btn btn-primary"
                                            onClick={() => {
                                                confirmAlert({
                                                    customUI: ({ onClose }) => {
                                                        return (
                                                            <div className="container">
                                                              <div className="row">
                                                                    <div className="col-md-10"></div>
                                                                    <div className="col-md-2"><button id="bouttonx" className="btn btn-danger" onClick={onClose}>X</button></div>
                                                                </div>
                                                                <Particulier />
                                                            </div>
                                                        );
                                                    }
                                                });
                                            }}
                                            id="inscrire-btn">S'inscrire</button>

                                    </span>

                                </div>
                            </div>

                        </div>

                    })) : ('')
                }
                </div>
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