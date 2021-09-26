import { Component } from 'react';
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
  Placeholder,
  List,
  Table,
  GridColumn,
  Menu,
  Label
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                  Find Document...
                </Header>

                <Search placeholder="Search countries..." />
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="pdf file outline" />
                  Tambah Dokumen Baru
                </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Grid columns={3} stackable>
          <Grid.Column>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='full' />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='full' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='full' />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='full' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <h3>Website Terkait</h3>
            <List>
              <List.Item content={<a href='http://google.com' >Google</a>} icon='linkify' />
              <List.Item content={<a href='http://facebook.com' >Facebook</a>} icon='linkify' />
              <List.Item content={<a href='https://react.semantic-ui.com/' >Semantic UI</a>} icon='linkify' />
              <List.Item content={<a href='http://niomic.com' >Niomic</a>} icon='linkify' />
              <List.Item content={<a href='https://reactjs.org' >React</a>} icon='linkify' />
            </List>
          </Grid.Column>
        </Grid>

        <Grid columns='equal' >
          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column width={12}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan='2' textAlign='right'><Search placeholder="Cari Dokumen"></Search></Table.HeaderCell>
                  </Table.Row>
                  <Table.Row textAlign='center'>
                    <Table.HeaderCell>Nama Document</Table.HeaderCell>
                    <Table.HeaderCell>Jenis File</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Label ribbon>Paduan Belajar Javascript</Label>
                    </Table.Cell>
                    <Table.Cell textAlign='center'>
                      PDF
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      Paduan Belajar CSS
                    </Table.Cell>
                    <Table.Cell textAlign='center'>
                      PDF
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      Paduan Belajar React Js
                    </Table.Cell>
                    <Table.Cell textAlign='center'>
                      PDF
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan='2'>
                      <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                          <Icon name='chevron left' />
                        </Menu.Item>
                        <Menu.Item as='a'>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                          <Icon name='chevron right' />
                        </Menu.Item>
                      </Menu>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            </Grid.Column>
            <GridColumn></GridColumn>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
