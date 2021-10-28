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
        event.preventDefault();
        props.createContact(formState);
        setFormState({
            firstName: "",
            lastName: "", 
            email: "",
            companyName: "",
        });
    }

    return (
        <StyledMain>
            <h1>Dashboard</h1>
            <section>
                <form onSubmit={handleSubmit} >
                <input 
                        onChange={handleChange} 
                        value={formState.firstName} 
                        name="firstName" 
                        type="text" 
                    />
                    <input 
                        onChange={handleChange} 
                        value={formState.lastName} 
                        name="lastName" 
                        type="text" 
                    />
                    <input 
                        onChange={handleChange} 
                        value={formState.email} 
                        name="email" 
                        type="email" 
                    />
                    <input 
                        onChange={handleChange} 
                        value={formState.companyName} 
                        name="companyName" 
                        type="text" 
                    />
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Comapny Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.contacts.map(c => (
                                <tr key={c._id}>
                                    <td>{c.firstName}</td>
                                    <td>{c.lasttName}</td>
                                    <td>{c.email}</td>
                                    <td>{c.companyName}</td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </StyledMain>
    );
};

export default Dashboard;