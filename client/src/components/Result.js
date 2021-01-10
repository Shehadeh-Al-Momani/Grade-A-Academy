import React from 'react';
import { Link } from 'react-router-dom';
const Result = ({ result, input }) => {
    const count = result.reduce((acc) => acc + 1, 0)
    if (result.length) return (
        <div className='search-rst'>
            <h1>{count} results for "{input}"</h1>
            <div className="real-rs">
                {
                    result.map((course, i) => {
                        return <div key={i}>
                            <Link to={`/students/courses/${course.id}`}>
                            <div className="cs" >
                                    <img src={`${course.img_url}`} alt={`${course.name}`} />
                                    <h2>{course.name}</h2>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
    return (
        <div className="search-rs">
            <h2>Sorry, we couldn't find any results for "{input}"</h2>
            <h3>Try adjusting your search. Here are some ideas:</h3>
            <li>Make sure all words are spelled correctly</li>
            <li>Try different search terms</li>
            <li>Try more general search terms</li>
        </div>
    )
}

export default Result

