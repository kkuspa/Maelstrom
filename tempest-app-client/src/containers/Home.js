import React, { Component } from "react";
import { Grid, Row, Col, Button} from "react-bootstrap";
import {Rectangle} from 'react-shapes';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


import "./Home.css";

// var StockTile = React.createClass({
//   render: function() {
//     return (
//       this.props.symbol//<Rectangle width={50} height={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
//     )
//   }
// });

class MyButton extends Button {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), label: props.label};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  handleClick() {
    console.log("Fuck you");
    // console.log(e);
    console.log(this);
    this.setState({date: new Date()})
  }

  tick() {
    // this.setState({
    //   date: new Date()
    // });
  }

  render() {
    var myLabel = 0;
    return (
      <Button
        bsStyle="primary"
        onClick={this.handleClick}
      >
        {this.state.label} &#160;
        {this.state.date.toLocaleTimeString()}
      </Button>
    );
  }
};

// function Button() {
//   return (
//     <AwesomeButton type="facebook" button-default-height="100px">Button</AwesomeButton>
//   );
// }


export default class Home extends Component {
    render() {
    var items = [];
    var stocks = ["AAPL", "MSFT", "GOOG", "FB", "DICKS"];
    for (var symbol in stocks) {
        // var stock = this.props.stocks[symbol];
        console.log(stocks[symbol]);
        items.push(<MyButton key={stocks[symbol]} label={stocks[symbol]} / >);
        items.push(" ");
    }
	return (
      <div className="Home">
        <div className="lander">
          <h1>Tempest</h1>
          <p>Minimally viable demo.</p>
          <p>Click on a tile to begin.</p>
          <br></br>

          <Grid>
            <Row className="show-grid">    
              {items}
              <p></p>
              <Col>
                <MyButton label="AAPL"/ > &#160;
                <MyButton / > &#160;
                <MyButton / > &#160;
                <MyButton / > &#160; 
                <MyButton / > &#160;
              </Col>
              <p></p>
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