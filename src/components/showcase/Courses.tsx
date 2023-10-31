import React from 'react';

export interface CoursesProps {}

const Courses: React.FC<CoursesProps> = (props) => {
    return (
        <div className="site-page-content">
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Spring 2020</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>IS 3043: Computer Programming I</h3>
                        <b>
                            <p>University of Texas at San Antonio</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        Introduction to the fundamental principles of computer programming in Python.
                    </li>
                    <li>
                        Covered topics including data types, control structures, functions, and input/output operations.
                    </li>
                </ul>
            </div>
            {/* Repeat the structure for each course and semester */}
            {/* ... */}
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    // ... rest of your styles
};

export default Courses;
