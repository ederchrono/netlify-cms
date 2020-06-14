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
        id: '1d-printer',
        name: '1D printer',
        picture: 'printer.jpg',
        price: 100,
        description: 'Print all the lines you want (before ink runs out)',
      },
      {
        id: 'toner-black',
        name: 'Black Toner',
        picture: 'black-toner.jpg',
        price: 10,
        description: 'I like my printed lines just like my coffee',
      },
      {
        id: 'toner-cyan',
        name: 'Cyan Toner',
        picture: 'cyan-toner.jpg',
        price: 10,
        description: 'The sky has envy of those lines color',
      },
      {
        id: 'toner-magenta',
        name: 'Magenta Toner',
        picture: 'magenta-toner.jpg',
        price: 10,
        description: 'Just like printing with grape juice',
      },
      {
        id: 'toner-yellow',
        name: 'Yellow Toner',
        picture: 'yellow-toner.jpg',
        price: 10,
        description: 'You can print a submarine for insects',
      },
    ]),
  }
}
