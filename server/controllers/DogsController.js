import BaseController from "../utils/BaseController";
import { dogsService } from "../services/DogsService";

export class DogsController extends BaseController {
    constructor() {
        super("api/dogs");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .post("", this.create)
            .delete("/:id", this.delete);
    }
    async getAll(_, res, next) {
        try {
            const dogs = await dogsService.find()
            return res.send(dogs);
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let data = await dogsService.create(req.body)
            res.send(data);
        } catch (error) {
            next(error);
        }
    }
    async getOne(req, res, next) {
        try {
            const dogs = dogsService.findById(req.params.id)
            return res.send(dogs);
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            let data = await dogsService.delete(req.params.id)
            res.send("You deleted a dog. Feel good about yourself?")
        } catch (error) {
            next(error)
        }
    }
}