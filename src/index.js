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
		</div>
	)
}

ReactDOM.render(<Login />, document.getElementById('root'))
