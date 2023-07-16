import { useRef} from 'react';
import LoginForm from '../components/LoginForm';


const LoginPage = () => {

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const newPostRef = useRef('');

  const handleSubmit = (event) => {
    event.preventDefault();
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



  
  return(
    <div>
      <LoginForm handleSubmit={handleSubmit} emailRef={emailRef} passwordRef={passwordRef} newPostRef={newPostRef}/>
    </div>
  )
}

export default  LoginPage

