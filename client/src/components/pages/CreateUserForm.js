// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import {ADD_USER} from '../../utils/mutations';
// import Auth from '../../utils/auth';

// const CreateUserForm = () => {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const { name, email, password } = user;
//   const [addUser] = useMutation(ADD_USER)

//   const handleInputChange = e => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(user)
//    const {data} = await addUser({
//       variables: {...user}
//     });
//     Auth.login(data.addUser.token)
//     setUser({ name: '', email: '', password: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <button type="submit">Create User</button>
//     </form>
//   );
// };

// export default CreateUserForm;
