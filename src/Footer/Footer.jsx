import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="App_details">
            <h2>Technologies Used</h2>
        <ul>
  <li>React: A JavaScript library for building user interfaces.</li>
  <li>React Hooks: Functional components and hooks for managing state and side effects.</li>
  <li>Redux Toolkit: A library for efficient state management in React applications.</li>
  <li>Firebase: A platform for building web and mobile applications with real-time backend services.</li>
  <li>Debouncing: Technique to enhance application performance by delaying API calls and user input processing.</li>
  <li>Stripe: A payment processing platform for handling transactions securely.</li>
</ul>
        </div>
        
      
    </div>
  )
}

export default Footer