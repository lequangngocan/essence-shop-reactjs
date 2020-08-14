import React from 'react';
import '../../assets/admin/css/sb-admin-2.css';
import Navbar from '../../components/admin/Navbar';
import Footer from '../../components/admin/Footer';
import TopBar from '../../components/admin/TopBar';

function LayoutAdmin({ children }) {
    return (
        <div id="wrapper">
            <Navbar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default LayoutAdmin
