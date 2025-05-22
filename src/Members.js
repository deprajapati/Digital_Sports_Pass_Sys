import React, { useEffect, useState } from 'react';
import './Members.css'; // CSS file for styling

function Members() {
  const [members, setMembers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/api/members')
      .then((res) => res.json())
      .then((data) => setMembers(data.members || []))
      .catch((err) => console.error('Failed to fetch members:', err));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      try {
        const res = await fetch(`http://localhost:3000/api/members/${id}`, {
          method: 'DELETE',
        });
        const result = await res.json();
        if (res.ok) {
          setMembers(members.filter((member) => member._id !== id));
          alert(result.message);
        } else {
          alert(result.message);
        }
      } catch (err) {
        console.error(err);
        alert('Delete failed.');
      }
    }
  };

  const handleEdit = (member) => {
    setEditingId(member._id);
    setEditData({ ...member });
  };

  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/members/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editData),
      });
      const result = await res.json();
      if (res.ok) {
        setMembers(members.map((m) => (m._id === id ? result.updated : m)));
        setEditingId(null);
        alert('Member updated successfully!');
      } else {
        alert(result.message );
      }
    } catch (err) {
      console.error(err);
      alert('Update failed.');
    }
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <div className="members-container">
      <h1 className="members-title">Registered Members</h1>
      <div className="members-table-container">
        <table className="members-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Sport</th>
              <th>Fees Paid</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member._id}>
                <td>
                  {editingId === member._id ? (
                    <input name="fullName" value={editData.fullName} onChange={handleEditChange} />
                  ) : (
                    member.fullName
                  )}
                </td>
                <td>
                  {editingId === member._id ? (
                    <input type="number" name="age" value={editData.age} onChange={handleEditChange} />
                  ) : (
                    member.age
                  )}
                </td>
                <td>
                  {editingId === member._id ? (
                    <select name="gender" value={editData.gender} onChange={handleEditChange}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  ) : (
                    member.gender
                  )}
                </td>
                <td>{member.phone}</td>
                <td>
                  {editingId === member._id ? (
                    <textarea name="address" value={editData.address} onChange={handleEditChange} />
                  ) : (
                    member.address
                  )}
                </td>
                <td>
                  {editingId === member._id ? (
                    <select name="sport" value={editData.sport} onChange={handleEditChange}>
                      <option value="swimming">Swimming</option>
                      <option value="badminton">Badminton</option>
                      <option value="football">Football</option>
                      <option value="cricket">Cricket</option>
                      <option value="tennis">Tennis</option>
                      <option value="gym">Gym</option>
                      <option value="yoga">Yoga</option>
                    </select>
                  ) : (
                    member.sport
                  )}
                </td>
                <td>
                  {editingId === member._id ? (
                    <select name="fees_paid" value={editData.fees_paid} onChange={handleEditChange}>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  ) : (
                    member.fees_paid
                  )}
                </td>
                <td>
                  {editingId === member._id ? (
                    <input
                      type="date"
                      name="joined_date"
                      value={editData.joined_date?.split('T')[0]}
                      onChange={handleEditChange}
                    />
                  ) : (
                    new Date(member.joined_date).toLocaleDateString()
                  )}
                </td>
                <td>
                  {editingId === member._id ? (
                    <>
                      <button className="btn btn-save" onClick={() => handleUpdate(member._id)}>Save</button>
                      <button className="btn btn-cancel" onClick={() => setEditingId(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-edit" onClick={() => handleEdit(member)}>Edit</button>
                      <button className="btn btn-delete" onClick={() => handleDelete(member._id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Members;
