(async function() {
    const response = await fetch('data/data.json');
    console.log(response);
    
    if (!response.ok) {
      console.error('Error al obtener el archivo JSON');
      return;
    }
  
    const data = await response.json();
    console.log(data); 
  
  })();
  