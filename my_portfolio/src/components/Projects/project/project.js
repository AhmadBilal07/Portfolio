import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
//import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";
const Styles = styled.div`
  .card-img-top{
    max-width: 220px;
    text-align: center;
    max-height: 150px;
  }
  .card{
      min-width:220px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 5px 20px 5px;
      //
      display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
 
  overflow: hidden;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  -webkit-transition-property: color, background-color;
  transition-property: color, background-color;
}
  }
  .btn-primary{
    margin-bottom:5px;
    width:121px;
  }
  .card:hover{
    background-color: #2098D1;
    color: white;
  }
  .card-title{
    margin-top:0px;
  }
  .card-title:hover{
    color: #FFBE55;
  }
 `

export default function MediaCard(props) {

  return (
    <Styles>
    <section className={props.class}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a href={props.link} target="_blank">
          <Button variant="primary"  >Visit</Button>
          </a>
        </Card.Body>
      </Card>
    </section>
    </Styles>
  );
}
