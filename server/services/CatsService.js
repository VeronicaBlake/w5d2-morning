import { fakeDb } from "../db/FakeDB";
import { BadRequest } from "../utils/Errors";
import { generateId } from "../utils/GenerateId";

class CatsService {
    async find(query = {}) {
        // let values = await dbContext.Values.find(query);
        return [fakeDb.cats];
    }
    async findById(id) {
        let value = await dbContext.Cats.findById(id);
        if (!value) {
            throw new BadRequest("Invalid Id");
        }
        return cat;
    }
    delete(id) {
        let value = fakeDb.cats.find(e => e.id === id)
        if (!value) {
            throw new BadRequest("Invalid Id - No cat 4 U");
        }
        fakeDb.cats = fakeDb.cats.filter(s => s.id !== id)
    }
    create(newCat) {
        newCat.id = generateId()
        fakeDb.cats.push(newCat)
        return newCat
    }
}

export const catsService = new CatsService();