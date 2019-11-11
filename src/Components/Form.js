import React, { Component } from 'react';
import {Formik, Field, useFormikContext} from 'formik'
import { ProfileContext } from './context/ProfileContext'

import * as yup from 'yup'


const userSchema = yup.object().shape({
    name: yup.string().required('nama lengkap harus diisi').min(4).max(255),
    phone: yup.string().required('nomor handphone harus diisi').min(11).max(13),
    email: yup.string().email('masukkan email yang valid').required(),
    emailOwned: yup.string().required('silahkan pilih salah satu'),
    tahuTunaiku: yup.string().required('silahkan pilih salah satu'),
    tujuanPinjaman: yup.string().required('silahkan pilih salah satu'),
    nik: yup.string().required('no ktp harus diisi').min(16).max(16)
})



class Form extends Component {
    static contextType = ProfileContext

    state = {
        name: '',
        phone: '',
        email: '',
        emailOwned: '',
        tujuanPinjaman: '',
        tahuTunaiku: '',
        nik: '',
        gender: '',
        birth: ''
    }


    render() { 
        console.log(this.context)
        return ( 
            <div>
            
            <Formik
            initialValues={this.state}

            onSubmit={(values, actions) => {
                actions.setSubmitting(true)
                setTimeout(() => {
                    actions.setSubmitting(false)
                    this.setState({
                        ...this.state,
                        name: values.name,
                        phone: `+62${values.phone}`,
                        email: values.email,
                        nik: values.nik,
                        emailOwned: values.emailOwned,
                        tujuanPinjaman: values.tujuanPinjaman,
                        tahuTunaiku: values.tahuTunaiku
                    })
                    this.context.validateForm(this.state)
                    console.log('tes submit')
                    // console.log('ini setelah submit')
                    // console.log(this.context)
                }, 20)
            }}
            validationSchema={userSchema}>

            {props =>
                !props.isSubmitting ? (
                    <form onSubmit={props.handleSubmit} className='container row'>
                        <div className='form-group row container'>
                            <Field
                                type='text'
                                placeholder='masukan nama lengkap'
                                onChange={props.handleChange}
                                name='name'
                                value={props.values.name}
                                className='form-message valid col-12' />
                            {props.errors.name && props.touched.name ? (
                                <span className='form-message invalid'>{props.errors.name}</span>
                            ) : (
                                    ''
                                )}

                        </div>

                        <div className='form-group row container'>
                            <Field
                                type='number'
                                placeholder='masukan nomor hand phone'
                                onChange={props.handleChange}
                                name='phone'
                                value={props.values.phone}
                                className='form-message valid col-12' />
                            {props.errors.phone && props.touched.phone ? (
                                <span className='form-message invalid'>{props.errors.phone}</span>
                            ) : (
                                    ''
                                )}

                        </div>


                        <div className='form-group row container'>
                            <Field
                                type='number'
                                placeholder='masukan nomor ktp'
                                onChange={props.handleChange}
                                name='nik'
                                value={props.values.nik}
                                className='form-message valid col-12' />
                            {props.errors.nik && props.touched.nik ? (
                                <span className='form-message invalid'>{props.errors.nik}</span>
                            ) : (
                                    ''
                                )}
                        </div>



                        <div className='form-group row container'>
                            <Field
                                type='email'
                                placeholder='masukkan email'
                                onChange={props.handleChange}
                                name='email'
                                value={props.values.email}
                                className='form-message valid col-12' />
                               
                            {props.errors.email && props.touched.email ? (
                                <span className='form-message invalid'>{props.errors.email}</span>
                            ) : (
                                    ''
                                )}
                        </div>

                        <div className='form-group row container'>
                            <div className='col-12'>
                                <label htmlFor='emailOwned' className='col'>Kepemilikan Email</label>
                            </div>

                            <div className='col'>
                                <Field name='emailOwned' component='select' placeholder='Kepemilikan email'
                                    className='float-right col-12'
                                    onChange={props.handleChange}
                                    value={props.values.emailOwned}>
                                    <option>pilih salah satu</option>
                                    <option value="pribadi">pribadi</option>
                                    <option value="kantor">kantor</option>
                                    <option value="lainnya">lainnya</option>
                                </Field>
                                {props.errors.emailOwned && props.touched.emailOwned ? (
                                    <span className='form-message invalid col'>{props.errors.emailOwned}</span>
                                ) : (
                                        ''
                                    )}
                            </div>




                        </div>
                        <div className='form-group row container'>
                            <div className='col-12'>
                                <label htmlFor='emailOwned' className='col'>Tujuan Pinjaman</label>
                            </div>

                            <div className='col'>
                                <Field name='tujuanPinjaman' component='select' placeholder='Tujuan Pinjaman'
                                    className='float-right col-12'
                                    onChange={props.handleChange}
                                    value={props.values.tujuanPinjaman}>
                                    <option>pilih salah satu</option>
                                    <option value="liburan">liburan</option>
                                    <option value="investasi">investasi</option>
                                    <option value="sekolah">sekolah</option>
                                </Field>
                                {props.errors.tujuanPinjaman && props.touched.tujuanPinjaman ? (
                                    <span className='form-message invalid col'>{props.errors.tujuanPinjaman}</span>
                                ) : (
                                        ''
                                    )}

                            </div>
                        </div>
                        <div className='form-group row container'>
                            <div className='col-12'>
                                <label htmlFor='emailOwned'>Darimana mengetahui Tunaiku</label>
                            </div>
                            <div className='col'>
                                <Field name='tahuTunaiku' component='select' placeholder='Darimana mengetahui Tunaiku'

                                    className='float-right col-12'
                                    onChange={props.handleChange}
                                    value={props.values.tahuTunaiku}>
                                    <option>pilih salah satu</option>
                                    <option value="internet">internet</option>
                                    <option value="teman">teman</option>
                                    <option value="radio">radio</option>
                                </Field>
                                {props.errors.tahuTunaiku && props.touched.tahuTunaiku ? (
                                    <span className='form-message invalid col'>{props.errors.tahuTunaiku}</span>
                                ) : (
                                        ''
                                    )}
                            </div>
                        </div>
                            <button
                                type="submit"
                                className='btn btn-success float-right my-2'
                                disabled={!props.dirty && props.isSubmitting}>
                                Submit
                            </button>
                    
                    </form>
                ) : (
                        <div className='overlay'></div>
                    )}
        </Formik> 

        </div>
         );
    }
}
 
export default Form;