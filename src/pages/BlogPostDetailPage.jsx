import React from 'react';
import {useParams} from "react-router-dom";

const BlogPostDetailPage = () => {

    // 현재 라우팅 된 postId를 url부터 읽어내는 법
    const {postId} = useParams();
    // console.log(`x :`, x);

    return (
        <h2>
            {postId}번 블로그 상세 조회 페이지 입니다.
        </h2>
    );
};

export default BlogPostDetailPage;