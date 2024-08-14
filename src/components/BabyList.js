import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BabyList = () => {
  const [babies, setBabies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBabies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/baby');
        setBabies(response.data);
      } catch (error) {
        console.error('Error fetching babies:', error);
      }
    };

    fetchBabies();
  }, []);

  const handleEditClick = (baby) => {
    navigate('/update-baby', { state: { baby } });
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/baby/${id}`);
      const updatedBabies = babies.filter(baby => baby.id !== id);
      setBabies(updatedBabies);
    } catch (error) {
      console.error('Error deleting baby:', error);
    }
  };

  return (
    <div>
      <h1>List of Babies</h1>
      <ul>
        {babies.map(baby => (
          <li key={baby.id}>
            {baby.nama} - {baby.tanggalLahir}
            <button onClick={() => handleEditClick(baby)}>Edit</button>
            <button onClick={() => handleDeleteClick(baby.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/create-baby')}>Add New Baby</button>
    </div>
  );
};

export default BabyList;
