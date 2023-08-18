import React, { useState } from 'react'
import { Users } from '../model';
import Card from './Card';
import './styles.css'

const Profiles = () => {
    const [users] = useState<Users[]>([
        {
          id: 1,
          image: "https://i.pinimg.com/474x/e4/43/9e/e4439ee5ed217f1befe3e97aff640225.jpg",
          info: {
            name: "Abebe Bekele",
            age: 21,
            profession: "student"
          }
        },
        {
          id: 2,
          image: "https://i.pinimg.com/474x/e4/43/9e/e4439ee5ed217f1befe3e97aff640225.jpg",
          info: {
            name: "Abebe Bekele",
            age: 21,
            profession: "student"
          }
        },
        {
          id: 2,
          image: "https://i.pinimg.com/474x/e4/43/9e/e4439ee5ed217f1befe3e97aff640225.jpg",
          info: {
            name: "Abebe Bekele",
            age: 21,
            profession: "student"
          }
        },
        {
          id: 2,
          image: "https://i.pinimg.com/474x/e4/43/9e/e4439ee5ed217f1befe3e97aff640225.jpg",
          info: {
            name: "Abebe Bekele",
            age: 21,
            profession: "student"
          }
        },
        {
          id: 2,
          image: "https://i.pinimg.com/474x/e4/43/9e/e4439ee5ed217f1befe3e97aff640225.jpg",
          info: {
            name: "Abebe Bekele",
            age: 21,
            profession: "student"
          }
        }
      ]);
        return (
          <div className='profiles'>
           
            {users.map((user) => (
              <Card key={user.id} user={user} />
            ))}
      
          </div>
        );
}

export default Profiles