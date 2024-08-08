document.querySelectorAll('input').forEach(
    (input) => input.addEventListener('click', function(e) { e.currentTarget.select() })
)

if ('clipboard' in navigator) {
    document.querySelectorAll('input').forEach(
        (input) => input.classList.add('copiable')
    )

    document.querySelectorAll('button').forEach(
        (button) => {
            /* button.hidden = false */
        }
    )
}