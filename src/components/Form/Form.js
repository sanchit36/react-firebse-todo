import React from "react";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
} from "@material-ui/core";

const Form = ({ input, setInput, addTodo }) => {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="add-todo">Write a Todo</InputLabel>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              required
              fullWidth
              id="add-todo"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            disabled={!input}
            color="primary"
            variant="contained"
            type="submit"
            onClick={addTodo}
            fullWidth
          >
            Add todo
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
