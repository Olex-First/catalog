import "./footer.css"

function Footer() {
    return (
        <>

            <footer id="sticky-footer" className=" footer-set flex-shrink-0 py-4  text-white-50">
                <div className="container properties-footer w-75 ">
                    <div >
                        <h4>Green for life<b>.</b></h4>
                        <p className="footer-text">
                            Наши социальные сети
                        </p>
                        <ul className="social">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <p className="footer-text">Если вы хотите заказать сайт<br/>
                            Напишите Roma Green</p>
                        <button className="btn  btn-lg active order-page">Заказать сайт</button>
                    </div>

                </div>
            </footer>
        </>

    );
}

export default Footer;