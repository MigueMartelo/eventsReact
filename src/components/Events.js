import React, { Component } from 'react';
import Event from './Event';
import PropTypes from 'prop-types';

class Events extends Component {
    render() {
        return (
            <div className="uk-child-width-1-3@m" uk-grid="true">
                { Object.keys(this.props.events).map(key => (
                    <Event
                        key={key}
                        info={this.props.events[key]}
                    />
                ))}
            </div>
        );
    }
}

Events.propTypes = {
    events: PropTypes.array.isRequired
}

export default Events;