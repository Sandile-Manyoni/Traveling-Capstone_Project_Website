// Calculating the total amount for travellers based on the clients needs

function calculateFees() {
    var selectedOption = document.getElementById("Interests").value;
    var nrtravelers = document.getElementById("nrtravelers").value;
  
    var costPerTraveller;
    if (selectedOption === "Baecation") {
      costPerTraveller = 23000;
    } else if (selectedOption === "Friendication") {
      costPerTraveller = 18000;
    } else if (selectedOption === "Vacation") {
      costPerTraveller = 25000;
    }
  
    var totalFees = costPerTraveller * nrtravelers;
    document.getElementById("bookingFees").innerHTML = "Total Booking Fees: R" + totalFees;
  }


//Clearing the selection and information input by the client on the forms
    
function clearForm() {
    document.getElementById("quoteForm").reset();
  }

// send qoutation to the client

function sendInfo() {
  const form = document.querySelector('#quoteForm');
  const formData = new FormData(form);
  const name = formData.get('fname');
  const email = formData.get('email');
  const season = formData.get('season');
  const travelers = formData.get('nrtravelers');
  const interests = formData.getAll('Interests');

  const message = `
    Hi ${name},

    Thank you for your interest in our travel packages. Here is the information you provided:

    Email: ${email}
    Season: ${season}
    Number of travelers: ${travelers}
    Interests: ${interests.join(', ')}

    We will get back to you soon with a customized quote.

    Best regards,
    The Travel Company
  `;

  const link = `mailto:sandile.alwande@gmail.com?subject=Travel Quote Request&body=${encodeURIComponent(message)}`;
  window.location.href = link;
}
