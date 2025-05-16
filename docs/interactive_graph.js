document.addEventListener('DOMContentLoaded', function () {
  const graphButton = document.createElement('button');
  graphButton.textContent = 'Show Graph';
  graphButton.style.position = 'fixed';
  graphButton.style.top = '10px';
  graphButton.style.right = '10px';
  graphButton.style.zIndex = '1000';
  document.body.appendChild(graphButton);

  graphButton.addEventListener('click', function () {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.8)';
    modal.style.zIndex = '9999';
    document.body.appendChild(modal);

    const chart = document.createElement('div');
    chart.style.width = '80%';
    chart.style.height = '80%';
    chart.style.margin = 'auto';
    chart.style.marginTop = '5%';
    modal.appendChild(chart);

    const myChart = echarts.init(chart);
    const nodes = [];
    const links = [];

    // Парсинг Markdown-ссылок (wikilinks)
    document.querySelectorAll('a[href*=".md"]').forEach(link => {
      const href = link.getAttribute('href');
      const target = href.replace('.md', '');
      const source = window.location.pathname.split('/').pop().replace('.html', '');

      nodes.push({ name: source });
      nodes.push({ name: target });
      links.push({ source: source, target: target });
    });

    // Удаление дубликатов узлов
    const uniqueNodes = [...new Map(nodes.map(item => [item.name, item])).values()];

    const option = {
      series: [{
        type: 'graph',
        layout: 'force',
        data: uniqueNodes,
        links: links,
        roam: true,
        label: { show: true },
        force: { repulsion: 100 }
      }]
    };
    myChart.setOption(option);

    modal.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  });
});