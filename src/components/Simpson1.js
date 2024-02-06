const Simpson1 = ({simpson}) => {
    const {name, img} = simpson;
    return (
        <div>
            <h3>{name}</h3>
            <img
            src={img}
            alt={name}/>
        </div>
    );
};

export {Simpson1};