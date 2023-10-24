import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>BestBuy</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://bestbuy.com'}
                        >
                            <h4>www.bestbuy.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Sales - Best Buy, Corpus Christi, Texas</h3>
                        <b>
                            <p>November 2018 - January 2019</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        Leading sales prospecting a gross of averaging $20K in sales in-store,
                        gained gross average up 12% monthly for Company
                    </li>
                    <li>
                        Inspected sales patterns over a 1-year period,
                        collaborating with the Marketing team to devise sales strategies,
                        team mentoring for recruited members; leveraged
                        existing customer accounts to gain referrals,
                        increasing product demand by 44%
                    </li>
                    <li>
                        Enhanced operational efficiency of a 10-member sales team,
                        providing mentorship programs,
                        verified general and technical issues increased product sales growth by
                        23%; cooperated with 8+ Sales Managers to address 20+ customer queries
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Lowe's</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://Lowes.com/'}
                        >
                            <h4>www.Lowes.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Shipping Receiver - Lowe's, San Antonio, Texas</h3>
                        <b>
                            <p>September 2017 - May 2018</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        Maintained detailed records of inventory,
                        shipment, and delivery,
                        presenting monthly reports and resolving logistics issues
                        with 99% accuracy
                    </li>
                    <li>
                        Collaborated with analytics department in supply chain company, 
                        analyzing forecast changes and unusual trends; 
                        incorporated stock order suggestions by Manager,
                        reducing inventory loss by 64%
                    </li>
                    <li>
                        Coordinated with a team of 7 on storage and transit facilities; 
                        transported product through small parcel carriers, 
                        minimizing product damage by 40%
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Smokey Mo's</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://smokeymosbbq.com/'}
                        >
                            <h4>www.smokeymosbbq.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Cashier - Smokey Mo's, San Antonio, Texas</h3>
                        <b>
                            <p>September 2016 - March 2017</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        Completed daily recovery tasks to keep areas clean 
                        and neat for maximum productivity
                    </li>
                    <li>
                        Maintained record of daily sale transactions,
                        tracking cash receipts of 200+ customers; completed daily balanced checklist at end of shift,
                        ensured 100% accurate record of inventory flow
                    </li>
                    <li>
                        Conducted 20+ client calls on daily basis, 
                        communicated with customers on call orders, 
                        processed 60+ online orders within one month
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
