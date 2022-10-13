import { useState } from 'react'

import { Box, Typography, TextField, Button, styled } from '@mui/material'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h4 {
    margin-top: 40px;
  }
  & > div,
  & > button {
    margin-top: 40px;
  }
`
const Add = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const NewTransactions = ({ setTransactions }) => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState()

  const addTransaction = () => {
    const transaction = {
      id: Math.floor(Math.random() * 100000),
      text: text,
      amount: +amount,
    }
    setTransactions((prevState) => [transaction, ...prevState])
  }
  return (
    <Container>
      <Typography variant="h4"> New Transaction </Typography>
      <TextField
        variant="filled"
        label="Enter Expense"
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        variant="filled"
        label="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <Add>
        <Button
          style={{ width: '200px' }}
          variant="contained"
          onClick={() => addTransaction()}
        >
          Expense
        </Button>
        <Button
          style={{ width: '200px' }}
          variant="contained"
          onClick={() => addTransaction()}
        >
          Income
        </Button>
      </Add>
    </Container>
  )
}
export default NewTransactions
