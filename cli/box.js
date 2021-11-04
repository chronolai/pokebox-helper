const fs = require('fs');

function saveMD(path, text) {
  console.error(path);
  fs.createWriteStream(path).write(text);
}

function pad(num) {
  return num.toString().padStart(3, '0');
}

const dexs = require('../src/pokedex');
Object.keys(dexs).map((key, index) => {
  const path = `./box/${key}.md`;
  const dex = dexs?.[key] ?? 'national';

  const title = key.split('_').map((val, idx) => {
    return idx === 0 ? val.toUpperCase() : val;
  }).join(': ');

  const md = [
    '---',
    `sidebar_position: ${index}`,
    '---',
    'import Box from \'../src/components/Box\'', '',
    `# ${title}`, '',
  ];

  Array.from(Array(Math.ceil(dex.length / 30)).keys()).map((index) => {
    const min = index * 30 + 1;
    const max = min + 29;
    const title = `${pad(min)} ~ ${pad(max)}`;
    md.push(`## ${title}`);
    md.push(`<Box dexid="${key}" index="${index}" title="${title}" />`);
    md.push('');
  });

  saveMD(path, md.join('\n'));
});

