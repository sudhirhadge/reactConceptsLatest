import React,{ useState, useTransition } from 'react';
import './LargeListInput.css';
import ListRenderer from './ListRenderer';

const LargeListWithUseTransition = () => {
  // this component simulates a scenario where we have an input field that generates a large list of items based on user input. 
  // with useTransition, we can defer the value update, allowing the input field to remain responsive while the expensive list rendering happens in the background. 
  // This way, the UI remains smooth and responsive even when generating a large list of items.
  const [inputValue, setInputValue] = useState('');
  const [dataArray, setDataArray] = useState([]);
  const [isPending, startTransition] = useTransition();


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    startTransition(() => {
      const value = e.target.value;
      if (value.trim() !== '') {
        const newArray = [];
        for (let i = 0; i < 20000; i++) {
          newArray.push(`${value} - Item ${i + 1}`);
        }
        setDataArray(newArray);
      } else {
        setDataArray([]);
      }
    })
  };


  const handleClear = () => {
    setInputValue('');
  };


  return (
    <div className="container">
      <h1>Large List Handler with useTransition</h1>
      <p style={{ textAlign: 'center', fontSize: '12px', color: '#666' }}>
        Input is reactive, list renders with deferred value for better performance
      </p>

      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Start typing to fill array with 20k items...you will see typinng is smooth even with large list rendering    "
          className={`input-field ${isPending ? 'stale' : ''}`}
        />
        <button onClick={handleClear} className="btn btn-secondary">
          Clear
        </button>
      </div>

      {isPending && (
        <div style={{
          textAlign: 'center',
          padding: '10px',
          backgroundColor: '#fff3cd',
          color: '#856404',
          borderRadius: '4px',
          marginBottom: '10px',
          fontSize: '12px'
        }}>
          ⏳ Rendering {dataArray.length.toLocaleString()} items...
        </div>
      )}

      {dataArray.length > 0 && (
        <div className="info">
          Total Items: <strong>{dataArray.length.toLocaleString()}</strong>
        </div>
      )}

      <ListRenderer dataArray={dataArray} />
    </div>
  );
};

export default LargeListWithUseTransition;
