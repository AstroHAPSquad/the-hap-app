import React from "react"
import {GridList, GridListTile, GridListTileBar, makeStyles} from "@material-ui/core"
import {data} from "../mockdata/data"

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: 20,
      },
      gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        height: 400,
      },
}))

export default function Slideshow(props) {
    const {images} = props
    const classes = useStyles()
    return (
        <div className={classes.root}>
      <GridList className={classes.gridList} cols={3}>
        {images.map((image) => (
          <GridListTile key={image.id} rows={2}>
            <img src={image.src2} height={image.height}/>
            <GridListTileBar
              title={image.author}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    )
}