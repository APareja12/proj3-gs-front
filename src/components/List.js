

 const List = (props) => {
    const loaded = () => {
        return (
        
            <div>  
                <ul>
                {props.films.map(film => (
                    <li key={film.id}>
                
                           <span>{film.title}</span>
                       
                           <span>{film.year}</span>
                    </li>   
                ))}
                </ul>
            </div>
        )
    }
    const loading = () => {
        return <h1>No Films to Display</h1>;
    }
    return props.films ? loaded() : loading(); 
}
        

export default List;