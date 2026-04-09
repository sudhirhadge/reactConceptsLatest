import React from 'react';

const ListRenderer = ({ dataArray }) => {
  return (
    <>
      {dataArray.length > 0 && (
        <div className="info">
          Total Items: <strong>{dataArray.length.toLocaleString()}</strong>
        </div>
      )}

      <div className="list-container">
        <ul className="list">
          {dataArray.map((item, index) => (
            <li key={index} className="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListRenderer;
