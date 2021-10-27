import { useState } from 'react';

const Form = (props) => {
    const [newForm, setNewForm] = useState(getNewState());
   
    const handleChange = (event) => {
        setNewForm(prevState => ({
                ...prevState,
                [event.target.name]: event.target.value 
            }
        ));
    }
    
    const handleSubmit = (event) => {
       
        event.preventDefault();
        props.createPeople(newForm)
        setNewForm(getNewState());
    }
    
    function getNewState() {
        return {
            name: "",
            image: "",
            title: ""
        }
    }

    return (
      <form className="Form" onSubmit={handleSubmit}>
          <input value={newForm.title} onChange={handleChange} placeholder="Title" name="name"  type="text" />
          <input value={newForm.year} onChange={handleChange} placeholder="Year" name="year"  type="text" />
          <input value={newForm.image} onChange={handleChange} placeholder= "URL" name="image" type="url" />
          <input value={newForm.director} onChange={handleChange} placeholder="Director" name="director"  type="text" />
          <input value={newForm.country} onChange={handleChange} placeholder="Country" name="country"  type="text" />
          <input type="submit" />
      </form>
    );
  };
  
  export default Form;