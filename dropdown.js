import React, { useEffect, useState } from 'react';

const LocationDropdown = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    fetch('/api/Admin/GetCountryMasterDropDownValues') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch locations');
        }
        return response.json();
      })
      .then((data) => {
      
        setLocations(data.countries || []); 
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching locations');
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <label htmlFor="location">Select Location:</label>
      <select id="location" name="location" style={styles.select}>
        {loading ? (
          <option value="">Loading locations...</option>
        ) : error ? (
          <option value="">{error}</option>
        ) : (
          <>
            <option value="">Select Location</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name} {/* Adjust field names as necessary */}
              </option>
            ))}
          </>
        )}
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

export default LocationDropdown;
