import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
const Login = () => {
	return (
		<div className="container">
			<div className="left">
				<h2>Redefining Mobile Advertising</h2>
				<p>Please use this form to register</p>
				<p>
					If you are a member, please <a href="#">login</a>.
				</p>
			</div>
			<div className="right">
				<img src="./asset3.png" />
				<h4>Register</h4>
				<form>
					<label>
						Full Name
						<input type="text" name="fullname" />
					</label>

					<label>
						Email
						<input type="email" name="email" />
					</label>

					<label>
						Password
						<input type="password" name="password" />
					</label>
				</form>
				<div className="buttons">
					<button id="register">Register</button>
				</div>
			</div>
		</div>
	)
}

ReactDOM.render(<Login />, document.getElementById('root'))
