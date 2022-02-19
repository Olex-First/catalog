import "./main.css"

function Main() {
    return (
        <>
            <main className="d-flex justify-content-between flex-wrap w-75  main-detail">
                <article className="w-75">
                    <ul className= 'd-flex justify-content-around flex-wrap '>
                        <li><a href="#"><img className="main-image mb-4" src="./img/flower.png" alt=""/> <h3>Цветок обыкновенный</h3></a></li>
                        <li><a href="#"><img className="main-image mb-4" src="./img/mint.png" alt=""/> <h3>Мята перечная</h3></a></li>
                        <li><a href="#"><img className="main-image mb-4" src="./img/scent.png" alt=""/> <h3>На душицу похожа</h3></a></li>
                        <li><a href="#"><img className="main-image mb-4" src="./img/aloe.png" alt=""/> <h3>Алое “Столетник”</h3></a></li>
                        <li><a href="#"><img className="main-image" src="./img/flower.png" alt=""/> <h3>Цветок обыкновенный</h3></a></li>
                        <li><a href="#"><img className="main-image" src="./img/mint.png" alt=""/> <h3>Мята перечная</h3></a></li>
                        <li><a href="#"><img className="main-image" src="./img/scent.png" alt=""/> <h3>На душицу похожа</h3></a></li>
                        <li><a href="#"><img className="main-image" src="./img/aloe.png" alt=""/> <h3>Алое “Столетник”</h3></a></li>
                    </ul>
                </article>
                        <aside className="w-25">
                            <h2>Статьи</h2>
                            <ul className="m-4">
                                <li>
                                    <h3>Заголовок статьи в две строки</h3>
                                    <a className="links" href="#">14 августа 2021, 10:17</a>
                                </li>
                                <li>
                                    <h3>Заголовок статьи в две строки</h3>
                                    <a className="links" href="#">14 августа 2021, 10:17</a>
                                </li>
                                <li>
                                    <h3>Заголовок статьи в две строки</h3>
                                    <a className="links" href="#">14 августа 2021, 10:17</a>
                                </li>
                                <li>
                                    <h3>Заголовок статьи в две строки</h3>
                                    <a className="links" href="#">14 августа 2021, 10:17</a>
                                </li>
                                <li>
                                    <h3>Заголовок статьи в две строки</h3>
                                    <a className="links" href="#">14 августа 2021, 10:17</a>
                                </li>
                                <li>
                                    <h3>Заголовок статьи в две строки</h3>
                                    <a className="links" href="#">14 августа 2021, 10:17</a>
                                </li>

                            </ul>
                        </aside>
            </main>
</>

    );
}

export default Main;