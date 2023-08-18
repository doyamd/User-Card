import React from 'react'
import { Users } from '../model';

type Props = {
  user: Users;
};
const Info = ({user}:Props) => {
  return (
    <div className="info">
       <p>{user.info.name}</p>
       <p>{user.info.age}</p>
       <p>{user.info.profession}</p>

    </div>
  )
}

export default Info