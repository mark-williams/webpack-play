function $(selector, container) {
  return (container || window.document).querySelectorAll(selector);
}

export default $;
