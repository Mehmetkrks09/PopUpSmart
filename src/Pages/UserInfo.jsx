import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function UserInfo() {
  const history = useHistory();
  const [value, setvalue] = useState("")


  const handleClick = (e) => {

    setvalue(e.target.value);
  }
  return (
    <div>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png' /> To-Do App
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='İsminizi Giriniz' onChange={(e) => handleClick(e)} />

              <Button color='teal' fluid size='large' onClick={() => history.push("/todo") || toast.success("Hoşgeldin " + value)} >
                İlerle
              </Button>

            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      {window.localStorage.setItem('user', value)}
    </div>
  )
}
