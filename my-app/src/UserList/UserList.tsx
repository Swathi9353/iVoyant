import React from 'react';

interface User {
  id: number;
  name: string;
  age: number;
}

const UserList: React.FC = () => {
  const users: User[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          {user.name}, Age: {user.age}
        </div>
      ))}
    </div>
  );
};

export default UserList;
