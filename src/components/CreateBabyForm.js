import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBabyForm = () => {
  const [nama, setNama] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [tanggalPertumbuhan, setTanggalPertumbuhan] = useState('');
  const [beratBadan, setBeratBadan] = useState('');
  const [tinggiBadan, setTinggiBadan] = useState('');
  const [lingkaranKepala, setLingkaranKepala] = useState('');
  const [foto, setFoto] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/baby', {
        nama,
        tanggalLahir,
        tanggalPertumbuhan,
        beratBadan,
        tinggiBadan,
        lingkaranKepala,
        foto,
      });

      navigate('/');
    } catch (error) {
      console.error('Error adding baby:', error);
    }
  };

  return (
    <div>
      <h1>Create New Baby</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Baby's name"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="date"
          placeholder="Tanggal Lahir"
          value={tanggalLahir}
          onChange={(e) => setTanggalLahir(e.target.value)}
        />
        <input
          type="date"
          placeholder="Tanggal Pertumbuhan"
          value={tanggalPertumbuhan}
          onChange={(e) => setTanggalPertumbuhan(e.target.value)}
        />
        <input
          type="number"
          placeholder="Berat Badan"
          value={beratBadan}
          onChange={(e) => setBeratBadan(e.target.value)}
        />
        <input
          type="number"
          placeholder="Tinggi Badan"
          value={tinggiBadan}
          onChange={(e) => setTinggiBadan(e.target.value)}
        />
        <input
          type="number"
          placeholder="Lingkaran Kepala"
          value={lingkaranKepala}
          onChange={(e) => setLingkaranKepala(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL Foto"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
        />
        <button type="submit">Add Baby</button>
      </form>
    </div>
  );
};

export default CreateBabyForm;
