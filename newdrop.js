import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LocationDropdown1 = () => {
  const [locations] = useState([
    { id: 'india', name: 'India' },
    { id: 'china', name: 'China' },
    { id: 'uk', name: 'UK' },
    { id: 'usa', name: 'USA' }
  ]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedCountry = event.target.value;
    if (selectedCountry) {
      // Navigate to the upload page for the selected country
      navigate(`/admin/upload/${selectedCountry}`);
    }
  };

  return (
    <div style={styles.container}>
      <label htmlFor="location">Select Location:</label>
      <select
        id="location"
        name="location"
        style={styles.select}
        onChange={handleChange}
        defaultValue=""
      >
        <option value="">Select Location</option>
        {locations.map((location) => (
          <option key={location.id} value={location.id}>
            {location.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    padding: '20px',
    width: '300px',
    margin: '50px auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  select: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
};

export default LocationDropdown1;
