import App from '@/app';
import IndexRoute from '@routes/index.route';
import validateEnv from '@utils/validateEnv';
import PlanterRoute from './routes/planter.route';

validateEnv();

const app = new App([
    new IndexRoute('/index'),
    new PlanterRoute('/planter'),
]);

app.listen();
