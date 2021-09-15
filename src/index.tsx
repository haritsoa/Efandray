import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './chat.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from 'react-bootstrap/Card'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Container} from "react-bootstrap";
import './App.css';
import { Button } from 'react-bootstrap';
import Img from './images/profiles/ben.png'
import Img3 from './images/profiles/jacob.png'
import Img4 from './images/profiles/john.jpeg'
import Img1 from './images/profiles/daryl.png'
import Img2 from './images/profiles/douglas.png'

import {Row} from 'react-bootstrap';
import {Form} from 'react-bootstrap'

ReactDOM.render(
  <React.StrictMode>

      <Container>
        <Navbar fixed="top" className="navbar navbar-expand-lg navbar-light  bg-primary">
          <Navbar.Brand href="#">ANDRIATSILANIARIVO Hajaharitsoa IMTIC3 N: 24</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#">Acceuill</Nav.Link>
            <Nav.Link href="#">Utilisateurs</Nav.Link>
            <Nav.Link href="#" ><Button>Deconexion</Button></Nav.Link>
            <Nav.Link href="#"><Button>Ajout contact</Button></Nav.Link>
          </Nav>
        </Navbar>
      </Container>

    <Container fluid style={{display:'flex', flexDirection:'column'}}>
      <Row>
      <div id="side-bar1" style={{textAlign:'center',display:'inline-block',height:'400px'}}>
                 
                 <div className="headerOfSide">
                      <h1 className="userlist">
                             Inscrire
                      </h1>                 
                  </div>   
                  <Card className ="" style={{ backgroundColor:' rgba(33, 126, 95, 0.192);',width: '18rem',marginLeft:'15px'}}>
                        <Form style= {{alignContent:'center',borderRadius:'30px'}} >
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                          </Form.Group>
                            <div className="buton-spacin">
                              <Button className="button" variant="primary" type="submit">
                                Inscrire
                              </Button>
                              <Button className="button" variant="primary" type="submit">
                                Connecter
                              </Button>
                            </div>
                    </Form>

                </Card>
      </div>

    
      ,
      <div id="chat-container" style = {{marginTop:'5em'}} >
          <div id="side-bar">
                 
                 <div className="headerOfSide">
                      <p>
                          <form>
                              <input type="text" name="search" placeholder="Search.."/>
                              <h4 className="userlist">
                            Listes des utilisateurs: 
                              </h4> 
                          </form>
                      </p>
                                      
                  </div>   
                  <Card  className="listcard" style={{ width: '24rem',marginLeft:'15px',marginBlock:'20px',marginRight:'13px' }}>
                     <div  className="div">
                            <ul className="ul">
                              <li className="li">
                                <img src={Img1} alt="" />
                                <h3 className="h3">AVDAR</h3>
                                <p className="p"> Avdar@gmail.com</p>
                              </li>
                              <li className="li">
                                <img src={Img} alt="" />
                                <h3 className="h3">RAMAL</h3>
                                <p className="p">Ramal@gmail.com</p>
                              </li>
                              <li className="li">
                                <img src={Img3} alt="" />
                                <h3 className="h3">MENK</h3>
                                <p className="p"> Menk@gmail.com</p>
                              </li>
                              <li className="li">
                                <img src={Img2} alt="" />
                                <h3 className="h3">ADALAH</h3>
                                <p className="p"> Abdala@gmail.com</p>
                              </li>
                              <li className="li">
                                <img src={Img4} alt="" />
                                <h3 className="h3">Rodrigo</h3>
                                <p className="p"> rodrigo@gmail.com</p>
                              </li>
                            </ul>
                          </div>
                </Card>
         </div>
      
       <App />
       </div>
       </Row>
       
      </Container>
     

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
