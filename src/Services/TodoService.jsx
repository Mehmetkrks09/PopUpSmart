import axios from "axios";

export default class TodoService {

    getAllTodo() {
        return axios.get("https://631f25ad58a1c0fe9f618da7.mockapi.io/todos/");
    }

    // getById(id) {
    //     return axios.get("https://631f25ad58a1c0fe9f618da7.mockapi.io/todos/" + id);
    // }

    addTodo(values) {
        return axios.post("https://631f25ad58a1c0fe9f618da7.mockapi.io/todos/", values);
    }

    updateTodo(id, values) {
        return axios.put("https://631f25ad58a1c0fe9f618da7.mockapi.io/todos/" + id, values);
    }

    deleteTodo(id) {
        return axios.delete("https://631f25ad58a1c0fe9f618da7.mockapi.io/todos/" + id);
    }


}