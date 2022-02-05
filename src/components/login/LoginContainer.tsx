import { Login } from './Login';
// import { withRouter } from 'react-router';

type LoginContainerProps = {
	user?: Record<string, unknown>;
	history: History;
};

function LoginContainer(props: LoginContainerProps): JSX.Element {
	if (props.user) {
		// props.history.push('/home')
	}
	return <Login />;
}

// export default withRouter(LoginContainer);
