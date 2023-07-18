const User = ({user}) => {

  return (
    <div className="user">
      <h3>{user.name}</h3>
      <span>{user.id}</span>
    </div>
  )
}

export default User;