

 const List = (props) => {
    const loaded = () => {
        return (
        
            <div>  
                <ul>
                {props.films.map(film => (
                    <li key={film.id}>
                        Title:
                           <span>{film.title}</span>
                        Year: 
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