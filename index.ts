console.log('In Node && TypeScript We Trust');

// console.log(window);

if (process.env.NODE_ENV !== 'production') {
  console.log('Код запущен в режиме разработки');
}

import http from 'http'; // в переменной http теперь доступен модуль http
import { IncomingMessage, ServerResponse } from 'http'; // импортируем типы для запроса и ответа

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  console.log('Пришёл запрос!');
  // console.log(req);
  // console.log(res);
  console.log(req.url); // /hello
  console.log(req.method); // GET
  console.log(req.headers); // здесь будут заголовки запроса

  // res.statusCode = 200; // статус ответа
  // res.statusMessage = 'OK'; // сообщение ответа
  // res.setHeader('Content-Type', 'text/plain'); // добавить ответу заголовок

  // res.write('Whats up, '); // отправить часть ответа — строку "Hello, "
  // res.write('Denis?!'); // отправить часть ответа — строку "world!"

  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf8',
  });

  res.end('<h1>Whats up, Denis?! HowAre you? 12345</h1>', 'utf8');

  // res.end(); // закончить отправку ответа
}); // создаём сервер и устанавливаем слушатель

server.listen(3000); // будем принимать сообщения с 3000 порта
