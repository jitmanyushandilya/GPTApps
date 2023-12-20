
from email import message
from pydoc import cli
import smtplib
from urllib import response
from flask import Flask, request
from openai import OpenAI
from email.message import EmailMessage
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from instabot import Bot
import json



API_KEY='' #replace OpenAI API KEY

app = Flask(__name__)
GMAIL_ADDRESS='testgpt1718@gmail.com'
GMAIL_PASSWORD='dcrq jbiy vjpq owju'
PORT=587
SMTP="smtp.gmail.com"


client = OpenAI(
    api_key=API_KEY
)


#API endpoint to generate email body and subject line
@app.route('/send_email/<email>/<prompt>')
def send_email(email,prompt):
    subject = openai_Api("write subject line for email about "+prompt)
    body = openai_Api("sender is Jitmanyu and reciever is Customer . write email body content for topic - "+prompt)
    email_sender(email,subject,body)
    return json.dumps(message)

#API endpoint to establish SMTP connection to send the email
def email_sender(reciever_email, Subject,body):
    try:
        sender_email = GMAIL_ADDRESS
        sender_password = GMAIL_PASSWORD

        msg = EmailMessage()
        msg.set_content(body)
        msg["Subject"] = Subject
        msg["From"] = send_email
        msg["To"] = reciever_email

        session = smtplib.SMTP(SMTP, PORT)
        session.starttls()
        session.login(sender_email, sender_password)
        session.send_message(msg, sender_email, reciever_email)
        session.quit()
        msg=[]
        msg.append("Email sent!")
        return({"data":msg})

    except Exception as e:
        print("Error sending email "+str(e))
 
# API Endpoint to get complex competitor's research information from OpenAI
@app.route('/getText/<content>')
def get_text(content):
    print(content)
    results=[]
    results.append(openai_Api("Brief introduction of company "+content+" and a brief list of its competitors."))
    results.append(openai_Api("Generated comparative SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis on competitors of "+content))
    results.append(openai_Api("Potential marketing strategies to be on top of competitors"))
    print(results)
    return {"data":results}

# API endpoint to generate image using OpenAI model dall-e-3 to create social media post template
@app.route('/generateImage/<imagedata>')
def generateImage(imagedata):
    response =client.images.generate(
    model="dall-e-3",
    prompt=imagedata,
    size="1024x1024",
    quality="standard",
    n=1,
    )

    image_url = response.data[0].url
    print(image_url)
    caption=openai_Api("Write a short caption for image that is about "+imagedata)
    image=[]
    image.append(image_url)
    image.append(caption)
    
    return {"data":image}


# Function to call OpenAI API
def openai_Api(prompt):
    chat_completion = client.chat.completions.create(
    messages=[
              { "role": "user", "content":  prompt}
    ],
    model="gpt-3.5-turbo",
 )
    return chat_completion.choices[0].message.content


if __name__=="__main__":
    app.run(debug=True)



