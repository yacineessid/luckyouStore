import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form  onSubmit={submitHandler} inline >
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-1 ml-sm-1'
      ></Form.Control>
      <Button style={{color:'white'}} type='submit' variant='gray' className='p-1'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox