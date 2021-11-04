import { StyledMain } from '../styles';
import { signIn } from '../services/firebase';

const Login = (props) => {
    return (
        <StyledMain>
            <div id="login" >
                <h1>Login</h1>
                <button className="signin-btn" onClick={signIn}>Sign in with Google</button>
            </div>
        </StyledMain>
    );
};

export default Login;