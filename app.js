//https://www.javatpoint.com/expressjs-tutorial   express node.js
//https://www.youtube.com/watch?v=VShtPwEkDD0 node.js tut

const http = require('http')
const port = 3000
const server = http.createServer(function(req, res){

})

server.listen(port, function(error) {
    if(error){
        console.log('Something went wrong', error)
    }
    else{
        console.log('Server is listening on port ' + port)
    }
})

/* 
const express = require('express');
const app = express();
app.listen(8000, () => console.log('listening at 8000'));
app.use(express.static('public'));
app.use(express.json());

temp_data = {}

app.post('/', (request, response) => {
    console.log(request.body);
    const data = request.body;
    const json_data = JSON.stringify(data);
    response.send(json_data);
    temp_data = json_data;
});

app.post('/audioPlayer.js', (request, response) => {
    response.send(temp_data);
});

 */


