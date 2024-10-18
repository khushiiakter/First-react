import Book from "./Book"
export default function Bookstore ({books}){
    return (
        <div className="student">
            <h3 className="student">Book Quantity: {books.length}</h3>
            {
                books.map(book => <Book book={book}></Book>)
            }
        </div>
    )
}