import React from 'react';
import { withRouter } from 'react-router-dom';
import SessionCSS from './_session.css';

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
			this.props.history.push('/home')
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
			this.props.action(this.state).then(() => this.props.history.push('/home'));
		}, (email.length * Speed) + (password.length * Speed) + Speed);
	}

	componentWillUnmount() {
			this.props.clearErrors();
	}

	render() {
		let usernameInput = "";
		let password2 = "";
		let prompt = (<span className="form-prompt">
			Enter <strong>email</strong> and <strong className="pass">password</strong>.
        </span>)
		if (this.props.formType === 'Signup') {
			prompt = (<span className="form-prompt">
				Enter <strong>email</strong>, <strong>username</strong>, <strong className="pass">password</strong>
            </span>)
			usernameInput = (
				<input
					className="input username"
					type="text"
					value={this.state.username}
					placeholder="username"
					onChange={this.update('username')}
				/>
			);
			password2 = (
				<input 
					className="input password2"
					type="password"
					value={this.state.password2}
					placeholder="confirm password"
					onChange={this.update('password2')}
				/>
			)
		};

		let errors = "";
		const inputs = document.getElementsByClassName('input')

		if (this.props.errors.length) {
			errors = this.props.errors.map((error, i) => {
				return (
					<p  key={`error+${i}`} className='errors' >{error}!</p>
				)
			})
			for (let i = 0; i < inputs.length; i++) {
				inputs[i].classList.add('error');
			}
		} else {
			for (let i = 0; i < inputs.length; i++) {
				if (inputs[i].classList.contains('error')) {
					inputs[i].classList.remove('error'); 
				}
			}
		};

		let demoButton = <button 
												className="form-demo" 
												onClick={this.demoLogin}>
              						Try out JungleGym !
            					</button>
		return (
      <div className="outer-session-div">
        <div className="session-form-container">
          <form className="session-form" onSubmit={this.handleSubmit}>
						<div className="titleWrapper">
							<h3 className="input-title">{this.props.formType}</h3>
							<div className="prompt-holder">{prompt}</div>
						</div>
						<div className="bodyContainer">
							<div className="inputWrapper">
								<input
									className="input email"
									type="text"
									value={this.state.email}
									placeholder="you@junglegym.com"
									onChange={this.update("email")}
								/>
								{usernameInput}
								<input
									className="input password"
									type="password"
									value={this.state.password}
									placeholder="password"
									onChange={this.update("password")}
								/>
								{password2}
							</div>
							{errors}
							<div className="linkContainer">
								<button className="session-button">{this.props.formType}</button>
								{this.props.formType === 'Login' ? demoButton : ""}
								<div className="reRoute">
									<p>{this.props.sessionText} <span>{this.props.navLink}</span> </p>
								</div>
							</div>
						</div>
          </form>
        </div>
      </div>
    );
	};
}

export default SessionForm;