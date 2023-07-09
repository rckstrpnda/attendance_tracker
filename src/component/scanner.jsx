import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { async } from '@firebase/util';
import { auth } from '../firebase/firebase';
function Scanner() {
  const [qrData, setQrData] = useState('');
  const [showQr,setShowQr]=useState(true);
  
  const attRef = collection(db, "attendance")

  const handleScan = (data,sata) => {
    if (data) {
      const date = new Date(sata);
     let rata={usn:data,time:date}
      setDoc(doc(attRef),rata)
        .then(docRef => {
          console.log("Document has been added successfully");})
        .catch(error => {
          console.log(error);
        })
      console.log('working')
    }
    
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <h1>QR Code Scanner</h1>
      {showQr &&<QrReader
        delay={300}
        onResult={(result, error) => {
          if (result) {
            setQrData(result.getText());
            handleScan(result.getText(),result.getTimestamp())
            console.log(result.getText())
            setShowQr(false)
          }

          if (error) {
            console.info(error);
          }
        }}
        style={{ width: '80%', margin: '0 auto' }}
      />}
    </div>
    
  );

}

export default Scanner;
