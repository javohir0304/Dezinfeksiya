import React from "react";
import { Col, Row } from "antd";
import klapa from "../images/klapa.webp";
import tarakan from "../images/tarakan.jpg";
import chayon from "../images/chayon.jpg";
import kemiruvchi from "../images/kemiruvchi.jpg";
import burga from "../images/burga.jpeg";
import odam2 from "../images/odam2.jpg";
import serviceslogo from "../images/page3logo.png";
import { useTranslation } from "react-i18next";

function Services({ handleMenuClick }) {
    const { t } = useTranslation();
    return (
        <div className="container">
            <p style={{ fontSize: '50px', fontFamily: 'Unbounded', fontWeight: 'bold', color: '#020C31' }} data-aos="zoom-in">{t('services.title')}</p>
            <Row gutter={[16, 16]}>
                {[
                    { title: 'services.card1.title', text: 'services.card1.text', img: klapa },
                    { title: 'services.card2.title', text: 'services.card2.text', img: tarakan },
                    { title: 'services.card3.title', text: 'services.card3.text', img: chayon },
                    { title: 'services.card4.title', text: 'services.card4.text', img: kemiruvchi },
                    { title: 'services.card5.title', text: 'services.card5.text', img: burga },
                ].map((card, index) => (
                    <Col lg={8} md={12} sm={24} xs={24} data-aos="fade-right" key={index}>
                        <div className="services-card">
                            <h1>{t(card.title)}</h1>
                            <p className="services-text">{t(card.text)}</p>
                            <img className="element2" src={card.img} alt="Error" />
                            <button onClick={() => handleMenuClick("connect-section")} className="connect-all services-card-btn">{t('header.menu5')}</button>
                        </div>
                    </Col>
                ))}
            </Row>
            <div className="services-back">
                <Row>
                    <Col lg={12} md={11} sm={24} xs={24}>
                        <img className="services-img" data-aos="fade-right" src={odam2} alt="Error" />
                    </Col>
                    <Col lg={12} md={24} sm={24}>
                        <div className="services-info">
                            <img src={serviceslogo} alt="Error" data-aos="fade-right" />
                            <p className="services-title" data-aos="fade-right">{t('services.backg.text')}</p>
                            <div onClick={() => handleMenuClick("connect-section")} data-aos="fade-right">
                                <button className="connect-all">{t('header.menu5')}</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Services;
