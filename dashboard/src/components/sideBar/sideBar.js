import React from "react";
import image from "../../assets/images/logo1.png";

function SideBar() {
    return (
        <ul
            className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
            id="accordionSidebar"
        >
            <a
                className="sidebar-brand d-flex align-items-center justify-content-center"
                href="/"
            >
                <div className="sidebar-brand-icon">
                    <img className="w-100" src={image} alt="Hampi Yura" />
                </div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - Hampi Yura</span>
                </a>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Actions</div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="/">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Products</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Users</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Sales</span>
                </a>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    );
}

export default SideBar;
