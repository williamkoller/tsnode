import { Request, Response } from "express";
import User from "../schemas/User";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();

    return res.json(users);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body);
    return res.json(user);
  }

  public async edit(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    const response = {
      update_data: {
        firstName: req.body.firstName,
        id: "id update w/ success"
      }
    };

    console.log(id, response);
    return res.json(response.update_data.firstName);
  }
}

export default new UserController();
