import { styled } from "styled-components";

const Contact = () => {
 
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    height: 140vh;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return(
    <Wrapper>
      <h1 className="common-heading">Contact Page</h1>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72022859938!2d76.82493432461801!3d28.423160294158492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1691057702302!5m2!1sen!2sin" 
      width="100%"
       height="450"
        style={{border: 0} }
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/xknloklr" method="POST" className="contact-inputs"> 
              <input type="text" name="Username" placeholder="Username" required 
              autoCapitalize="off"/>
               <input type="email" name="Email" placeholder="Email" required 
              autoCapitalize="off"/>
             <textarea name=" message" cols='30' rows='10' required
             autoComplete="off" placeholder="Enter your name"></textarea>

             <input type="submit"/>
            </form>
          </div>
        </div> 
    </Wrapper>

  )
  
};

export default Contact;