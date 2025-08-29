import React from 'react';
import {Link} from "react-router-dom";
import styles from './MainNav.module.scss';

// 리액트에서는 새로고침이 일어나서 UX적으로도 좋지 않고
// *상태값*을 변경시켜서 <a> 태그는 사용하면 안 된다.
// Link를 사용해야 된다. 태그는 a태그로 들어가지만 새로고침이 일어나지 않는다.
const MainNav = () => {

    const { nav, navLink, active } = styles;

    return (
        <nav className={nav}>
            {/*<a href="/">Home</a>*/}
            {/*<a href="/blog">Blog</a>*/}
            {/*<a href="/about">About</a>*/}
            <Link to="/" className={navLink}>Home</Link>
            <Link to="/blog" className={navLink}>Blog</Link>
            <Link to="/about" className={navLink}>About</Link>
        </nav>
    );
};

export default MainNav;