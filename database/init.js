mongoDb = new Mongo();

db = mongoDb.getDB("bank");

db.accountOperations.insertOne({
    accountNumber: "wz12",
    type: "deposit",
    data: {
        amount: 100
    }
})

db.accountOperations.insertOne({
    accountNumber: "az09",
    type: "loan",
    data: {
        amount: 10000,
        interest: 4,
        payments: 12,
    }
})

db.accountOperations.insertOne({
    accountNumber: "az09",
    type: "deposit",
    data: {
        amount: 500
    }
})