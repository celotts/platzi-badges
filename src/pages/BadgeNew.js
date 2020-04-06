import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm.js';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt='Logo' />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName='Carlos'
                lastName='Lott'
                jobTitle='Frontend Engineer'
                twitter='celotts'
                avatar='https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon' />
            </div>
            <div className='col-6'>
              <BadgeForm />
            </div>
          </div>

        </div>
      </div>
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