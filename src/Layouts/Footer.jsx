import React from "react";
import { Container, Divider, Grid, List, Icon } from "semantic-ui-react";

export default function Footer() {
  return (
    <Container className="footer">
      <Divider />
      <br />

      <Grid>
        <Grid.Row centered>

        </Grid.Row>
        <Grid.Row centered>2022 ・Mehmet Karakaş</Grid.Row>
        <Grid.Row centered>
          <List link horizontal>
            <List.Item href="https://github.com/Mehmetkrks09" target="blank">
              <Icon name="github" size="large" />
            </List.Item>
            <List.Item href="https://www.linkedin.com/in/MehmetKarakaş/" target="blank">
              <Icon name="linkedin" size="large" />
            </List.Item>

            <Grid.Row centered> <h5>Tüm Hakları Saklıdır &copy;</h5> </Grid.Row>
          </List>

        </Grid.Row>
      </Grid>
      <br />
      <br />
      <br />
    </Container>
  );
}