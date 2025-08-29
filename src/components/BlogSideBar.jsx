import styles from './BlogSideBar.module.scss';
import {categories} from '../dummy-data/dummy-post.js';
import {useNavigate, useSearchParams} from "react-router-dom";

const BlogSideBar = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    // use~~가 붙은 건 훅이라고 부르는데 훅은 component 바로 아래에서만 호출해야 된다.
    // 새로 고침 없이 리다이랙션을 지원하는 훅
    const navigate = useNavigate();

    // const handelCategoryClick = e => {
    const handelCategoryClick = (category) => {
        // 사이드바에 있는 카테고리를 누르면 목록으로 이동하면서 카테고리를 보여줘야 함.
        // location.href = `/blog`; // 새로 고침이 일어나서 쓰면 안 된다.
        // navigate(`/blog?categoty=${category}`); // location.href = `/blog`;와 같은 기능. 하지만 새로 고침이 일어나지 않는다.
        navigate(`/blog`);
        setSearchParams(prev => {
            prev.set('category', category);
            return prev;
        });
    };

    return (
        <aside className={styles.sidebar}>
            <h2>카테고리</h2>
            <ul className={styles.categoryList}>
                {categories.map((category) => (
                    <li key={category.id}>
                        <button
                            className={`${styles.categoryButton}`}
                            // onClick={handelCategoryClick}
                            onClick={e => handelCategoryClick(category.id)} // 직접 함수를 재호출하면 파라미터를 넣을 수 있다.
                        >
                            {category.name}
                            <span className={styles.count}>
                2
              </span>
                        </button>
                    </li>
                ))}
            </ul>

            <div className={styles.recentPosts}>
                <h2>최근 글</h2>
                <ul>

                </ul>
            </div>

            <div className={styles.tags}>
                <h2>태그</h2>
                <div className={styles.tagCloud}>
                    <span>#React</span>
                    <span>#JavaScript</span>
                    <span>#Web</span>
                    <span>#Frontend</span>
                    <span>#Programming</span>
                </div>
            </div>
        </aside>
    );
}

export default BlogSideBar;
