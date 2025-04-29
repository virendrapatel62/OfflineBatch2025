import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const styles = {
    container: {
      textAlign: 'center',
      fontFamily: 'sans-serif',
      margin : "auto"
    },
    count: {
      fontSize: '60px',
      marginBottom: '20px',
    },
    button: {
      margin: '5px',
      padding: '10px 20px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: '#f9f9f9',
    },
  };

  return (
    <div className='counter' style={styles.container}>
      <div style={styles.count}>{count}</div>
      <button style={styles.button} onClick={() => setCount(count - 1)}>-</button>
      <button style={styles.button} onClick={() => setCount(0)}>Reset</button>
      <button style={styles.button} onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
