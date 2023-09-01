import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import PlanterController from '@/controllers/planter.controller';

class PlanterRoute implements Routes {
  public path = '/';
  public router = Router();
  public controller = new PlanterController();

  constructor(path:string) {
    this.path = path;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, this.controller.health);
    this.router.get(`${this.path}/login`, this.controller.login);
    this.router.get(`${this.path}/uploadTrees`, this.controller.uploadTrees);
    this.router.get(`${this.path}/fetchHelperData`, this.controller.fetchHelperData);
  }
}

export default PlanterRoute;
