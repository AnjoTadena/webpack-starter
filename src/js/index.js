import Message from './modules/Message';

console.log('Webpack 4 is running without config file');

const app = (a, b) => {
   return a + b;
}

Message.say('Hi! from message module');