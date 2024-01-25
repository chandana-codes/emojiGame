// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emojiCard">
      <button type="button" className="emojiBtn" onClick={onClickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
