import { useState } from 'react'
import { StyledMain } from '../styles';

const Dashboard = (props) => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "", 
        email: "",
        companyName: "",
    });

    const handleChange = event => {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = event => {

    }

    return (
        <StyledMain>
            <h1>Dashboard</h1>
        </StyledMain>
    );
};

export default Dashboard;