module.exports = name => name.replace(/ \w/g, v => `-${v.trim().toLowerCase()}`).replace(/[^\w]/g, '-').toLowerCase();