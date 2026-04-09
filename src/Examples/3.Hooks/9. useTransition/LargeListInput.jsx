import React,{ useState } from 'react';
import './LargeListInput.css';
import ListRenderer from './ListRenderer';

const LargeListInput = () => {
    // this component simulates a scenario where we have an input field that generates a large list of items based on user input. 
    // without useDeferredValue, this can cause performance issues like UI lag /freezes as the component re-renders on every keystroke, especially when generating a large list.
  const [inputValue, setInputValue] = useState('');
  const [dataArray, setDataArray] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Create an array of size 20000 and fill with user input as they type
    if (value.trim() !== '') {
      const newArray = [];
      for (let i = 0; i < 20000; i++) {
        newArray.push(`${value} - Item ${i + 1}`);
      }
      setDataArray(newArray);
    } else {
      setDataArray([]);
    }
  };

  const handleClear = () => {
    setDataArray([]);
    setInputValue('');
  };

  return (
    <div className="container">
      <h1>Large List Input Handler</h1>

      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Start typing to fill array with 20k items...Typing will be laggy without useDeferredValue when rendering large list "
          className="input-field"
        />
        <button onClick={handleClear} className="btn btn-secondary">
          Clear
        </button>
      </div>

      {dataArray.length > 0 && (
        <div className="info">
          Total Items: <strong>{dataArray.length}</strong>
        </div>
      )}

      <ListRenderer dataArray={dataArray} />
    </div>
  );
};

export default LargeListInput;
