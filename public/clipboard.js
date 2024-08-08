for(const i of document.querySelectorAll('input')) {
    i.addEventListener('click', function(e) { e.currentTarget.select() })
}
