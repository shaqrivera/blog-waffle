const compareTwo = (a,b, opts) => {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
}

const formatDate = (date) => {
    let postDate = new Date(date);
      const formattedPostMonth = postDate.toLocaleString('default', { month: 'long' });
      let formattedPostDateTime = `${postDate.toLocaleTimeString()} ${formattedPostMonth} ${postDate.getDate()}, ${postDate.getFullYear()} `;
      return formattedPostDateTime;
}
module.exports = {compareTwo , formatDate};
