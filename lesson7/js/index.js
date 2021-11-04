//toLocaleDateString
      const currentDate = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}
      document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-us', currentDate);

      function toggleMenu() {
            document.getElementById("primaryNav").classList.toggle("hide")
      }

      const today = new Date();
      console.log(today);
      
      const dayNumber = today.getDay();
      console.log(dayNumber);

      const element = document.querySelector("#message");
      if (dayNumber == 5) {
            element.classList.add("showme");
      } else {
            element.classList.add("hideme");
      }

 if (!localStorage.pageLoadCount)
    localStorage. = 0;
  localStorage.pageLoadCount = parseInt(localStorage.pageLoadCount) + 1;
  document.getElementById('count').textContent = localStorage.pageLoadCount;