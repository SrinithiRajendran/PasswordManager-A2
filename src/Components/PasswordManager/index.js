import {Component} from 'react'
import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    inputWebsite: '',
    inputUsername: '',
    inputPassword: '',
    searchInput: '',
    isChecked: false,
  }

  onAddPassword = event => {
    event.preventDefault()
    const {inputWebsite, inputUsername, inputPassword} = this.state

    const newPasswordList = {
      id: v4(),
      inputWebsite,
      inputUsername,
      inputPassword,
    }

    this.setState(prev => ({
      passwordList: [...prev.passwordList, newPasswordList],
      inputWebsite: '',
      inputUsername: '',
      inputPassword: '',
    }))
  }

  onDeleteItem = id => {
    const {passwordList} = this.state
    const updatedList = passwordList.filter(each => each.id !== id)

    this.setState({passwordList: updatedList})
  }

  updateSearchList = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({inputWebsite: event.target.value})
  }

  onChangeinputUsername = event => {
    this.setState({inputUsername: event.target.value})
  }

  onChangePassword = event => {
    this.setState({inputPassword: event.target.value})
  }

  onChecked = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  renderNoPasswordsView = () => (
    <div className='no-password-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'
        alt='no passwords'
        className='no-password-image'
      />

      <p className='no-password-text'>No Passwords</p>
    </div>
  )

  render() {
    const {
      inputWebsite,
      inputUsername,
      inputPassword,
      isChecked,
      passwordList,
      searchInput,
    } = this.state

    const updatedList = passwordList.filter(each =>
      each.inputWebsite.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const searchResults = updatedList.length

    return (
      <div className='app-container'>
        <div className='bg-container'>
          <div className='app-logo-container'>
            <img
              src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'
              alt='app logo'
              className='app-logo'
            />
          </div>
          <div className='card-container'>
            <div className='form-container'>
              <form onSubmit={this.onAddPassword} className='form'>
                <h1 className='form-heading'>Add New Password</h1>

                <div className='input-container'>
                  <div className='input-icon-container'>
                    <img
                      src='https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png'
                      alt='website'
                      className='input-icon'
                    />
                  </div>

                  <input
                    type='text'
                    placeholder='Enter Website'
                    onChange={this.onChangeWebsite}
                    className='input-box'
                    value={inputWebsite}
                  />
                </div>

                <div className='input-container'>
                  <div className='input-icon-container'>
                    <img
                      className='input-icon'
                      src='https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png'
                      alt='username'
                    />
                  </div>
                  <input
                    className='input-box'
                    type='text'
                    placeholder='Enter username'
                    onChange={this.onChangeinputUsername}
                    value={inputUsername}
                  />
                </div>

                <div className='input-container'>
                  <div className='input-icon-container'>
                    <img
                      src='https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png'
                      alt='password'
                      className='input-icon'
                    />
                  </div>
                  <input
                    type='password'
                    placeholder='Enter Password'
                    onChange={this.onChangePassword}
                    className='input-box'
                    value={inputPassword}
                  />
                </div>
                <div className='btn-container'>
                  <button type='submit' className='button'>
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src=' https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png'
              alt='password manager'
              className='card-image'
            />
          </div>

          <div className='card-container-bottom'>
            <div className='bg-container-bottom'>
              <div className='password-header'>
                <h1 className='your-password-text'>Your Passwords</h1>
                <p className='your-password-text'>{searchResults}</p>

                <div className='search-container'>
                  <div className='search-icon-container'>
                    <img
                      src='https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png'
                      alt='search'
                      className='search-icon'
                    />
                  </div>
                  <input
                    className='search-input'
                    type='search'
                    placeholder='Search'
                    onChange={this.updateSearchList}
                  />
                </div>
              </div>

              <hr className='hr-line' />

              <div className='checkbox-container'>
                <input
                  type='checkbox'
                  checked={isChecked}
                  className='checkbox'
                  id='checkbox'
                  onChange={this.onChecked}
                />
                <label htmlFor='checkbox' className='label'>
                  Show passwords
                </label>
              </div>

              {searchResults === 0 ? (
                this.renderNoPasswordsView()
              ) : (
                <ul className='password-list-container'>
                  {updatedList.map(each => (
                    <PasswordItem
                      key={each.id}
                      passwordDetails={each}
                      isChecked={isChecked}
                      onDeleteItem={this.onDeleteItem}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
