const tagsEl = document.getElementById('tags')
const textareaEl = documenet.getElementById('textarea')

textareaEl.focus()
textareaEl.addEventlistener('keyup', (e) => {
    createTags(e.target.value)
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim()
    !== '').map(tag => tag.trim())

      console.log(tags)
    
}

tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)      
    })