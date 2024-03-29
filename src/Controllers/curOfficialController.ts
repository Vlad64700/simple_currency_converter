import { Request, Response } from "express";

import {cur_official} from "../api/curOfficial"


interface IInput {
  country : string
}

// route: /api/users/
export class CurOfficialController {
  async get(req: Request<{}, {}, {}, IInput>, res: Response) {
    try {
      const { country }  = req.query;

      const res_ = await cur_official.getCurOfficialByCountry(country);
      return res.json(res_);
    } catch (e) {
      return res
        .status(400)
        .json({ message: `request error \n ${e}` });
    }
  }

}
