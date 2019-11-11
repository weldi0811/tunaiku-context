import React, { Component } from 'react';
import Slider from './Slider'
import Summary from './Summary'
import Form from './Form'

class Home extends Component {

    state = {
        pageStep: '1'
    }

    ajukanPinjaman = () => {
        this.setState({
            pageStep : '2'
        })
    }
    render() {
        if (this.state.pageStep === '1') {
            return (
                <div>
                    <div className='container'>
                        <div className='custom-bg'>
                            <div className='row container'>
                                <div className='col mx-auto text-white'>
                                    <h1>Ajukan Pinjaman Tanpa Agunan di Tunaiku</h1>
                                    <h4>Pinjaman Online Tanpa Jaminan
                            Rp2 - 20 Juta Syarat KTP Saja!</h4>
                                </div>
                                <div className='col mx-auto my-2 card col'>
                                    <Slider />
                                    <div className='card-body'>
                                        <button
                                            type='button'
                                            className='btn btn-success'
                                            onClick={() => { this.ajukanPinjaman() }}>
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
        if(this.state.pageStep === '2'){
            return (
                <div>
                    <div className='container'>
                        <div className='custom-bg'>
                            <div className='row container'>
                                <div className='col mx-auto text-white'>
                                    <h1>Ajukan Pinjaman Tanpa Agunan di Tunaiku</h1>
                                    <h4>Pinjaman Online Tanpa Jaminan
                            Rp2 - 20 Juta Syarat KTP Saja!</h4>
                                </div>
                                <div className='col mx-auto my-2 card col'>
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        if(this.state.pageStep === '2' && this.context.formSubmitted === true){
            return (
                <Summary />
            )
        }

    }
}

export default Home;