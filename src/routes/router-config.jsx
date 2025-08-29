// 대문자로 시작하지 않고 소문자로 시작하면 일반 js

import {createBrowserRouter} from 'react-router-dom';
import IndexPage from '../pages/IndexPage.jsx';
import BlogPage from '../pages/BlogPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import RootLayout from "../layouts/RootLayout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import BlogPostDetailPage from "../pages/BlogPostDetailPage.jsx";
import BlogLayout from "../layouts/BlogLayout.jsx";


// 라우터 설정을  props로 전달
export const router = createBrowserRouter([
/*    {
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
*/
    {
        path: `/`,
        element: <RootLayout/>,
        // custom erroer page 설정
        errorElement: <ErrorPage/>,
        // children -> Layout의 Outlet 부분을 무엇으로 바꿀지 설정
        children: [
            {
                // path: '', // /(슬래쉬를) 생략해도 된다. 위에 부모에서 /를 설정 했기 때문에.
                index: true, // path가 빈문자열이면 이렇게 대체할 수도 있다.
                element: <IndexPage />
            },
            // 중첩 레이아웃
            {
                path: `blog`,
                element: <BlogLayout />,
                children: [
                    {
                        idex: true,
                        element: <BlogPage />
                    },
                    {
                        path: ':postId',
                        element: <BlogPostDetailPage />
                    },
                ]
            },
            // {
            //     path: 'blog',
            //     element: <BlogPage />
            // },
            // {
            //   path: 'blog/:postId', // id를 통해 블로그 상세 페이지를 조회하기, 안에 댓글, 좋아요 등 몇 개 파라미터를 사용할 지 모르기에 객체로 전달해준다.
            //   element: <BlogPostDetailPage />
            // },
            {
                path: 'about',
                element: <AboutPage />
            },
        ]
    }
]); // 배열을 넣고 그 안에는 객체를 넣어야 한다. / 다음에 어떤 단어가 오면 그 페이지로 이동
