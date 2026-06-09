import { Temporal } from "@js-temporal/polyfill";
import { Student, isStudent, parseStudent } from "./models/student.model";

console.log("=== EXERCISE 2: TESTING CONSTRAINTS ===");
const student: Student = {
  id: "STU-001",
  name: "Hana Tadesse",
  enrollmentDate: Temporal.Now.instant(),
};
console.log(student.gpa?.toFixed(2) ?? "Not yet graded");

console.log("\n=== EXERCISE 3: SAFE API PARSING ===");
function processStudent(raw: unknown) {
  if (isStudent(raw)) {
    const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
    console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
  } else {
    console.error("Invalid student data received");
  }
}
processStudent({ id: "STU-001", name: "Hana", gpa: 3.7 });
processStudent(42);

console.log("\n=== EXERCISE 3 PART B: THROWING PARSER ===");
try {
  console.log(parseStudent({ id: "STU-001", name: "Hana" }));
  parseStudent({ id: 42, name: "Test" });
} catch (error: any) {
  console.error(error.message);
}