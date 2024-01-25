// Write your code here.
import './index.css'

const Navbar = props => {
  const {score, isGameInProgress, topScore} = props

  return (
    <nav className="navbar">
      <div className="LogoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emojiLogo"
        />
        <h1 className="title">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="scoreContainer">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default Navbar
