import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
// CSS
import '../../assets/css/admin/main.scss'
import '../../assets/css/main/bootstrap.min.css'
import '../../assets/css/main/responsive.css'
import '../../assets/css/main/style.css'
import '../../assets/css/main/plugins.css'
import '../../assets/css/main/pe-icon-7-stroke.css'
import '../../assets/css/main/ionicons.min.css'
import '../../assets/css/main/font-awesome.min.css'
import '../../assets/css/main/util.css'
import Topbar from '../../components/Main/Topbar'
// JS


export default ({ children }) => {

    console.log('render Main')

    return (
        <div className="user-page">
            <Topbar />
            <Header />
            <div className="content">
                {children}

            </div>
            <Footer />
        </div>
    )
}
