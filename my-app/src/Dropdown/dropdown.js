import React from "react";
import DropdownElementMultiple from "./DropdownElement/DropdownElementmultiple";
import DropdownElementSingle from "./DropdownElement/DropdownElementSingle";
import "./dropdown.css"
import { AiFillCaretDown } from 'react-icons/ai';
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, selectedElements: [] };
    
  }
  
  toggleDropdown() {
    this.setState({ open: !this.state.open });
  }
  selectorMultiple = (selectedItemChildren) => {
    if(this.state.selectedElements.includes(selectedItemChildren)){
     this.setState({selectedElements: this.state.selectedElements.filter(function(e) { return e !== selectedItemChildren })})
    }else{
      this.setState({selectedElements: [...this.state.selectedElements,selectedItemChildren] })
    }
  }
  selectorSingle = (selectedItemChildren) => {
   this.setState({selectedElements: [selectedItemChildren] })
  }
  deslectAll = () => {
    this.setState({selectedElements: [] })
    
  }
  render() {
    const isMultipleSelect = this.props.multiple_selected;
    let dropdownelemeent;
    if(isMultipleSelect){
        dropdownelemeent = (this.props.list.map((person) => (
            <DropdownElementMultiple selectorMultiple={this.selectorMultiple} key={person.id} name={person.name} />
          )))
    }else{
        dropdownelemeent = (this.props.list.map((person) => (
            <DropdownElementSingle key={person.id} selectorSingle={this.selectorSingle} name={person.name} />
          )))
    }
    return (
      <div className="container">
        <div className="mat-form-field">
        <input className="input"
          id="input_select"
          type="text"
          onClick={() => this.toggleDropdown()}
          value={this.state.selectedElements}
        />
        <AiFillCaretDown className="icon"/>
        </div>
 
        {this.state.open && (
          <div className="list">
             <div onClick={this.deslectAll}> Deselect All</div>
            {dropdownelemeent}
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
