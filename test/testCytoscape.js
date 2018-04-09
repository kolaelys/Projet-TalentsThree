$(document).ready(function() {
  class TalentTree {

    getData() {
      return fetch("CytoData.json")
        .then(response => response.json())
        .then(data => {
          return this.getCytoscape(data.skills);
        });
    }

    getCytoscape(data) {
      var i=0;
      console.log(data[i].title);
      data[i];
      console.log(data);
      var cy = cytoscape({
        container: document.getElementById("cy")
      })
      data.forEach(function(data,i) {
        var name = data.title;
        console.log(name, i);
    
        elements: [
            { data: { id: name} },
            {
            data: {
                id: name,
                source: name,
                target: name
              }
            }
            ]
            // for (var i = 0; i < data.lenght; i++) {
            //     cy.add({
            //         data: { id: 'node' + i }
            //         }
            //     );
            // }
        })
      style: [
        {
          selector: "node",
          style: {
            shape: "hexagon",
            "background-color": "red",
            label: 'name'
          }
        }
      ];
      layout: {
        name: "grid";
      }
      cy
        .layout({
          name: "circle"
        })
        .run();
    }
}
  var talents = new TalentTree();  
  talents.getData();

//  talents.getCytoscape();
  console.log(talents);
})
