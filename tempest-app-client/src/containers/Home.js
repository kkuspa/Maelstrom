import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import {Rectangle} from 'react-shapes';

import "./Home.css";

export default class Home extends Component {
    render() {
	return (
      <div className="Home">
        <div className="lander">
          <h1>Tempest</h1>
          <p>Minimally viable demo.</p>
          <p>Click on a tile to begin.</p>
          <br></br>


          <Grid>
            <Row className="show-grid">
              <Col>
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
              </Col>
              <Col>
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
              </Col>
              <Col>
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
              </Col>
              <Col>
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
              </Col>
              <Col>
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                <Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
              </Col>
            </Row>

          </Grid>


        </div>
      </div>
		);
    }
}