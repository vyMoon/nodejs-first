import * as fs from 'fs';
import csv from 'csvtojson';

const pathes = {
  read: './csv/test.csv',
  write: 'content.txt',
};

const csvParserOptions = {
  noheader: false,
	headers: ['book', 'author', 'amount', 'price'],
  colParser: {
    book: 'string',
    author: 'string',
    amount: 'omit',
    price: 'number'
  },
}

const rSrtream = fs.createReadStream(pathes.read);
const wStream = fs.createWriteStream(pathes.write);

rSrtream.pipe(csv(csvParserOptions)).pipe(wStream);
