import React, { useState, useEffect } from "react";
import { makeStyles, Button, Grid } from "@material-ui/core";
import { navigate } from "@reach/router";
const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    marginTop: 50,
  },
  button: {
    padding: 10,
    margin: 10,
    color: "red",
    alignSelf: "center",
    marginBottom: 30,
  },
  input: {
    padding: 10,
    margin: 10,
    width: "50%",
},

  select: {
    opacity: "50%",
  },
}));
export default function SearchForm(props) {
  const {post, addToList } = props;
  const classes = useStyles();

  const [source, setSource] = useState([]);
  const [gridExist, setGridExist] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [term, setTerm] = useState("");
  const [photo, setPhoto] = useState({});
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=15&orientation=squarish&query=${term}&client_id=SsN2tdhFTFP1oJPWl-_J7W4lbuQKvE6Mt3DiYmBr5LE`,
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
  return (
    <div className={classes.root}>
      <div>
          <Grid container direction="row" justify="center" alignItem="center">
            <Grid item xs={12}>
          <input
            className={classes.input}
            placeholder="Type anything..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
</Grid>
            <Button
              variant="contained"
              className={classes.button}
              onClick={handleSearch}
            >
              {" "}
              Search
            </Button>
          </Grid>
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
    
                    className={selected && tile.id == photo.id ? classes.select : null}
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
          className={classes.button}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      ) : null}
    </div>
  );
}
