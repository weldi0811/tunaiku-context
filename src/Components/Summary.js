import React, { Component } from 'react';
import { ProfileContext } from './context/ProfileContext'


const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

class Summary extends Component {
    static contextType = ProfileContext

    identifyBirth = () => {
        var lahir = this.context.nik

        var hariLahir = lahir.toString().slice(6,8)
        var bulanLahir = parseInt(lahir.toString().slice(8,10))
        var tahunLahir = lahir.toString().slice(10,12)

        var tLahir = (hariLahir + ' ' + monthNames[bulanLahir - 1] + ' ' + 19 + tahunLahir).toString()
    
        return tLahir
    }

    identifyGender = () => {
        var lahir = this.context.nik
        var gender = lahir.toString().slice(6, 7)

        if (gender === 0 || 1) {
            return ('laki-laki')
        }
        else {
            return ('perempuan')
        }
    }



    render() { 
        console.log('ini dari summary')
        console.log(this.context)
        return ( 
            <div className='container'>
                    <div className='card'>
                        <div className='card-header'>
                            Rangkuman Peminjam
                       </div>
                        <div className='card-body'>
                            <h1>nama lengkap : {this.context.name}</h1>
                            <h3>no hp : {this.context.phone}</h3>
                            <h3>email : {this.context.email}</h3>
                            <h2>jumlah pinjaman : Rp {this.context.pinjaman}.000.000,-</h2>
                            <h2>periode pinjaman : {this.context.periode} bulan</h2>
                            <h3>jumlah angsuran : Rp {this.context.angsuran} ,-</h3>
                            <h4 className='float-right'> tanggal lahir : {this.identifyBirth()}</h4>
                            <h4 className='float-right'> gender : {this.identifyGender()} </h4>
                        </div>

                    </div>

                </div>
         );
    }
}
 
export default Summary;