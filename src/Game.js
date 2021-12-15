import { useState, useEffect } from "react";

function Game(props) {
  const [editMode, setEditMode] = useState(false);
  const [series, setSeries] = useState("");
  const [game, setGame] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    setSeries(props.game.series);
    setGame(props.game.year);
    setYear(props.game.year);
  }, [props.game]);

  let cardClasses = "card border-dark mb-2 mt-1";

  function onChangeSeries(evt) {
    const newSeries = evt.currentTarget.value;
    setSeries(newSeries);
  }

  function onEdit() {
    setEditMode(true);
    setSeries(props.game.series);
    setGame(props.game.game);
    setYear(props.game.year);
  }

  function onSave() {
    const updatedGame = { series: series, game: game, year: parseInt(year) };

    props.modifyGame(props.gameIndex, updatedGame);
    setEditMode(false);
  }
  return (
    <div className={cardClasses}>
      <img src={props.game.img} className='card-img-top' alt='...'></img>
      {!editMode && (
        <div className='card-body'>
          <h2 className='card-title'>{props.game.series}</h2>
          <p>
            {props.game.game} {props.game.year}{" "}
          </p>
          <button type='button' className='btn btn-sm btn-dark' onClick={onEdit}>
            Edit
          </button>
        </div>
      )}
      {editMode && (
        <form>
          <div className='card-body'>
            <label htmlFor='txtMake'>Game Series</label>
            <input type='text' id='txtSeries' className='form-control' value={series} onChange={onChangeSeries} />
            <label htmlFor='txtModel'>Game</label>
            <input
              type='text'
              id='txtGame'
              className='form-control'
              value={game}
              onChange={(evt) => setGame(evt.currentTarget.value)}
            />
            <label htmlFor='txtYear'>Year</label>
            <input
              type='text'
              id='txtYear'
              className='form-control'
              value={year}
              onChange={(evt) => setYear(evt.currentTarget.value)}
            />
            <div className='d-flex'>
              <button type='button' className='btn btn-sm btn-dark mt-2 me-2' onClick={onSave}>
                Save
              </button>
              <button type='button' className='btn btn-sm btn-dark mt-2' onClick={() => setEditMode(false)}>
                Cancel
              </button>
              <div className='d-flex justify-content-space-align-items-end'>
                <button type='button' className='btn btn-sm btn-danger' onClick={onEdit}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Game;
