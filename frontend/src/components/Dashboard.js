import {
  Card,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTodos } from "../actions/todoAction";

const useStyles = makeStyles({
  root: {
    minWidth: "10rem",
  },
  bullet: {
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let renderTodos = "";
  useEffect(() => {
    dispatch(listTodos());
  }, [dispatch]);
  const todoList = useSelector((state) => state.todoList);
  const { loading, error, todos } = todoList;
  console.log(todos);
  if (todos && todos.length > 0) {
    renderTodos = (
      <Grid container justify="center">
        {todos.map((item, index) => (
          <Grid item key={item.id} xs={12} sm={12} md={12}>
            {console.log(
              "Each Item Id : " +
                item.id +
                ", title : " +
                item.title +
                "" +
                item.completed
            )}
            <Card className={classes.root} style={{ marginBottom: "1rem" }}>
              <CardContent>
                <div>
                  <Typography>{item.id}</Typography>
                  User : {item.userId}
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  } else {
    renderTodos = "No Records Found ";
  }

  return <div>{renderTodos}</div>;
};

export default Dashboard;
