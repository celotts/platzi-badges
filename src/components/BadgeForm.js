import React from 'react'

class BadgeForm extends React.Component {
    state = {};

    handleCahange = event => {

        {/* Almacena la información en un objeto de forma dinámica */ }
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = event => {
        console.log('Button was clicked');
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('Button was handlSubmit');
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>New Attenedant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >First Name</label>
                        <input onChange={this.handleCahange} className='form-control' type='text' name='fistName'
                            value={this.state.fistName} />
                    </div>
                    <div className="form-group">
                        <label> Last Name</label>
                        <input onChange={this.handleCahange} className='form-control' type='text' name='lastName'
                            value={this.state.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input onChange={this.handleCahange} className='form-control' type='email' name='email'
                            value={this.state.email} />


                    </div>
                    <div className="form-group">
                        <label >Job Title</label>
                        <input onChange={this.handleCahange} className='form-control' type='text' name='jobTitle'
                            value={this.state.jobTitle} />

                    </div>
                    <div className="form-group">
                        <label >Twitter</label>
                        <input onChange={this.handleCahange} className='form-control' type='text' name='twitter'
                            value={this.state.twittere}
                        />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>

        )
    }
}

export default BadgeForm;