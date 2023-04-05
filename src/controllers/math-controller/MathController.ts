import { MathInput, MathResult } from '@/utils';
import { Request, Response } from 'express';

export const additionController = async (
  req: Request,
  res: Response<MathResult>
) => {
  try {
    const { number1, number2 }: MathInput = req.body;
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
      return res.status(422).json({
        result: null,
        errorMessage: 'Invalid input, expected numbers',
      });
    }

    const result = number1 + number2;

    return res.json({ result, errorMessage: null });
  } catch (error) {
    return res.status(500).json({
      result: null,
      errorMessage: 'Something went wrong',
    });
  }
};

export const subtractionController = async (
  req: Request,
  res: Response<MathResult>
) => {
  try {
    const { number1, number2 }: MathInput = req.body;
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
      return res.status(422).json({
        result: null,
        errorMessage: 'Invalid input, expected numbers',
      });
    }

    const result = number1 - number2;

    return res.json({ result, errorMessage: null });
  } catch (error) {
    return res.status(500).json({
      result: null,
      errorMessage: 'Something went wrong',
    });
  }
};

export const multiplicationController = async (
  req: Request,
  res: Response<MathResult>
) => {
  try {
    const { number1, number2 }: MathInput = req.body;
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
      return res.status(422).json({
        result: null,
        errorMessage: 'Invalid input, expected numbers',
      });
    }

    const result = number1 * number2;

    return res.json({ result, errorMessage: null });
  } catch (error) {
    return res.status(500).json({
      result: null,
      errorMessage: 'Something went wrong',
    });
  }
};

export const divisionController = async (
  req: Request,
  res: Response<MathResult>
) => {
  try {
    const { number1, number2 }: MathInput = req.body;
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
      return res.status(422).json({
        result: null,
        errorMessage: 'Invalid input, expected numbers',
      });
    }

    if (number2 === 0) {
      return res.status(422).json({
        result: null,
        errorMessage: 'Invalid input, cannot divide by zero',
      });
    }

    const result = number1 / number2;

    if (Number.isInteger(result) === false) {
      return res.json({ result: result.toFixed(2), errorMessage: null });
    }

    return res.json({ result, errorMessage: null });
  } catch (error) {
    return res.status(500).json({
      result: null,
      errorMessage: 'Something went wrong',
    });
  }
};
