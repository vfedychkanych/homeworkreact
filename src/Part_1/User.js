const User = ({user}) => {
    const {name, username, email} = user
    const {street, suite, city, zipcode} = user.address
    const {lat, lng} = user.address.geo
    return (
        <div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>address:
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
            <div>zipcode: {zipcode}</div>
            <div>geo:
            <div>lat: {lat}</div>
            <div>lng: {lng}</div>
            </div>
            </div>

            {/*<div>address: {address}</div>*/}
            <hr/>
        </div>
    );
};

export {User};