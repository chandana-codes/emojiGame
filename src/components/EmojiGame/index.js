// Write your code here.
import './index.css'
import {Component} from 'react'
import Navbar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], isGameInProgress: true, topScore: 0}

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length
    console.log(isWon)

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        currentScore={clickedEmojisList.length}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      this.setState(
        prevState => ({
          clickedEmojisList: [...prevState.clickedEmojisList, id],
        }),
        () => {
          const {clickedEmojisList: newClickedEmojisList} = this.state
          if (emojisList.length === newClickedEmojisList.length) {
            this.finishGameAndSetTopScore(emojisList.length)
          }
        },
      )
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffleEmojisList = this.shuffledEmojisList()

    return (
      <ul className="emojiListContainer">
        {shuffleEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojisList, isGameInProgress, topScore} = this.state

    return (
      <div className="container">
        <Navbar
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emojiCardContainer">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
