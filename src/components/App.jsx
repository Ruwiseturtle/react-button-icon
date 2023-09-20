import { Component } from 'react';
import IconButton from './IconButton/IconButton';
import Container from './Container/Container';
import { ReactComponent as MinusIcon } from '../Icons/minus.svg';
import { ReactComponent as PlusIcon } from '../Icons/plus.svg';
import css from './App.module.css';

class App extends Component {
  state = {
    value: 0,
  };

  plus = () => {
    console.log(this.state.value);
    this.setState(({value}) => ({
      value: value + 1
    }))
  }

  minus = () => {
    console.log(this.state.value);
    this.setState(({ value }) => ({
      value: value - 1,
    }));
  };

  render() {
    return (
      <Container>
        <IconButton onClick={this.minus}>
          <MinusIcon width="40" height="40" fill="#fff" />
        </IconButton>        
          <h1 className={css.title}>{this.state.value}</h1>         
        <IconButton onClick={this.plus}>
          <PlusIcon width="40" height="40" fill="green" />
        </IconButton>
      </Container>
    );
  }
}

export default App;