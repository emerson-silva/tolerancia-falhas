import React, { Component } from 'react';
import CEPForm from './CEPForm';

export default class CEPCtrl extends Component {

    state = {
        "searching": false
    }

    setSearching = (isSearching) => {
        this.setState((state) => {
            return {
                "searching": isSearching
            };
        });
    }

    searchCep = (cepToSearch) => {
        this.setSearching(true);
        console.log("searchingCep");
        fetch("https://viacep.com.br/ws/" + cepToSearch + "/json/").then(result => {
            console.log(result);
        })
        this.setSearching(false);
    }

    render() {
        return (
            <div className="CEPCtrl">
                <CEPForm
                    searchCep={this.searchCep}
                />
            </div>
        )
    }
}
