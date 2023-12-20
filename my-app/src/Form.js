import React, { useState } from 'react';
import axios from 'axios';


function Form() {
    const [responseData, setResponseData] = useState('');
    const [imageData, setImageData] = useState('');
    const [emailsent, setEmailsent] = useState('')

    //Function gets marketgpt response from server
    const getData = async (e) => {
        e.preventDefault(); 
        setImageData('')
        setEmailsent('')
        const content = document.getElementById('text1').value;
        setResponseData('Generating AI response...')
        try {
            const response = await axios.get(`/getText/${content}`);
            
            setResponseData(response.data.data); 
        } catch (error) {
            console.error('Error:', error);
        }

    
    };

    //Function sends email to specified reciever regarding prompt
    const sendEmails = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setImageData('')
        setResponseData('');
        setEmailsent('Sending email...')
        const email = document.getElementById('email').value;
        const prompt = document.getElementById('prompt').value;
        try {

            const response = await axios.get(`/send_email/${encodeURI(email)}/${prompt}`);
            setEmailsent('Email sent!'); // Store response data in state
        } catch (error) {
            console.error('Error:', error);
        }

    
    };

    //Function generates a social media post template
    const makePosts = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setResponseData('');
        setEmailsent('')
        setImageData('Generating AI image...')
        try {

            const imagedata=document.getElementById('imagedata').value
            const response = await axios.get(`/generateImage/${imagedata}`);
             // Store response data in state
            setImageData(response.data.data)
        } catch (error) {
            console.error('Error:', error);
        }

    
    };
    


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
        <form onSubmit={getData} method="post" style={{ width: '30%', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', backgroundColor: 'white' }}>
            <h2 style={{ textAlign: 'center' }}>MarketGPT</h2>
            <input type="text" id='text1' style={{ width: '96%', marginBottom: '20px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Enter company name" required/>
            <br></br>
            <input type='submit' value='Submit' style={{ width: '100%', marginTop: '5px', padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#097969', color: 'white', cursor: 'pointer' }} />
        </form>
        <form onSubmit={sendEmails} method="post" style={{ width: '30%', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', backgroundColor: 'white' }}>
            <h2 style={{ textAlign: 'center' }}>Personalized Email Outreach</h2>
            <input type="email" id='email' style={{ width: '96%', marginBottom: '20px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Enter reciever email" required/>
            <br></br>
            <input type="text" id='prompt' style={{ width: '96%', marginBottom: '20px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Enter briefly what the email should say" required/>

            <input type='submit' value='Submit' style={{ width: '100%', marginTop: '5px', padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#097969', color: 'white', cursor: 'pointer' }} />
            <br/>
            
        </form>
        
        <form onSubmit={makePosts} method="post" style={{ width: '30%', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', backgroundColor: 'white' }}>
            <h2 style={{ textAlign: 'center' }}>Social Media Template</h2>
            <input type="text" id='imagedata' style={{ width: '96%', marginBottom: '20px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Describe the social media post" required/>
            <br></br>
            <input type='submit' value='Submit' style={{ width: '100%', marginTop: '5px', padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#097969', color: 'white', cursor: 'pointer' }} />
        </form>
    </div>
    
        <p>{emailsent}</p>
    
    {typeof responseData === 'string' ? (
    <div style={{ width: '80%' }}>
        <p style={{ padding: '20px', marginTop: '10px' }}>
            {responseData}
        </p>
    </div>
) : (
    responseData && (
        <div style={{ width: '80%' }}>
            <p style={{ padding: '20px', marginTop: '10px' }}>
                {responseData.map((item, index) => (
                    <React.Fragment key={index}>
                        <h1>Task Performed: {index + 1}</h1>
                        {item}
                        <br />
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    )
)}


{imageData && (
    <div style={{ width: '30%', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '20px 0' }}>
        {typeof imageData === 'string' ? (
            <div style={{ padding: '10px' }}>
                <h4 style={{ margin: '5px 0', fontWeight: 'bold' }}>{imageData}</h4>
                {/* Additional content */}
            </div>
        ) : (
            <React.Fragment>
                <img src={imageData[0]} alt="Image" style={{ width: '100%', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
                <div style={{ padding: '10px' }}>
                    <h4 style={{ margin: '5px 0', fontWeight: 'bold' }}>{imageData[1]}</h4>
                    {/* Additional content */}
                </div>
            </React.Fragment>
        )}
    </div>
)}


</div>

    );
}

export default Form;
