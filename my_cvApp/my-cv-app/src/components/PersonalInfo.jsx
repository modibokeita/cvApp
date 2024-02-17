import  { useState } from 'react';
import '../styles/personalInfo.css';

function GeneralInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [editMode, setEditMode] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    setSubmittedData({ name, email, phone });
  };

  return (
    <div className="general-info">
      <h2>Personal Information</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required/> <br /><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/> <br /><br />
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required/> <br /><br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {submittedData?.name}</p>
          <p>Email: {submittedData?.email}</p>
          <p>Phone: {submittedData?.phone}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
