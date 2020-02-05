import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'
import { notify } from 'react-notify-toast'


class Login extends React.Component{
  state = {
    data: {
      email: '',
      password: ''
    },
    error: ''
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data, error: '' })
  }

  handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await axios.post('/api/login', this.state.data)
      Auth.setToken(res.data.token)
      // notify.show(res.data.message, 'success', 3000)
      this.props.history.push('/comics')
    }  catch (err) {
      this.setState({ error: 'Incorrect Credentials' })
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column s-half is-offset-one-quarter">
              <h2 className="title">Login</h2>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    required
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    required
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="button is-warning-is-fullwidth">Login
              </button>

            </form>

          </div>
        </div>


      </section>


    )
  }


}

  














export default Login