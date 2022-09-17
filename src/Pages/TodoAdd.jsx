import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Button,
    Input,
    Card,
    Form,
    Grid,
} from "semantic-ui-react";

import TodoService from "../Services/TodoService";
import { toast } from "react-toastify";

export default function TodoAdd() {

    let todoService = new TodoService()

    const TodoSchema = Yup.object().shape({

        content: Yup.string().required("Boş bırakılamaz..").min(3, "3 Karakterden uzun Olmalıdır")
    });


    const formik = useFormik({
        initialValues: {
            id: 0,
            content: ""
        },
        //enableReinitialize: true,
        validationSchema: TodoSchema,

        onSubmit: (values) => {

            todoService.addTodo(values).then((result) => toast.success("Başarıyla Eklendi"))
        },
    });

    return (
        <div>
            <Card fluid>
                <Card.Content>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                            <Grid stackable>
                                <Grid.Column width={5}>
                                    <label style={{ fontWeight: "bold" }}>
                                        İçerik
                                    </label>
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

                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Button
                            content="Ekle"
                            labelPosition="right"
                            icon="add"
                            positive
                            type="submit"
                            style={{ marginLeft: "20px" }}
                        />
                    </Form>
                </Card.Content>
            </Card>
        </div>)
}
