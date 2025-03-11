document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".button_tab_style");
    const contentHead = document.querySelector(".content_head");
    const descriptionList = document.querySelector(".description ul");
    const imageTab = document.querySelector(".image_inside_tab_1");

   
    const tabData = {
        "Single App Kiosk": {
            title: "Powerful Single-App Kiosk solutions for enhanced control",
            description: [
                "Provision the devices to run one specialized application, with limited functionalities.",
                "Customize the device settings to cater to a specific use-case each time.",
                "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
                "Empower your administrators with full control over the kiosk devices."
            ],
            image: "./single.cbeb15cdfd97c65b5b94.jpeg"
        },
        "Multi-App Kiosk": {
            title: "Elevate efficiency with Multi-App Kiosk",
            description: [
                "Limit device access to approved apps, ensuring focus and productivity.",
                "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
                "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
                "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode."
            ],
            image: "./multi.0b6a4f1ee6e2ae1db814.png"
        },
        "Web Based Kiosk": {
            title: "Explore the new way to manage web apps and websites",
            description: [
                "Let users access essential and approved web apps, website and files only.",
                "Enhance security by blocking unauthorized browsing.",
                "Tailor your experience to match your unique use case.",
                "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience."
            ],
            image: "./web.5ab2d2c731669a907149.png"
        },
        "Digital Signages": {
            title: "Capture attention with Digital Signage Kiosks",
            description: [
                "Transform your devices into captivating digital signage kiosks that grab attention.",
                "Engage your audience with vibrant images and seamless video streaming.",
                "Customize media files with trimming, muting, and background music  .",
                "Advertise and show off your brand aesthetics to attract customers in different ways.",
                "Take control with Hexnode to reestablish your brand's presence."
            ],
            image: "./digital.c57f03316560e20845fd.png"
        },
        "Asam Kiosk": {
            title: "Unlock the power of Autonomous Single App Mode (ASAM)",
            description: [
                "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
                "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
                "Create focused, efficient and secure digital environments to match your requirements.",
                "Configure ASAM effortlessly and elevate your user experience like never before."
            ],
            image: "./asam.33b004344448b24ba4f4.png"
        }
    };

    // Function to update content when a tab is clicked
    function updateContent(tabName) {
        if (tabData[tabName]) {
            contentHead.textContent = tabData[tabName].title;
            descriptionList.innerHTML = tabData[tabName].description.map(desc => `
                <li>
                    <section class="para">
                        <img src="./green_tick.svg" alt="green tick" class="green_tick">
                        <span><p>${desc}</p></span>
                    </section>
                </li>
            `).join("");
            imageTab.src = tabData[tabName].image;
        }
    }

    // Attach event listeners to each tab
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            updateContent(this.textContent);
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const labels = document.querySelectorAll(".description_overall > label, .description_heading > label");
    let activeParagraph = null;

    labels.forEach((label, index) => {
        const parent = label.parentElement;
        const paragraph = parent.querySelector(".description_para, .wrapper_p");
        
        if (index === 0 && paragraph) {
            paragraph.style.display = "block";
            activeParagraph = paragraph;
        } else if (paragraph) {
            paragraph.style.display = "none";
        }

        label.addEventListener("click", function () {
            if (paragraph && paragraph !== activeParagraph) {
                if (activeParagraph) {
                    activeParagraph.style.display = "none";
                }
                paragraph.style.display = "block";
                activeParagraph = paragraph;
            }
        });
    });
});

window.addEventListener("scroll", function () {
    let header = document.querySelector(".head-container");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

