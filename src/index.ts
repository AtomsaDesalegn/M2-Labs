import { Quiz, LabAssignment, AssessmentItem, calculateGrade } from "./models/assessment.model";

console.log("==================================================");
console.log("   TMS MODULE 2 SESSION 2: ASSESSMENT ENGINE      ");
console.log("==================================================\n");

// 1. Create a sample Quiz dataset matching your interface
const sampleQuiz: Quiz = {
  id: "QZ-101",
  kind: "quiz",
  title: "C# Basics & Type Safety",
  correctAnswers: 8,
  totalQuestions: 10
};

// 2. Create a sample LabAssignment dataset matching your interface
const sampleLab: LabAssignment = {
  id: "LAB-101",
  kind: "lab",
  title: "Asynchronous Programing Lab",
  functionalityScore: 90,
  codeQualityScore: 85
};

// 3. Collect them into a type-safe Discriminated Union Array
const gradebook: AssessmentItem[] = [sampleQuiz, sampleLab];

// 4. Process and print grades safely using your calculation utility
gradebook.forEach((item) => {
  const finalGrade = calculateGrade(item);
  
  console.log(`[${item.kind.toUpperCase()}] Title: ${item.title}`);
  console.log(`Computed Score: ${finalGrade}%`);
  console.log("--------------------------------------------------");
});