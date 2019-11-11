import React, { Component } from 'react';
import { ProfileContext } from './context/ProfileContext'
import { Slider } from '@material-ui/core'


const marksPinjaman = [
    { value: 2, label: 2 },
    { value: 20, label: 20 }
]

const marksPeriode = [
    { value: 6, label: 6 },
    { value: 20, label: 20 }
]

class Slider2 extends Component {

    renderPinjamanSlider = () => {
        return (
            <div>
                <h4>Jumlah Pinjaman : Rp {this.context.pinjaman} juta,-</h4>
                <Slider
                    step={1}
                    min={2}
                    max={20}
                    marks={marksPinjaman}
                    valueLabelDisplay='auto'
                    onChange={this.context.commitPinjaman} />
            </div>
        )
    }
    renderPeriodeSlider = () => {
        return (
            <div>
                <h4>Lama Pinjaman :{this.context.periode} bulan</h4>
                <Slider
                    step={1}
                    min={6}
                    max={20}
                    marks={marksPeriode}
                    valueLabelDisplay='auto'
                    onChange={this.context.commitPeriode} />
            </div>
        )
    }

    static contextType = ProfileContext

    render() {
        console.log(this.context.pinjaman)
        const { name, phone, email, nik, emailOwned, tujuanPinjaman, tahuTunaiku, pinjaman, periode, angsuran, gender, birth } = this.context
        return (
            <div>
                <div className='card col my-2 mx-auto'>
                    <div className='card-body row text-white bg-card'>
                        <h3 className='col float-left'>Cicilan : </h3>
                        <div className='float-right'>
                            <span >Rp {angsuran},-</span> <br></br>
                            <span>per bulan</span>
                        </div>


                    </div>
                    <div className='card-body'>

                        {this.renderPinjamanSlider()}
                    </div>
                    <div className='card-body'>

                        {this.renderPeriodeSlider()}
                    </div>
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
        );
    }
}

export default Slider2;