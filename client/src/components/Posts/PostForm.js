import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form'>
      <div class='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
        className='form my-1'
      >
        <textarea
          value={text}
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          onChange={e => setText(e.target.value)}
          required
        ></textarea>
        <input type='submit' class='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
