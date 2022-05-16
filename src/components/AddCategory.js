import { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({setCategories}) => {
  const [inputValues, setInputValues] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValues.trim().length > 2){

        setCategories(c => [inputValues, ...c]);
        setInputValues('');
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValues} 
      onChange={(e) => { setInputValues(e.target.value)}} />
    </form>
  );
};


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}