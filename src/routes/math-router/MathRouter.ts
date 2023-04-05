import {
  additionController,
  divisionController,
  multiplicationController,
  subtractionController,
} from '@/controllers';
import express, { Router } from 'express';

export const mathRouter: Router = express.Router();

mathRouter.post('/addition', additionController);
mathRouter.post('/subtraction', subtractionController);
mathRouter.post('/multiplication', multiplicationController);
mathRouter.post('/division', divisionController);
