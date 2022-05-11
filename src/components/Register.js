import { useRef, useState, useEffect } from 'react';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);
	
	const [pwd, setPwd] = useState('');
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);


	const [matchPwd, setMatchPwd] = useState('');
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	},[])

	useEffect(() => {
		const result = USER_REGEX.test(user);
		console.log(result);
		console.log(user);
		setValidName(result);
	}, [user])

	useEffect(() => {
		const result = PWD_REGEX.test(pwd);
		console.log(result);
		console.log(pwd);
		setValidPwd(result);
		const match = pwd === matchPwd;
		setValidMatch(match);
	}, [pwd, matchPwd])

	useEffect(() => {
		setError('');
	}, [user, pwd, matchPwd])

	return (
		<section>
			<p ref={errRef} className={error ? "errmsg" :
			"offscreen"} aria-live="assertive">{error}</p>
			<h3>Don't have an account, sign up below!</h3>
			<form>
				<label htmlFor="username">
					Username:
					<span className={validName ? "valid" : "hide"}>
						OK
					</span>
					<span className={validName || !user ? "hide" : "invalid"}>
						Invalid
					</span>
				</label>
				<input
					type="text"
					id="username"
					ref={userRef}
					autoComplete="off"
					onChange={(e) => setUser(e.target.value)}
					required
					aria-invalid={validName ? "false" : "true"}
					aria-describedby="uidnote"
					onFocus={() => setUserFocus(true)}
					onBlur={() => setUserFocus(false)}
				/>
				<p id="uidnote" className={userFocus && user && !validName
				? "instructions" : "offscreen"}>
					4 to 24 characters.<br />
					Must begin with a letter.<br />
					Letters, numbers, underscores, hyphens allowed.
				</p>	
			</form>
		</section>
	);
}

export default Register;
