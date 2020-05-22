import { APIGatewayProxyEvent, Context, Callback } from 'aws-lambda';
import uuidv1 from 'uuid/v1';

exports.handler = (event: APIGatewayProxyEvent, context: Context, callback: Callback) => {
  callback(null, {
    statusCode: 200,
    body: uuidv1(),
  })
}
