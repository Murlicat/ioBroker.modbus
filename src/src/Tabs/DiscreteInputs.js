import React, {Component} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';

import I18n from '@iobroker/adapter-react/i18n';

import RegisterTable from '../Components/RegisterTable';

class Options extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    fields = [
        {name: '_address', title: 'Address', type: 'text'},
        {name: 'name', title: 'Name', type: 'text'},
        {name: 'description', title: 'Description', type: 'text'},
        {name: 'formula', title: 'formula', type: 'text'},
        {name: 'role', title: 'Role', type: 'text'},
        {name: 'cw', title: 'CW', type: 'checkbox'},
        {name: 'isScale', title: 'SF', type: 'checkbox'},
    ]
    render() {
        return <RegisterTable
            classes={this.props.classes}
            fields={this.fields}
            data={this.props.native.disInputs}
        />
    }
}

Options.propTypes = {
    common: PropTypes.object.isRequired,
    native: PropTypes.object.isRequired,
    instance: PropTypes.number.isRequired,
    adapterName: PropTypes.string.isRequired,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    onChange: PropTypes.func,
    changed: PropTypes.bool,
    socket: PropTypes.object.isRequired,
};

export default Options;