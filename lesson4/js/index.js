//toLocaleDateString
      const currentDate = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}
      document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-us', currentDate);

      function toggleMenu() {
            document.getElementById("primaryNav").classList.toggle("hide")
      }