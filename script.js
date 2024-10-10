// Skill bars animation
window.addEventListener("scroll", function () {
    const skillsSection = document.querySelector("#skills");
    const skillBars = document.querySelectorAll(".skill-level");

    if (window.scrollY + window.innerHeight > skillsSection.offsetTop) {
        skillBars.forEach(bar => {
            bar.style.width = bar.getAttribute("data-skill") + "%";
        });
    }
});

// // CV Download button
// document.getElementById("downloadCV").addEventListener("click", function () {
//   // Create an invisible link element
//   const link = document.createElement('a');

//   // Set the file URL and name for the download
//   link.href = "brini.pdf"; // Update with the actual path
//   link.download = "brini.pdf";

//   // Append the link to the body
//   document.body.appendChild(link);

//   // Trigger the download by simulating a click
//   link.click();

//   // Remove the link from the document
//   document.body.removeChild(link);

//   // Show an alert after the download starts
//   alert("Your CV is being downloaded!");
// });
