import React, { useState } from "react";
import FormGroup from "./FormGroup";
import Input from "./Input";
import Textarea from "./Textarea";
import ErrorMessage from "./ErrorMessage";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let valid = true;
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!name) {
      nameError = "名前は必須です。";
      valid = false;
    } else if (name.length > 30) {
      nameError = "名前は30文字以内で入力してください。";
      valid = false;
    } 

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      emailError = "メールアドレスは必須です。";
      valid = false;
    } else if (!emailRegex.test(email)) {
      emailError = "正しいメールアドレスを入力してください。";
      valid = false;
    } 
    if (!message) {
      messageError = "本文は必須です。";
      valid = false;
    } else if (message.length > 500) {
      messageError = "本文は500文字以内で入力してください。";
      valid = false;
    }
    
    setNameError(nameError);
    setEmailError(emailError);
    setMessageError(messageError);

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
        {
          method: "POST",
          headers: {
          "Content-Type": "application/json" 
          },
          body: JSON.stringify({ name, email, message }),
        }
      );
      if (response.ok) {
        alert("送信しました");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("送信に失敗しました");
      }
    } catch (error) {
      console.error("問い合わせの送信に失敗しました:",error);
      alert("送信に失敗しました");
    }
    setIsSubmitting(false);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem"}}>
      <h1 style={{ textAlign: "left", marginBottom: "2rem"}}>問い合わせフォーム</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup label = "お名前">
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
          />
          <ErrorMessage message={nameError} />
        </FormGroup>
        <FormGroup label ="メールアドレス">
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          <ErrorMessage message={emailError} />
        </FormGroup>
        <FormGroup label ="本文">
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isSubmitting}
          />
          <ErrorMessage message={messageError} />
        </FormGroup>
        <div style={{ textAlign: "center", marginTop: "1rem"}}>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "送信中..." : "送信"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;