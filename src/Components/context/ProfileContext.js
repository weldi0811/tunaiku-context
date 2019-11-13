import React, { Component, createContext } from 'react';

export const ProfileContext = createContext()

class ProfileContextProvider extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        emailOwned: '',
        loanPurpose: '',
        tahuTunaiku: '',
        pinjaman: 2,
        periode: 6,
        angsuran: '410.000',
        nik: '',
        gender: '',
        birth: '',
        formSubmitted: false,
        pageStep: '1'
    }

    ajukanPinjaman = () => {
        this.setState({
            pageStep: '2'
        })
    }

    backToHome = () => {
        this.setState({
            pageStep: '1'
        })
    }

    resetState = () => {
        this.setState({
            name: '',
            phone: '',
            email: '',
            emailOwned: '',
            loanPurpose: '',
            tahuTunaiku: '',
            pinjaman: 2,
            periode: 6,
            angsuran: '410.000',
            nik: '',
            gender: '',
            birth: '',
            formSubmitted: false,
            pageStep: '1'
        })
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
        const convertRupiah = (/\d(?=(\d{3})+\.)/g, '$&,')

        var bayarBunga = (jumlah * 0.23 / periode)

        var angsuran = (bayarBulan + bayarBunga).toFixed(2).replace(convertRupiah)

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
            loanPurpose: values.loanPurpose,
            tahuTunaiku: values.tahuTunaiku,
            formSubmitted: values.formSubmitted
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
                        validateForm: this.validateForm,
                        ajukanPinjaman: this.ajukanPinjaman,
                        backToHome: this.backToHome,
                        resetState : this.resetState
                    }}>
                {this.props.children}
            </ProfileContext.Provider>
        );
    }
}

export default ProfileContextProvider;