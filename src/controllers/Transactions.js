import { transactionsCollection } from "../database/db.js";

export async function createTransaction(req, res) {
    
  const transaction = res.locals.transaction;

  try {
    await transactionsCollection.insertOne(transaction);

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function findTransactions(req, res) {

  const user = res.locals.user;

  try {
    const transactions = await transactionsCollection.find({ user: user._id }).toArray();

    delete user.password;

    res.send({ transactions, user });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}