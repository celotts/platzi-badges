import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg'

import BadgeForm from '../components/BadgeForm.js';
import Badge from '../components/Badge';
import api from '../api'
class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  }

  handleChange = e => {

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null
    })

    try {
      await api.badges.create(this.state.form)
      this.setState({ loading: false })
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className='BadgeNew__hero'>
          <img className='BadgeNew__hero-image img-fluid' src={header} alt='Logo' />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName={this.state.form.firstName || ' FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITTLE'}
                twitter={this.state.form.twittere || 'twitter'}
                email={this.state.form.email || 'EMAIL'}
                avatar='https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon' />
            </div>
            <div className='col-6'>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form} />
            </div>
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew;
/* import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
 */