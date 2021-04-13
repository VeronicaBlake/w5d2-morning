import { generateId } from "../utils/GenerateId"

class FakeDb {
    cats = [{ name: 'Casper', age: 4000, job: 'catty ghost', id: generateId() },
    { name: 'Perry', age: 3, job: 'RNA', id: generateId() }]

    dogs = [{ name: 'Rudy', age: 7, job: 'firedog', id: generateId() },
    { name: 'George', age: '42', job: 'accountdog', id: generateId() }]
}

export const fakeDb = new FakeDb()