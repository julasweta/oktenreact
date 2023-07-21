import React from 'react';
import { useForm } from 'react-hook-form';

const AddCommentForm = ({ idPost, comments, setComments }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onAddComment = (data, idPost) => {
    console.log(data.name);
    setComments(comments => [...comments, { name: data.name }])
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onAddComment)}>
        <input
          type="text"
          {...register('name', {
            required: 'Comment is required',
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: 'Comment must contain only Latin letters and spaces',
            },
          })}
          placeholder="add comment"
        />
        {errors.name && <p>{errors.name.message}</p>} {/* Вивід повідомлення про помилку */}
        <input type="submit" value={'Add Comment'} />
      </form>
    </div>
  );
};

export default AddCommentForm;

