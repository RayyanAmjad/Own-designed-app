import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
		apiKey: "AIzaSyBWuX4b8Li18TpEBAvaqPMsTBTCOsheE54",
		authDomain: "therapist-app-d3f9d.firebaseapp.com",
		databaseURL: "https://therapist-app-d3f9d-default-rtdb.firebaseio.com",
		projectId: "therapist-app-d3f9d",
		storageBucket: "therapist-app-d3f9d.appspot.com",
		messagingSenderId: "295519758094",
		appId: "1:295519758094:web:72d7243554462bb91a195f"
	  };
	  
	  // Initialize Firebase
	  const app = initializeApp(firebaseConfig);
	  const db = getDatabase(app);

export default db;
