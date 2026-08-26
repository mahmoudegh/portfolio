// Contact and resume behavior moved from index.html without logic changes.

// JavaScript code to automatically create the subject and body of the email
      document
        .querySelector("form")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const managerName = document.getElementById("managerName").value;
          const companyName = document.getElementById("companyName").value;
          const emailTo = document.getElementById("emailTo").value;
          const subject = "Application for Frontend Web Developer Position";
          const body = `
Hello ${managerName},
          
I hope this message finds you well. My name is Mahmoud Galal, and I’m reaching out to express my interest in the Frontend Web Developer position at ${companyName}. With over 3 years of experience in frontend development, I’m confident in my ability to contribute effectively to your team.
         
I’ve attached my resume to this email, and you can also download it directly here: https://mahmoudegh.github.io/portfolio/#resume
         
You can view my portfolio and explore my recent work here: https://mahmoudegh.github.io/portfolio/#work
         
Please feel free to contact me directly using the details below if you have any questions or need further information. I look forward to the opportunity to discuss how my experience and skills align with your team’s goals.
         
Contact Information:
====================
Name: Mahmoud Galal Hussein
Phone: +201020242590
Email: mahmoudegh8@gmail.com
Location: Asyut, Egypt
          
Thank you for considering my application. I look forward to your response.
         
Best regards,
Mahmoud Galal
         `;

          const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(body)}`;
          window.location.href = mailtoLink;

          const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            emailTo
          )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            body
          )}`;

          if (window.innerWidth < 768) {
            // Simple check for mobile
            window.open(mailtoLink, "_blank");
          } else {
            window.open(gmailLink, "_blank");
          }
        });

document.addEventListener("DOMContentLoaded", () => {
        if (window.location.hash === "#resume") {
          window.location.href =
            "https://mahmoudegh.github.io/portfolio/cv/mahmoud_galal_frontend_web_developer_cv.pdf";
        }
      });

document.addEventListener("DOMContentLoaded", () => {
        var emailHref = "";
        if (window.innerWidth < 768) {
          emailHref =
            "mailto:mahmoudegh8@gmail.com?subject=Email%20via%20My%20Portfolio%20website&body=This%20email%20was%20sent%20via%20my%20portfolio%20website.%0D%0A%0D%0A_________________________%0D%0A%0D%0A_________________________";
        } else {
          emailHref =
            "https://mail.google.com/mail/?view=cm&fs=1&to=mahmoudegh8@gmail.com&su=Email%20via%20My%20Portfolio%20website&body=This%20email%20was%20sent%20via%20my%20portfolio%20website.%0D%0A%0D%0A_________________________%0D%0A%0D%0A_________________________";
        }

        // Select all elements with the class "emailLink"
        const emailLinks = document.querySelectorAll(".dynamicEmailLink");

        // Update the href attribute for each element
        emailLinks.forEach((link) => {
          link.href = emailHref;
        });
      });
