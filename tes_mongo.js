var x = require('mongodb').MongoClient
var mongodb = require('mongodb')
var url = 
    'mongodb://sing:123@localhost:27017/expmongo'

    //fungsi untuk connect ke db expmongo
    x.connect(url,(error, db)=>{
        console.log('Sukses terhubung!')
        // ambil(db, ()=>{
        //     // // input(db);
        //     // // ambil(db);
        //     // // edit(db)
        //     // hapus(db)
        //     // // db.close()
        // })
       hapus(db)
    })

    // fungsi untuk get data
    var ambil = (db) =>{
        var col = db.collection('datamongo')
        var data = col.find({}).toArray((error, data)=>{
            console.log(data)
            db.close()
        })
        
    }

    //fungsi untuk input data
    var input = () =>{
        var col = db.collection('datamongo')
        col.insertMany([
            {nama: 'Noah', usia: 20, kota:'Irak'},
            {nama: 'Danny', usia: 19, kota:'Wales'}
        ],(error, hasil)=>{
            console.log(hasil)
        })

    }

    // fungsi edit data
    var edit = (db)=>{
        var col = db.collection('datamongo')
        col.updateOne({nama:'Gogh'},
        {$set: {kota:'Kyoto'}},
        (error, hasil)=>{
            console.log(hasil)
        })
    }

    //fungsi edit all data
    var edit = (db)=>{
        var col = db.collection('datamongo')
        col.update({nama:'Gogh'},
        {$set: {kota:'Kyoto'}},
        {multi: true},
        (error, hasil)=>{
            console.log(hasil)
        })
    }

    // delete/remove data by id
    var hapus = (db)=>{
        var col = db.collection('datamongo')
        col.remove({_id: new mongodb.ObjectId("5bb2e74a96e37a6880d52b33")},
        (error, hasil) =>{
            console.log(hasil)
        }
        )
    }