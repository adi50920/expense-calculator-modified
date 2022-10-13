import './App.css'
import Balance from './components/Balance'
import ExpenseCard from './components/ExpenseCard'
import NewTransactions from './components/NewTransactions'
import Transactions from './components/Transactions'
import { useState } from 'react'
import { Typography, styled, Box } from '@mui/material'

const Header = styled(Typography)`
  margin: 10px 0;
  font-size: 30px;
  color: black;
  text-transform: uppercase;
`
const Component = styled(Box)`
  display: flex;
  background: #fff;
  width: 80%;
  padding: 20px;
  border-radius: 30px;
  margin: auto;
  & > div {
    height: 70vh;
    width: 60%;
    padding: 15px;
  }
`

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Momos', amount: '-90' },
    { id: 2, text: 'Salary', amount: '4500' },
    { id: 3, text: 'Booze', amount: '-3000' },
    { id: 4, text: 'Bonus', amount: '6000' },
  ])

  return (
    <Box className="App">
      <Header>Expense Tracker</Header>

      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransactions setTransactions={setTransactions} />
        </Box>
        <Box>
          <Transactions transactions={transactions} />
        </Box>
      </Component>
    </Box>
  )
}

export default App
