// MQTT broker
let mosca = require('mosca')
let settings = {port: 1234}
let broker = new mosca.Server(settings)

// MySQL 
let mysql = require('mysql')
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '#Kunci231#',
    database: 'mqttJS'
})
db.connect(()=>{
    console.log('Database connected!')
})

broker.on('ready', ()=>{
    console.log('Broker is ready!')
})

broker.on('published', (packet)=>{
    message = packet.payload.toString()
    console.log(message)
    let dbStat = 'insert into mqttJS set ?'
    let data = {
        message: message
    }
    db.query(dbStat, data, (error, output)=>{
        if(error){
            console.log(error)
        } else {
            console.log('Data saved to database!')
        }
    })
})
// function ConnectBroker() {
    
// }
// function publish() {
//     // MQTT publisher
//     var mqtt = require('mqtt')
//     var client = mqtt.connect('mqtt://localhost:1234')
//     var topic = 'LINTANGtest123'
//     var message = 'Hello World!'

//     client.on('connect', ()=>{
//         setInterval(()=>{
//             client.publish(topic, message)
//             console.log('Message sent!', message)
//         }, 5000)
//     })
// }
// function subscribe() {
//     // MQTT subscriber
//     var mqtt = require('mqtt')
//     var client = mqtt.connect('mqtt://localhost:1234')
//     var topic = 'LINTANGtest123'

//     client.on('message', (topic, message)=>{
//         message = message.toString()
//         console.log(message)
//     })

//     client.on('connect', ()=>{
//         client.subscribe(topic)
//     })
// }