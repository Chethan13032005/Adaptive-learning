import { Router } from 'express';
import MainController from '../controllers';

const router = Router();
const mainController = new MainController();

export function setRoutes(app) {
    app.use('/api', router);

    router.post('/lessons', (req, res) => mainController.handleRequest(req, res));
    router.get('/engagement', (req, res) => mainController.handleRequest(req, res));
    router.post('/peer-interaction', (req, res) => mainController.handleRequest(req, res));
}