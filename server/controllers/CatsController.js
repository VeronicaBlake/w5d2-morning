import BaseController from "../utils/BaseController";
import { catsService } from "../services/CatsService";

export class CatsController extends BaseController {
    constructor() {
        super("api/cats");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .post("", this.create)
            .delete("/:id", this.delete);
    }
    async getAll(_, res, next) {
        try {
            const cats = await catsService.find()
            return res.send(cats);
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let data = await catsService.create(req.body)
            res.send(data);
        } catch (error) {
            next(error);
        }
    }
    async getOne(req, res, next) {
        try {
            const cats = catsService.findById(req.params.id)
            return res.send(cats);
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            let data = await catsService.delete(req.params.id)
            res.send("You deleted a cat. You monster.")
        } catch (error) {
            next(error)
        }
    }
}