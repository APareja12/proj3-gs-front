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
        props.createFilms(newForm)
        setNewForm(getNewState());
    }
    
    function getNewState() {
        return {
            title: "",
            year:"",
            image:"",
            director:"",
            country:"",
        }
    }

    return (
      <form className="form-control" onSubmit={handleSubmit}>
          <div className="inputs">
          <input value={newForm.title} onChange={handleChange} placeholder="Title" name="title"  type="text" /><br />
          <input value={newForm.year} onChange={handleChange} placeholder="Year" name="year"  type="text" /><br />
          <input value={newForm.image} onChange={handleChange} placeholder= "URL" name="image" type="url" /><br />
          <input value={newForm.director} onChange={handleChange} placeholder="Director" name="director"  type="text" /><br />
          <input value={newForm.country} onChange={handleChange} placeholder="Country" name="country"  type="text" /><br />
          <button>Submit</button>
          </div>
      </form>
    );
  };
  
  export default Form;