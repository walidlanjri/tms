import React,{useRef} from "react";

const Contact=()=>{
	const firstNameRef = useRef(null)
    const lastNameRef =  useRef(null)
    const emailRef = useRef(null)
    const messageRef =  useRef(null)

	const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            Nom: firstNameRef.current.value,
            Prénom: lastNameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }
        alert(JSON.stringify(data) + "Your data")
    }

    return(
        <div className="ContactPage">
		<section  className="Contact">
		<h3>Contact us</h3>
		<form  className="Contactform" onSubmit={handleSubmit} >
			<div className="Contact_detail">
				<label for="firstName" id="nameLabel">Nom</label>
				<input
				 
					type="text" 
					id="firstName" 
					name="firstName"
					className="firstName" 
					ref={firstNameRef} 
					tabindex="1" 
				/>
				
				<label for="lastName">Prénom</label>
				<input  
					type="text" 
					id="lastName" 
					className="lastName" 
					ref={lastNameRef}
					tabindex="2"  
				/>
			</div>
			<label for="email_contact">Email</label>
			<input 
			type="email" 
			name="email_contact"
			id="email_contact"
			className="email_detail"
			placeholder="exemple@gmail.com"
			ref={emailRef}
			tabindex="3" 
			/>

			<label for="message">Message</label>
			<textarea 
			placeholder="Saisir votre message" 
			className="message_contact" 
			name="message"
			ref={messageRef}
			>

			</textarea>
			<button type="submit" className="send">Envoyer</button>
		</form>
	</section>
    </div>
    );
}

export default Contact;