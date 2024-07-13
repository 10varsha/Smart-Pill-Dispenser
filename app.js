document.addEventListener("DOMContentLoaded", function () {
    const userNameElement = document.querySelector(".user-name");
    const medicineNameElement = document.querySelector(".medicine-name");
    const medsLeftElement = document.querySelector(".meds-left");
    const medTime1Element = document.getElementById("med-time1");
    const medTime2Element = document.getElementById("med-time2");

    const userNotFound = document.getElementById("userNotFound");
    const dispenseBtn = document.getElementById("dispenseBtn");
    const video = document.getElementById("video");
    let stream;

    // Placeholder data, this would typically come from your backend or a database
    const medicationDetails = {
        userName: "Varsha Sahu",
        medicineName: "Medicine 1",
        medsLeft: 2,
        medTimes: ["2:00 PM", "8:00 PM"]
    };

    // Function to populate medication details
    function populateMedicationDetails(details) {
        userNameElement.textContent = details.userName;
        medicineNameElement.textContent = `${details.medicineName} Dispensed!`;
        medsLeftElement.textContent = details.medsLeft;
        medTime1Element.textContent = details.medTimes[0];
        medTime2Element.textContent = details.medTimes[1];
    }

    // Initial population of medication details
    populateMedicationDetails(medicationDetails);

    // Function to stop the video stream
    function stopVideoStream() {
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(function (track) {
                track.stop();
            });
        }
    }

    // Function to handle dispensing pill
    function dispensePill() {
        // Simulate user not found scenario
        userNotFound.style.display = "block";
        dispenseBtn.style.display = "none";
        stopVideoStream();
    }

    // Event listener for the dispense button
    dispenseBtn.addEventListener("click", dispensePill);

    // Function to start the video stream
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(function (videoStream) {
                stream = videoStream;
                video.srcObject = stream;
                video.play();
            });
    }
});
