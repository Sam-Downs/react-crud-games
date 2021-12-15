import React, { useState, useEffect } from "react";
import Addgame from "./Addgame";
import Game from "./Game";
import _ from "lodash";

function ShowMeGames() {
  const [allGames, setAllGames] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState("");
  const [series, setSeries] = useState("");
  const [game, setGame] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (localStorage) {
      const games = JSON.parse(localStorage.getItem("games"));
      if (games) {
        setAllGames(games);
        setSearchResults(games);
      }
    }
  }, []);

  function resetGames() {
    const seedGameData = [
      {
        series: "Mario:",
        game: "New Super Mario Bros,",
        year: 2006,
        img: "./img/supermario.jpg",
      },
      {
        series: "Mario:",
        game: "Super Mario Galaxy,",
        year: 2007,
        img: "./img/galaxy.jpg",
      },
      {
        series: "Mario:",
        game: "Super Mario Maker,",
        year: 2015,
        img: "./img/maker.jpg",
      },
      {
        series: "Halo:",
        game: "Halo 3,",
        year: 2007,
        img: "./img/halo3.jpg",
      },
      {
        series: "Halo:",
        game: "Halo Infinite,",
        year: 2021,
        img: "./img/infinite.jpg",
      },
      {
        series: "Halo:",
        game: "Halo Reach,",
        year: 2010,
        img: "./img/reach.jpg",
      },
      {
        series: "Pokemon:",
        game: "Soul Silver,",
        year: 2010,
        img: "./img/soulsilver.jpg",
      },
      {
        series: "Pokemon:",
        game: "Pokemon Emerald,",
        year: 2005,
        img: "./img/emerald.jpg",
      },
      {
        series: "Pokemon:",
        game: "Pokemon Platinum,",
        year: 2009,
        img: "./img/plat.jpg",
      },
      {
        series: "Call of Duty:",
        game: "Call of Duty: Black Ops,",
        year: 2010,
        img: "./img/blackops.jpg",
      },
      {
        series: "Call of Duty:",
        game: "Call of Duty 4: Modern Warfare Remastered,",
        year: 2007,
        img: "./img/remastered.jpg",
      },
      {
        series: "Call of Duty:",
        game: "Call of Duty: World at War,",
        year: 2008,
        img: "./img/waw.jpg",
      },
      {
        series: "The Elder Scrolls:",
        game: "The Elder Scrolls V: Skyrim,",
        year: 2011,
        img: "./img/skyrim.jpg",
      },
      {
        series: "The Elder Scrolls:",
        game: "The Elder Scrolls IV: Oblivion,",
        year: 2006,
        img: "./img/oblivion.jpg",
      },
      {
        series: "Fallout:",
        game: "Fallout: New Vegas,",
        year: 2010,
        img: "./img/fallout.jpg",
      },
      {
        series: "Fallout:",
        game: "Fallout: 3,",
        year: 2008,
        img: "./img/fallout3.jpg",
      },
      {
        series: "Fallout:",
        game: "Fallout: 4,",
        year: 2015,
        img: "./img/4.jpg",
      },
      {
        series: "Battlefield:",
        game: "Battlefield 4,",
        year: 2013,
        img: "./img/battlefield.jpg",
      },
      {
        series: "Battlefield:",
        game: "Battlefield Bad Company 2,",
        year: 2010,
        img: "./img/company2.jpg",
      },
      {
        series: "Battlefield:",
        game: "Battlefield 1,",
        year: 2016,
        img: "./img/battlefield1.jpg",
      },
      {
        series: "Mortal Kombat:",
        game: "Mortal Kombat 11,",
        year: 2019,
        img: "./img/mortalkombat.jpg",
      },
      {
        series: "Mortal Kombat:",
        game: "Mortal Kombat X,",
        year: 2015,
        img: "./img/mkx.jpg",
      },
      {
        series: "Assassin's Creed:",
        game: "Assassin's Creed Odyssey,",
        year: 2018,
        img: "./img/assassinscreed.jpg",
      },
      {
        series: "Assassin's Creed:",
        game: "Assassin's Creed IV: Black Flag,",
        year: 2018,
        img: "./img/blackflag.jpg",
      },
    ];
    setAllGames(seedGameData);

    saveGames(seedGameData);
  }

  function addGame(newGame) {
    const newAllGames = [...allGames, newGame];
    setAllGames(newAllGames);
    setSearchResults([...searchResults, newGame]);

    saveGames(newAllGames);
  }

  function modifyGame(gameIndex, updatedGame) {
    const newAllGames = _.map(allGames, (game, index) => (index === gameIndex ? { ...game, ...updatedGame } : game));
    const newSearchResults = _.map(searchResults, (game, index) =>
      index === gameIndex ? { ...game, ...updatedGame } : game
    );

    setAllGames(newAllGames);
    setSearchResults(newSearchResults);
    saveGames(newAllGames);
  }

  function saveGames(allGames) {
    if (localStorage) {
      localStorage.setItem("games", JSON.stringify(allGames));
      console.log("Saved cars to local storage");
    }
  }

  function searchGames(evt) {
    evt.preventDefault();
    let keywordsArray = [];

    if (keywords) {
      keywordsArray = keywords.toLowerCase().split(" ");
    }

    if (series) {
      keywordsArray.push(series.toLowerCase());
    }

    if (game) {
      keywordsArray.push(game.toLowerCase());
    }

    if (keywordsArray.length > 0) {
      const results = allGames.filter((game) => {
        // return keywordsArray.includes(game.series.toLowerCase()) || keywordsArray.includes(game.game.toLowerCase());
        for (const word of keywordsArray) {
          if (
            game.series.toLowerCase().includes(word) ||
            game.game.toLowerCase().includes(word) ||
            game.year === parseInt(word)
          ) {
            return true;
          }
        }
        return false;
      });
      setSearchResults(results);
    } else {
      setSearchResults(allGames);
    }
  }
  return (
    <div className='mt-4 mb-2 container'>
      <h1> Game Data </h1>
      <form>
        <div className='row mb-3 d-flex'>
          <label className='form-label' htmlFor='txtKeywords'>
            Search
          </label>
          <div classname='col-6'>
            <input
              type='text'
              id='txtKeywords'
              className='form-control border-dark'
              placeholder='Search'
              onChange={(evt) => setKeywords(evt.currentTarget.value)}
              value={keywords}
            ></input>
          </div>
          <div className='col-4'>
            <label for='series' className='form-label mt-2'>
              Series
            </label>
            <select
              value={series}
              className='form-select border-dark'
              onChange={(evt) => setSeries(evt.currentTarget.value)}
            >
              <option value=''>Select Series</option>
              {_(allGames)
                .map((game) => game.series)
                .sort()
                .uniq()
                .map((series) => (
                  <option key={series} value={series}>
                    {series}
                  </option>
                ))
                .value()}
            </select>
          </div>
          <div className='col-4'>
            <label for='Year' className='form-label mt-2'>
              Game
            </label>
            <select
              value={game}
              className='form-select border-dark'
              onChange={(evt) => setGame(evt.currentTarget.value)}
            >
              <option value=''>Select Series</option>
              {_(allGames)
                .map((game) => game.game)
                .sort()
                .uniq()
                .map((game) => (
                  <option key={game} value={game}>
                    {game}
                  </option>
                ))
                .value()}
            </select>
          </div>
          <div className='col-4'>
            <label for='Year' className='form-label mt-2'>
              Year
            </label>
            <select
              value={year}
              className='form-select border-dark'
              onChange={(evt) => setYear(evt.currentTarget.value)}
            >
              <option value=''>Select Series</option>
              {_(allGames)
                .map((year) => game.year)
                .sort()
                .uniq()
                .map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))
                .value()}
            </select>
          </div>
          <div className='row d-flex'>
            <div className='col-md-2 mt-3 d-flex'>
              <button type='submit' className='btn btn-primary col-6 me-2' onClick={searchGames}>
                Search
              </button>
              <button className='btn btn-warning col-6 ms-2' onClick={resetGames}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className='row'>
        {!allGames && (
          <button className='btn btn-lg btn-warning' onClick={resetGames}>
            Save Seed Data to Local Storage
          </button>
        )}
        {searchResults &&
          searchResults.map((game, index) => {
            return (
              <div className='col-md-3' key={index}>
                <Game game={game} gameIndex={index} modifyGame={modifyGame} />
              </div>
            );
          })}
      </div>
      <Addgame addGame={addGame} />
    </div>
  );
}

export default ShowMeGames;
