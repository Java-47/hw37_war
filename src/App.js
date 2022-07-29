import React from 'react';
import Game from './components/Game';
import Result from './components/Result';
import Start from './components/Start';
import { game, result, start } from './utils/contants';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: start,
      name: 'You',
      playerTotalScores:  0,
      computerTotalScores:  0,
      winner: ''

    }
  }

  changePage = page => {
    this.setState({ page });
  }

  changeName = name => {
    this.setState({ name });
  }

  changeScores = (whowin) => {
    this.setState({winner:whowin})
    if (whowin === 'player'){
      this.setState({playerTotalScores: this.state.playerTotalScores+1});
    
    }
    else if (whowin === 'computer'){
      this.setState({computerTotalScores: this.state.computerTotalScores+1});
    }
  }

  render() {
    switch (this.state.page) {
      case game:
        return <Game nickName={this.state.name} changePage={this.changePage} changeScores = {this.changeScores} />;
      case result:
        return <Result changePage={this.changePage} playerTotalScores={this.state.playerTotalScores} 
        computerTotalScores = {this.state.computerTotalScores} winner={this.state.winner}/>
        
      default:
        return <Start name={this.state.name} changeName={this.changeName} changePage={this.changePage} />
    }
  }

}

export default App;
