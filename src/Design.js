import React, { Component } from "react";
import { useTranslation, Trans } from "react-i18next";
import Modal from 'react-modal';

 
class Design extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleOpenModal3 = this.handleOpenModal3.bind(this);
    this.handleOpenModal4 = this.handleOpenModal4.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    this.handleCloseModal3 = this.handleCloseModal3.bind(this);
    this.handleCloseModal4 = this.handleCloseModal4.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleOpenModal2 () {
    this.setState({ showModal2: true });
  }

  handleOpenModal3 () {
    this.setState({ showModal3: true });
  }

  handleOpenModal4 () {
    this.setState({ showModal4: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  handleCloseModal2 () {
    this.setState({ showModal2: false });
  }

  handleCloseModal3 () {
    this.setState({ showModal3: false });
  }

  handleCloseModal4 () {
    this.setState({ showModal4: false });
  }

  render() {
    return (
      <div className="cards-wrapper">
        <ul className="cards">
          <li className="cards__item">
            <div className="card">
              <div className="card__image card__image--cv"></div>
              <div className="card__content--design">
                <div className="card__title">Communication Visuelle</div>
                <p className="card__text">Projet Personnel - En cours - React </p>
                <button onClick={this.handleOpenModal}>Trigger #1 Modal</button>
                <Modal 
                  isOpen={this.state.showModal}
                  contentLabel="Modal #1 Global Style Override Example"
                  onRequestClose={this.handleCloseModal}
                >
                  <ul className="cards">
                    <li className="cards__item">
                      <div className="card--modal">
                        <div className="card__image--modal card__image--fence"></div>
                      </div>
                    </li>
                    <li className="cards__item">
                      <div className="card--modal">
                        <div className="card__image card__image--river"></div>
                        <div className="card__content--modal">
                          <div className="card__title">Atom Café</div>
                          <p className="card__text">Projet d'école - Décembre 2020 - WORDPRESS-ELEMENTOR</p>
                          <a href="http://ftp.clemenceballereau-webdeveloping.com/atomcafe/" className="btn btn--block card__btn">Allez voir!</a>
                        </div>
                      </div>
                    </li>
                    <li className="cards__item">
                      <div className="card--modal">
                        <div className="card__image card__image--record"></div>
                        <div className="card__content--modal">
                          <div className="card__title">Battleship</div>
                          <p className="card__text">Projet d'école - Septembre 2020 - Javascript</p>
                          <a href="http://ftp.clemenceballereau-webdeveloping.com/project-battleship/" className="btn btn--block card__btn">Allez voir!</a>
                        </div>
                      </div>
                    </li>
                    <li className="cards__item">
                      <div className="card--modal">
                        <div className="card__image card__image--flowers"></div>
                        <div className="card__content--modal">
                          <div className="card__title">Micheale Sidane - Diététique</div>
                          <p className="card__text">Projet Professionnel - Janvier 2021 - WORDPRESS - ELEMENTOR</p>
                          <a href="https://michaela-sidane-dietetique.fr/" className="btn btn--block card__btn">Allez voir!</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <button onClick={this.handleCloseModal}>Close Modal</button>
                </Modal>
              </div>
            </div>
          </li>
          <li className="cards__item">
            <div className="card">
              <div className="card__image card__image--logo"></div>
              <div className="card__content--design">
                <div className="card__title">Logo</div>
                <p className="card__text">Projet d'école - Décembre 2020 - WORDPRESS-ELEMENTOR</p>
                <button onClick={this.handleOpenModal2}>Trigger #2 Modal</button>
                <Modal 
                  isOpen={this.state.showModal2}
                  contentLabel="Modal #2 Global Style Override Example"
                  onRequestClose={this.handleCloseModal2}
                >
                  <p>Modal #2 text!</p>
                  <button onClick={this.handleCloseModal2}>Close Modal</button>
                </Modal>
              </div>
            </div>
          </li>
          <li className="cards__item">
            <div className="card">
              <div className="card__image card__image--id"></div>
              <div className="card__content--design">
                <div className="card__title">Identité Visuelle</div>
                <p className="card__text">Projet d'école - Septembre 2020 - Javascript</p>
                <button onClick={this.handleOpenModal3}>Trigger #3 Modal</button>
                <Modal 
                  isOpen={this.state.showModal3}
                  contentLabel="Modal #3 Global Style Override Example"
                  onRequestClose={this.handleCloseModal3}
                >
                  <p>Modal #3 text!</p>
                  <button onClick={this.handleCloseModal3}>Close Modal</button>
                </Modal>
              </div>
            </div>
          </li>
          <li className="cards__item">
            <div className="card">
              <div className="card__image card__image--edition"></div>
              <div className="card__content--design">
                <div className="card__title">Edition</div>
                <p className="card__text">Projet Professionnel - Janvier 2021 - WORDPRESS - ELEMENTOR</p>
                <button onClick={this.handleOpenModal4}>Trigger #4 Modal</button>
                <Modal 
                  isOpen={this.state.showModal4}
                  contentLabel="Modal #4 Global Style Override Example"
                  onRequestClose={this.handleCloseModal4}
                >
                  <p>Modal #4 text!</p>
                  <button onClick={this.handleCloseModal4}>Close Modal</button>
                </Modal>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
 
export default Design;