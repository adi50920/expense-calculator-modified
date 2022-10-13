import { Box, Typography, styled } from '@mui/material'

const BalanceText = styled(Typography)`
  font-size: 25px;
  color: blue;
  margin-bottom: 25px;
`

const Balance = ({ transactions }) => {
  const amount = transactions.map((transaction) => transaction.amount)
  const total = amount.reduce((acc, item) => (acc += item), 0)

  return (
    <Box>
      <BalanceText> Balance = ₹ {total}</BalanceText>
    </Box>
  )
}
export default Balance
