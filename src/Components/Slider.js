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
                <h5>Jumlah Pinjaman : Rp {this.context.pinjaman} juta,-</h5>
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
                <h5>Lama Pinjaman : {this.context.periode} bulan</h5>
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
        const {angsuran } = this.context
        return (
            <div>
                
                    <div className='card-body row text-white bg-card'>
                        <h5 className='col float-left' style={{fontSize : '20px'}}>Cicilan : </h5>
                        <div className='float-right'>
                            <h2>Rp {angsuran},-</h2> <br></br>
                            <span className='float-right'>per bulan</span>
                        </div>


                    </div>
                    <div className='card-body'>

                        {this.renderPinjamanSlider()}
                    </div>
                    <div className='card-body'>

                        {this.renderPeriodeSlider()}
                    </div>
                    

                
            </div>
        );
    }
}

export default Slider2;