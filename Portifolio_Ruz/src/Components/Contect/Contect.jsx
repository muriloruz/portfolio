import React from 'react'
import './Contect.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import phone_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contect = ({ value, onChange }) => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("Email enviado com sucesso!");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contect" className="contect" translate="no">
        <div className="contect-title">
            <h1>Entre em contato</h1>
            <img src={theme_pattern} alt="" /> 
        </div>
        <div className='contect-section'>
            <div className="contect-left">
                <h1>Vamos conversar!</h1>
                <p>Estou sempre aberto a novas oportunidades e colaborações. Se você tiver alguma dúvida ou quiser discutir um projeto, sinta-se à vontade para entrar em contato comigo.</p>
                <div className="contect-details">
                    <div className="contect-detail">
                        <img src={mail_icon} alt="" /> <p>muriloruz64@gmail.com</p>
                    </div>
                    <div className="contect-detail">
                        <img src={phone_icon} alt="" /> <p>(11) 97293-6599</p>
                    </div>
                    <div className="contect-detail">
                        <img src={location_icon} alt="" /> <p>Santana de Parnaíba, São Paulo - Brasil</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contect-right">
                <label htmlFor="name">Seu nome</label>
                <input type="text" placeholder='João Souza Gomes' name="name" required/>
                <label htmlFor="email">Seu email</label>
                <input type="email" placeholder='joao@exemplo.com' name="email" value={value} required/>
                <label htmlFor="message" >Seu mensagem</label>
                <textarea placeholder='Envie sua mensagem' name="message"  rows="8" required></textarea>
                <button className="contact-submit" type="submit">Enviar</button>
            </form>
        </div>
        
    </div>
  )
}

export default Contect