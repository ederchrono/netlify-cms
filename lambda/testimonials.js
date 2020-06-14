module.exports.handler = async function (event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify([
      {
        id: 1,
        name: 'Jhon Doe',
        picture: 'jhon.jpg',
        description: 'Best product ever!!!1!',
      },
      {
        id: 2,
        name: 'Peter Parker',
        picture: 'peter.jpg',
        description: 'No more curved lines, thanks 1D Printer.',
      },
      {
        id: 3,
        name: 'Bruce Wayne',
        picture: 'bruce.jpg',
        description: 'This printer has the darkest lines ever!',
      },
      {
        id: 4,
        name: 'Simple Rick',
        picture: 'rick.jpg',
        description:
          "I love 1D Printer, I don't want the complexity of 2D and 3D printers.",
      },
    ]),
  }
}
