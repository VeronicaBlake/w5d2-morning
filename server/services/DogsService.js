import { fakeDb } from "../db/FakeDB";
import { BadRequest } from "../utils/Errors";
import { generateId } from "../utils/GenerateId";

class DogsService {
    async find(query = {}) {
        return [fakeDb.dogs];
    }
    async findById(id) {
        let value = await dbContext.Dogs.findById(id);
        if (!value) {
            throw new BadRequest("Invalid Id");
        }
        return dog;
    }
    delete(id) {
        let value = fakeDb.dogs.find(e => e.id === id)
        if (!value) {
            throw new BadRequest("Invalid Id - No doggo found");
        }
        fakeDb.dogs = fakeDb.dogs.filter(d => d.id !== id)
    }
    create(newDog) {
        newDog.id = generateId()
        fakeDb.dogs.push(newDog)
        return newDog
    }
}

export const dogsService = new DogsService();