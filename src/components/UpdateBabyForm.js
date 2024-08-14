import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateBabyForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { baby } = location.state;

  const [nama, setNama] = useState(baby.nama);
  const [tanggalLahir, setTanggalLahir] = useState(baby.tanggalLahir);
  const [tanggalPertumbuhan, setTanggalPertumbuhan] = useState(baby.tanggalPertumbuhan);
  const [beratBadan, setBeratBadan] = useState(baby.beratBadan);
  const [tinggiBadan, setTinggiBadan] = useState(baby.tinggiBadan);
  const [lingkaranKepala, setLingkaranKepala] = useState(baby.lingkaranKepala);
  const [foto, setFoto] = useState(baby.foto);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`http://localhost:3000/baby/${baby.id}`, {
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
      console.error('Error updating baby:', error);
    }
  };

  return (
    <div>
      <h1>Update Baby</h1>
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
        <button type="submit">Update Baby</button>
      </form>
    </div>
  );
};

export default UpdateBabyForm;
