import React, { Component } from 'react';
import { Button, Form, Label } from 'semantic-ui-react'


class Write extends Component {

    constructor(props) {
        super(props);
        this.state = {
          contents: ''
        };

    }

    handleSubmit = (e) => {
      e.preventDefault()
      this.props.onCreatePost(this.state.contents, this.props.userInfo)
      this.setState({contents: ''})
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Field>
                  <input
                    placeholder='Post Content'
                    value={this.state.contents}
                    onChange={e => this.setState({ contents: e.target.value })}
                     />
                   <Label pointing>Post Content</Label>
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Form.Group>
            </Form>
        );
    }
}


export default Write;
