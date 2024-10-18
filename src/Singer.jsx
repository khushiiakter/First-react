export default function Singer({singer}){
    
    return(
        <div className="student">
            <h3>Singer Name: {singer.name} </h3>
            <p>song: {singer.song}</p>
        </div>
    )
}