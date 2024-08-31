import './index.css'

const PasswordItems = props => {
  const {pwDetails, isCheck, deletebutton} = props
  const {website, username, password, id} = pwDetails

  const onclickdelete = () => {
    deletebutton(id)
  }

  const paragraph = isCheck ? (
    <p>{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )

  return (
    <li>
      <div className="listPassword">
        <p className="firstword">{website[0]}</p>
        <div>
          <p>{website}</p>
          <p>{username}</p>
          <div>{paragraph}</div>
        </div>
        <button
          type="button"
          data-testid="delete"
          className="deletebutton"
          onClick={onclickdelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItems
