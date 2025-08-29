import React from 'react';
import styles from './BlogPage.module.scss';
import {posts} from "../dummy-data/dummy-post.js";
import PostCard from "../components/PostCard.jsx";
import {useSearchParams} from "react-router-dom";
import BlogFilter from "../components/BlogFilter.jsx";

const BlogPage = () => {

    // useEffect(() => {
    //     throw new Error('알 수 없는 에러가 발생했습니다!');
    // }, []);

    /*
        ? 뒤에 붙는 쿼리 스트링 읽는 법
        useSearchParams는 배열을 return
        0번 인덱스 : 쿼리 스트링들을 모아 놓은 객체
        1번 인덱스 : 쿼리 스트링을 생성할 수 있는 함수를 return
     */
    const [searchParams] = useSearchParams();
    // console.log(`x: `, x);
    console.log(`searchParams: `, searchParams);

    // 값을 넣지 않으면 null 값 처리가 되기 때문에 기본값 처리를 하는 게 좋다.
    const category = searchParams.get(`category`) || `all`;
    const search = searchParams.get(`search`) || ``;
    const sort = searchParams.get(`sort`) || `latest`;

    // console.log(`category: `, category);
    // console.log(`search: `, search);
    // console.log(`sort: `, sort);

    return (
        <>
            {/*<MainNav/>*/}
            {/*<h1>*/}
            {/*    Blog 페이지 입니다.*/}
            {/*</h1>*/}
            <div className={styles.blog}>

                <BlogFilter />

                <div className={styles.grid}>
                    {posts
                        // 제목 또는 내용으로 검색
                        .filter(post =>
                            post.title.toLowerCase().includes(search)
                            || post.excerpt.toLowerCase().includes(search)
                        )
                        // 카테고리로 검색
                        .filter(post =>
                            category === `all` || post.category === category
                        )
                        // 정렬 (최신순, 오래된 순)
                        .sort((a, b) =>
                            sort === 'latest'
                                ? new Date(b.date) - new Date(a.date)
                                : new Date(a.date) - new Date(b.date)
                        )
                        .map(post => <PostCard key={post.id} post={post}/>)}
                </div>
            </div>
        </>
    );
};

export default BlogPage;