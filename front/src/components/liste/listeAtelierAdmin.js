import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert';
import './listeAtelierAdmin.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import PutAtelier from '../liste/putAtelierAdmin';

class Article extends React.Component {
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

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    // componentDidMount() {
    //     var tab = []
    //     console.log('props: ', this.props)
    //     // axios.get("https://tsiorytahback.herokuapp.com/profil").then(res => {
    //         // axios.get("http://localhost:8080/atelier").then(res => {
    //             console.log('res comment: ', res.data)
    //         for (let i = 0; i < res.data.length; i++) {
    //             if (localStorage.getItem('id') === res.data[i].utilisateur) {
    //                 tab.push(res.data[i])
    //             }
    //         }
    //         this.setState({ comment: tab })
    //         console.log('comment: ', this.state.comment)
    //     })
    // }

    render() {
        return (
            // // AJOUT
            <center onSubmit={event => {
                event.preventDefault()
            }}>
                <table className="table table-bordered">
                    <tbody>
                        {
                            (this.state.produit.length > 0) ? (this.state.produit.map((obj) => {
                                return(<tr key={obj.id}>
                                    <td>
                                    {/*<p id="titre" onChange={this.handleChange}><img class="card-img-top img-thumbnail image" src={"https://tsiorytahback.herokuapp.com/profil/" + obj.photo} alt="fgbb" /></p>*/}
                                        <p id="titre" onChange={this.handleChange}><img class="card-img-top img-thumbnail image" src={"http://localhost:8080/projet/routes/atelier/" + obj.image} alt="vdsf" /></p>
                                        <p id="prix" style={{textAlign: "right"}} onChange={this.handleChange}>Heure: {obj.heure}</p>
                                        <p id="prix" style={{textAlign: "right"}} onChange={this.handleChange}>Date: {obj.date}</p>
                                        <p id="prix" style={{textAlign: "right"}} onChange={this.handleChange}>Places: {obj.place}</p> 
                                        <p id="prix" style={{textAlign: "right"}} onChange={this.handleChange}>Prix: {obj.prix} £</p>
                                    </td>
                                    <td>
                                    <strong>{obj.titre}</strong>
                                        <p id="description" onChange={this.handleChange}>{obj.description}</p>
                                        <p>
                                            <a href="#fsdf">&nbsp;</a>
                                            {/* MODIFICATION */}
                                            <button className="btn btn-success"
                                                onClick={() => {
                                                    confirmAlert({
                                                        customUI: ({ onClose }) => {
                                                            return (
                                                                <div>
                                                                    <PutAtelier />
                                                                </div>
                                                                
                                                            );
                                                        }
                                                    })
                                                }
                                                }
                                            >Edit</button>
                                        </p>
                                        <p><input type="text" /></p>
                                    </td>
                                    <td><input type="checkbox" /></td>
                                </tr>)

                            })
                            ) : ('')
                           
                        }
                    </tbody>
                </table>
            </center>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        listeArticle: state
    }
}

export default connect(mapStateToProps)(Article)