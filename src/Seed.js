import React, {
    useState, useEffect
} from 'react';
import Car from './Car';



function Seed() {

    const[allCars,setAllCars] = useState(null);
    const[searchResults,setSearchResults] = useState(null);
    const[keywords,setKeywords] = useState("");

    //useEffect is a side effect hook that runs after every render
    useEffect(() => {
        if(localStorage){
            const cars = JSON.parse(localStorage.getItem('cars'));
            if(cars){
                setAllCars(cars);
                setSearchResults(cars);
            }
        }
    }, []);

    function resetCars() {
        //Save the seed car data to local storage
        const seedCarData = [{
            "make": "Nissan",
            "model": "Sentra",
            "year": 1992
        }, {
            "make": "Toyota",
            "model": "Celica",
            "year": 1983
        }, {
            "make": "Mitsubishi",
            "model": "Mirage",
            "year": 1994
        }, {
            "make": "Volvo",
            "model": "V90",
            "year": 1997
        }, {
            "make": "GMC",
            "model": "Envoy XUV",
            "year": 2005
        }, {
            "make": "Dodge",
            "model": "Ram 1500",
            "year": 2000
        }, {
            "make": "Dodge",
            "model": "Ram 2500",
            "year": 1997
        }, {
            "make": "Ford",
            "model": "E-Series",
            "year": 1987
        }, {
            "make": "Subaru",
            "model": "Alcyone SVX",
            "year": 1995
        }, {
            "make": "Toyota",
            "model": "Yaris",
            "year": 2012
        }];
        setAllCars(seedCarData);
        
        //Save the seed car data to local storage
        if(localStorage) {
            localStorage.setItem('cars',JSON.stringify(seedCarData));
            console.log('Seed data saved to local storage');
        }
    };

    function searchCars(evt){
       evt.preventDefault();
        if(keywords){
            const keywordsArray = keywords.toLowerCase().split(' ');
            const results = allCars.filter(car => {
                //return keywordsArray.includes(car.make.toLowerCase()) || keywordsArray.includes(car.model.toLowerCase());
                for(const word of keywordsArray){
                    if(!car.make.toLowerCase().includes(word) && 
                       !car.model.toLowerCase().includes(word) &&
                       car.year !== parseInt(word)){
                        return false;
                    }
                }
                return true;
            });
            setSearchResults(results);
        }
        else{
            setSearchResults(allCars);
        }
    }

    return (
        <div className="container">
             <h1> Car Data </h1>
            <form>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Search" onChange={(evt) => setKeywords(evt.currentTarget.value)}></input>
                    <button type="submit" className="btn btn-primary" onClick={searchCars}>Search</button>
                </div>
            </form>
           
            <div className="row">
                {!allCars && <button className="btn btn-lg btn-warning" onClick={resetCars}>Save Seed Data to Local Storage</button>}
                {searchResults && searchResults.map((car, index) => {
                    return <div className="col-md-3" key={index}>
                       <Car car={car} color={index % 2 ? 'danger' : ''} />
                    </div> 
                })}
            </div>
        </div> 
    );

}

export default Seed;