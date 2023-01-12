const db = require("../data")
const model = db["creditCards"];

// validate credit card number with Luhn 10 check
function validateCardNumber(cardNumber) {
    let cardNumberArr = (cardNumber + '')
        .split('')
        .reverse()
        .map(x => parseInt(x));
    let lastDigit = cardNumberArr.splice(0, 1)[0];
    let sum = cardNumberArr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
}

// function to add card information
exports.addCard = async (req, res) => {

    let { name, cardNumber, limit } = req.body;

    // validations on user inputs
    if(!name || !cardNumber || !limit){
        console.log('here')
        return res.status(400).json({ success: false , error: 'Input is missing' });
    }
    if(cardNumber.length>19){
        return res.status(400).json({ success: false , error: 'Card number too long' });
    }
    if(!/^\d+$/.test(cardNumber)){
        return res.status(400).json({ success: false , error: 'Invalid input' });
    }
    if (!validateCardNumber(cardNumber)) {
        return res.status(400).json({ success: false , error: 'Invalid card number' });
    }
    let newCard = { name, cardNumber, limit, balance: 0 };
    let entity = await model.create(newCard);
    res.status(200).json({ success: true , data: newCard });
};

exports.getCards = async (req, res) => {

    let data = await model.findAll();
    if (data.length) {
      return res.status(200).json(data);
    } else {
      return res.status(200).json([]);
    }

};