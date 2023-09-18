// const http = require('http');
// const fs = require('fs');
// const express = require('express');
// const app = express();


// // const server = http.createServer((req,res)=>{
// //     fs.readFile('./index.html',null,(error,data)=>{
// //         if(error){
// //             res.end('fill have error')
// //         }else{
// //             res.end(data)
// //         }
// //     })
// // });
// // server.listen(5000,'127.0.0.1',()=>{
// //     console.log('Server running')
// // })

// app.get("/", (req, res) => {
//     res.redirect('index.html');
// });

// app.get('*', (req, res) => { // Deactivate (= comment this) to test the bug
//     res.redirect(404, 'page_not_found.html')
// });


// app.use(express.static(__dirname));
// app.listen(5000, '127.0.0.1');