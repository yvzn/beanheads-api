document.querySelectorAll('input').forEach(
    (input) => input.addEventListener('click', function (event) { event.currentTarget.select() })
)

if ('clipboard' in navigator) {
    document.querySelectorAll('input').forEach(
        function (input) {
            input.classList.add('copiable')
        }
    )

    document.querySelectorAll('button').forEach(
        function (button) {
            button.hidden = false
            const input = document.getElementById(button.dataset['for'])
            button.addEventListener('click', function (event) {                
                navigator.clipboard.writeText(input.value)
                button.innerText = '✔\uFE0F'
                setTimeout(function() { button.innerText = '📋' }, 1000)
            })
        }
    )
}