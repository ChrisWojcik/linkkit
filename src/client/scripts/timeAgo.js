const timeAgo = (date) => {
  var system_date = new Date(Date.parse(date));
  var user_date = new Date();

  if ( navigator.userAgent.match(/MSIE\s([^;]*)/) ) {
    system_date = Date.parse(date.replace(/( \+)/, ' UTC$1'))
  }

  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var diff = Math.floor((user_date - system_date) / 1000);

  if (diff <= 0)     { return "just now"; }
  if (diff < 60)     { return diff+"s"; }
  if (diff <= 3540)  { return Math.round(diff / 60)+"m"; }
  if (diff <= 86400) { return Math.round(diff / 3600)+"h"; }

  if (user_date.getFullYear() === system_date.getFullYear()) {
    return `${months[system_date.getMonth()]} ${system_date.getDate()}`;
  } else {
    return `${months[system_date.getMonth()]} ${system_date.getDate()}, ${system_date.getFullYear()}`;
  }
};

export default timeAgo;
