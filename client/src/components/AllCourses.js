import React, { useState, useEffect } from 'react';
import Filter from "./Filter";
import Courses from "./Courses";

const AllCourses = () => {

		return (
			<div>
				<div className='coursesMain'>
					<Filter />
					<Courses />
				</div>
			</div>
		)

};
export default AllCourses;
