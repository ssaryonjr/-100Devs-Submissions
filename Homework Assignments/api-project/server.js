const express = require('express');
const app = express();
const PORT = 8000;

const rappers  = {
    '21 savage': {
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
        'age': 29
    },

    'lil baby': {
        'birthName': 'Dominique Armani Jones,',
        'birthLocation': 'Atlanta, Georgia',
        'age': 27
    },
    'unknown': {
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'age': 0
    }
    
}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})


app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase() //Grabs the string passed inside of query paramter in URL.

    if(rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT, ()=> {
    console.log(`The server is now running on port ${PORT}! We lit!!`)
})