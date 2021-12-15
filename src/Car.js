

function Car(props){
    let cardClasses = 'card';

    if(props.color==='danger'){
        cardClasses += ' bg-danger text-white';
    }
 return(
    <div className={cardClasses}>
    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."></img>
    <div className="card-body">
        <h2 className="card-title">{props.car.make}</h2>
         <p>{props.car.model} {props.car.year} </p>
    </div>
</div>
 );
}

export default Car;