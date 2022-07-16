// import {messages} from '../../../data/messages'
// export default function handler(req, res) {
//     if (req.method === 'GET') {
//         res.status(200).json(messages)
//     } else if (req.method === 'POST') {
//         const message = req.body.message
//         const newMessage = {
//             id: Date.now(),
//             text: message
//         }
//         messages.push(newMessage)
//         res.status(201).json(newMessage)
//     }
// }
