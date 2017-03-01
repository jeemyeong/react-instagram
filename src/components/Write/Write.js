import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

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
                value={this.state.name}
                onChange={e => this.setState({ contents: e.target.value })}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.props.onCreatePost(this.state.contents)}
              >
                Add Posts
              </button>

            </div>
        );
    }
}

Write.propTypes = propTypes;
Write.defaultProps = defaultProps;

export default Write;
