import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = this.props.session
		this.demoEmail = "KaiYipIsJacked@workout.com";
		this.demoPassword = "workout123";
		this.demoLogin = this.demoLogin.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.currentUser === true) {
			this.props.history.push('/workout')
		}

		this.setState({errors: nextProps.errors})
	}

	update(field) {
		return e => this.setState({ [field]: e.currentTarget.value})
	}

	handleSubmit(e) {
		e.preventDefault()

		this.props.action(this.state);
	}

	demoLogin() {
		const email = this.demoEmail;
		const password = this.demoPassword;
		const Speed = 60;
		for (let i = 0; i < email.length; i++) {
			setTimeout(() => {
				this.setState({ email: this.state.email + email[i] });
			}, i * Speed);
		}
		for (let k = 0; k < password.length; k++) {
			setTimeout(() => {
				this.setState({ password: this.state.password + password[k] });
			}, (email.length * Speed) + k * Speed);
		}
		setTimeout(() => {
			this.props.action(this.state).then(() => this.props.history.push('/workout'));
		}, (email.length * Speed) + (password.length * Speed) + Speed);
	}

	componentWillUnmount() {
		if (this.props.errors.length) {
			this.props.clearErrors();
		}
	}
}