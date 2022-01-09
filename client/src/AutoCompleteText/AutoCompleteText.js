import React from 'react';
import "./AutoCompleteText.css";

import apiList from "../lib/apiList";

export default class AutoCompleteText extends React.Component {
    constructor (props) {
        super (props);
        this.state ={
            suggestions : [],
            text: '',
            apiResponse: ''
        };
    }
  
    async callAPI(value) {
      let result = await fetch(apiList.getFootballers + "?search=" + value);
      result = await result.json();
      this.setState({ apiResponse: result });
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        this.callAPI(value);
        const { apiResponse } = this.state;
        let suggestions = [];
        if(value.length > 0){
            suggestions = apiResponse.data;
        }
        this.setState(() => ({ suggestions, text: value }));
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
            apiResponse: ''
        }));
    }

    renderSuggestions () {
        const { apiResponse } = this.state;
        if( apiResponse.length === 0 ){
            return null;
        }
        return (
            <ul>
                {apiResponse.data.map((item) => <li key={item} onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

    render() {
        const { text } = this.state;
        return (
            <div className='AutoCompleteText'>
                <input value={ text } onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
            </div>
        )
    }
}