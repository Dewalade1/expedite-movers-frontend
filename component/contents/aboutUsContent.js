import React from 'react';

export default function AboutUsContent () {
    return(
        <div className="black-bg-layout">
            <div className="about-us-container align-items-origin">
                <div className="about-us-info">
                    <h2> A wide are of expertise </h2>
                    From Distribution services to warehousing to Freight, We have vast experience in the logistics and supply industry 
                </div>
                <div>
                    <img src="https://res.cloudinary.com/hellodewa/image/upload/v1623327527/expeditemovers/images/sys/logistics_infographic_ayhgpz.jpg" alt="" className="about-us-img" />
                </div>
            </div>
            <div className="about-us-container align-items-origin">
                <div className="about-us-info about-us-info-inverted">
                    <h2> Efficient process of service </h2>
                    From request to delivery, We strive for efficiency in what we do. Using a nine step logistics process to deliver your goods to you in record time without any worries.
                </div>
                <div>
                    <img src="https://res.cloudinary.com/hellodewa/image/upload/v1623328366/expeditemovers/images/sys/logistic_service_seh9pp.jpg" alt="" className="about-us-img about-us-img-inverted"/>
                </div>
            </div>
            <div className="about-us-container align-items-origin">
                <div className="about-us-info">
                    <h2> Reliable Customer Service </h2>
                    At expitemovers, our customers are our family so we treat them with the best of attentions. Our customer service is available to swiftly attend to you and all your needs.
                </div>
                <div>
                    <img src="https://res.cloudinary.com/hellodewa/image/upload/v1623248022/expeditemovers/images/sys/our-customer-service_qbi0s8.jpg" alt="" className="about-us-img"/>
                </div>
            </div>
        </div>
    )
}