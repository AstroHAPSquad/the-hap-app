import React, { useState, useEffect } from "react";
import { makeStyles, Button, Grid } from "@material-ui/core";
import { navigate } from "@reach/router";
import { data } from "../mockdata/data";
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
  },
  input: {
    padding: 10,
    margin: 10,
    width: "50%",
  },
}));
export default function SearchForm(props) {
  const { images, post, posts, addToList } = props;
  const classes = useStyles();

  const [source, setSource] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=15&query=${term}&client_id=SsN2tdhFTFP1oJPWl-_J7W4lbuQKvE6Mt3DiYmBr5LE`,
      { method: "GET" }
    )
      .then((data) => data.json())
      .then((response) => setSource(response.results));
  }, [term, setSource]);

  /*  function handleSubmit(event) {
        event.preventDefault();
        addToList({post, img: source.urls.full});
        navigate("/dashboard")
        setImage(false);
        setSource("");
    }
   */

  function handleSearch(event) {
    console.log("in here");
    event.preventDefault();
    setTerm(searchValue);
    setSearchValue("");
  }
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
                  <Grid item xs={4} key={tile.id}>
                    <img src={tile.urls.regular} height={400} />
                  </Grid>
                );
              })}
          </Grid>
        }
        {/* <Grid className={classes.gridItem} item xs={12}> */}
        {/* { grid ?
        <img src={source.urls && source.urls.full} height={300}/>
        : null} */}
        {/* </Grid> */}
        {/* {image ? */}
        {/* <Grid className={classes.gridItem} item xs={12}> */}
        {/* <Button variant="contained" className={classes.submit} onClick={handleSubmit}>Submit</Button> */}
        {/* </Grid> */}
        {/* : null} */}
      </div>
    </>
  );
}
