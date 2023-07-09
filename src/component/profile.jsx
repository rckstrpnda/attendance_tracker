
import QRCode from 'qrcode.react';
import React, { useEffect, useState } from 'react';
import { db, auth, userRef } from '../firebase/firebase';
import { getDocs} from 'firebase/firestore';
function ProfilePage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [roll, setRoll] = useState('');
  useEffect(() => {
    fetchdata();
  }, [])
  const fetchdata = async () => {
    const doc_refs = await getDocs(userRef)

    doc_refs.forEach(user => {
      if (user.exists()) {
        if (auth.currentUser.uid === user.data().uid) {
          const users = user.data()
          setFirstName(users.firstName);
          setlastName(users.lastName);
          setRoll(users.roll)
        }

      }
    })
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="Profile Photo" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>Roll Number: {roll}</p>
      <QRCode value={roll} size={128} />
    </div>
  );
}

export default ProfilePage;
