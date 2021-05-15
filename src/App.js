import './App.css';
import data from './MOCK_DATA.json';
import React from 'react';
import './style.css';
import Datatable from './Datatable';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [ageTerm, setAgeTerm] = React.useState('');
  const [genderTerm, setGenderTerm] = React.useState('');
  const [marriedTerm, setMarriedTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  function inRange(x, min, max) {
    return (x - min) * (x - max) <= 0;
  }

  React.useEffect(() => {
    const results = data.filter((person) => {
      var minimum = 1,
        maximum = 150;

      if (inRange(ageTerm, 1, 25)) {
        minimum = 1;
        maximum = 25;
      } else if (inRange(ageTerm, 26, 50)) {
        minimum = 26;
        maximum = 50;
      } else if (inRange(ageTerm, 51, 150)) {
        minimum = 51;
        maximum = 150;
      }
      return (
        person.name.toLowerCase().includes(searchTerm) &&
        person.age >= minimum &&
        person.age <= maximum &&
        person.gender
          .toString()
          .toLowerCase()
          .startsWith(genderTerm.toLowerCase()) &&
        person.isMarried.toString().includes(marriedTerm)
      );
    });
    setSearchResults(results);
  }, [searchTerm, marriedTerm, genderTerm, ageTerm]);
  return (
    <div className="App">
      <center>
        <h1>Displaying Dynamic Data with Filtering from json file</h1>

        <form>
          <input
            style={{ width: '310px', margin: '20px' }}
            type="text"
            placeholder="Name..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <br></br>
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
          <br></br>

          <select
            style={{ width: '310px' }}
            onChange={(event) => {
              setAgeTerm(event.target.value);
            }}
          >
            <option value="">select age</option>
            <option value="22">1-25</option>
            <option value="31">26-50</option>
            <option value="55">Above 51+</option>
          </select>
          <br></br>

          <select
            style={{ width: '310px' }}
            onChange={(event) => {
              setMarriedTerm(event.target.value);
            }}
          >
            <option value="">select Marital Status</option>
            <option value="true">Married</option>
            <option value="false">Unmarried</option>
          </select>
          <p>
            <br></br>
          </p>

          <Datatable data={searchResults} />
          <input
            type="reset"
            value="Reset"
            onClick={(event) => {
              setSearchTerm('');
              setAgeTerm('');
              setGenderTerm('');
              setMarriedTerm('');
            }}
            style={{ backgroundColor: '#008CBA' }}
          ></input>

          <input
            type="submit"
            style={{ backgroundColor: '#4CAF50' }}
            name="submit"
          ></input>
        </form>
      </center>
    </div>
  );
}

export default App;
