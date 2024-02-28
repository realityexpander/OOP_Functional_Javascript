/**
 * Represents a Student with grades.
 * @class
 * @constructs Student
 * @param {number[]} grades - The grades of the student.
 * @returns {Student2}
 */
class Student {
	#grades
	#updateCounter = 0

	/**
	 * Creates a new instance of the Student2 class.
	 * @constructs Student2
	 * @param {number[]} grades - The grades of the student.
	 * @throws {Error} If `grades` is an empty array.
	 */
	constructor(grades) {
		if (grades.length <= 0) throw new Error("Grades array must not be empty")

		// this.#grades = grades  // Allows the original array to be modified externally.
		this.#grades = grades.slice()  // Prevents the original array from being modified by making a copy (slice).
	}

	/**
	 * Gets the grades of the student.
	 * @returns {number[]} The grades of the student.
	 */
	fetchAllGrades() {
		// return this.#grades  // Allows the original array to be modified externally.
		return this.#grades.slice()  // Prevents the original array from being modified by making a copy (slice).
	}

	/**
	 * Gets the best grade of the student.
	 * @returns {number} The best grade of the student.
	 */
	findBestGrade() {
		return Math.max(...this.#grades)
	}

	/**
	 * Changes the first grade of the student.
	 * @param {number} newGrade - The new grade to be assigned.
	 * @returns {void}
	 */
	changeFirstGrade(newGrade) {
		this.#incrementUpdateCounter()
		this.#grades[0] = newGrade
	}

	/**
	 * Fetches the update counter.
	 * @returns {number} The number of times the grades have been updated.
	 */
	fetchUpdateCounter() {
		return this.#updateCounter
	}

	/**
	 * Increments the update counter.
	 * @returns {void}
	 */
	#incrementUpdateCounter() {
		this.#updateCounter++
	}
}


// Test the Student function.
let publicGrades = [0, 1, 2, 3]
let student = new Student(publicGrades)
console.log("Best grade=" + student.findBestGrade())  // `grade` is 3.
console.log("Stringified JSON = " + JSON.stringify(student))

// student.grades is private and cannot be accessed from the outside.
console.log("student.grades = " + student.grades)

// "Send a message" to the object, ie: call a method.
student.changeFirstGrade(101)
console.log("1. Best grade=" + student.findBestGrade() +
	", Update counter=" + student.fetchUpdateCounter())


// Attempt to change the grades array... may work!
publicGrades[0] = 5
// Note value of `grade` depends on if the array was copied or not.
console.log("2. Best grade=" + student.findBestGrade() +
	", Update counter=" + student.fetchUpdateCounter())


