import { MathInput, MathResult, MultipleNumbers } from '../..//utils';
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

export const addMultipleNumbers = async (
  req: Request,
  res: Response<MathResult>
) => {
  try {
    const { numbers }: MultipleNumbers = req.body;

    if (
      Array.isArray(numbers) &&
      numbers.filter((number) => typeof number === 'number')
    ) {
      return res.status(422).json({
        result: null,
        errorMessage: 'Invalid input, expected numbers only',
      });
    }

    let result: number | null = null;
    for (let i = 0; i < numbers.length; i++) {
      if (i === 0) {
        result = numbers[i];
      }

      if (i !== 0) {
        result = result !== null ? result + numbers[i] : null;
      }
    }

    return res.json({ result, errorMessage: null });
  } catch (error) {
    return res.status(500).json({
      result: null,
      errorMessage: 'Something went wrong',
    });
  }
};
