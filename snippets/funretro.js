// note: toggle on "show/hide comments" to include comments in the scrape
const columns = document.querySelectorAll('span.message-list')
const data = [];

columns.forEach(column => {
    const columnData = {};
    columnData.name = column.querySelector('span.column-name').innerText;
    columnData.items = [];
    column.querySelectorAll('li.message').forEach(item => {
        const card = {};
        card.message = item.querySelector('.text').innerText;
        card.voteCount = parseInt(item.querySelector('span.show-vote-count').innerText);
        card.comments = (Array.from(item.querySelectorAll('ul.comments li')) || []).map(comment => (
            comment.querySelector('.text').innerText
        ))
        columnData.items.push(card);
    })
    data.push(columnData);
});

const formattedString = '';

const fullBoard = data.reduce((accu, column) => {
    const formattedString = column.name + '\n';
    return accu.concat(column.items.reduce((itemsList, item) => {
        return itemsList.concat(item.comments.reduce((commentsList, comment) => {
            return commentsList.concat('\t- ' + comment + '\n');
        }, '- ' + item.message + ' (' + item.voteCount + ')\n'));
    }, formattedString));
}, '');

const textArea = document.createElement('textarea');
textArea.textContent = fullBoard;
document.body.appendChild(textArea);
textArea.select();
document.execCommand('copy');
console.log(fullBoard);
