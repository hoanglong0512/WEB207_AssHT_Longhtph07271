import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Topbar from '../../components/Admin/TopBar'
import Footer from '../../components/Admin/Footer'
import '../../assets/css/admin/sb-admin-2.min.css'
import '../../assets/css/admin/main.scss'

export default ({ children }) => {
    return (
        <div className="admin-page">
            {/* Page Wrapper */}
            <div id="wrapper">
                {/* Sidebar */}
                <Sidebar />
                {/* End of Sidebar */}
                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <Topbar />
                    <div id="content">
                        {/* Topbar */}

                        {/* End of Topbar */}
                        {/* Begin Page Content */}
                        <div className="container-fluid">

                            {children}
                            {/* <AddForm onAdd={onHandleAdd} />
                <Products products={products} onRemove={onHandleRemove} /> */}
                        </div>
                        {/* /.container-fluid */}
                    </div>
                    {/* End of Main Content */}
                    {/* Footer */}
                    <Footer />
                    {/* End of Footer */}
                </div>
                {/* End of Content Wrapper */}
            </div>
        </div>
    )
}

