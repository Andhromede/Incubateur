const express = require("express");
const Router = express.Router;
const controllers = require('../controllers');

class BaseRouter {
    constructor() {
        this.router = Router();
        this.name = this.constructor.name.replace(`Router`, ``);
        this.table = this.name.toLowerCase();
        this.controller = new controllers[this.table]();
        this.initializeRoutes();
    }

    initializeRoutes = () => {
    /****************************** GET ALL *******************************/
        this.router.get("/", async (req, res) => {
            const response = await this.controller.getAll();
            res.send(response);
        });

    /****************************** GET ONE BY ID ******************************/
        this.router.get("/:id", async (req, res) => {
            const response = await this.controller.getOneById(req.params.id);
            res.send(response);
        });

    /****************************** GET All BY ******************************/
        this.router.post("/", async (req, res) => {
            const response = await this.controller.getAllBy(req.body.data);
            res.send(response);  
        });





    // /************************* INSERT ONE BY (put) ************************/
    //     this.router.put("/", async (req, res) => {
    //         const response =  await this.controller.insert(req.body);
    //       res.send(response);
    //     });


    // /*************************** UPDATE SIMPLE ***************************/
    //     this.router.put("/:id", async (req, res) => {
    //         const params = {...req.body, where:`id_${this.table}=${req.params.id}`};
    //         const response = await this.controller.update(params);
    //         res.send(response);
    //     });


    // /*********************** UPDATE WITH CONDITION ***********************/
    //     this.router.patch("/", async (req, res) => {
    //         const response = await this.controller.update(req.body);
    //         res.send(response);
    //     });

        
    // /**************************** SOFT DELETE ****************************/   
    //     this.router.patch("/:id",async (req, res) => {
    //         const params = {deleted: "1", where:`id_${this.table}=${req.params.id}`}
    //         const response = await this.controller.update(params);
    //         res.send(response);
    //     });


    // /**************************** HARD DELETE ****************************/ 
    //     this.router.delete("/:id", async (req, res) => {
    //         const response = await this.controller.delete(req.params.id);
    //       res.send(response);
    //     });

    };
}
module.exports = BaseRouter;
