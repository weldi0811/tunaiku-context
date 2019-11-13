import React, { Component } from 'react';
import Slider2 from './Slider'
import { ProfileContext } from './context/ProfileContext'
import amarBank from '../assets/amarbank-logo-3x.webp'
import banking from '../assets/best-banking-award.webp'
import topbank from '../assets/logo-top-bank-2019@2x.webp'
import bankaward from '../assets/logo-infobank-award-2019@2x.webp'
import ojk from '../assets/ojk.webp'

import Form from './Form'

class Home extends Component {

    renderBS = () => {
        return (
            <div className='col mx-auto text-white padding-home m-5'>
                <h1  style={{fontSize : '50px'}}>Ajukan Pinjaman Tanpa Agunan di Tunaiku</h1>
                <h4>Pinjaman Online Tanpa Jaminan
                            Rp2 - 20 Juta Syarat KTP Saja!</h4>
                <h5 className='font-small'>Tunaiku merupakan produk Amar Bank yang terdaftar dan diawasi OJK sejak 2014</h5>
                <button type='button' className='btn btn-light m-1'>
                    <img src={amarBank} alt='amarbank' style={{ width: "120px", height: "60px" }}></img>
                </button>
                <button type='button' className='btn btn-light m-1'>
                    <img src={ojk} alt='ojk' style={{ width: "120px", height: "60px" }}></img>
                </button>

                <h5>Penghargaan yang telah diraih <h5 className='font-weight-bold'>Tunaiku - Amar Bank</h5></h5>
                    <img src={banking} alt='banking' style={{ height: "80px"}} className='m-2'></img>
                    <img src={topbank} alt='top bank' style={{ height: "80px" }} className='m-2'></img>
                    <img src={bankaward} alt='bank award' style={{ height: "80px" }} className='m-2'></img>
                
            </div>

        )
    }


    static contextType = ProfileContext

    render() {
        console.log(this.context)
        if (this.context.pageStep === '1') {
            return (
                <div>
                    <div className='container'>
                        <div className='custom-bg'>
                            <div className='row container'>
                                {this.renderBS()}
                                <div className='col mx-5 card col m-5'>
                                    <Slider2 />
                                    <div className='card-body row'>
                                        <button
                                            type='button'
                                            className='btn btn-success col btn-go'
                                            style={{height : '40px'}}
                                            onClick={this.context.ajukanPinjaman}>
                                            Ajukan Pinjaman
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        if (this.context.pageStep === '2') {
            return (
                <div>
                    <div className='container'>
                        <div className='custom-bg'>
                            <div className='row container'>
                                {this.renderBS()}
                                <div className='col mx-auto my-2 card col m-5'>
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }


    }
}

export default Home;