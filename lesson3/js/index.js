//toLocaleDateString
      const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'}
      document.getElementById('lastupdated').textContent = new Date().toLocaleDateString('en-us', options);

      const currentYear = {year: 'numeric'}
      document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-us', currentYear);