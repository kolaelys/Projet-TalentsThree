document.addEventListener("DOMContentLoaded", function() { 

    var cy = cytoscape({
        container: document.getElementById('cy'),
        elements: SkillsElements,
        style: [
          {
            selector: 'node',
            style: {
              'label': 'data(title)',
              'width': '200px',
              'height': '200px'
            }
          },
          {
            selector: 'edge',
            style: {
              label: 'data(spe)'
            }
          }
        ],
        layout: {
            name: 'grid',
            fit: false,
            columns: 3,
            avoidOverlap: true,
            avoidOverlapPadding: 100,
            position: function(ele) {
                if (ele.data('title') === 'HTML') {
                  return { row: ele.id() - 1, col: 2 };
                }
                return { row: ele.id(), col: 1 };
              }
          }
      });
 });