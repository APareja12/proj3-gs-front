import { StyledMain } from '../styles';

const Welcome = (props) => {
    return (
        <div className="welcome">
            {
                props.user ?
                <>
                <h1>Welcome to Golden Silence</h1><br />
                <h2><u>{props.user}</u></h2>
                </>
                :

            }
        </div>
    );
};

export default Welcome;