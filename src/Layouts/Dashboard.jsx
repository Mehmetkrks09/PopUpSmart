import React from 'react'
import { Route, Router } from 'react-router-dom'
import UserInfo from '../Pages/UserInfo'
import TodoList from '../Pages/TodoList'
import TodoAdd from '../Pages/TodoAdd'

export default function Dashboard() {
  return (

    <div>

      <Route exact path="/todo" component={TodoList} />
      <Route exact path="/" component={UserInfo} />

    </div>
  )
}
