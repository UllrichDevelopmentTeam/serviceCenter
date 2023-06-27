//  TODO: Write a comment for each function that explains what it does 

  // This function changes the link that the button goes to based on what form the user selects
  function changeLink() {
    let linkButton = document.getElementById("formLink");
    // for auto
    if (homeForm.classList.contains("hidden")) {
      let selected =
        document.getElementById("auto").options[
          document.getElementById("auto").selectedIndex
        ].value;
      if (selected === "addRemoveDriver") {
        document
          .getElementById("formLink")
          .setAttribute(
            "href",
            "https://www.ullrichinsurance.com/add-and-or-remove-a-driver/"
          );
        linkButton.classList.remove("hidden");
      } else if (selected === "addRemoveVehicle") {
        document
          .getElementById("formLink")
          .setAttribute(
            "href",
            "https://www.ullrichinsurance.com/add-and-or-remove-a-vehicle/"
          );
        linkButton.classList.remove("hidden");
      } else if (selected === "cancelAuto") {
        document
          .getElementById("formLink")
          .setAttribute(
            "href",
            "https://www.ullrichinsurance.com/cancel-an-auto-policy/"
          );
        linkButton.classList.remove("hidden");
      } else if (selected === "excludeDriver") {
        document
          .getElementById("formLink")
          .setAttribute(
            "href",
            "https://www.ullrichinsurance.com/exclude-a-driver/"
          );
        linkButton.classList.remove("hidden");
      } else if (selected === "collectorCar") {
        document
          .getElementById("formLink")
          .setAttribute(
            "href",
            "https://www.ullrichinsurance.com/collector-car-policy/"
          );
        linkButton.classList.remove("hidden");
      } else if (selected === "motorcycle") {
        document
          .getElementById("formLink")
          .setAttribute(
            "href",
            "https://www.ullrichinsurance.com/motorcycle-form/"
          );
        linkButton.classList.remove("hidden");
      } else if (selected === "comprehensive") {
        document
          .getElementById("formLink")
          .setAttribute(
            "href",
            "https://www.ullrichinsurance.com/request-to-put-a-vehicle-on-comprehensive-only-coverage-external/"
          );
        linkButton.classList.remove("hidden");
      } else if (selected === "salvaged") {
        document
          .getElementById("formLink")
          .setAttribute(
            "href",
            "https://www.ullrichinsurance.com/salvagedtitle/"
          );
        linkButton.classList.remove("hidden");
      } else if (selected === "trailer") {
        document
          .getElementById("formLink")
          .setAttribute(
            "href",
            "https://www.ullrichinsurance.com/add-a-trailer-external/"
          );
        linkButton.classList.remove("hidden");
      } else if (selected === "boat") {
        document
          .getElementById("formLink")
          .setAttribute(
            "href",
            "https://www.ullrichinsurance.com/add-a-boat/"
          );
        linkButton.classList.remove("hidden");
      } else if (selected === "contact") {
        document.getElementById("formLink").setAttribute("href", "https://www.ullrichinsurance.com/contact-form");
        linkButton.classList.remove("hidden");
      } else if (selected === "default") {
        document.getElementById("formLink").setAttribute("href", "#");
        linkButton.classList.add("hidden");
      } 
      // For home:
    } else {
      let selected =
        document.getElementById("home").options[
          document.getElementById("home").selectedIndex
        ].value;
      if (selected === "addressChange") {
        document
          .getElementById("formLink")
          .setAttribute(
            "href",
            "https://www.ullrichinsurance.com/address-change-2/"
          );
        linkButton.classList.remove("hidden");
      } else if (selected === "solarPanels") {
        document
          .getElementById("formLink")
          .setAttribute(
            "href",
            "https://www.ullrichinsurance.com/adding-solar-panels/"
          );
        linkButton.classList.remove("hidden");
      } else if (selected === "cancelHome") {
        document
          .getElementById("formLink")
          .setAttribute(
            "href",
            "https://www.ullrichinsurance.com/cancel-a-home-policy/"
          );
        linkButton.classList.remove("hidden");
      } else if (selected === "contact") {
        document.getElementById("formLink").setAttribute("href", "https://www.ullrichinsurance.com/contact-form");
        linkButton.classList.remove("hidden");
      } else if (selected === "default") {
        document.getElementById("formLink").setAttribute("href", "#");
        linkButton.classList.add("hidden");
      }
    }
  }

  function clickAuto() {
    let gridCards = document.getElementById("gridCards");
    let autoForm = document.getElementById("autoForm");
    let backButton = document.getElementById("backButton");

    gridCards.classList.add("hidden");
    autoForm.classList.remove("hidden");
    document.getElementById("main-content").classList.add("whiteBackground");
    goBack.classList.remove("hidden");
  }

  function clickHome() {
    let gridCards = document.getElementById("gridCards");
    let homeForm = document.getElementById("homeForm");
    let backButton = document.getElementById("backButton");

    gridCards.classList.add("hidden");
    homeForm.classList.remove("hidden");
    document.getElementById("main-content").classList.add("whiteBackground");
    goBack.classList.remove("hidden");
  }

  function clickClaim() {
    let gridCards = document.getElementById("gridCards");
    let claimsSection = document.getElementById("claimsSection");
    let backButton = document.getElementById("backButton");

    gridCards.classList.add("hidden");
    claimsSection.classList.remove("hidden");
    document.getElementById("main-content").classList.add("whiteBackground");
    goBack.classList.remove("hidden");
  }

  function clickBilling() {
    let gridCards = document.getElementById("gridCards");
    let billingSection = document.getElementById("billingSection");
    let backButton = document.getElementById("backButton");

    
    gridCards.classList.add("hidden");
    billingSection.classList.remove("hidden");
    document.getElementById("main-content").classList.add("whiteBackground");
    goBack.classList.remove("hidden");
  }

  // Resets everything back when the back button is clicked
  function backButton() {
    let gridCards = document.getElementById("gridCards");
    let autoForm = document.getElementById("autoForm");
    let homeForm = document.getElementById("homeForm");
    let claimsSection = document.getElementById("claimsSection");
    let billingSection = document.getElementById("billingSection");
    let goBack = document.getElementById("goBack");
    let formLink = document.getElementById("formLink");
    
    document.getElementById("main-content").classList.remove("whiteBackground");
    gridCards.classList.remove("hidden");
    goBack.classList.add("hidden");

    if (homeForm.classList.contains("hidden")) {
      autoForm.classList.add("hidden");
    } else {
      homeForm.classList.add("hidden");
    }

    if (!formLink.classList.contains("hidden")) {
      formLink.classList.add("hidden");
    }

    if (!claimsSection.classList.contains("hidden")) {
      claimsSection.classList.add("hidden");
    }

    if (!billingSection.classList.contains("hidden")) {
      billingSection.classList.add("hidden");
    }

    // reset the form, so the values are the default values again
    autoForm.reset();
    homeForm.reset();
  }

  document
    .getElementById("formLink")
    .addEventListener("click", function () {
      changeLink();
    });

  document
    .getElementById("autoCard")
    .addEventListener("click", function () {
      clickAuto();
    });

  document
    .getElementById("homeCard")
    .addEventListener("click", function () {
      clickHome();
    });

  document
    .getElementById("claimCard")
    .addEventListener("click", function () {
      clickClaim();
    });

  document
    .getElementById("billingCard")
    .addEventListener("click", function () {
      clickBilling();
    });

  document
    .getElementById("backButton")
    .addEventListener("click", function () {
      backButton();
    });