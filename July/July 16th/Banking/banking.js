class BankAccount {
    constructor(firstName, lastName, middleName, accountType, balance, status = "Freeze") {
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountType = accountType
        this.balance = balance
        this.status = status
    }

    openAccount() {
        if (balance < 100) {
            console.log('Sorry, one must have an initial balance of $100 to open an account.')
        }else{
            status = 'Opened'
            console.log('Account opened.')
        }
    }

    closeAccount() {
        if (balance != 0) {
            console.log('Sorry, one\'s account balance must be 0 before an account can be closed.')
        } else {
            status = 'Closed'
            console.log('Account closed')
        }
    }

    withdraw(amount) {
        balance -= amount
        console.log('You have withdrwan ' + amount + '.')
        if (balance < 0) {
            balance -= 35 
            console.log("As your balance has dropped below $0, you've been charged a $35 fee.")
        }
        console.log('Your current balance is now ' + balance + '.')
    }

    transfer(bankAccount1, bankAccount2, amount) {
        bankAccount1.balance -= amount
        bankAccount2.balance += amount
        console.log('You have transferred ' + amount + '.')
        if (bankAccount1.balance < 0) {
            bankAccount1.balance -= 35 
            console.log("As your balance has dropped below $0, you've been charged a $35 fee.")
        }
        console.log('Your current balance is now ' + bankAccount1.balance + '.')

    }

}

