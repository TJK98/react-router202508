// 대문자로 시작하지 않고 소문자로 시작하면 일반 js

import {createBrowserRouter} from 'react-router-dom';
import IndexPage from '../pages/IndexPage.jsx';
import BlogPage from '../pages/BlogPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';


// 라우터 설정을  props로 전달
export const router = createBrowserRouter([
    {
        path: `/`,
        element:<IndexPage />
    },
    {
        path: `/blog`,
        element:<BlogPage />
    },
    {
        path: `/about`,
        element:<AboutPage />
    },
]); // 배열을 넣고 그 안에는 객체를 넣어야 한다. / 다음에 어떤 단어가 오면 그 페이지로 이동
