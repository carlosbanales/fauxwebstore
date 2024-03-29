import { useRef, useState, useEffect } from 'react';

function Login() {

	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

	useEffect(() => {
		userRef.current.focus();
	}, [])

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd])

	return (
		<section>
			<p ref={errRef} className={errMsg ? "errmsg" :
			"offscreen"} aria-live="assertive">{errMsg}</p>
			<h3>Please Login</h3>
			<form>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="username"
					ref={userRef}
					autoComplete="off"
					onChange={(e) => setUser(e.target.value)}
					value={user}
					required
				/>
				
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					onChange={(e) => setPwd(e.target.value)}
					value={pwd}
					required
				/>
				<button>Sign In</button>
			</form>
		</section>
	)
}

export default Login;
