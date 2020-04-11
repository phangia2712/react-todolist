const uuidv4 = require('uuid/v4');
// uuidv4();  ⇨ '10ba038e-48da-487b-96e8-8d3b99b6d18a'

let data = [
    {
        id: uuidv4(),
        name: 'Xử lý phan gia tuan anh',
        level: 2 // Hight
    },
    {
        id: uuidv4(),
        name: 'Xem da banh',
        level: 2 // Small
    },
    {
        id: uuidv4(),
        name: 'Di uong thuoc',
        level: 1 // Medium
    },
    {
        id: uuidv4(),
        name: 'Di ngu',
        level: 0 // Small
    },
    {
        id: uuidv4(),
        name: 'Di choi dam sen',
        level: 1 // Small
    }
];
export default data;