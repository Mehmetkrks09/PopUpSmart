import React from 'react'
import { Menu, Container, Header } from 'semantic-ui-react'
import { Link } from "react-router-dom";
export default function
  () {
  return (
    <div>
      <Menu inverted="top">
        <Container>

          <Menu.Item name="Ana Sayfa" as={Link} to={"/"} >
            <Header as="h4" color="blue" icon="check" content="To-Do" />

          </Menu.Item>
          <Menu.Menu position='right'>
            {/* <Button  primary size='small'>Mini</Button> */}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
