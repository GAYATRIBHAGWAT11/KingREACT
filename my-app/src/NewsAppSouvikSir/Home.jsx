import React from "react";
import Header from "/Users/admin/React/my-app/src/NewsAppSouvikSir/Header.jsx";
import Footer from '/Users/admin/React/my-app/src/NewsAppSouvikSir/Footer.jsx'
import Article from "/Users/admin/React/my-app/src/NewsAppSouvikSir/Article.jsx";

function Home({ handleChangeUrl, data, error, loader }) {

    return (
        <>
            <div>
                <Header changeUrl={handleChangeUrl}>
                {loader && <div>loading.......</div>}
                {error && (
                    <div>{`There is some error while fetching the news - ${error}`}</div>
                )}
                {data && data?.map(({ title, urlImage, publishedAt, url, description }) => (
                    <Article key={url} desc={description} img={urlImage} title={title} id={publishedAt} url={url} />
                ))}
                </Header>
                <Footer />

            </div>
        </>
    )
}
export default Home;