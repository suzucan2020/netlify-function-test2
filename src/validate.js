const words = [ "aaaa", "bbbb", "cccc", "dddd" ]

const headers = {
  "Content-Type": "application/json;charset=UTF-8"
}

exports.handler = ({httpMethod, queryStringParameters}, context, callback) => {

  if(httpMethod !== "GET") {
    callback(null, {
      statusCode: 405,
      body: JSON.stringify({
        message: "Method Not Allowed"
      }),
      headers,
    })
    return
  }

  const { word } = queryStringParameters

  if(!word) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        message: "'word'query needs",
      }),
      headers,
    })
    return
  }

  if(words.includes(word)){
    callback(null, {
      statusCode: 401,
      body: JSON.stringify({
        message: `${word} is include invalid word`,
      }),
      headers,
    })
    return
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: `${word} is OK word`,
    }),
    headers
  })
}
