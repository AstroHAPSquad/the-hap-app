import React, {useState} from "react";
import {makeStyles, Button, Grid} from "@material-ui/core";

const tileData = [
    {img: "https://picsum.photos/id/0/5616/3744"},
    {img: "https://picsum.photos/id/1/5616/3744"},
    {img: "https://picsum.photos/id/10/2500/1667"},
    {img: "https://picsum.photos/id/100/2500/1656"},
    {img: "https://picsum.photos/id/1000/5626/3635"},
    {img: "https://picsum.photos/id/1001/5616/3744"},
    {img: "https://picsum.photos/id/1002/4312/2868"},
    {img: "https://picsum.photos/id/1003/1181/1772"},
    {img: "https://picsum.photos/id/1004/5616/3744"},
    {img: "https://picsum.photos/id/1005/5760/3840"},
    {img: "https://picsum.photos/id/1006/3000/2000"},
    {img: "https://picsum.photos/id/1008/5616/3744"},
    {img: "https://picsum.photos/id/1009/5000/7502"},
    {img: "https://picsum.photos/id/101/2621/1747"},
    {img: "https://picsum.photos/id/1010/5184/3456"},
    {img: "https://picsum.photos/id/1011/5472/3648"},
    {img: "https://picsum.photos/id/1012/3973/2639"},
    {img: "https://picsum.photos/id/1013/4256/2832"},
    {img: "https://picsum.photos/id/1014/6016/4000"},
    {img: "https://picsum.photos/id/1015/6000/4000"},
    {img: "https://picsum.photos/id/1016/3844/2563"},
    {img: "https://picsum.photos/id/1018/3914/2935"},
    {img: "https://picsum.photos/id/1019/5472/3648"},
    {img: "https://picsum.photos/id/102/4320/3240"},
    {img: "https://picsum.photos/id/1020/4288/2848"},
    {img: "https://picsum.photos/id/1021/2048/1206"},
    {img: "https://picsum.photos/id/1022/6000/3376"},
    {img: "https://picsum.photos/id/1023/3955/2094"},
    {img: "https://picsum.photos/id/1024/1920/1280"},
    {img: "https://picsum.photos/id/1025/4951/3301"}
    ];
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
    }
}))

export default function SearchForm(props) {
    const classes = useStyles()
    const [searchValue, setSearchValue] = useState("");
    const {posts} = props;
    

    function handleSubmit(event) {
        setSearchValue(searchValue);
        

    }



    return (
        <>
        <div className={classes.root}> 
            <form className={classes.form} onSubmit={handleSubmit}>
                <input className={classes.input} placeholder="Type anything..." value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
                <div><Button className={classes.button} variant="contained">Search</Button></div>
            </form>

        </div>
        <div className={classes.gridItem}>
            <Grid container align= "center" alignItems= "center">
                {posts.map(tile => (
                <Grid item xs={4}>
                    <img src={tile.img} height = { 300 } />
                </Grid>
            ))}
            </Grid>
        </div>
        
        </>
        

        
    )

} 



