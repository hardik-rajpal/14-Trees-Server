import { NextFunction, Request, Response } from 'express';

class PlanterController {
  public health(req: Request, res: Response, next: NextFunction):void{
    res.status(200).send('Planter Health Endpoint works 🌱!');
  };
  public login(req:Request, res:Response,next:NextFunction):void{
    res.status(200).send('To be brought to life soon.');
  }
  public uploadTrees(req:Request, res:Response,next:NextFunction):void{
    res.status(200).send('To be brought to life soon.');
  }
  public fetchHelperData(req:Request, res:Response,next:NextFunction):void{
    res.status(200).send('To be brought to life soon.');
  }
}

export default PlanterController;
