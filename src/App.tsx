import React from 'react'
import './chat.css'
import   'react-bootstrap/Button';
import Img from './images/profiles/ben.png'
import Img1 from './images/profiles/daryl.png'
import './bootstrap/css/bootstrap.css'
import {Row} from "react-bootstrap";
import {InputGroup} from "react-bootstrap";
import FormControl from 'react-bootstrap/FormControl';
import {Button} from 'react-bootstrap'
import './App.css';


function App() {
  return (
    <div className="App">
      <head>

           <title>Chat App</title>
           <link rel="stylesheet" type="text/css" media="screen" href="css/chat.css" />
           
      </head>
      
       <div className="App-Title">

            <h1 className="title">Message</h1>
        </div>
      <body>   
            <div id="chat-window">
                <h2>Chat Messages</h2>
                <div id="container">
                <img src={Img} alt="ben"/>
                  <p>Bonjour. Est ce que ca va??</p>
                  <span id="time-right">11:00</span>
                </div>

                 <div id="containery">
                  <img src={Img1} alt="daryl" />
                    <p>Salut! oui je vais bien. 
                      Peut tu sortir Aujourd'hui?
                    </p>
                    <span id="time-right">11:01</span>
                  </div>
            
                  <div id="container">
                <img src={Img} alt="ben"/>
                  <p>Oui je peut, mais ou allons nous?</p>
                  <span id="time-right">11:02</span>
                </div>

                <div id="containery">
                  <img src={Img1} alt="daryl" />
                  <p>Chez le restaurant, parceque j'ai un ticket de 
                    5000f
                  </p>
                  <span id="time-left">11:05</span>
                </div>
                <Row style={{marginLeft:'-22em'}}>
                    <InputGroup>
                      <InputGroup.Text>Ecrire ici Votre Message</InputGroup.Text>
                            <FormControl as="textarea" aria-label="With textarea" />
                            <Button variant="primary">Envoyer</Button>
                      </InputGroup>
              </Row>  

            </div>
           
      </body>
    </div>
  );
}

export default App;
