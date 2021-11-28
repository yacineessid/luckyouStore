import bcrypt from 'bcryptjs'
const users =[
    {
        name :'Admin User',
        email :'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin :true,
    },
    {
        name :'wayne rooney',
        email :'admin@example.com',
        password :bcrypt.hashSync('123456' ,10),
        
    },
    {
        name :'james dean',
        email :'james@example.com',
        password :bcrypt.hashSync('123456' ,10),
        
    }
]
export default users