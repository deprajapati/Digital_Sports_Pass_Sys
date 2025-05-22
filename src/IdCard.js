import React, { useState } from 'react';
import './IdCard.css';
import { QRCodeCanvas } from 'qrcode.react'; // ✅ Fixed import

function IdCard() {
  const [phone, setPhone] = useState('');
  const [member, setMember] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    setMember(null);
    try {
      const res = await fetch(`http://localhost:3000/api/members`);
      const data = await res.json();

      if (res.ok && data.members) {
        const match = data.members.find((m) => m.phone === phone.trim());
        if (match) {
          setMember(match);
        } else {
          setError('Member not found with this phone number.');
        }
      } else {
        setError('Failed to fetch members.');
      }
    } catch (err) {
      setError('Server error.');
      console.error(err);
    }
  };

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString();
  const getExpiryDate = (joinedDate) => {
    const d = new Date(joinedDate);
    d.setMonth(d.getMonth() + 1);
    return d.toLocaleDateString();
  };

  return (
    <div className="idcard-wrapper">
      <h1 className="idcard-title">Search for Member</h1>
      <form className="idcard-form" onSubmit={handleSearch}>
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="idcard-error">{error}</p>}

      {member && (
        <div className="idcard">
          <h2 className="idcard-header">🏅 SportsFit Membership Card</h2>
          <div className="idcard-body">
            <p><strong>Full Name:</strong> <span className="name1">{member.fullName}</span></p>
            <p><strong>Age:</strong> {member.age}</p>
            <p><strong>Phone:</strong> {member.phone}</p>
            <p><strong>Address:</strong> {member.address}</p>
            <p><strong>Sport:</strong> {member.sport}</p>
            <p><strong>Joined:</strong> {formatDate(member.joined_date)}</p>
            <p><strong>Valid Till:</strong> {getExpiryDate(member.joined_date)}</p>

            {/* ✅ QR Code */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <QRCodeCanvas
                value={JSON.stringify({
                  name: member.fullName,
                  phone: member.phone,
                  sport: member.sport,
                  validTill: getExpiryDate(member.joined_date),
                })}
                size={128}
                level="H"
              />
              <p style={{ marginTop: '10px', fontSize: '12px', color: '#555' }}>Scan for details</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default IdCard;
