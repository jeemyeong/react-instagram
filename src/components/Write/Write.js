import React, { Component } from 'react';


class Write extends Component {

    constructor(props) {
        super(props);
        this.state = {
          contents: ''
        };

    }

    render() {
        return(
            <div>
              <input
                type="text"
                value={this.state.contents}
                onChange={e => this.setState({ contents: e.target.value })}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={
                  () => {
                      this.props.onCreatePost(this.state.contents)
                      this.setState({contents: ''})
                    }
                }
              >
                Add Posts
              </button>

            </div>
        );
    }
}


export default Write;
