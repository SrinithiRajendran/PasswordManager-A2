import './index.css'

const PasswordItem = props => {
  const {passwordDetails, isChecked, onDeleteItem} = props
  const {id, inputWebsite, inputPassword, inputUsername} = passwordDetails

  const passwordItem = isChecked ? (
    <p className="website-text">{inputPassword}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-icon"
    />
  )

  const initial = inputWebsite[0].toUpperCase()

  const onClickDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="password-item">
      <div className="circle">{initial}</div>
      <div className="details-container">
        <p className="website-text">{inputWebsite}</p>
        <p className="website-text">{inputUsername}</p>
        {passwordItem}
      </div>

      <div>
        <button
          type="button"
          onClick={onClickDelete}
          data-testid="delete"
          className="delete-btn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordItem
