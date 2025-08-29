// components와 달리 pages 파일은 좀 더 큰 페이지들의 묶음이고
// components은 조금 더 작은 페이지들의 묶음이다
import MainNav from '../components/MainNav';
import styles from './IndexPage.module.scss';

const IndexPage = () => {
    return (
        <>
            {/*<MainNav />*/}
            <div className={styles.home}>
                <h1 className={styles.title}>개발자의 기술 블로그</h1>
                <p className={styles.subtitle}>React와 관련된 기술들을 공유합니다.</p>
            </div>
        </>
    );
};

export default IndexPage;
