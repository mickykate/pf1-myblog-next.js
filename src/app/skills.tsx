'use client'; // useStateを使うので必須

import { useState } from 'react';

export function Skills() {
    const skillsData = [
        { name: "HTML", level: 80, color: " #a1c4fd" },
        { name: "CSS", level: 80, color: "#ff9a9e" },
        { name: "JavaScript", level: 80, color: "#8fd3f4" },
        { name: "Ruby", level: 65, color: "#a6c0fe" },
        { name: "Next.js", level: 60, color: "#cfd9df" },
        { name: "TypeScript", level: 70, color: "#b490ca" },
        { name: "Ruby on Rails", level: 60, color: "#fccb90" },
        { name: "SQL", level: 55, color: "#96e6a1" }
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
            backgroundColor: "#F0F2F0"
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
