export default function Hello(app) {
const sayHello = (req, res) => {
  res.send('Life is beautiful!');
};
const sayWelcome = (req, res) => {
  res.send('Welcome to the Full Stack Development!');
};
app.get('/hello', sayHello);
app.get('/welcome', sayWelcome);
}