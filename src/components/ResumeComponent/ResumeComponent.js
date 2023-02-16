import React from 'react';
import styles from './ResumeComponent.module.css';

const ResumeComponent = () => {
    return (
        <div className={styles.resume}>
            <h2>ZANDER E. MARENBERG</h2>
            <h3>EDUCATION</h3>
            <p>RUTGERS UNIVERSITY, New Brunswick, NJ<br />
                Graduated: May 2021</p>
            <p>B.S. Finance ; Concentration ; Entrepreneurship<br />
                GPA ; 3.5/4.0, Cum Laude</p>

            <h3>PROFESSIONAL EXPERIENCE</h3>
            <h4>GroupM/Wavemaker Global Advertising, New York City, NY</h4>
            <p>April 2022 - Present</p>
            <p>Market Planning Associate</p>
            <ul>
                <li>Direct marketing budgets frequently exceeding $10,000,000 and analyze KPI performance for T. Rowe Price and Audible digital marketing strategies</li>
                <li>Maintain status of ongoing media campaigns and oversee programmatic ad planning/buying across a variety of mediums</li>
                <li>Track key metrics such as spend, impressions, clicks, CPM, LPV, LTV, CPLPV, and CTR to build bi-weekly, monthly, quarterly, and yearly presentation reports across 5 lines of business</li>
                <li>Organize 1-5 weekly meetings with prospective digital ad placement channels</li>
                <li>Plan 2023 Offline campaign launches for radio, TV, and print in Alaska</li>
            </ul>

            <h4>NJ Riot Lacrosse Club Inc., Chester, NJ</h4>
            <p>September 2021 - Present</p>
            <p>Assistant CFO, Social Media Manager, and Videographer</p>
            <ul>
                <li>Assist the CFO with day-to-day operations, manage/coordinate special projects, and present findings and proposals to executive management</li>
                <li>Organize, contract, and budget more than $200,000 in connection with off-site meetings, hotels, meals, audio-visual equipment, lacrosse equipment and online and team-building activities</li>
                <li>Shoot and edit roughly 6-10 hours of video content per week for Instagram, YouTube, TikTok, and Facebook</li>
                <li>Negotiate purchasing operations including lacrosse equipment, uniforms, field rentals, referee fees, tournament entry fees, and salaries</li>
                <li>Estimate short-term and long-term club profit potential via Microsoft Excel financial modeling</li>
            </ul>

            <h4>LENNAR CORPORATION, Hamilton, NJ</h4>
            <p>June 2021 - September 2021</p>
            <p>Forward Planning and Land Acquisition Intern</p>
            <ul>
                <li>Often exceeded $30,000,000 in long-term profit potential when deriving target purchase price for prospective land acquisition investments</li>
                <li>Generated over 15 VestaCalc models per week to determine cashflow and profitability of planned and existing communities</li>
                <li>Improved company efficiency up to 25% by personally examining homesite blueprints and inspecting truss structuring, framing, and foundation quality on finished homes</li>
                <li>Saved an average of $25,000 per purchasing transaction through effective negotiation with construction material and labor vendors to create project takeoffs</li>
            </ul>
        </div>

    );
}



export default ResumeComponent;
