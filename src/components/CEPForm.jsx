import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';

export default class CEPForm extends Component {
    state = {
        "cep": ''
    }

    submitSearch = () => {
        this.props.searchCep(this.state.cep);
    }

    handleCepChange = ({target}) => {
        this.setState((state) => {
            return {[target.name]: target.value};
        });
    }

    render() {
        return (
            <div> CEP={this.state.cep}
                <Form onSubmit={this.submitSearch}>
                    <InputGroup className="mb-3">
                        <FormControl
                            name="cep"
                            value={this.state.cep}
                            type="text"
                            placeholder="CEP"
                            aria-label="CEP"
                            aria-describedby="CEP"
                            onChange={this.handleCepChange}
                        />
                        <InputGroup.Append>
                            <Button variant="primary">Buscar</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </div>
        )
    }
}
