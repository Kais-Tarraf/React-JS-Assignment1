"use client";
import { transform } from "next/dist/build/swc/generated-native";
import React, { useState } from "react";

const tableStyle = {
	padding: "10px",
	border: "1px solid #ddd",
	textAlign: "center",
};

export default function Home() {
	const students = [
		{ name: "Aiden Carter", level: 1, averageScore: 88 },
		{ name: "Bella Thompson", level: 2, averageScore: 91 },
		{ name: "Caleb Johnson", level: 3, averageScore: 84 },
		{ name: "Daisy Nguyen", level: 3, averageScore: 93 },
		{ name: "Ethan Wright", level: 1, averageScore: 76 },
		{ name: "Fiona Lopez", level: 3, averageScore: 89 },
		{ name: "Gavin Smith", level: 2, averageScore: 82 },
		{ name: "Hannah Patel", level: 3, averageScore: 95 },
		{ name: "Isaac Chen", level: 1, averageScore: 79 },
		{ name: "Jasmine Rivera", level: 2, averageScore: 87 },
	];
	const [selectedLevel, setSelectedLevel] = useState("All Levels");
	const filteredStudents =
		selectedLevel === "All Levels"
			? students
			: students.filter(
					(student) => student.level.toString() === selectedLevel
			);
	return (
		<main style={{ fontFamily: "Tahoma" }}>
			<div
				style={{
					border: "5px solid #777",
					padding: "10px",
					textAlign: "center",
				}}
			>
				<h1>Student Overview</h1>
				<span>Filter by level</span>
				<select
					value={selectedLevel}
					onChange={(e) => setSelectedLevel(e.target.value)}
					style={{ padding: "4px", marginLeft: "8px" }}
				>
					<option value="All Levels">All Levels</option>
					<option value="1">Level 1</option>
					<option value="2">Level 2</option>
					<option value="3">Level 3</option>
				</select>
				<table
					style={{
						marginLeft: "auto",
						marginRight: "auto",
						marginTop: "10px",
						borderSpacing: "0px",
					}}
				>
					<thead>
						<tr style={{ backgroundColor: "#9E9E9E" }}>
							<th style={tableStyle}>Name</th>
							<th style={tableStyle}>Level</th>
							<th style={tableStyle}>Average Score</th>
						</tr>
					</thead>
					<tbody>
						{filteredStudents.map((s, index) => (
							<tr key={index}>
								<td style={tableStyle}>{s.name}</td>
								<td style={tableStyle}>{s.level}</td>
								<td style={tableStyle}>{s.averageScore}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</main>
	);
}
