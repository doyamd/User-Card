import React from 'react';
import Avatar from './Avatar';
import Info from './Info';
import { Users } from '../model';

type Props = {
  user: Users;
};

const Card: React.FC<Props> = ({ user }) => {
  return (
    <div className='card'>
      <Avatar image={user.image} />
      <Info user={user} />
      
    </div>
  );
};

export default Card;
