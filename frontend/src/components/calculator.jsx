import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const show = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const backspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const sanitizedInput = input.replace('^', '**');
      const result = eval(sanitizedInput); 
      setInput(String(result));
    } catch {
      setInput('Error');
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.calculator}>
        <input type="text" value={input} readOnly style={styles.result} />
        <hr />

        <div style={styles.row}>
          {['1', '2', '3', '4'].map((btn) => (
            <button key={btn} onClick={() => show(btn)} style={styles.button}>{btn}</button>
          ))}
        </div>
        <div style={styles.row}>
          {['5', '6', '7', '8'].map((btn) => (
            <button key={btn} onClick={() => show(btn)} style={styles.button}>{btn}</button>
          ))}
        </div>
        <div style={styles.row}>
          {['9', '0', '+', '-'].map((btn) => (
            <button key={btn} onClick={() => show(btn)} style={styles.button}>{btn}</button>
          ))}
        </div>
        <div style={styles.row}>
          {['*', '/', 'AC', '='].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === 'AC' ? clearInput() : btn === '=' ? calculateResult() : show(btn)
              }
              style={styles.button}
            >
              {btn}
            </button>
          ))}
        </div>
        <div style={styles.row}>
          <button onClick={backspace} style={styles.button}>Del</button>
          {['%', '&', '^'].map((btn) => (
            <button key={btn} onClick={() => show(btn)} style={styles.button}>{btn}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'bisque',
  },
  calculator: {
    width: '400px',
    height: '600px',
    border: '1px solid black',
    backgroundColor: 'black',
    borderRadius: '10px',
    padding: '10px',
  },
  result: {
    width: '95%',
    fontSize: '3em',
    color: 'blue',
    height:'100px',
    backgroundColor: 'gray',
    marginBottom: '10px',
    borderRadius: '10px',
    padding: '10px',
    border: '1px solid white',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '10px',
  },
  button: {
    width: '70px',
    height: '70px',
    backgroundColor: 'rgb(67, 134, 134)',
    fontSize: '2em',
    borderRadius: '10px',
    boxShadow: '-3px -3px 3px gray',
    border: '1px solid whitesmoke',
    color: 'white',
    cursor: 'pointer',
  },
};

export default Calculator;
