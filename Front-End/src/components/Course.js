import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { LocalStorage } from './LocalStorage';

const Course = ({ match: { params: { id }, }, }) => {
	const [course, setCourse] = useState([]);
	const [enrollmentCourses, setEnrollmentCourses] = useState([]);
	const [token, setToken] = LocalStorage('token', '');
	const decoded = jwt_decode(token);
	let stuId = decoded.id;

	useEffect(() => {
		axios
			.get(`http://localhost:5000/students/course/${id}`, {
				headers: { authorization: token },
			})
			.then((res) => {
				setCourse(...res.data);
			})
			.catch((err) => {
				console.log('ERR: ', err);
			});
	}, [id]);

	useEffect(() => {
		axios.get(`http://localhost:5000/students/history/${stuId}`)
			.then((res) => {
				setEnrollmentCourses(res.data);
			})
			.catch((err) => { console.log('err :', err) });
	}, [stuId]);

	const enrollmentCourse = (id, i, course) => {
		axios.post(`http://localhost:5000/students/add_course${id}/${i}`)
			.then((res) => {
				alert(`Thank you for enrollment ${course}`);
			})
			.catch((err) => { console.log('err :', err) });
	}

	const enrollment = enrollmentCourses.filter((e) => { return e.course_id === course.courseId }).length > 0;

	return (
		<div>
			<div className='course'>
				<div>
					<img src={`${course.img_course}`} alt={`${course.name}`} />
				</div>
				<div className='course-details'>
					<h1> {' '} {course.course}{' '} </h1>
					<h3> {' '} {course.category}{' '} </h3>
					<h4> {' '} <span> Description : </span> {course.description} </h4>
					<h3> {' '} {course.instructor} </h3>
					<h3> {' '} {Number(course.rating).toFixed(1)} </h3>
					<h3> {' '} {course.price + ' $'}{' '} </h3>
					<div className='innerTxt'>
						{
							(!enrollment) ? (
								<button onClick={() => enrollmentCourse(course.courseId, stuId, course.course)}> Enrollment</button>
							) : null
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Course;

