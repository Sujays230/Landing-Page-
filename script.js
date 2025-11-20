document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();

        document.getElementById("status").innerText = "Sending...";

          // Replace later with your Google Web App URL
            const scriptURL = "YOUR_GOOGLE_SHEET_WEBHOOK_URL";

              fetch(scriptURL, {
                  method: "POST",
                      body: JSON.stringify({
                            name: document.getElementById("name").value,
                                  email: document.getElementById("email").value,
                                        message: document.getElementById("message").value,
                                            }),
                                                headers: { "Content-Type": "application/json" }
                                                  })
                                                      .then(() => {
                                                            document.getElementById("status").innerText = "Message Sent Successfully!";
                                                                  document.getElementById("contactForm").reset();
                                                                      })
                                                                          .catch(() => {
                                                                                document.getElementById("status").innerText = "Error sending message.";
                                                                                    });
                                                                                    });
