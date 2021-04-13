import BaseController from "../utils/BaseController";
import { catsService } from "../services/CatsService";

export class CatsController extends BaseController {
    constructor() {
        super("api/cats"); //constructor for parent - getting passed to "mount" in BaseController
        this.router //think "what functions do I actually need? Any edge cases?"
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete);
    }
    async edit() { //these are all async/await cuz we're waiting on the service
        try {
            req.body.id = req.params.id //change what's in the url to be the id on the body
            let data = await catsService.edit(req.body)
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }

    async getAll(_, res, next) { //REVIEW there must always be something in the first slot
        try {
            const cats = await catsService.find()
            return res.send(cats);
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let data = await catsService.create(req.body)//REVIEW body is the second parameter sent in Axios - it's an http thing. this is how we get stuff from the client into the server
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