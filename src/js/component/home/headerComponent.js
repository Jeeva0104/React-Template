import React, { Component } from "react";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.goToGalleryPage = this.goToGalleryPage.bind(this);
    this.scrollTocontact = this.scrollTocontact.bind(this);
    this.scrollToPackage = this.scrollToPackage.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  goToGalleryPage() {
    this.props.history.push('/')
  }
  scrollTocontact() {
    this.toggle();
    this.props.scrollTocontact();
  }
  scrollToPackage() {
    this.toggle();
    this.props.scrollToPackage();
  }

  render() {

    return (
      <div>
        <div className="topnav_contact">
        </div>
        <div className={`topnav ${this.state.isOpen ? 'responsive' : ''}`} id="myTopnav">
          <a href="/" >Dashboard</a>
         
        </div>
      </div>
    );
  }
}