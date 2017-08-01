import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ShortenTx extends Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true,
      more: true,
      txt: '',
      txtLength: 50,
    }

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('hello');
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      more: !prevState.more,
    }));
  }
  render() {
    var showLgth = this.state.txtLength;
    var children = this.props.children;
    var showStr = '';
    var moretext = 'more';

    if (this.state.more === true){
      moretext = 'more';
      showStr = children.slice(0, showLgth)+'.....';
    } else {
      moretext = 'less';
      showStr = children;
    }
    return (<div>{showStr} <a href='#' onClick={this.handleClick} >{moretext}</a></div>);
  }
}
export default ShortenTx;

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      img: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(event) {
    console.log('name change');
    this.setState({
      name: event.target.value,
    });
  }

  handleSelect(event) {
    console.log('select gender');
    var imgTmp = '';
    if(event.target.value === 'male') {
      imgTmp = 'https://openclipart.org/image/300px/svg_to_png/15036/nicubunu-Stick-figure-male.png&disposition=attachment';
    } else {
      imgTmp = 'https://openclipart.org/image/300px/svg_to_png/15040/nicubunu-Stick-figure-female.png&disposition=attachment';
    }
    this.setState({
      gender: event.target.value,
      img: imgTmp,
    })
  }

  handleClick(event) {
    event.preventDefault();
    if(this.state.name !== '' && this.state.gender !== '') {
      alert('name: ' + this.state.name + '\ngender: ' + this.state.gender);
    } else {
      alert('please enter all information');
    }
    // console.log('hey');
  }

  render() {
    return (
      <div>
        <form>
          <NameInput value={this.state.name} onChange={this.handleChange}/>
          <GenderChoice onSelect={this.handleSelect} gender={this.state.gender}/>
          <PictureShow imgSrc={this.state.img}/><br/>
          <SubmitButton onClick={this.handleClick}/>
        </form>
      </div>
    );
  }
}

class NameInput extends Component {
  render() {
    return (
      <div>
        Name&nbsp;<input autoFocus='true' type='text' placeholder='Your name' value={this.props.value} onChange={this.props.onChange}>
        </input><br/>
      </div>
    );
  }
}

class GenderChoice extends Component {
  render() {
    return (
      <div>
        <input type='radio' name='gender' value='male' onClick={this.props.onSelect}/>&nbsp;Male&nbsp;
        <input type='radio' name='gender' value='female' onClick={this.props.onSelect}/>&nbsp;Female&nbsp;<br/>
      </div>
    );
  }
}

class PictureShow extends Component {
  render() {
    return (
      <img src={this.props.imgSrc}/>
    );
  }
}

class SubmitButton extends Component {
  render() {
    return (
      <button type="submit" onClick={this.props.onClick}>Submit</button>
    );
  }
}

if (document.getElementById('shortTxt')) {
    var info = 'When using React you should generally not need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. For example, this Toggle component renders a button that lets the user toggle between "ON" and "OFF" states:'
    // ReactDOM.render(<ShortenTx>{info}</ShortenTx>, document.getElementById('shortTxt'));
    ReactDOM.render(<FormComponent />, document.getElementById('shortTxt'));
}