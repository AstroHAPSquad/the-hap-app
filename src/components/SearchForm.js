import React, { useState, useEffect } from "react";
import { makeStyles, Button, Grid } from "@material-ui/core";
import { navigate } from "@reach/router";
import { data } from "../mockdata/data";
const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    marginTop: 50,
    padding: 40,
  },
  button: {
    padding: 10,
    margin: 10,
    color: "red",
    alignSelf: "center",
  },
  input: {
    padding: 20,
    margin: 20,
    width: "50%",
  },

  select: {
    opacity: "10%",
  },
}));
export default function SearchForm(props) {
  const { images, post, posts, addToList } = props;
  const classes = useStyles();

  const [source, setSource] = useState([]);
  const [gridExist, setGridExist] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [term, setTerm] = useState("");
  const [photo, setPhoto] = useState({});
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=15&query=${term}&client_id=SsN2tdhFTFP1oJPWl-_J7W4lbuQKvE6Mt3DiYmBr5LE`,
      { method: "GET" }
    )
      .then((data) => data.json())
      .then((response) => setSource(response.results));
  }, [term, setSource]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(photo);
    addToList({ ...post, img: photo.urls.full, id: photo.id });
    navigate("/dashboard");
    setTerm("");
    setSearchValue("");
    setSource([]);
    setPhoto({});
  }

  function handleSearch(event) {
    console.log("in here");
    event.preventDefault();
    setTerm(searchValue);
    setGridExist(true);
  }

  function handleClick(post) {
    setPhoto(post);
    setSelected(true);

  }

  //work on ternary operator for button (do in handlesearch function (i think))

  return (
    <>
      <div className={classes.root}>
        <form className={classes.form} onSubmit={handleSearch}>
          <input
            className={classes.input}
            placeholder="Type anything..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <div>
            <Button
              variant="contained"
              className={classes.button}
              onClick={handleSearch}
            >
              {" "}
              Search
            </Button>
          </div>
        </form>
      </div>
      <div className={classes.gridItem}>
        {
          <Grid container align="center" alignItems="center">
            {source &&
              source.map((tile) => {
                // console.log("tile: ", tile);
                return (
                  <Grid
                    item
                    xs={4}
                    key={tile.id}
                    onClick={() => handleClick(tile)}
    
                    className={selected ? classes.select : null}
                  >
                    <img src={tile.urls.thumb} height={300} />
                  </Grid>
                );
              })}
          </Grid>
        }
      </div>

      {gridExist ? (
        <Button
          variant="contained"
          className={classes.submit}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      ) : null}
    </>
  );
}
