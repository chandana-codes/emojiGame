// Write your code here.
import './index.css'

const won = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const lose = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, currentScore} = props
  const imgUrl = isWon ? won : lose
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="cardContainer">
      <div className="cardContent">
        <h1 className="heading">{gameStatus}</h1>
        <p className="scoreLabel">{scoreLabel}</p>
        <p className="score">{currentScore}/12</p>
        <button
          type="button"
          onClick={onClickPlayAgain}
          className="palyAgainBtn"
        >
          Play Again
        </button>
      </div>
      <div className="imgContainer">
        <img src={imgUrl} alt="win or lose" className="winOrLoseImg" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
