import React from 'react'

function Hero() {
    return (
        <div className="hero card">
            <div className="hero-card-body card-body">
                <div className="hero-row-a">
                    <div className="hero-weekday">
                        <div className="hero-week-date">SUN</div>
                        <div className="hero-week-date"><b>19</b></div>
                    </div>
                    <div className="hero-weekday">
                        <div className="hero-week-date">MON</div>
                        <div className="hero-week-date"><b>20</b></div>
                    </div>
                    <div className="hero-weekday">
                        <div className="hero-week-date">TUE</div>
                        <div className="hero-week-date"><b>21</b></div>
                    </div>
                    <div className="hero-weekday">
                        <div className="hero-week-date">WED</div>
                        <div className="hero-week-date"><b>22</b></div>
                    </div>
                    <div className="hero-weekday hero-weekday-active">
                        <div className="hero-week-date">THU</div>
                        <div className="hero-week-date"><b>23</b></div>
                    </div>
                    <div className="hero-weekday">
                        <div className="hero-week-date">FRI</div>
                        <div className="hero-week-date"><b>24</b></div>
                    </div>
                    <div className="hero-weekday">
                        <div className="hero-week-date">SAT</div>
                        <div className="hero-week-date"><b>25</b></div>
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
