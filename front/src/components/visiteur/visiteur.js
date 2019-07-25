import React, { Component } from 'react';
import './visiteur.css'
class Particulier extends Component {
  constructor(props){
    super(props);
    this.state = {
      nom: '',
      prenom:'',
      email: '',
      telephone: ''
    }
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
}


onChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
  console.log('ity le local ra azo de mlay'+ localStorage.loc);
}
handleUploadImage(ev) {
  ev.preventDefault();

  const data = new FormData();
  data.append('nom', this.state.nom);
  data.append('prenom', this.state.prenom);
  data.append('email', this.state.email);
  data.append('telephone', this.state.telephone)

  fetch('http://localhost:8080/projet/routes/visiteur', {
    method: 'POST',
    body: data,
  }).then((response) => {
    response.json().then((body) => {
      console.log('ity ilay body', body);

    });
  });
}

  render() {
    return (
      <div className="container">
        <div id="feedback-form">
          <div className="container-fluid">
            <form onSubmit={this.handleUploadImage} className="md-form">
              <div className="form-group mx-sm-3 mb-2 container">
                <div className="row">
                  <div className="col-xs-6">

                  <input className="form-control" type="text"
                      value={this.state.value}
                      onChange={this.onChange}
                      name="nom" placeholder="Votre Nom" />

                  </div>
                  <div className="col-xs-6">

                  <input className="form-control" type="text"
                      value={this.state.value}
                      onChange={this.onChange}
                      name="prenom" placeholder=" Votre Prenom" />
                    
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-xs-6">
                  <input className="form-control" type="text"
                      value={this.state.value}
                      onChange={this.onChange}
                      name="email" placeholder="E-mail" />
                  </div>

                  <div className="col-xs-6">

                    <input className="form-control" type="text"
                      value={this.state.value}
                      onChange={this.onChange}
                      name="telephone" placeholder="Votre Numero Téléphone" />

                  </div>
                </div>
               
                <br />
                
                    <button id="validate" className="btn btn-info">Reserver</button>
                
                
              </div>

            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default Particulier;

