import React from 'react'
import { useEffect } from 'react';

function Qr() {
  useEffect(() => {
    // Get the URL search parameters
    const searchParams = new URLSearchParams(window.location.search);
    
    // Get the 'userId' parameter value
    const userId = searchParams.get('userId');

    // Check if userId exists and is not empty
    if (userId) {
      console.log('User ID:', userId);
      // You can now perform server-side logic or any client-side actions with the user ID.
    } else {
      console.log('User ID not found in URL.');
    }
  }, []);

return (
<>
    <h1>
        Home
    </h1>
</>
)
}

export default Qr