const shortenLink = (href = '', maxLength = 20) => {
  const withoutProtocol = href.replace(/^https?:\/\//, '');

  if (withoutProtocol.length > maxLength) {
    return withoutProtocol.substr(0, maxLength - 3) + '...';
  } else {
    return withoutProtocol;
  }
};

export default shortenLink;
