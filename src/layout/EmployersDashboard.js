import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const EmployersDashboard = () => {
    return (

        <div>
            <div className='w-[1200px] mx-auto'>
                <Navbar></Navbar>
                <div className="drawer drawer-mobile  columns-2 ">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                        {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    </div>

                    <div className="drawer-side">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-72 bg-base-100 text-base-content">
                            <li><Link to='/dashboardEmployers/employerDetails'>Employer Details</Link></li>
                            <li className=' my-1'><Link to='/dashboardEmployers/jobprimarypost'>Job Primary Post</Link></li>
                            <li className=' my-1'><Link to='/dashboardEmployers/jobdetailspost'>Job Details</Link></li>
                            <li className=' my-1'><Link to='/dashboardEmployers/jobList'>Posted Job List</Link></li>
                        </ul>

                    </div>
                </div>
                <Footer></Footer>

                {/* <div className="breadcrumbs columns-8 mx-auto">
                    <ul>
                        <li>
                            <Link to='/dashboard/personal'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                <h2 className=' text-lg font-bold'>Personal</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/education">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                <h2 className=' text-lg font-bold'>Education/Training</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/employment">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                <h2 className=' text-lg font-bold'>Employment</h2>

                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/other-information">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                <h2 className=' text-lg font-bold'>Other Information</h2>

                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/photograph">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                <h2 className=' text-lg font-bold'>Photograph</h2>
                            </Link>
                        </li>

                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default EmployersDashboard;