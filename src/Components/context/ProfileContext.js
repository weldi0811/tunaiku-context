import React, { Component, createContext } from 'react';

export const ProfileContext = createContext()

class ProfileContextProvider extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        emailOwned: '',
        tujuanPinjaman: '',
        tahuTunaiku: '',
        pinjaman: 2,
        periode: 6,
        angsuran: '410.000',
        nik: '',
        gender: '',
        birth: '',
        formSubmitted : false
    }

    commitPinjaman = (event, value) => {
        this.setState({ pinjaman: value })
        this.hitungBunga()
    }

    commitPeriode = (event, value) => {
        this.setState({ periode: value })
        this.hitungBunga()
    }

    hitungBunga = () => {
        const periode = this.state.periode
        const jumlah = this.state.pinjaman * 1000000
        const bayarBulan = jumlah / periode

        var bayarBunga = (jumlah * 0.23 / periode)

        var angsuran = (bayarBulan + bayarBunga).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

        this.setState({ angsuran: angsuran })

        return angsuran
    }

    validateForm = (values) => {
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
    }

    render() {
        return (
            <ProfileContext.Provider
                value={
                    {
                        ...this.state,
                        commitPeriode: this.commitPeriode,
                        commitPinjaman: this.commitPinjaman,
                        validateForm : this.validateForm
                    }}>
                {this.props.children}
            </ProfileContext.Provider>
        );
    }
}

export default ProfileContextProvider;