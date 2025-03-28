import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // Accessing the API key from environment variable
const fromEmail = process.env.FROM_EMAIL; // Accessing the sender email

export async function POST(req) {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message); // For debugging

    try {
        const data = await resend.emails.send({
            from: fromEmail, // Use the sender email from the environment variable
            to: [fromEmail, email], // Send to both the sender and the recipient
            subject: subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting us!</p>
                    <p>New message submitted:</p>
                    <p>{message}</p>
                </>
            ),
        });
        return NextResponse.json(data); // Respond with the result of the email send
    } catch (error) {
        console.error("Error sending email:", error); // Log error for debugging
        return NextResponse.json({ error: error.message }, { status: 500 }); // Return an error response
    }
}