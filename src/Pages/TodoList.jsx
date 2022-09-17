import React, { useEffect, useState } from 'react'
import { Icon, Table, Grid, Label, Button, TableCell } from 'semantic-ui-react'
import TodoService from '../Services/TodoService'
import TodoUpdate from './TodoUpdate'
import TodoAdd from './TodoAdd'


import 'react-toastify/dist/ReactToastify.css';

export default function () {

    const [isState, setIsState] = useState(false)
    const [isStateButton, setIsStateButton] = useState(false)

    function handleTrue() {
        setIsState(true)

    }

    function handleTrueB() {
        setIsStateButton(true)
    }


    function handleFalse() {
        setIsState(false)
    }

    function handleFalseB() {
        setIsStateButton(false)
    }


    const [todos, setTodos] = useState([])

    useEffect(() => {
        let todoService = new TodoService()
        todoService.getAllTodo().then(result => setTodos(result.data))
    }, [])

    let userName = window.localStorage.getItem('user')


    return (
        <div>
            <Grid columns={3} >
                <Grid.Row>
                    <Grid.Column width={3} >

                    </Grid.Column>
                    <Grid.Column width={9} >

                        <Table celled inverted="true" >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>{userName}</Table.HeaderCell>

                                    <Table.HeaderCell>My To-Do List</Table.HeaderCell>

                                    <Button.Group>
                                        <Button color='teal' size='small' onClick={isState ? handleFalse : handleTrue} >Düzenle</Button>
                                        <Button.Or />

                                        <Button positive onClick={isStateButton ? handleFalseB : handleTrueB} >Ekle</Button>

                                    </Button.Group>

                                </Table.Row>

                            </Table.Header>

                            <Table.Body>
                                {isStateButton ? <TodoAdd /> : handleTrueB}
                                {

                                    todos.map(todos => (
                                        <Table.Row key={todos.id}>
                                            <Table.Cell>{todos.content}</Table.Cell>


                                            <Table.Cell>{todos.isCompleted ? (
                                                <Label color="green">
                                                    <Icon name="check" size="large" />
                                                </Label>
                                            ) : (
                                                <Label
                                                    basic
                                                    color="red"
                                                    style={{ marginLeft: "0.5em", fontSize: "0.80em" }}
                                                >
                                                    <Icon name="hourglass two" />
                                                    Tamamlanmadı
                                                </Label>

                                            )}
                                                <div style={{ textAlign: 'right' }}>

                                                </div>
                                            </Table.Cell>
                                            <TableCell>

                                                {isState ? <TodoUpdate id={todos.id} /> : handleTrue}


                                            </TableCell>


                                        </Table.Row>
                                    ))
                                }

                            </Table.Body>

                        </Table>
                    </Grid.Column>
                    <Grid.Column width={3}>

                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>

                </Grid.Row>
            </Grid>
        </div>
    )
}
