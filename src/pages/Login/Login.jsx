import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
	const navigate = useNavigate();

	const handleSubmit = useCallback((event) => {
		event.preventDefault();
		navigate('/');
	}, [navigate]);

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="input-email">E-mail</label>
					<input
						type="email"
						id="input-email"
						required
					/>
				</div>
				<div>
					<label htmlFor="input-password">Senha</label>
					<input
						type="password"
						id="input-password"
						required
					/>
				</div>
				<button type="submit">Entrar</button>
			</form>
			<Link to="/">Voltar</Link>
		</div>
	);
}

export default Login;