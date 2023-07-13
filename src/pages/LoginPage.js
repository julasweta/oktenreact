import { useRef} from 'react';
import LoginForm from '../components/LoginForm';
const LoginPage = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailRef?.current?.value, passwordRef?.current?.value, newPostRef?.current?.value );
    handleRegister();
    handleNewPost();
  }

  const handleRegister = async () => {
    try{
      const data = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            email: emailRef?.current?.value,
            password: passwordRef?.current?.value,
          })
      })
      const response = await data.json()
      console.log(response);
    } catch (e) {

    }
  }

  const handleNewPost = async () => {
    try{
      const data = await fetch('http://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify({
            titile: newPostRef?.current?.value,
            userId: 1,
          })
      })
      const response = await data.json()
      console.log(response);
    } catch (e) {

    }
  }

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const newPostRef = useRef('');

  
  return(
    <div>
      <LoginForm handleSubmit={handleSubmit} emailRef={emailRef} passwordRef={passwordRef} newPostRef={newPostRef}/>
    </div>
  )
}

export default  LoginPage

