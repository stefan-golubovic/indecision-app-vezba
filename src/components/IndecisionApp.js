import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handleClearOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleAddOption = (option) => {
        const arr = ['another', 'men', 'man', 'ljubi', 'date', 'chat'];
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } else if (option.includes("another")) {
            return "Anka shouldn't do that."
        } else if (option.includes("men")) {
            return "Anka shouldn't do that."
        } else if (option.includes("man")) {
            return "Anka shouldn't do that."
        } else if (option.includes("ljubi")) {
            return "Anka shouldn't do that."
        } else if (option.includes("date")) {
            return "Anka shouldn't do that."
        } else if (option.includes("chat")) {
            return "Anka shouldn't do that."
        } else if (option.includes("lub")) {
            return "Anka shouldn't do that."
        } else if (option.includes("drugim")) {
            return "Anka shouldn't do that."
        } else if (option.includes("mom")) {
            return "Anka shouldn't do that."
        }
        

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };
    // Component Lifecycle
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };
    componentWillUnmount() {
        console.log('componentWillUnmount');
    };
    // end

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearOption={this.handleClearOption}
                />
            </div>
        );
    }
}