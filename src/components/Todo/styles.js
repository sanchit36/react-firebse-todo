import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  item: {
    padding: "10px",
    borderBottom: "2px solid rgba(0,0,0,0.04)",
  },
  strike: {
    textDecoration: "line-through",
    backgroundColor: " rgba(0, 0, 255, 0.04)",
  },
}));
