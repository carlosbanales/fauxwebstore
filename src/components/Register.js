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
				<span className={validName ? "valid" : "hide"}>
					OK
				</span>
				<span className={validName || !user ? "hide" : "invalid"}>
					Invalid
				</span>
				<p id="uidnote" className={userFocus && user && !validName
				? "instructions" : "offscreen"}>
					4 to 24 characters.<br />
					Must begin with a letter.<br />
					Letters, numbers, underscores, hyphens allowed.
				</p>
				<label htmlFor="password">
					Password:
				</label>
				<input 
					type="password"
					id="passord"
					onChange={(e) => setPwd(e.target.value)}
					required
					aria-invalid={validPwd ? "false" : "true"}
					aria-describedby="pwdnote"
					onFocus={() => setPwdFocus(true)}
					onBlur={() => setPwdFocus(false)}
				/>
				<span className={validPwd ? "valid" : "hide"}>
					OK
				</span>
				<span className={validPwd || !pwd ? "hide" : "invalid"}>
					Invalid
				</span>
				<p id="pwdnote"
				className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
					8 to 24 characters.<br />
					Must include uppercase and lowercase letters, and lowercase letters,
					a number and a special character.<br />
					Allowed special characters:	
					<span aria-label="at symbol">@</span>
					<span aria-label="exclamation mark">!</span>
					<span aria-label="hashtag">#</span>
					<span aria-label="percent">%</span>
					<span aria-label="dollar sign">$</span>
				</p>
			</form>
		</section>
	);
}

export default Register;
