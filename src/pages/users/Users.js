import User from "./User"

const Users = ({users}) => {
  return (
    <div className='items'>
        <div className='items'>
        {users && users.map(user => <User user={user} key={user.id}  />)}
      </div>
    </div>
  )
}

export default Users
