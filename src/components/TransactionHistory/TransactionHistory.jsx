import './TransactionHistory.module.css'



function TransactionHistory({ items }) {
    return (
      <li>
      {items.map(item => {
    return (
    <table key={item.id}>
  <thead>
    <tr>
      <th>{item.type}</th>
      <th>{item.amount}</th>
      <th>{item.currency}</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
        )
      })}
            </li>
  )
}

export default TransactionHistory