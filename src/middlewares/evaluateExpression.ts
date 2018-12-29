import { Request, Response } from 'express';

import { evaluate } from 'arithmio';

export const evaluateExpression = (req: Request, res: Response) => {
  const requestArgs = req.method === 'POST' ? req.body : req.query;
  const infixExpression = requestArgs.expression;

  if (!infixExpression) return res.status(400).send({ error: 'Expression was not provided' });

  try {
    console.log('Evaluating expression: ', infixExpression);
    const result = evaluate(infixExpression);
    console.log('Result: ', result);
    res.send({ result });
  } catch (e) {
    console.log(`Failed to evaluate expression: ${e}`);
    res.status(500).send({ error: e.message });
  }
};
