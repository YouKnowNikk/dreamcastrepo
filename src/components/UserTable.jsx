import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../services/users/userAction';
import User from './User';

function UserTable() {
        const dispatch = useDispatch();
        const { users, loading, error } = useSelector((state) => state.users);
      
        useEffect(() => {
          dispatch(fetchUsers());
        }, [dispatch]);

            if(loading){
                return <div>
                    <h3>Loading....</h3>
                </div>
            }
            if (error){
                return <div>
                    <h3>Something went wrong</h3>
                </div>
            }
            console.log(users);
            
  return (
    <div>
        <User initialUsers={users}/>
    </div>
  )
}

export default UserTable