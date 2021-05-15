import './App.css';
import data from './MOCK_DATA.json';
import React from 'react';
import './style.css';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [ageTerm, setAgeTerm] = React.useState('');
  const [genderTerm, setGenderTerm] = React.useState('');
  const [marriedTerm, setMarriedTerm] = React.useState('');

  return (
    <div className="App">
      <center>
        <h1>
          Displaying dynamic data with filtering from json file 
        </h1>
      </center>
      <input
        style={{ width: '310px',margin:"20px"}}
        type="text"
        placeholder="Name..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <select
        style={{ width: '310px' }}
        onChange={(event) => {
          setGenderTerm(event.target.value);
        }}
      >
        <option value="">select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Others">Others</option>
      </select>

      <input
        type="text"
        style={{ width: '310px',margin:"20px"}}
        placeholder="Age..."
        onChange={(event) => {
          setAgeTerm(event.target.value);
        }}
      />

      <select
        style={{ width: '310px' ,marginBottom:"20px" }}
        onChange={(event) => {
          setMarriedTerm(event.target.value);
        }}
      >
        <option value="">select Martial Status</option>
        <option value="true">Married</option>
        <option value="false">Unmarried</option>
      </select>
      
      {
      data
        .filter((val) => {
          if (
            searchTerm === '' &&
            ageTerm === '' &&
            genderTerm === '' &&
            marriedTerm === ''
          ) {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            val.age.toString().includes(ageTerm) &&
            val.gender.toLowerCase().startsWith(genderTerm.toLowerCase()) &&
            val.isMarried.toString().includes(marriedTerm)
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <div className="user" key={key}>
              <p>
                {val.name} {val.age} {val.gender}{' '}
                {val.isMarried ? 'Married' : 'Unmarried'}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
