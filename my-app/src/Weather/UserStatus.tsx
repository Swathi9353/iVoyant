import React from 'react';

interface UserStatusProps {
  loggedIn: boolean;
  isAdmin: boolean;
}

const UserStatus: React.FC<UserStatusProps> = ({ loggedIn, isAdmin }) => {
  return (
    <div>
      {loggedIn && isAdmin && <p>Welcome Admin!</p>}
      {loggedIn && !isAdmin && <p>Welcome User!</p>}
    </div>
  );
};

export default UserStatus;
