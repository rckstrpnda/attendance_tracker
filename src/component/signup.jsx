// Signup.js
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { collection, addDoc,setDoc,doc } from "firebase/firestore";
import { async } from '@firebase/util';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [roll, setRoll] = useState('');
  // const auth = getAuth();
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Signup successful
        const user = userCredential.user;
        console.log('Signed up:', user);
        setDoc(doc(collection(db, "users"), auth.currentUser.uid), {
          firstName: firstName,
          lastName: lastName,
          username: email,
          roll:roll,
          uid: userCredential.user.uid
      });
        navigate('/profile')
      })
      .catch((error) => {
        console.error('Signup error:', error);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setlastName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Roll No." value={roll} onChange={(e) => setRoll(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
