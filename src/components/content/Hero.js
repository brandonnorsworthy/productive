import React from 'react'
import Moment from 'react-moment';
var moment = require('moment');

function Hero() {
    return (
        <div className="hero card">
            <div className="hero-card-body card-body">
                <div className="hero-row-a">
                    <div className="hero-weekday">
                        <div className="hero-week-date">{moment().subtract(3, 'days').format('ddd')}</div>
                        <div className="hero-week-date"><b>{moment().subtract(3, 'days').format('D')}</b></div>
                    </div>
                    <div className="hero-weekday">
                        <div className="hero-week-date">{moment().subtract(2, 'days').format('ddd')}</div>
                        <div className="hero-week-date"><b>{moment().subtract(2, 'days').format('D')}</b></div>
                    </div>
                    <div className="hero-weekday">
                        <div className="hero-week-date">{moment().subtract(1, 'days').format('ddd')}</div>
                        <div className="hero-week-date"><b>{moment().subtract(1, 'days').format('D')}</b></div>
                    </div>
                    <div className="hero-weekday hero-weekday-active">
                        <div className="hero-week-date"><Moment format="ddd"></Moment></div>
                        <div className="hero-week-date"><b><Moment format="D"></Moment></b></div>
                    </div>
                    <div className="hero-weekday">
                        <div className="hero-week-date">{moment().add(1, 'days').format('ddd')}</div>
                        <div className="hero-week-date"><b>{moment().add(1, 'days').format('D')}</b></div>
                    </div>
                    <div className="hero-weekday">
                        <div className="hero-week-date">{moment().add(2, 'days').format('ddd')}</div>
                        <div className="hero-week-date"><b>{moment().add(2, 'days').format('D')}</b></div>
                    </div>
                    <div className="hero-weekday">
                        <div className="hero-week-date">{moment().add(3, 'days').format('ddd')}</div>
                        <div className="hero-week-date"><b>{moment().add(3, 'days').format('D')}</b></div>
                    </div>
                </div>
                <div className="hero-row-b">
                    <img src={process.env.PUBLIC_URL + "/assets/background/productive-gray.png"} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
