import React from 'react'
import { result } from '../utils/contants'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.compDeck = [{ rank: 13, suit: 'spade' }, { rank: 13, suit: 'heart' }];
    this.playerDeck = [{ rank: 5, suit: 'diamond' }, { rank: 5, suit: 'club' }];
    this.state = {
      compCard: 'Computer card',
      playerCard: 'Player card',
      compScores: 0,
      playerScores: 0

    }
  }

  handleClickNext = () => {
    if (this.playerDeck.length) {
      const comp = this.compDeck.pop();
      const player = this.playerDeck.pop();
     if(player.rank>comp.rank){
      this.setState({playerScores: this.state.playerScores+1});
     }
     else if(comp.rank>player.rank)
     {
      this.setState({compScores: this.state.compScores+1});
     }
      this.setState({
        compCard: `${comp.rank}, ${comp.suit}`,
        playerCard: `${player.rank}, ${player.suit}`
      });
    } else {
      if(this.state.playerScores>this.state.compScores)
      {
        this.props.changeScores('player');
      }
      else if(this.state.compScores>this.state.playerScores){
        this.props.changeScores('computer');
      }
      else{
        this.props.changeScores('draw');
      }
      this.props.changePage(result);
    }

  }

  render() {
    return (
      <div>
        <h2>Computer</h2>
        <p>{this.state.compCard}</p>
        <p>{this.state.playerCard}</p>
        <h2>{this.props.nickName}</h2>
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    )
  }

}

export default Game