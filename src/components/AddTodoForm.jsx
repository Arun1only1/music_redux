import { Button, FormHelperText, Stack, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addTodo } from "../store/slice/todoSlice";

const AddTodoForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        title: "",
      }}
      validationSchema={Yup.object({
        title: Yup.string().required("Title is required.").trim(),
      })}
      onSubmit={(values) => {
        const newTodo = values;

        dispatch(addTodo(newTodo));
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Stack direction="column" spacing={4}>
            <TextField label="Enter title" {...formik.getFieldProps("title")} />
            {formik.touched.title && formik.errors.title ? (
              <FormHelperText error>{formik.errors.title}</FormHelperText>
            ) : null}
            <Button
              type="submit"
              variant="contained"
              color="success"
              disableElevation
            >
              Add todo
            </Button>
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default AddTodoForm;
