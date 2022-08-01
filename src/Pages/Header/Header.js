import React from 'react';
import logo from './amazon_PNG2.png'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div className='header'>

            {/* logo  */}
            <img className='header_logo' src={logo} alt="" />

            {/* search  */}

            <div className="header_search">
                <input className='header_searchInput'
                    type="text"
                >
                    <SearchIcon className='search_icon'></SearchIcon>

                </input>
            </div>

            {/* Navbar  */}

            <div className="header_nav">
                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello</span>
                    <span className='header_optionLineOne'>Hello</span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello</span>
                    <span className='header_optionLineOne'>Hello</span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello</span>
                    <span className='header_optionLineOne'>Hello</span>
                </div>

            </div>
        </div>
    );
};

export default Header;