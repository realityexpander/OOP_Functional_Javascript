/** 
 * Represents a Student with grades.
 * @constructs Student
 * @param {number[]} grades - Array of integers representing student's grades
 * @throws {Error} If `grades` is an empty array.
 * @returns Student
 */
function Student(grades) {
	if (grades.length <= 0) throw new Error("Grades array must not be empty")

	// `_grades` is captured in this function body (closure) and is private.
	//let _grades = grades  // Allows the original array to be modified.
	let _grades = grades.slice()  // Prevents the original array from being modified by making a copy (slice).	
	let _updateCounter = 0

	return {
		/**
		 * Fetch all grades.
		 * @method
		 * @return {number[]} All the students grades
		 */
		fetchAllGrades: function () {
			_accessCounter++

			//return _grades  // Allows the original array to be modified.
			return _grades.slice() // Prevents the original array from being modified by making a copy (slice).
		},

		/**
		 * Find the best grade.
		 * @method
		 * @return {number} The max grade in the array
		 */
		findBestGrade: function () {
			return Math.max(..._grades)
		},

		/**
		 * Change the first grade.
		 * @param {number} newGrade - The new grade
		 * @return {void}
		 */
		changeFirstGrade: function (newGrade) {
			_incrementUpdateCounter()
			_grades[0] = newGrade
		},

		/**
		 * Fetch the update counter.
		 * @method
		 * @return {number} The number of times the grades have been updated
		 */
		fetchUpdateCounter: function () {
			return _updateCounter
		}
	}

	// This function is private and cannot be accessed from the outside.
	function _incrementUpdateCounter() {
		_updateCounter++
	}
}


// Test the Student function.
let publicGrades = [0, 1, 2, 3]
let student = Student(publicGrades)
console.log("Best grade=" + student.findBestGrade() +
	", Update counter=" + student.fetchUpdateCounter())  // `grade` is 3, `updateCounter` is 0.
console.log("Stringified JSON = " + JSON.stringify(student))

// student.grades is private and cannot be accessed from the outside.
console.log("student.grades = " + student.grades)


// "Send a message" to the object, ie: call a public method.
student.changeFirstGrade(100)
console.log("1. Best grade=" + student.findBestGrade() +
	", Update counter=" + student.fetchUpdateCounter())


// Attempt to change the student `grades` array externally.
publicGrades[0] = 50
// Note value of `grade` depends on if the array was copied or not.
console.log("2. Best grade=" + student.findBestGrade() +
	", Update counter=" + student.fetchUpdateCounter())

// Output:
// Best grade=3, Update counter=0
// Stringified JSON = {}
// student.grades = undefined
// 1. Best grade=100, Update counter=1
// 2. Best grade=100, Update counter=1



