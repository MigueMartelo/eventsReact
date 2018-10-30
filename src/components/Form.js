import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

    nameEventRef = React.createRef();
    categoryEventRef = React.createRef();

    searchEvent = e => {    

        e.preventDefault();
        
        // crear el objeto
        const searchData = {
            name: this.nameEventRef.current.value,
            category: this.categoryEventRef.current.value
        }

        // pasar por props
        this.props.getEvents(searchData);
    }

    showOptions = (key) => {
        const category = this.props.categories[key];

        const {id, name_localized } = category;

        if(!id || !name_localized) return null;

        return (
            <option value={id} key={id}> {name_localized} </option>
        )
    }


    render() {
        
        const categories = Object.keys(this.props.categories);

        return (
            <form onSubmit={this.searchEvent}>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Busca tu nombre por nombre o categoría
                    </legend>

                    <div className="uk-column-1-3@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input ref={this.nameEventRef} type="text" className="uk-input" placeholder="Nombre de Evento o Ciudad"/>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <select ref={this.categoryEventRef} className="uk-select">
                                {categories.map(this.showOptions)}
                            </select>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <button className="uk-button uk-button-danger">Buscar</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}

Form.propTypes = {
    getEvents: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}

export default Form;