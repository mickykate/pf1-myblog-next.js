'use client';
import { useState } from 'react';
import { supabase } from './lib/supabase';

export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        
        try {
            // Supabaseにデータを挿入
            const { data, error } = await supabase
                .from('contacts')
                .insert([
                    {
                        name: name,
                        email: email,
                        message: message,
                    }
                ]);

            if (error) {
                throw error;
            }

            // 成功時の処理
            console.log('お問い合わせが送信されました:', data);
            setSubmitStatus('success');
            alert('お問い合わせありがとうございます！');

            // フォームをリセット
            setName('');
            setEmail('');
            setMessage('');

        } catch (error) {
            console.error('エラーが発生しました:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{
            minHeight: "80vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem 0",
            margin: 0,
            backgroundColor: "#fffaf0",
            boxSizing: "border-box",
            position: "relative"
        }}>
            <div style={{
                position: "absolute",
                top: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "var(--font-alegreya-sans-sc), cursive",
                fontSize: "2.5rem",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "0.5rem",
                zIndex: 2
            }}>Contact Me</div>
            
            <form onSubmit={handleSubmit} style={{
                maxWidth: "600px",
                width: "100%",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                marginTop: "4rem"
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
                
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{
                        width: "100%",
                        padding: "1rem",
                        borderRadius: "4px",
                        border: "none",
                        backgroundColor: isSubmitting ? "#ccc" : "#ffdead",
                        color: "#000",
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                        fontWeight: "bold",
                        fontSize: "1rem"
                    }}
                >
                    {isSubmitting ? "送信中..." : "送信"}
                </button>
            </form>
        </div>
    );
}
