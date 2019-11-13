import React, { Component } from 'react';
import { ProfileContext } from './context/ProfileContext'
import { Link } from 'react-router-dom'
import Home from './Home';


const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

class Summary extends Component {
    static contextType = ProfileContext

    identifyBirth = () => {
        var lahir = this.context.nik

        var hariLahir = lahir.toString().slice(6, 8)
        var bulanLahir = parseInt(lahir.toString().slice(8, 10))
        var tahunLahir = lahir.toString().slice(10, 12)

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
                <h1 className='text-center'>Rangkuman Peminjam</h1>
                <div className='card row'>
                    <div className='card-header custom-bg text-white'>
                        <h1 className='float-right'>Jumlah Angsuran : Rp {this.context.angsuran} ,-</h1>
                    </div>
                    <div className='card-body'>
                        <h3>Nama Lengkap : {this.context.name}</h3>
                        <h3>No Handphone : {this.context.phone}</h3>
                        <h3>Email : {this.context.email}</h3>
                        <h3>Jumlah Pinjaman : Rp {this.context.pinjaman}.000.000,-</h3>
                        <h3>Periode Pengembalian : {this.context.periode} bulan</h3>

                        <h3>Tanggal Lahir : {this.identifyBirth()}</h3>
                        <h3>Gender : {this.identifyGender()}</h3>
                        
                    </div>
                    <Link to='/' className='card-body text-center btn btn-success btn-go'>
                            <button className='btn btn-success btn-go' onClick={this.context.resetState}>Home</button>
                        </Link>
                   

                </div>

            </div>
        );
    }



}

export default Summary;