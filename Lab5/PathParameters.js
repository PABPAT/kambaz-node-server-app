export default function PathParameters(app) {
    const add = (req, res) => {
        const { a, b } = req.params;
        const sum = Number(a) + Number(b);
        res.send(`The sum of digits is ${sum.toString()}`);
    };
    const subtract = (req, res) => {
        const { a, b } = req.params;
        const difference = Number(a) - Number(b);
        res.send(`The difference of digits is ${difference.toString()}`);
    }; 
    const multiply = (req, res) => {
        const { a, b } = req.params;
        const product = Number(a) * Number(b);
        res.send(`The product of digits is ${product.toString()}`);
    };
    const divide = (req, res) => {
        const { a, b } = req.params;
        if (Number(b) === 0) {
            res.send("Error: Division by zero is not allowed.");
            return;
        }
        const quotient = Number(a) / Number(b);
        res.send(`The quotient of digits is ${quotient.toString()}`);
    };
    app.get('/lab5/add/:a/:b', add);
    app.get('/lab5/subtract/:a/:b', subtract);
    app.get('/lab5/multiply/:a/:b', multiply);
    app.get('/lab5/divide/:a/:b', divide);
}