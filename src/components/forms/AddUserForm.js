import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = ({ onAddUser }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    return (
        <div className='form'>
            <h3>AddUserForm</h3>
            <form onSubmit={handleSubmit(onAddUser)}>
                <input
                    type="text"
                    {...register('name', {
                        required: 'Name is required',
                        minLength: {
                            value: 3,
                            message: 'Name must be at least 3 characters long',
                        },
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: 'Only letters are allowed in the name field',
                        },
                    })}
                    placeholder="name"
                />
                {errors.name && <p>{errors.name.message}</p>}

                <input
                    type="text"
                    {...register('username', { required: 'Username is required' })}
                    placeholder="username"
                />
                {errors.username && <p>{errors.username.message}</p>}

                <input type="submit" value={'Add User'} />
            </form>
        </div>
    );
};

export default AddUserForm;


