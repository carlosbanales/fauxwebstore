import { useRef, useState, useEffect } from 'react';

//write the correct regex statement for the email

const EMAIL_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]/;
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = 'https://fakestoreapi.com/users';

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

	const [email, setEmail] = useState('');
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [firstName, setFirstName] = useState('');
	// const [firstName, ]

	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
		console.log("user focus useeffect ran");
	},[])

	useEffect(() => {
		const result = EMAIL_REGEX.test(email);
		setValidEmail(result);
	}, [email])

	useEffect(() => {
		const result = USER_REGEX.test(user);
		setValidName(result);
	}, [user])

	useEffect(() => {
		const result = PWD_REGEX.test(pwd);
		setValidPwd(result);
		const match = pwd === matchPwd;
		setValidMatch(match);
	}, [pwd, matchPwd])

	useEffect(() => {
		setError('');
	}, [user, pwd, matchPwd])

	const handleSubmit = async(e) => {
		e.preventDefault();
		const userVal = USER_REGEX.test(user);
		const pwdVal = PWD_REGEX.test(pwd);
		if(!userVal || !pwdVal) {
			setError("Invalid Entry");
			return;
		}
		console.log(user, pwd);
		setSuccess(true);
		try {
			await fetch('https://fakestoreapi.com/users',{
				headers:{
					"Content-Type":"application/json"
        },
				method:"POST",
				body:JSON.stringify(
					{
						email: email,
						username: user,
						password: pwd,
						name:{
							firstname: 'Banales',
							lastname: 'Carlos'
						},
						address:{
							city: 'Imperial',
							street: '613 North E Street',
							number: 3,
							zipcode: '92251',
							geolocation:{
								lat: '50.5677',
								long: '-40.3159'
							}
						},
						phone: '1-570-236-7043'
					}
				)
			})
				.then(res=>res.json())
				.then(json=>console.log(json))
		} catch(error) {
			console.log(error);
		}
	}
// add a link at line 69
	return (
		<>
			{success ? (
				<section>
					<h3>Success!</h3>
					<p>
						{/* This should be turned into a react router link */}
						<a href="#">Sign In</a>
					</p>
				</section>
			) : (
				<section>
					<p ref={errRef} className={error ? "errmsg" :
							"offscreen"} aria-live="assertive">{error}</p>
					<h3>Don't have an account, sign up below!</h3>
					<form onSubmit={handleSubmit}>
						<label>
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
						<label htmlFor="confirm_pwd">
							Confirm Password:
						</label>
						<input 
							type="password"
							id="confirm_pwd"
							onChange={(e) => setMatchPwd(e.target.value)}
							required
							aria-invalid={validMatch ? "false" : "true"}
							aria-describedby="confirmnote"
							onFocus={() => setMatchFocus(true)}
							onBlur={() => setMatchFocus(false)}
						/>
						<span className={validMatch && matchPwd ? "valid" : "hide"}>
							OK
						</span>
						<span className={validMatch || !pwd ? "hide" : "invalid"}>
							Invalid
						</span>
						<p id="confirmnote"
							className={matchFocus && !validMatch ?
							"instructions" : "offscreen"}>
							Must match first password.<br />
						</p>
						<label htmlFor="email">
							Email:
						</label>
						<input
							type="text"
							id="email"
							autoComplete="off"
							onChange={(e) => setEmail(e.target.value)}
							required
							onFocus={() => setEmailFocus(true)}
							onBlur={() => setEmailFocus(false)}
						/>
						<span className={validEmail ? "valid" : "hide"}>
							OK
						</span>
						<span className={validEmail || !email ? "hide" : "invalid"}>
							Invalid
						</span>
						<label htmlFor="Name">
							Name
						</label>
						<input
							type="text"
							id="name"
							autoComplete="off"
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
						<button
							disabled={!validName || !validPwd || !validMatch ? true:false}>
								Sign Up
						</button>
					</form>
				</section>
			)}
		</>
	);
}

export default Register;
