import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Label, Input } from 'semantic-ui-react'
import TodoService from '../Services/TodoService';
import * as Yup from "yup";
import { toast } from 'react-toastify';

export default function TodoUpdate({ id }) {

  const [todos, setTodo] = useState([])

  const TodoSchema = Yup.object().shape({

    content: Yup.string().required("Boş bırakılamaz..").min(3, "3 Karakterden uzun Olmalıdır")
  });

  let todoService = new TodoService()

  useEffect(() => {

    todoService.getById(id).then(result => setTodo(result.data))

  }, []);




  const deleteTodo = (id) => {

    console.log(id);
    todoService.deleteTodo(id);
    toast.error("Silindi")
  };


  const formik = useFormik({
    initialValues: {
      id: id,
      content: todos.content,
      isCompleted: todos.isCompleted
    },
    enableReinitialize: true,
    validationSchema: TodoSchema,

    onSubmit: (values) => {
      console.log(values);
      todoService.updateTodo(id, values).then((result) => toast.info("Güncellendi"))

    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field>

          <Input
            style={{ width: "100%" }}
            placeholder="Content"
            value={formik.values.content}
            name="content"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.content && formik.touched.content && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.content}
            </div>
          )}
        </Form.Field>
        <Button primary type='submit' >Güncelle</Button>

        <Button color='red' onClick={() => deleteTodo(id)}>Sil</Button>

        <Label as='a' color='teal' tag>
          Yapıldı ?

          <Checkbox toggle value={todos.isCompleted}
            type="checkbox"
            id={id}
            name="isCompleted"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Label>
      </Form>
    </div>
  )
}
