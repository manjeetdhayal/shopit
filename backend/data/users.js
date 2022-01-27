import bcrypt from 'bcryptjs'


const Users = [
    {
        name: 'Admin User', 
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Ram', 
        email: 'Ram@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
      
        name: 'Ajay', 
        email: 'Ajay@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
      
        name: 'Sita', 
        email: 'Sita@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default Users; 