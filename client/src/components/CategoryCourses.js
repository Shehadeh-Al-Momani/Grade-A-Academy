import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Filter from './Filter';
import { LocalStorage } from './LocalStorage';

const CategoryCourses = (props) => {
	const { match: { params: { id } } } = props
	const [allCourses, setAllCourses] = useState([]);
	const [token, setToken] = LocalStorage('token', '');

	useEffect(() => {
		axios.get(`/students/category_courses/${id}`, { headers: { authorization: token }, })
			.then((res) => {
				setAllCourses(res.data);
			})
			.catch((err) => {
				console.log('ERR: ', err);
			});
	}, [id]);

	const countResults = allCourses.reduce((acc) => acc + 1, 0)

	return (
		<div>
			<div className='coursesMain'>
				<Filter />
				<div className='coursesCards'>
					<h1 className='tt'>
						Courses
				<div className='countResults'>
							{countResults} results
					</div>
					</h1>
					<div className="real-rs">
						{
							allCourses.map((e, i) => (
								<Link to={`/students/courses/${e.id}`} key={i}>
									<div className='oneCourse' >
										<div className='imgCourse'>
											<img className='imgCourse' src={`${e.img_url}`} alt={`${e.name}`} />
										</div>
										<div className='oneCourse2'>
											<div> {e.name} </div>
											<div> {e.description} </div>
											<div> {e.category} </div>
											<div> {e.instructor} </div>
										</div>
										<div className='oneCourse3'>
											<div> $ {e.price} </div>
											<div> more details... </div>
										</div>
									</div>
								</Link>
							))
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryCourses;
