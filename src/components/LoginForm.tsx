
import React from 'react';

interface LoginFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    emailRef: React.RefObject<HTMLInputElement>;
    passwordRef: React.RefObject<HTMLInputElement>;
    newPostRef: React.RefObject<HTMLInputElement>;
  }
  


const LoginForm = ({ handleSubmit, emailRef, passwordRef, newPostRef }:LoginFormProps) => {
  
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="text" ref={emailRef} />
            </label>
            <label>
                Password:
                <input type="password" ref={passwordRef} />
            </label>
            <label>
                newPost:
                <input type="text" ref={newPostRef} />
            </label>

            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginForm