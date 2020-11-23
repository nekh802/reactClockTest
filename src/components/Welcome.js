import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>
                <span>Hello, {this.props.name}!</span>
            </div>
        );
    }
}

export default Welcome;