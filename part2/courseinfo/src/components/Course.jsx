import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({course}) => {
	const totalCourses = course.parts.reduce((sum, current) => sum + current.exercises, 0)
	return (
		<>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Total total={totalCourses} />
		</>
	)
}

export default Course