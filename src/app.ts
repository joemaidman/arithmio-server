import * as express from 'express';
import * as bodyParser from 'body-parser';

import { evaluateExpression } from './middlewares';

const PORT = process.env.PORT || 8080;

export const application = express();

application.use(bodyParser.urlencoded({ extended: false }));

application.use('/', evaluateExpression);

application.listen(PORT);

console.log(`Application started on port ${PORT}`);
