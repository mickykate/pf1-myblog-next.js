'use client';
import { useState } from 'react';

export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ name, email, message });
        alert('お問い合わせありがとうございます！');
    };

    return (
        <div style={{
            maxHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            backgroundColor: "#fff"
        }}>
            <form onSubmit={handleSubmit} style={{
                maxWidth: "600px",
                width: "100%",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}> 
                <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem" }}>name</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required
                        style={{ width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                </div>
                
                <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem" }}>mail-address</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                        style={{ width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                </div>
                
                <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Content</label>
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required
                        rows={6}
                        style={{ width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                </div>
                
                <button type="submit" style={{
                    width: "100%",
                    padding: "1rem",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor: "#008000",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "1rem"
                }}>送信</button>
            </form>
        </div>
    );
}