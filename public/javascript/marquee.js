window.onload=function(){
  const btn1 = document.getElementById("btn1");
  btn1.addEventListener("click", sendData);
}
      function sendData(e) {console.log(e);
        e.preventDefault();
         const tables=document.querySelector("#tables").checked;
         const chairs=document.querySelector("#chairs").checked;
          const smallGazibos=document.querySelector("#smallGazibos").checked;
        const largeGazibos=document.querySelector("#largeGazibos").checked;
         const heater=document.querySelector("#heater").checked;
         const lights=document.querySelector("#lights").checked;
        const a = document.querySelector("#fname").value;
        const b = document.querySelector("#lname").value;
        const c = document.querySelector("#email").value;
        const d = document.querySelector("#phoneNumber").value;
        const g= document.querySelector("#date").value;
        const f = document.querySelector("#location").value;
        
        window.fetch("http://localhost:3000/api/products", {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            // "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
             tables:tables,
           chairs:chairs,
          smallGazibos:smallGazibos,
             largeGazibos:largeGazibos,
           heater:heater,
            lights:lights,
            firstName:a,
            lastName:b,
            email:c,
            phone:d,
            date:g,
            location:f
            
          })
        }).then(res => res.json())
          .then(data => {
            console.log(data)
            const { result } = data;
            document.querySelector(
              ".result"
            ).innerText = `Data submitted: ${result}`;
          })
          .catch(err => console.log(err));
      }