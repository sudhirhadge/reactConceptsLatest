import React,{ useState, useDeferredValue } from 'react';
import './LargeListInput.css';
import ListRenderer from './ListRenderer';

const LargeListWithDeferredValue = () => {
  // This component uses useDeferredValue to optimize rendering of a large list.
  // useDeferredValue defers the value update, allowing the input field to remain responsive
  // while the expensive list rendering happens in the background
  
  const [inputValue, setInputValue] = useState('');
  const deferredInputValue = useDeferredValue(inputValue);

  // Generate array based on deferred value
  const dataArray = deferredInputValue.trim() !== '' 
    ? Array.from({ length: 20000 }, (_, i) => 
        `${deferredInputValue} - Item ${i + 1}`
      )
    : [];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
  };

  const isStale = inputValue !== deferredInputValue;

  return (
    <div className="container">
      <h1>Large List Handler with useDeferredValue</h1>
      <p style={{ textAlign: 'center', fontSize: '12px', color: '#666' }}>
        Input is reactive, list renders with deferred value for better performance
      </p>

      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Start typing to fill array with 20k items...you will see typinng is smooth even with large list rendering    "
          className={`input-field ${isStale ? 'stale' : ''}`}
        />
        <button onClick={handleClear} className="btn btn-secondary">
          Clear
        </button>
      </div>

      {isStale && (
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

export default LargeListWithDeferredValue;
