import React from 'react'

interface BalanceBoxProps{
    accounts:Array<string>,
    totalBanks:Number,
    totalCurrentBalance:Number
}
const TotalBalanceBox = ({accounts=[],totalBanks,totalCurrentBalance}:BalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>

      </div>
    </section>
  )
}

export default TotalBalanceBox
