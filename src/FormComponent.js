import React, { useState } from 'react'

const FormComponent = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
      if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');

      const emailError = document.getElementById('input-email')
      emailError.classList.add('is-invalid');
      } else {
      setError(null);
      document.getElementById('input-email').classList.remove('is-invalid');
      }

      setEmail(event.target.value);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted email:", email)
    setEmail('');
  }


  return (
    <form className='email-sub' onSubmit={handleSubmit}>
      <input type="email" placeholder='Your email address...' id='input-email'
        onChange={handleChange}
        required
      />
      {error && email && <span className='error'>Please provide a valid email address</span>}
      <button type='submit' value='submit' >Notify Me</button>
    </form> 
  )
}

export default FormComponent