import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { LocalStorage } from './LocalStorage';

const Filter = () => {
	const [categories, setCategories] = useState([]);
	const [enrollmentCourses, setEnrollmentCourses] = useState([]);
	const [allInstructors, setAllInstructors] = useState([]);
	const [toggle, setToggle] = useState(true);
	const [token, setToken] = LocalStorage('token', '');
	const decoded = jwt_decode(token);
	let id = decoded.id;

	useEffect(() => {
		getAllCategories()
		getEnrollmentCourses()
		getAllInstructors()
	}, [])

	const getEnrollmentCourses = () => {
		axios.get(`http://localhost:5000/students/history/${id}`)
			.then((response) => {
				setEnrollmentCourses(response.data);
			})
			.catch((err) => { console.log('err :', err) });
	};

	const getAllInstructors = () => {
		axios.get(`http://localhost:5000/students/instructors/2`)
			.then((response) => {
				setAllInstructors(response.data);
			})
			.catch((err) => { console.log('err :', err) });
	};

	const getAllCategories = () => {
		axios
			.get(`http://localhost:5000/students/categories`)
			.then((response) => {
				setCategories(response.data);
			})
			.catch((err) => { console.log('err :', err) });
	};

	return (
		<div >
			<div className='coursesSide' >
				<div>
					<div className='drop-button'> My Courses</div>
					<div  >
						{
							enrollmentCourses.map((e, i) => {
								return (
									<div>
										<Link to={`/students/courses/${e.courses_id}`} key={i}>
											{e.name}
										</Link>
									</div>
								);
							})
						}
					</div>
				</div>
				<div>
					<div className='drop-button'>Instructors</div>
					<div   >
						{
							allInstructors.map((e, i) => {
								return (
									<div>
										<Link to={`/students/coursesInstructor/${e.instructor_id}`} key={i} >
											{e.name}
										</Link>
									</div>
								);
							})
						}
					</div>
				</div>
				<div>
					<div className='drop-button'>Categories</div>
					<div  >
						{
							categories.map((e, i) => {
								return (
									<div >
										<Link to={`/students/categories/${e.id}`} key={i} >
											{e.name}
										</Link>
									</div>
								);
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Filter


