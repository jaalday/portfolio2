const Contact = () => {

    return (
        <div className="container1">
            <div className="contact">
            <h1>Contact</h1>
            {/* <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="b97e382f-f564-49a7-b2f6-f116bb32af80"/>

            <input className="input" placeholder="Name" name="name"></input>
            <br/>
            <input className="input" placeholder="example@email.com" type="email"></input>
            <br/>
            <textarea className="message" placeholder="message" id="message" type="text"></textarea>

<br/>
            <button className="button" type="submit">Submit</button>
            </form> */}



<form action="https://api.web3forms.com/submit" method="POST">
            {/* const url = `${import.meta.env.VITE_SOURCE_URL}/profile`; */}
      <div>
     
                <input type="hidden" name="access_key" value="b97e382f-f564-49a7-b2f6-f116bb32af80"/>

                <input className="input" type="text" name="name" placeholder="Your Name"/>
                <br/>
                <br/>
                <input className="input"type="email" placeholder="Your Email"/></div>
                <br/>
                <textarea className="message" name="message" placeholder="Your Message"></textarea>
             
        
<br/>


                <button className="button" type="submit">Send</button>
            </form>
            </div>
           





            </div>
            
            
        
        )
}

export default Contact