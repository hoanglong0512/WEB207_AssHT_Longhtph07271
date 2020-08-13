import React from 'react'
import { Link } from 'react-router-dom';
const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-c-yellow sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/admin">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Admin</div>
            </a>

            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <Link className="nav-link" to="/admin">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">
                Giao Diện
      </div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <Link className="nav-link" to="/admin/Products">
                    <span>Products</span></Link>
            </li>
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
                <Link className="nav-link" to="/admin/categories" >
                    <span>Categories</span>
                </Link>
            </li>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item">
                <Link className="nav-link " to="/admin/blog" >
                    <span>Blog</span>
                </Link>
            </li>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item">
                <Link className="nav-link " to="/admin/contact" >
                    <span>Contact</span>
                </Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />

        </ul>
    )
}

export default Sidebar
