export default function Book({book}){
    const {name, price, id} = book;
    return(
        <div className="student">
            <h4 className="student">Book Name: {name}</h4>
            <h5 className="student">Price: {price}</h5>
            <h5 className="student">Id NO: {id}</h5>
        </div>
    )
}