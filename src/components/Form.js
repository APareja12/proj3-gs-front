const Form = (props) => {

    return (
      <div>
        <form action='/films'>
          <input name= "title" id="title" type="text" placeholder="Film Title" />
          <input name= "year" id="year" type="text" placeholder="Year" />
          <input name= "img" url="img" id="img" placeholder="URL"/>
          <input name= "director" id="director" type="text" placeholder="Director" />
          <input name= "country" id="country" type="text" placeholder="Country" />
          <input type="submit" value="submit" />   
        </form>
      </div>
    );
  };
  
  export default Form;