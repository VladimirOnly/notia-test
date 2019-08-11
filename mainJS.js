
    const tableCreate = () => {
      const body = document.getElementsByTagName('body')[0];
      const tbl = document.createElement('table');
      tbl.style.width = '100%';
      tbl.setAttribute('border', '1');
      const tbdy = document.createElement('tbody');
      for (let i = 0; i < 4; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 6; j++) {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode('1'))
            tr.appendChild(td);
          }

        tbdy.appendChild(tr);
      }
      tbl.appendChild(tbdy);
      body.appendChild(tbl)
    };

    tableCreate();

