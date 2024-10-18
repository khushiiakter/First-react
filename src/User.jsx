export default function User({user}){
    const {name, email, phone, website, id, address} = user;
    return(
        <div className="student">
            <h4>Address(lat): {address.geo.lat}</h4>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>phone: {phone}</h4>
            <h4>Website: {website}</h4>
            <h4>id: {id}</h4>
        </div>
        
    )
}