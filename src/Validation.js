import React, { useState } from 'react';
import './Validation.css';

function Validation() {
  const [manualPhone, setManualPhone] = useState('');
  const [member, setMember] = useState(null);
  const [error, setError] = useState('');

  const validateMember = (memberData) => {
    const validTill = new Date(memberData.joined_date);
    validTill.setMonth(validTill.getMonth() + 1);
    const isActive = memberData.fees_paid === 'yes' && new Date() <= validTill;
    return {
      ...memberData,
      validTill: validTill.toLocaleDateString(),
      isActive,
    };
  };

  const handlePhoneSearch = async (e) => {
    e.preventDefault();
    setMember(null);
    setError('');
    try {
      const res = await fetch('http://localhost:3000/api/members');
      const data = await res.json();
      const match = data.members.find((m) => m.phone === manualPhone.trim());
      if (match) {
        setMember(validateMember(match));
      } else {
        setError('No member found with that phone number.');
      }
    } catch {
      setError('Server error.');
    }
  };

  return (
    <div className="validation-container">
      <h1 className="title">Membership Validation</h1>

      <form onSubmit={handlePhoneSearch} className="manual-form">
        <input
          type="tel"
          placeholder="Enter phone number"
          value={manualPhone}
          onChange={(e) => setManualPhone(e.target.value)}
          required
        />
        <button type="submit">Validate</button>
      </form>

      {error && <p className="error-msg">{error}</p>}

      {member && (
        <div className={`member-card ${member.isActive ? 'active' : 'inactive'}`}>
          <h2>{member.fullName}</h2>
          <p><strong>Phone:</strong> {member.phone}</p>
          <p><strong>Sport:</strong> {member.sport}</p>
          <p><strong>Joined:</strong> {new Date(member.joined_date).toLocaleDateString()}</p>
          <p><strong>Valid Till:</strong> {member.validTill}</p>
          <p>
            <strong>Status:</strong>{' '}
            <span className={member.isActive ? 'status-active' : 'status-inactive'}>
              {member.isActive ? '🟢 Active' : '🔴 Inactive'}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Validation;
