import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Collapse,
  CardBody,
} from "reactstrap";
export default class DefaultPage extends React.Component {
  render() {
    return (
      <div style={{ padding: "30px" }}>
        welcome
        <Footer />
      </div>
    );
  }
}

const Parent = ({ children }) => {
  return (
    <div>
      <h1>Heading</h1>
      <p>Paragragh</p>
      {children && children({ component: "Footer" })}
    </div>
  );
};

const withFooter = (Parent) => (props) => {
  return (
    <Parent {...props}>
      {({component}) => {
        return <h2>{component}</h2>;
      }}
    </Parent>
  );
};

const Footer = withFooter(Parent);
