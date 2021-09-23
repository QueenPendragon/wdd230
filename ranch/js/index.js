      const currentYear = {year: 'numeric'}
      document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-us', currentYear);