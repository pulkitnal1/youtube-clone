import React from 'react';
import {Paper, TextField} from '@material-ui/core';
class SearchBar extends React.Component{
  state={
    searchTerm:'',
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const {searchTerm} =this.state;
    const {onFormSubmit} = this.props;
    onFormSubmit(searchTerm);
  }
  handleChange =(e)=>this.setState({searchTerm:e.target.value});

  render(){
    return (
      <Paper elevation={6} style={{padding:'25px'}}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search field.." onChange={this.handleChange}/>
        </form>
      </Paper>

    );
  }
}

export default SearchBar;
