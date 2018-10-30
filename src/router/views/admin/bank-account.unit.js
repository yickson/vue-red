import BankAccount from './bank-account'

describe('@views/bank-account', () => {
  it('is a valid view', () => {
    expect(BankAccount).toBeAViewComponent()
  })
})
