'use client'; // useStateを使うので必須

import { useState } from 'react';

export function Skills() {
    const skillsData = [
        { name: "HTML", level: 80, color: "#e34f26" },
        { name: "CSS", level: 80, color: "#264de4" },
        { name: "JavaScript", level: 80, color: "#f7df1e" },
        { name: "Ruby", level: 65, color: "#61dafb" },
        { name: "Next.js", level: 60, color: "#000000" },
        { name: "TypeScript", level: 70, color: "#3178c6" },
        { name: "Ruby on Rails", level: 60, color: "#339933" },
        { name: "SQL", level: 55, color: "#f29111" }
    ];
    
    // クリックされた円のインデックスを管理
    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <div style={{
            minHeight: "90vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "2rem 0",
            margin: 0,
            backgroundColor: "#e4e4d9"
        }}>
            <h2 style={{
                fontFamily: "var(--font-alegreya-sans-sc), cursive",
                fontSize: "2.5rem",
                marginBottom: "2rem",
                marginTop: "2rem"
            }}>My Skills</h2>
            <div style={{
                display: "flex",
                gap: "2rem",
                marginTop: "3rem",
                justifyContent: "center",
                flexWrap: "wrap"
            }}>
                {skillsData.map((skill, i) => (
                    <div
                        key={i}
                        className={`circle${i + 1}`}
                        onClick={() => setActiveIndex(i === activeIndex ? -1 : i)}
                        style={{
                            width: "160px",
                            height: "160px",
                            borderRadius: "50%",
                            backgroundColor: skill.color, // ここで色を指定
                            marginTop: i % 2 === 0 ? "0" : "60px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: skill.name === "JavaScript" || skill.name === "React" ? "#000" : "#fff", // JSとReactは黒文字
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                            transition: "background 0.3s"
                        }}
                    >
                        {activeIndex === i ? `${skill.level}%` : skill.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
