import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout';

const AdminUploadPage = () => {
  const { country } = useParams(); // Get the country from URL params

  return (
    <>
    <Layout>
    <div style={styles.container}>
      <h2>Admin Upload Page for {country.charAt(0).toUpperCase() + country.slice(1)}</h2>
      <p>Upload data specific to {country.charAt(0).toUpperCase() + country.slice(1)} here.</p>
      {/* Add your upload form here */}
      <form>
        {/* Example upload form */}
        <input type="file" />
        <button type="submit">Upload</button>
      </form>
    </div>
    </Layout>
    </>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    padding: '20px',
    width: '500px',
    margin: '50px auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default AdminUploadPage;
