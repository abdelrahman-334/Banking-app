import React from 'react'

interface BalanceBoxProps{
    accounts:Array<string>,
    totalBanks:number,
    totalCurrentBalance:number
}
const TotalBalanceBox = ({accounts=[],totalBanks,totalCurrentBalance}:BalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        {/*Chart*/ }
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
            {totalBanks} Bank Accounts
        </h2>
      </div>
    </section>
  )
}

export default TotalBalanceBox
