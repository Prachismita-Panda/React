export default function Netflix(props){
    const description =props.description
    return(
        <div>
            <h1>{props.title}</h1>
            <h3>{props.title1}</h3>
            <h3>{props.year}</h3>
            <h3>{props.type}</h3>
            <h3>{props.ratings}</h3>
            <h3>{props.genre}</h3>
            <h3>{description}</h3>

        </div>
    );
}