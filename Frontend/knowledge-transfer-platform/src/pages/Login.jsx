import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setCurrentUser }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const { data } = await axios.get('https://cross-851e1-default-rtdb.firebaseio.com/users.json');
      const users = data || {};

      const exists = Object.values(users).some(user => user.email === email);
      if (exists) return alert('User already exists. Please login.');

      const newUser = { name, email, password };
      await axios.post('https://cross-851e1-default-rtdb.firebaseio.com/users.json', newUser);
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      setCurrentUser(newUser);
      alert('Signup successful!');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Signup failed');
    }
  };

  const handleLogin = async () => {
    try {
      const { data } = await axios.get('https://cross-851e1-default-rtdb.firebaseio.com/users.json');
      const users = Object.values(data || {});
      const user = users.find(user => user.email === email && user.password === password);
      if (!user) return alert('Invalid credentials');
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Login failed');
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">{isSignup ? 'Signup' : 'Login'}</h2>
      {isSignup && (
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full mb-2" />
      )}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full mb-2" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full mb-2" />
      <button onClick={isSignup ? handleSignup : handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        {isSignup ? 'Signup' : 'Login'}
      </button>
      <p className="mt-4 text-sm">
        {isSignup ? 'Already have an account?' : 'New user?'}{' '}
        <button onClick={() => setIsSignup(!isSignup)} className="text-blue-600 underline">
          {isSignup ? 'Login' : 'Signup'} here
        </button>
      </p>
    </div>
  );
};
export default Login;