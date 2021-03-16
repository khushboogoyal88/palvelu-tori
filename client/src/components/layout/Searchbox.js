import React, {useState} from 'react'

const Searchbox = ({history}) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <form class='form search' onSubmit={submitHandler}>
      <div class='form-group'>
        <input
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search For Services...'
          className='mr-sm-2 ml-sm-5'
        />
      </div>
      <input type='submit' className='btn btn-primary my-1' />
    </form>
  );
}

export default Searchbox
