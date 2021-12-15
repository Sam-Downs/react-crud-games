import React, {
  useState
} from 'react';

function Addgame(props){

  const[gameSeries,setGameSeries] = useState("");
  const[game,setGame] = useState("");
  const[gameYear,setGameYear] = useState("");
  
  function doWork(){
      
      const newGame = {"series":gameSeries,"game":game,"year":parseInt(gameYear)};
      // const newAllCars = [...props.allCars,newCar];
      // props.setAllCars(newAllCars);
      // props.setSearchResults([...props.searchResults,newCar]);

      // if(localStorage) {
      //     localStorage.setItem('cars',JSON.stringify(newAllCars));
      //     console.log('Saved new car to local storage');
      // }
      props.addGame(newGame);
  }

  return(
      <div className="row mt-4 mb-4">
          <div className="col-md-3">
              <label htmlFor="txtSeries" className='form-label'>Game Series</label>
              <input type="text" id="txtSeries" placeholder="Game Series" className="form-control border-dark" onChange={(evt) => setGameSeries(evt.currentTarget.value)} value={gameSeries} />
          </div>
          <div className="col-md-3">
              <label htmlFor="txtGame" className='form-label'>Game</label>
              <input type="text" id="txt" placeholder="Game" className="form-control border-dark" onChange={(evt) => setGame(evt.currentTarget.value)} value={game} />
          </div>
          <div className="col-md-3">
              <label htmlFor="txtYear"className='form-label'>Year</label>
              <input type="text" id="txtYear" placeholder="Game Year" className="form-control border-dark" onChange={evt => setGameYear(evt.currentTarget.value)} value={gameYear} />
          </div>
          <div className="col-md-3 d-flex align-items-end">
              <button type="button" id="btnAdd" className="btn btn-dark" onClick={doWork}>Add Game</button>
          </div>    
      </div>
  );

}

export default Addgame ;