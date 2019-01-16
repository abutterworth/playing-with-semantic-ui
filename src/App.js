import React, { Component } from 'react';
import logo from './logo.svg';

import CardExampleCard from './CardExampleCard';
import { Grid, Image, Container, Button, Comment, Form, Header } from 'semantic-ui-react';


class App extends Component {
  render() {
    return (
      <Container className="App" style={{paddingTop:'4rem'}}>
        <header className="App-header">
        </header>
        <Grid>
          <Grid.Column width={4}>
            <CardExampleCard />
            <p>
              In efficitur nunc nulla, et facilisis mi ornare eu. Aliquam mattis eros quis lectus semper, sed lacinia elit lacinia. Duis porttitor justo ac ipsum porta, porta dapibus felis dapibus. 
            </p>
          </Grid.Column>
          <Grid.Column width={12}>
            <p>
              Aliquam posuere tortor a erat dictum, non venenatis lacus ornare. Vivamus blandit lacus vel neque feugiat, eu dictum augue dignissim. Donec dictum massa eget velit suscipit auctor. Aliquam ex ligula, tristique eu quam a, tempor posuere urna. In efficitur nunc nulla, et facilisis mi ornare eu. Aliquam mattis eros quis lectus semper, sed lacinia elit lacinia. Duis porttitor justo ac ipsum porta, porta dapibus felis dapibus. 
            </p>

              
            <Comment.Group>
              <Header as='h3' dividing>
                Comments
              </Header>

              <Comment>
                <Comment.Avatar src='https://loremflickr.com/61/61' />
                <Comment.Content>
                  <Comment.Author as='a'>Matt</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>How artistic!</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Comment>
                <Comment.Avatar src='http://placeimg.com/62/62/any' />
                <Comment.Content>
                  <Comment.Author as='a'>Elliot Fu</Comment.Author>
                  <Comment.Metadata>
                    <div>Yesterday at 12:30AM</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>This has been very useful for my research. Thanks as well!</p>
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
                <Comment.Group>
                  <Comment>
                    <Comment.Avatar src='http://placeimg.com/60/60/any' />
                    <Comment.Content>
                      <Comment.Author as='a'>Jenny Hess</Comment.Author>
                      <Comment.Metadata>
                        <div>Just now</div>
                      </Comment.Metadata>
                      <Comment.Text>Elliot you are always so right :)</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>

              <Comment>
                <Comment.Avatar src='http://placeimg.com/80/80/any' />
                <Comment.Content>
                  <Comment.Author as='a'>Joe Henderson</Comment.Author>
                  <Comment.Metadata>
                    <div>5 days ago</div>
                  </Comment.Metadata>
                  <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Form reply>
                <Form.TextArea />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
              </Form>
            </Comment.Group>
          </Grid.Column>
        </Grid>

      </Container>
    );
  }
}

export default App;
