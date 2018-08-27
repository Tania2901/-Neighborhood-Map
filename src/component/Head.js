import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

export default class Head extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar
                title="Museums Map in Bucharest City"
                onLeftIconButtonClick={() => this.props.toggleDrawer()}
            />
        )
    }
}