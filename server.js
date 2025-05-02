const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())

const porsche = {
    '911 Turbo S':{
        'horsepower': '640 hp',
        'maxSpeed': '205 mph',
        'cylinders': '6',
        'fuel': 'gasoline'
    },
    'Taycan Turbo S':{
        'horsepower': '939 hp',
        'maxSpeed': '162 mph',
        'cylinders': '0',
        'fuel': 'electric'
    },
    'Macon GTS':{
        'horsepower': '434 hp',
        'maxSpeed': '169 mph',
        'cylinders': '6',
        'fuel': 'gasoline'
    },
}
const bentley = {
    'Continental GT ':{
        'horsepower': '771 hp',
        'maxSpeed': '208 mph',
        'cylinders': '8',
        'fuel': 'gasoline'
    },
    'Bentayga S':{
        'horsepower': '542 hp',
        'maxSpeed': '108 mph',
        'cylinders': '6',
        'fuel': 'gasoline'
    },
    'Flying Spur':{
        'horsepower': '671 hp',
        'maxSpeed': '168 mph',
        'cylinders': '8',
        'fuel': 'gasoline'
    },
}
const lexus = {
    'RZ 300e ':{
        'horsepower': '201 hp',
        'maxSpeed': '175 mph',
        'cylinders': '0',
        'fuel': 'gasoline'
    },
    'LS 500':{
        'horsepower': '416 hp',
        'maxSpeed': '136 mph',
        'cylinders': '6',
        'fuel': 'gasoline'
    },
    'NX 250':{
        'horsepower': '203 hp',
        'maxSpeed': '124 mph',
        'cylinders': '4',
        'fuel': 'gasoline'
    },
}
const tesla = {
    'Model Blah-X ':{
        'horsepower': 'Strong?',
        'maxSpeed': 'Fast?',
        'cylinders': 'Maybe?',
        'fuel': 'Really?'
    },
    // 'LS 500':{
    //     'horsepower': '416 hp',
    //     'maxSpeed': '136 mph',
    //     'cylinders': '6',
    //     'fuel': 'gasoline'
    // },
    // 'NX 250':{
    //     'horsepower': '203 hp',
    //     'maxSpeed': '124 mph',
    //     'cylinders': '4',
    //     'fuel': 'gasoline'
    // },
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:carName', (request, response)=>{
    
    const rapperName = request.params.carName.toLowerCase()
    if(porsche[carName]){
        response.json(porsche[carName])
    }
    else if(bentley[carname]){
        response.json(bentley[carName])
    }
    else if(lexus[carName]){
        response.json(lexus[carName])
    }
    else{
        response.json(tesla['Model Blah-X'])
    }
    // response.json(rappers)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})