import {Component} from 'react'

import {v4} from 'uuid'

import PasswordItems from '../PasswordItems'

import './index.css'

const passwordList = []

class Passwords extends Component {
  state = {
    username: '',
    website: '',
    password: '',
    passwordsList: passwordList,
    isCheck: false,
    search: '',
  }

  submitDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newList = {
      id: v4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newList],
      username: '',
      website: '',
      password: '',
    }))
  }

  checkboxResult = () => {
    this.setState(prevState => ({
      isCheck: !prevState.isCheck,
    }))
  }

  websiteInput = event => {
    this.setState({website: event.target.value})
  }

  searchInput = event => {
    this.setState({search: event.target.value})
  }

  usernameInput = event => {
    this.setState({username: event.target.value})
  }

  passwordInput = event => {
    this.setState({password: event.target.value})
  }

  deletebutton = id => {
    const {passwordsList} = this.state
    const filteredUsersData = passwordsList.filter(each => each.id !== id)
    this.setState({
      passwordsList: filteredUsersData,
    })
  }

  noPasswordEle = searchList => {
    const {isCheck} = this.state
    if (searchList.length === 0) {
      return (
        <div className="nopass-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="nopassword"
          />
          <p>No Passwords</p>
        </div>
      )
    }

    return (
      <ul>
        {searchList.map(eachList => (
          <PasswordItems
            pwDetails={eachList}
            key={eachList.id}
            isCheck={isCheck}
            deletebutton={this.deletebutton}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {website, username, password, passwordsList, search} = this.state
    const searchList = passwordsList.filter(eachSuggestion =>
      eachSuggestion.website.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div className="maincard">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="mainimg"
          />
          <div className="topcard">
            <div className="form-container">
              <h1>Add New Password</h1>
              <form onSubmit={this.submitDetails} className="forms">
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="icons"
                  />
                  <input
                    type="text"
                    placeholder="Enter Website"
                    onChange={this.websiteInput}
                    value={website}
                  />
                </div>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="icons"
                  />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    onChange={this.usernameInput}
                    value={username}
                  />
                </div>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="icons"
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={this.passwordInput}
                    value={password}
                  />
                </div>
                <button type="submit">Add</button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="pmimg"
            />
          </div>
          <div className="bottomcard">
            <div className="passwords">
              <div className="list-head">
                <h1>Your Passwords</h1>
                <p>{searchList.length}</p>
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="icons"
                />
                <input
                  type="search"
                  placeholder="Search"
                  onChange={this.searchInput}
                  value={search}
                />
              </div>
            </div>
            <hr />
            <div className="checkboxbtn">
              <input
                type="checkbox"
                id="searchbox"
                className="checkbox"
                onClick={this.checkboxResult}
              />
              <label htmlFor="searchbox">Show passwords</label>
            </div>
            <div>{this.noPasswordEle(searchList)}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Passwords
