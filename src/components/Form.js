const Form = (props) => {

    return (
      <div>
        <form action='/films'>
          <input name= "title" id="title" type="text" placeholder="" />
          <input name= "year" id="year" type="text" placeholder="" />
          <input name= "director" id="director" type="text" placeholder="" />
          <input name= "country" id="country" type="text" placeholder="" />
          <input type="submit" value="submit" />   
        </form>
      </div>
    );
  };
  
  export default Form;