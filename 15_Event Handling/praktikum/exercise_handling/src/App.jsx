import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const dataKosong = {
    judul: "",
    pengarang: "",
    cetakan: "",
    tahunTerbit: 0,
    kotaTerbit: "",
    harga: 0, 
    potoSampul: "",
  }

  const [data, setData] = useState(dataKosong)
  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <>
      <h1 style={{ "text-align":"center" }}>Formulir Data Buku</h1>
      <form>
        <label>
          Judul :
          <input type="text" name='judul' value={data.judul} className='style.input' onChandleInput required/>
        </label>

        <label>
          Pengarang :
          <input type="text" name='pengarang' value={data.pengarang} className='style.input' onChandleInput required/>
        </label>

        <label>
          Cetakan :
          <input type="text" name='cetakan' value={data.cetakan} className='style.input' onChandleInput required/>
        </label>

        <label>
          Tahun Terbit :
          <input type="number" name='tahunTerbit' value={data.tahunTerbit} className='style.input' onChandleInput required/>
        </label>

        <label>
          Kota Terbit :
          <input type="text" name='kotaTerbit' value={data.kotaTerbit} className='style.input' onChandleInput required/>
        </label>

        <label>
          Harga :
          <input type="number" name='harga' value={data.harga} className='style.input' onChandleInput required/>
        </label>

        <label>
          Poto Sampul :
          <input type="file" name='potoSampul' value={data.potoSampul} className='style.input' onChandleInput required/>
        </label>

        <input type="submit" value="submit" />
        <button>Reset</button>
      </form>
    </>
  );
}

export default App;
