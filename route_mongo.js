var router = require('express').Router()
var bodyParser = require('body-parser')
var mongoClient = require('mongodb').MongoClient
var mongodb = require('mongodb')
router.unsubscribe(bodyParser.json())

var url = 
    'mongodb://sing:123@localhost:27017/expmongo'
//bikin route
mongoClient.connect(url, (error, db)=>{
    console.log('Sukses Terhubung')
})
//function untuk connect ke database
// router.get('/data', (req, res)=>{
//     mongoClient.connect(url, (error, db)=>{
//     var col = db.collection('datamongo')
//     col.find({}).toArray((er, data)=>{
//         console.log(data)
//         res.send(data)
//     })
//     })
// })

//route untuk ambil data tertentu (by index array)
// router.get('/data/:index',(req, res)=>{
//     mongoClient.connect(url, (error, db)=>{
//         var col = db.collection('datamongo')
//         col.find({}).toArray((er, data)=>{
//             console.log(data[req.params.index-1])
//             res.send(data[req.params.index-1])
//         })
//         })
// })

//route input data ke database
router.get('/data', (req, res)=>{
mongoClient.connect(url, (error, db)=>{
var col = db.collection('datamongo')
        col.insertMany([{
        nama: req.body.nama,
        usia: req.body.usia,
        kota: req.body.kota
        }],(error, hasil)=>{
            console.log(hasil)
            res.send(hasil)
        })    
    })
})

//edit data tertentu
router.put('/data/:id', (req, res))
    mongoClient.connect(url, (error, db)=>{
        var col = db.collection('datamongo')
        col.updateOne(
            {_id: new mongodb.ObjectID(
                req.params.is
            )},
            {$set: {
                nama: req.body.nama,
                usia: req.body.usia,
                kota: req.body.kota
            }},
                
        (error, hasil)
        )

    })


//delete data tertentu
router.delete
module.exports = router 

